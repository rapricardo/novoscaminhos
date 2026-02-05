---
name: gemini-imagen
description: Generate Instagram images using Google Gemini AI. Use when creating social media content, carousels, or professional photos. Supports 4 modes - (1) image with integrated text, (2) carousel with text on each slide, (3) photo without text, (4) photo carousel. Trigger on requests like "generate carousel", "create Instagram post", "make image for social media", or content creation tasks requiring visual assets.
---

# Gemini Imagen

Generate professional Instagram images using Google Gemini AI.

## Modes

| Mode | Output | Use Case |
|------|--------|----------|
| `image` | Single image WITH text | Instagram post with headline/message |
| `carousel` | Multiple images WITH text | Educational carousel, tips, storytelling |
| `photo` | Single photo NO text | Background image, product shot |
| `photo_carousel` | Multiple photos NO text | Photo series for later text overlay |

## Quick Start

Script location: `scripts/gemini_imagen.py`

```bash
# Single image with text
python scripts/gemini_imagen.py image \
  --content "Your headline text" \
  --branding '{"cores": "azul, branco", "estilo_visual": "minimalista"}' \
  --output /path/to/image.png

# Carousel with text
python scripts/gemini_imagen.py carousel \
  --topic "5 Tips for Better Sleep" \
  --slides '["Tip 1: Consistent bedtime", "Tip 2: No screens", "Tip 3: Dark room"]' \
  --branding '{"cores": "azul, branco"}' \
  --output-dir /path/to/carousel/

# Photo without text
python scripts/gemini_imagen.py photo \
  --scene "Person meditating in garden at sunrise" \
  --branding '{"estilo_visual": "soft, natural lighting"}' \
  --output /path/to/photo.png

# Photo carousel
python scripts/gemini_imagen.py photo_carousel \
  --topic "Wellness Journey" \
  --scenes '["Hands holding tea cup", "Person stretching outdoors", "Healthy breakfast"]' \
  --branding '{"cores": "warm earth tones"}' \
  --output-dir /path/to/photos/
```

## Branding Object

Pass branding as JSON string:

```json
{
  "nome": "Client Name",
  "cores": "azul pastel, branco, dourado",
  "fontes": "Roboto, Lato",
  "estilo_visual": "minimalista, clean, elementos 3D sutis",
  "tom_de_voz": "profissional e inspirador",
  "palavras_proibidas": "imagens genéricas, layouts poluídos"
}
```

All fields are optional. Defaults will be used for missing fields.

## Output

Script prints JSON with results:

```json
{
  "success": true,
  "type": "carousel",
  "topic": "5 Tips",
  "total_slides": 3,
  "generated": 3,
  "output_dir": "/path/to/carousel",
  "results": [
    {"slide": 1, "success": true, "path": "/path/to/carousel/slide_01.png"},
    {"slide": 2, "success": true, "path": "/path/to/carousel/slide_02.png"},
    {"slide": 3, "success": true, "path": "/path/to/carousel/slide_03.png"}
  ]
}
```

## Workflow: Creating Content from ClickUp Task

1. Get branding from client's ClickUp task (custom field or linked account)
2. Extract slide content from "Slides Carrossel" custom field
3. Determine output directory: `clientes/{client}/carroseis/{task_id}-{slug}/`
4. Run appropriate mode based on content type
5. Attach generated images to ClickUp task

## Requirements

- `GEMINI_API_KEY` environment variable must be set
- Python 3.8+
- No external dependencies (uses stdlib only)
