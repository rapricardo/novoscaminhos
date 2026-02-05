#!/usr/bin/env python3
"""
Gemini Image Generator - Skill Script
Gera imagens para Instagram usando Google Gemini API.

Modos:
  image    - Imagem única COM texto integrado
  carousel - Múltiplas imagens COM texto integrado
  photo    - Fotografia pura SEM texto
  photo_carousel - Múltiplas fotos SEM texto

Uso:
  python gemini_imagen.py image --content "Texto" --branding '{}' --output /path/img.png
  python gemini_imagen.py carousel --topic "Tema" --slides '["S1","S2"]' --branding '{}' --output-dir /path/
  python gemini_imagen.py photo --scene "Descrição" --branding '{}' --output /path/img.png
  python gemini_imagen.py photo_carousel --topic "Tema" --scenes '["C1","C2"]' --branding '{}' --output-dir /path/

Requer: GEMINI_API_KEY no ambiente
"""

import argparse
import base64
import json
import os
import sys
from pathlib import Path
from urllib.request import Request, urlopen
from urllib.error import HTTPError

GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-image-preview:generateContent"

# Mapeamento de estilos visuais (dropdown ClickUp → keywords Nano Banana Pro)
STYLE_MAPPINGS = {
    "Científico": "educational Britannica style, fine line engraving illustration, medical infographic aesthetic, soft blue-green lighting, clean data visualization elements, professional healthcare design",
    "Orgânico": "watercolor textures, natural botanical elements, golden-hour warm lighting, earth tones, soft organic flowing shapes, hand-drawn feel",
    "Minimalista": "minimalist line art, bold geometric shapes, dramatic negative space, clean sans-serif typography, monochromatic with accent color",
    "Clean": "modern flat design, soft gradients, natural window light, airy composition, subtle shadows, professional corporate aesthetic",
    "Moderno": "contemporary design, dynamic geometric patterns, neon accents, cinematic depth, bold color blocking, tech-forward aesthetic",
    "Bold": "high contrast dramatic lighting, saturated colors, strong typography, impactful visual hierarchy, attention-grabbing composition",
}

# Mapeamento de iluminação por estilo
LIGHTING_MAPPINGS = {
    "Científico": "soft clinical lighting, clean white with subtle blue tones, even illumination",
    "Orgânico": "golden-hour rim lighting, warm natural sunlight, soft diffused glow",
    "Minimalista": "soft studio lighting, minimal shadows, clean even exposure",
    "Clean": "natural window light, soft morning light, gentle ambient illumination",
    "Moderno": "dramatic lighting with neon reflections, cinematic color grading",
    "Bold": "high contrast dramatic lighting, strong directional light, deep shadows",
}


def expand_style(style_value: str) -> tuple[str, str]:
    """Expande estilo do dropdown para keywords otimizadas."""
    style = STYLE_MAPPINGS.get(style_value, style_value)
    lighting = LIGHTING_MAPPINGS.get(style_value, "professional studio lighting")
    return style, lighting


def build_text_image_prompt(content: str, branding: dict) -> str:
    """Prompt para imagem COM TEXTO integrado - estrutura SAAC."""
    colors = branding.get('cores', 'modern, professional color palette')
    visual_style_raw = branding.get('estilo_visual', 'Clean')
    tone = branding.get('tom_de_voz', 'professional and approachable')
    forbidden = branding.get('palavras_proibidas', 'cluttered elements, generic stock photos')

    style_expanded, lighting = expand_style(visual_style_raw)

    return f"""Create a professional Instagram image.

## SUBJECT
Primary text to display: "{content}"
Brand personality: {tone}

## VISUAL STYLE
Style keywords: {style_expanded}
Color palette: {colors}
Typography: Bold, highly legible, high contrast against background, integrated into composition

## ENVIRONMENT & LIGHTING
{lighting}
Supporting visual elements that reinforce the message without overwhelming the text

## COMPOSITION
- 20-30% negative space for breathing room
- Text as focal point with complementary visual elements
- Professional, polished finish

## RESTRICTIONS
- Do NOT add slide numbers, pagination, or "Slide X/Y"
- Do NOT add any text other than the specified content above
- No watermarks or logos
- Avoid: {forbidden}

Output a ready-to-post Instagram image with the text beautifully integrated."""


def build_photo_prompt(scene: str, branding: dict) -> str:
    """Prompt para FOTOGRAFIA pura, sem texto - estrutura SAAC."""
    colors = branding.get('cores', 'modern, professional color palette')
    visual_style_raw = branding.get('estilo_visual', 'Clean')
    tone = branding.get('tom_de_voz', 'professional and approachable')
    forbidden = branding.get('palavras_proibidas', 'cluttered elements, generic stock photos')

    style_expanded, lighting = expand_style(visual_style_raw)

    return f"""Create a professional PHOTOGRAPH for Instagram. Photography only, NO TEXT.

## SUBJECT
{scene}

## VISUAL STYLE
Style keywords: {style_expanded}
Color palette: {colors}
Mood/tone: {tone}

## ENVIRONMENT & LIGHTING
{lighting}
Sharp subject with subtle depth of field (bokeh background)
Professional studio quality finish

## COMPOSITION
- Clean, uncluttered frame
- Subject as clear focal point
- Natural, unforced positioning

## RESTRICTIONS (CRITICAL)
- No text, words, letters, numbers, or typography
- No overlays, captions, titles, or labels
- No watermarks or logos
- Avoid: {forbidden}

Output a clean, beautiful photograph. Text will be added later in post-production."""


def generate_image(prompt: str, api_key: str) -> bytes:
    """Chama Gemini API para gerar imagem."""
    url = f"{GEMINI_API_URL}?key={api_key}"

    payload = {
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {
            "responseModalities": ["IMAGE"],
            "imageConfig": {
                "aspectRatio": "1:1",
                "imageSize": "1K"
            }
        }
    }

    data = json.dumps(payload).encode('utf-8')
    req = Request(url, data=data, headers={"Content-Type": "application/json"})

    try:
        with urlopen(req, timeout=120) as response:
            result = json.loads(response.read().decode('utf-8'))
    except HTTPError as e:
        error_body = e.read().decode('utf-8') if e.fp else str(e)
        raise Exception(f"Gemini API error {e.code}: {error_body}")

    try:
        part = result["candidates"][0]["content"]["parts"][0]
        if "inlineData" in part:
            return base64.b64decode(part["inlineData"]["data"])
        else:
            raise Exception("Response does not contain image data")
    except (KeyError, IndexError) as e:
        raise Exception(f"Failed to parse response: {result}")


def cmd_image(args):
    """Gera uma imagem única com texto."""
    branding = json.loads(args.branding) if args.branding else {}
    prompt = build_text_image_prompt(args.content, branding)

    print(f"Generating image with text: {args.content[:50]}...")
    image_data = generate_image(prompt, args.api_key)

    output = Path(args.output)
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_bytes(image_data)

    print(json.dumps({
        "success": True,
        "type": "image",
        "path": str(output),
        "size_bytes": len(image_data)
    }))


def cmd_carousel(args):
    """Gera carrossel com texto."""
    branding = json.loads(args.branding) if args.branding else {}
    slides = json.loads(args.slides)
    output_dir = Path(args.output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)

    results = []
    for i, slide_content in enumerate(slides):
        slide_num = i + 1
        try:
            print(f"Generating slide {slide_num}/{len(slides)}: {slide_content[:40]}...")
            prompt = build_text_image_prompt(slide_content, branding)
            image_data = generate_image(prompt, args.api_key)

            output_path = output_dir / f"slide_{slide_num:02d}.png"
            output_path.write_bytes(image_data)

            results.append({
                "slide": slide_num,
                "success": True,
                "path": str(output_path)
            })
        except Exception as e:
            results.append({
                "slide": slide_num,
                "success": False,
                "error": str(e)
            })

    successful = sum(1 for r in results if r["success"])
    print(json.dumps({
        "success": successful > 0,
        "type": "carousel",
        "topic": args.topic,
        "total_slides": len(slides),
        "generated": successful,
        "output_dir": str(output_dir),
        "results": results
    }, indent=2))


def cmd_photo(args):
    """Gera uma foto sem texto."""
    branding = json.loads(args.branding) if args.branding else {}
    prompt = build_photo_prompt(args.scene, branding)

    print(f"Generating photo: {args.scene[:50]}...")
    image_data = generate_image(prompt, args.api_key)

    output = Path(args.output)
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_bytes(image_data)

    print(json.dumps({
        "success": True,
        "type": "photo",
        "path": str(output),
        "size_bytes": len(image_data)
    }))


def cmd_photo_carousel(args):
    """Gera carrossel de fotos sem texto."""
    branding = json.loads(args.branding) if args.branding else {}
    scenes = json.loads(args.scenes)
    output_dir = Path(args.output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)

    results = []
    for i, scene_desc in enumerate(scenes):
        slide_num = i + 1
        try:
            print(f"Generating photo {slide_num}/{len(scenes)}: {scene_desc[:40]}...")
            prompt = build_photo_prompt(scene_desc, branding)
            image_data = generate_image(prompt, args.api_key)

            output_path = output_dir / f"photo_{slide_num:02d}.png"
            output_path.write_bytes(image_data)

            results.append({
                "slide": slide_num,
                "success": True,
                "path": str(output_path)
            })
        except Exception as e:
            results.append({
                "slide": slide_num,
                "success": False,
                "error": str(e)
            })

    successful = sum(1 for r in results if r["success"])
    print(json.dumps({
        "success": successful > 0,
        "type": "photo_carousel",
        "topic": args.topic,
        "total_photos": len(scenes),
        "generated": successful,
        "output_dir": str(output_dir),
        "results": results
    }, indent=2))


def main():
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("Error: GEMINI_API_KEY not set", file=sys.stderr)
        sys.exit(1)

    parser = argparse.ArgumentParser(description="Gemini Image Generator")
    subparsers = parser.add_subparsers(dest="mode", required=True)

    # image mode
    p_image = subparsers.add_parser("image", help="Single image with text")
    p_image.add_argument("--content", required=True, help="Text content to display")
    p_image.add_argument("--branding", default="{}", help="Branding JSON")
    p_image.add_argument("--output", required=True, help="Output file path")

    # carousel mode
    p_carousel = subparsers.add_parser("carousel", help="Carousel with text")
    p_carousel.add_argument("--topic", required=True, help="Carousel topic")
    p_carousel.add_argument("--slides", required=True, help="JSON array of slide contents")
    p_carousel.add_argument("--branding", default="{}", help="Branding JSON")
    p_carousel.add_argument("--output-dir", required=True, help="Output directory")

    # photo mode
    p_photo = subparsers.add_parser("photo", help="Single photo without text")
    p_photo.add_argument("--scene", required=True, help="Scene description")
    p_photo.add_argument("--branding", default="{}", help="Branding JSON")
    p_photo.add_argument("--output", required=True, help="Output file path")

    # photo_carousel mode
    p_photo_carousel = subparsers.add_parser("photo_carousel", help="Photo carousel without text")
    p_photo_carousel.add_argument("--topic", required=True, help="Carousel topic")
    p_photo_carousel.add_argument("--scenes", required=True, help="JSON array of scene descriptions")
    p_photo_carousel.add_argument("--branding", default="{}", help="Branding JSON")
    p_photo_carousel.add_argument("--output-dir", required=True, help="Output directory")

    args = parser.parse_args()
    args.api_key = api_key

    if args.mode == "image":
        cmd_image(args)
    elif args.mode == "carousel":
        cmd_carousel(args)
    elif args.mode == "photo":
        cmd_photo(args)
    elif args.mode == "photo_carousel":
        cmd_photo_carousel(args)


if __name__ == "__main__":
    main()
