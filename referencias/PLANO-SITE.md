# Plano Completo: Site Novos Caminhos

## Visão Geral

Site com 4 páginas: 1 HOME de conversão + 3 Landing Pages temáticas.

**Linguagem Ad-Safe:** Usar "óleo medicinal", "terapia integrativa", "fitoativos naturais", "medicina integrativa". Evitar termos que possam ser bloqueados.

---

## Estrutura de Rotas

| Rota | Página | Tema | Público |
|------|--------|------|---------|
| `/` | HOME | Ação direta - Óleo medicinal | Tráfego pago (busca por óleo) |
| `/jornada-terapeutica` | LP1 | Jornada Transformadora | Emocional, pessoas com dor |
| `/medicina-integrativa` | LP2 | Ciência + Acolhimento | Busca autoridade/segurança |
| `/comunidade` | LP3 | Comunidade Acolhedora | Busca pertencimento |

---

## Arquitetura de Arquivos

```
src/
├── pages/
│   ├── index.astro                 # HOME
│   ├── jornada-terapeutica.astro   # LP1
│   ├── medicina-integrativa.astro  # LP2
│   └── comunidade.astro            # LP3
├── components/
│   ├── home/
│   │   ├── HeroHome.astro
│   │   ├── HeroSlider.tsx
│   │   └── LPCards.astro
│   ├── shared/
│   │   ├── Navbar.tsx
│   │   ├── Footer.astro
│   │   └── CTAButtons.astro
│   ├── lp1/ (componentes LP1)
│   ├── lp2/ (componentes LP2)
│   └── lp3/ (componentes LP3)
└── assets/images/
```

---

## Padronizações Globais

### Logo
- Arquivo: `logo-novos-caminhos.webp`
- Usar em todas as páginas no Navbar

### CTAs Padrão (Hero de todas as páginas)
- **Botão Primário:** "Já tenho receita" (brand-green)
  - WhatsApp: `Olá! Já tenho receita médica e gostaria de informações sobre como acessar o óleo medicinal.`
- **Botão Secundário:** "Quero marcar consulta" (outline)
  - WhatsApp: `Olá! Gostaria de agendar uma consulta para avaliação médica.`

### CTA Footer (todas as páginas)
- **Botão:** "Falar no WhatsApp" (brand-gold)

### WhatsApp
- Número: `5541994335241`
- Formato: `https://wa.me/5541994335241?text=MENSAGEM_ENCODED`

### Texto Legal (Footer - todas as páginas)
> A Associação Novos Caminhos é uma entidade civil sem fins lucrativos. Não comercializamos medicamentos. Facilitamos o acesso de nossos associados a terapias integrativas conforme a legislação vigente (RDC 660/2022 da ANVISA) e mediante prescrição médica. As informações contidas neste site têm caráter informativo e educacional, não substituindo o aconselhamento médico profissional.

---

# PÁGINA: HOME (/)

## Objetivo
Converter tráfego pago de pessoas buscando "óleo medicinal" com ação imediata.

## Paleta de Cores
- Brand Green: #2F5233
- Brand Sage: #94A89A
- Brand Sand: #F7F5F0
- Brand Gold: #D4AF37

---

### HOME - Seção 1: HERO COM SLIDER

**Layout:** 2 colunas (texto esquerda, slider direita)

**Conteúdo Texto:**
- **Tagline:** Associação autorizada pela ANVISA
- **Headline (H1):** Óleo medicinal com acompanhamento especializado
- **Subheadline:** Acesso legal, seguro e com suporte completo para seu tratamento. Da consulta médica à entrega em casa.
- **CTA Primário:** "Já tenho receita"
- **CTA Secundário:** "Quero marcar consulta"
- **Prova Social:** Ícone de pessoas + "Mais de 2.000 famílias atendidas"

**Slider (4 imagens, transição 5s):**
1. SLIDE-01: Close no frasco de óleo com gota (foco no produto)
2. SLIDE-02: Idoso pingando óleo na boca (público dor crônica)
3. SLIDE-03: Mulher adulta com frasco ao entardecer (público ansiedade)
4. SLIDE-04: Mãe administrando para filho (público mães atípicas)

**Imagem:** `SLIDE-01-OLEO-FOCO.webp`, `SLIDE-02-IDOSO-ALIVIO.webp`, `SLIDE-03-ADULTO-EQUILIBRIO.webp`, `SLIDE-04-MAE-ATIPICA.webp`

---

### HOME - Seção 2: CARDS DAS LANDING PAGES

**Layout:** 3 cards horizontais

**Título da Seção:** Encontre o caminho certo para você

**Card 1 - Jornada Terapêutica:**
- **Imagem:** `CARD-LP1-JORNADA.webp`
- **Título:** Sua Jornada de Bem-Estar
- **Descrição:** Para quem busca uma abordagem acolhedora e transformadora.
- **Botão:** "Conhecer" → `/jornada-terapeutica`

**Card 2 - Medicina Integrativa:**
- **Imagem:** `CARD-LP2-CIENCIA.webp`
- **Título:** Ciência e Segurança
- **Descrição:** Entenda a base científica e a regulamentação do tratamento.
- **Botão:** "Conhecer" → `/medicina-integrativa`

**Card 3 - Comunidade:**
- **Imagem:** `CARD-LP3-COMUNIDADE.webp`
- **Título:** Você Não Está Sozinho
- **Descrição:** Faça parte de uma comunidade de apoio e acolhimento.
- **Botão:** "Conhecer" → `/comunidade`

---

### HOME - Seção 3: FOOTER

**Fundo:** Brand Green (#2F5233)

**Conteúdo:**
- **Headline:** Pronto para começar?
- **Subheadline:** Nossa equipe está pronta para acolher você.
- **CTA:** "Falar no WhatsApp"
- **Links:** Política de Privacidade | Termos de Uso
- **Texto Legal:** (padrão)
- **Copyright:** © 2025 Associação Novos Caminhos

---

# PÁGINA: LP1 - JORNADA TERAPÊUTICA (/jornada-terapeutica)

## Objetivo
Converter através de apelo emocional. Foco em transformação e esperança.

## Paleta de Cores
- Verde Profundo: #005742
- Verde Lime: #CED994
- Branco (fundo)

---

### LP1 - Navbar

- **Logo:** logo-novos-caminhos.webp
- **Links:** A Associação | Histórias Reais | Como Funciona | Fale Conosco
- **Botão:** "Área do Associado" (outline verde)

---

### LP1 - Seção 1: HERO

**Layout:** 2 colunas (texto esquerda, imagem direita)
**Fundo:** Off-white ou degradê suave

**Conteúdo Texto:**
- **Headline (H1):** Novos caminhos para quem busca qualidade de vida
- **Subheadline:** Uma abordagem terapêutica natural, legalizada e focada em devolver o seu bem-estar. Comece um novo ciclo de saúde.
- **CTA Primário:** "Já tenho receita"
- **CTA Secundário:** "Quero marcar consulta"

**Imagem:** `LP1-HERO.webp` - Pessoa 50+ olhando horizonte, luz golden hour, expressão de esperança.

---

### LP1 - Seção 2: O QUE SOMOS (Missão)

**Layout:** Texto centralizado, fundo branco
**Ícone:** Abelha estilizada da marca

**Conteúdo:**
- **Título (H3):** Seriedade, Sensibilidade e Cuidado Genuíno
- **Parágrafo:** Somos uma associação civil sem fins lucrativos, devidamente autorizada, que une a ciência moderna à sabedoria da natureza. Nossa missão é oferecer acesso legal e seguro a terapias integrativas de grau farmacêutico, sempre com acolhimento humano e escuta ativa.
- **Destaque:** "Aqui, você não é um diagnóstico. Você é uma história que merece ser ouvida."

---

### LP1 - Seção 3: QUEM PODEMOS AJUDAR (Soluções)

**Layout:** 3 cards com sombra suave
**Fundo:** Branco com muito espaço

**Card 1:**
- **Imagem:** `LP1-CONDITION-DOR.webp`
- **Título:** Dores Crônicas e Fibromialgia
- **Descrição:** Para quem busca alívio persistente e redução de inflamações, retomando a mobilidade do dia a dia.

**Card 2:**
- **Imagem:** `LP1-CONDITION-MENTAL.webp`
- **Título:** Saúde Mental e Equilíbrio
- **Descrição:** Suporte terapêutico para quadros de ansiedade, insônia e depressão, focado na regulação natural do organismo.

**Card 3:**
- **Imagem:** `LP1-CONDITION-NEURO.webp`
- **Título:** Cuidados Neurológicos
- **Descrição:** Apoio integrativo para Parkinson, Alzheimer, Epilepsia e outras condições, visando a neuroproteção e conforto.

**CTA abaixo dos cards:** "Entenda como o tratamento funciona" (scroll para próxima seção)

---

### LP1 - Seção 4: HISTÓRIAS DE SUPERAÇÃO (Prova Social)

**Layout:** Cards de depoimento
**Fundo:** Verde Lime #CED994 com 10% opacidade

**Título:** Transformações Reais
**Subtítulo:** Pessoas como você, que encontraram um novo caminho.

**Depoimento 1:**
- **Foto:** `LP1-TESTIMONIAL-1.webp` - Mulher, 54 anos
- **Nome:** Maria Helena
- **Citação:** "Eu achava que conviver com a dor seria meu normal para sempre. A terapia natural me devolveu não só o sono, mas a alegria de brincar com meus netos. Voltei a viver."

**Depoimento 2:**
- **Foto:** `LP1-TESTIMONIAL-2.webp` - Homem, 42 anos
- **Nome:** João Carlos
- **Citação:** "O tratamento convencional me deixava apático. Aqui encontrei uma alternativa que respeita meu corpo. A ansiedade diminuiu e recuperei meu foco no trabalho."

**Depoimento 3:**
- **Foto:** `LP1-TESTIMONIAL-3.webp` - Mulher, 38 anos
- **Nome:** Ana Paula (Mãe do Pedro)
- **Citação:** "Ver meu filho mais calmo e interagindo mais foi o maior presente. O acolhimento da equipe da associação fez toda a diferença na nossa adaptação."

---

### LP1 - Seção 5: COMO FUNCIONA (A Jornada)

**Layout:** Timeline com 4 passos conectados por linha curva
**Fundo:** Branco

**Título:** Sua jornada em 4 passos

**Passo 1: Acolhimento**
- Entre em contato e receba atendimento humanizado para tirar suas dúvidas iniciais.

**Passo 2: Avaliação Médica**
- Agende uma consulta com médicos prescritores experientes em terapias integrativas.

**Passo 3: Autorização Legal**
- Nossa equipe jurídica auxilia gratuitamente na emissão da autorização da ANVISA.

**Passo 4: Início do Tratamento**
- Receba o produto em casa com segurança e tenha acompanhamento contínuo da nossa equipe.

---

### LP1 - Seção 6: DIFERENCIAIS (Por que nós?)

**Layout:** Imagem lateral + lista com checkmarks
**Imagem:** Mãos segurando frasco de óleo âmbar com delicadeza

**Título:** Por que escolher a Novos Caminhos?

- ✓ Fitoativos de grau farmacêutico com análise laboratorial rigorosa
- ✓ Equipe multidisciplinar (médicos, psicólogos e advogados)
- ✓ Comunidade de apoio ativa e acolhedora
- ✓ Atuação 100% legalizada conforme normas vigentes

---

### LP1 - Seção 7: CTA FINAL

**Fundo:** Verde Profundo #005742
**Texto:** Branco

- **Headline:** Pronto para dar o primeiro passo?
- **Subheadline:** Nossa equipe de acolhimento está pronta para ouvir sua história e guiar você.
- **CTA Principal:** "Falar no WhatsApp"

---

### LP1 - Footer

(Padrão - ver seção de padronizações)

---

# PÁGINA: LP2 - MEDICINA INTEGRATIVA (/medicina-integrativa)

## Objetivo
Transmitir autoridade científica e segurança jurídica. Para quem busca informação técnica.

## Paleta de Cores
- Azul Petróleo: #006581
- Verde Profundo: #005742
- Branco (dominante)

---

### LP2 - Navbar

- **Logo:** logo-novos-caminhos.webp
- **Links:** A Ciência | Corpo Clínico | Regulamentação | Perguntas Frequentes
- **Botão:** "Agendar Triagem" (sólido azul)

---

### LP2 - Seção 1: HERO

**Layout:** 2 colunas, grid limpo
**Fundo:** Branco ou cinza gelo #F5F7FA

**Conteúdo Texto:**
- **Tagline:** Medicina Integrativa Regulamentada
- **Headline (H1):** A ciência a favor da sua saúde e equilíbrio
- **Subheadline:** Tratamentos naturais baseados em evidência clínica e regulamentados pela ANVISA (RDC 660). Acesso seguro, legal e com acompanhamento especializado.
- **CTA Primário:** "Já tenho receita"
- **CTA Secundário:** "Quero marcar consulta"
- **Texto de Apoio:** *Atendimento autorizado mediante prescrição médica.*

**Imagem:** `LP2-HERO.webp` - Médico conversando com paciente, postura de escuta ativa, luz natural.

---

### LP2 - Seção 2: A BIOMEDICINA DO FUTURO (Educacional)

**Layout:** 3 colunas com ícones
**Fundo:** Branco

**Título:** Entenda como seu corpo reage a fitoativos naturais
**Subtítulo:** O segredo não está apenas na natureza, mas dentro de você: no Sistema Endocanabinoide.

**Coluna 1 - Homeostase:**
- **Ícone:** Balança/Equilíbrio
- **Texto:** Seu corpo possui um sistema responsável pelo equilíbrio de funções vitais como sono, apetite, dor e humor. Fitoativos naturais atuam como "chaves" que ativam esses receptores, ajudando a restaurar o equilíbrio interno.

**Coluna 2 - Segurança Farmacêutica:**
- **Ícone:** Escudo/Certificado
- **Texto:** Diferente do uso recreativo, o uso terapêutico utiliza compostos padronizados (Farma-Grade), com dosagem precisa e livre de contaminantes, garantindo previsibilidade e segurança no tratamento.

**Coluna 3 - Medicina Personalizada:**
- **Ícone:** Pessoa/DNA
- **Texto:** Cada organismo é único. Por isso, nosso protocolo envolve titulação lenta e acompanhamento contínuo para encontrar a dose exata para sua necessidade clínica.

**Imagem de apoio:** `LP2-SCIENCE-MOLECULE.webp`

---

### LP2 - Seção 3: POR QUE É SEGURO? (Credibilidade)

**Layout:** Checklist com ícones de check/escudo
**Fundo:** Cinza muito claro

**Título:** Segurança Jurídica e Sanitária

- **Autorização ANVISA:** Todo o processo segue rigorosamente a RDC 660, com importação autorizada e fiscalizada.
- **Controle de Qualidade:** Produtos com Certificado de Análise (COA) que comprovam pureza e concentração de ativos.
- **Acolhimento Jurídico:** Nossa equipe cuida de toda a burocracia para que você foque apenas na sua recuperação.
- **Corpo Clínico Especializado:** Médicos prescritores com experiência comprovada em terapias integrativas.

**Imagem:** `LP2-SAFETY-CERTIFICATE.webp`

---

### LP2 - Seção 4: NOSSOS ESPECIALISTAS (Autoridade)

**Layout:** 2 cards de médicos
**Fundo:** Branco

**Título:** Quem cuida de você
**Subtítulo:** Uma equipe multidisciplinar pronta para acolher.

**Card Médico 1:**
- **Foto:** `LP2-DOCTOR-1.webp`
- **Nome:** Dr. [Nome]
- **Especialidade:** Neurologia Integrativa
- **Bio:** "Acredito na medicina que escuta o paciente antes de tratar a doença."

**Card Médico 2:**
- **Foto:** `LP2-DOCTOR-2.webp`
- **Nome:** Dra. [Nome]
- **Especialidade:** Clínica da Dor e Cuidados Paliativos
- **Bio:** "Nosso foco é devolver a autonomia e o bem-estar diário."

**CTA:** "Agendar com Especialista"

---

### LP2 - Seção 5: PROCESSO PASSO A PASSO (Clareza)

**Layout:** Timeline horizontal/vertical numerada
**Fundo:** Branco com muito espaço

**Título:** Como iniciar seu tratamento legalmente

**Passo 1: Triagem e Consulta**
- Agende sua avaliação com um médico prescritor parceiro para análise do seu quadro clínico.

**Passo 2: Autorização Sanitária**
- Com a receita em mãos, nossa equipe auxilia gratuitamente na emissão da autorização da ANVISA.

**Passo 3: Acesso ao Tratamento**
- Orientamos a aquisição do produto prescrito, garantindo origem e segurança.

**Passo 4: Monitoramento**
- Acompanhamento periódico para ajuste de dosagem e avaliação da evolução clínica.

---

### LP2 - Seção 6: ESTUDOS E EVIDÊNCIAS (Ciência)

**Layout:** Box destacado
**Fundo:** Cinza claro
**Ícone:** Livro/Pesquisa

**Título:** O que a ciência diz?
**Texto:** Existem milhares de estudos publicados em bases como PubMed e Scielo sobre o potencial terapêutico do Sistema Endocanabinoide em condições como Dor Crônica, Epilepsia Refratária, Autismo, Ansiedade e Parkinson.
**Link:** "Acessar Biblioteca de Artigos" (link externo)

**Imagem:** `LP2-RESEARCH.webp`

---

### LP2 - Seção 7: FAQ EDUCACIONAL

**Layout:** Accordion/Expandível
**Fundo:** Branco

**Pergunta 1: É legal fazer esse tratamento no Brasil?**
- Sim. Desde 2015, a ANVISA regulamenta a importação e uso terapêutico mediante prescrição médica e autorização sanitária.

**Pergunta 2: O tratamento tem efeitos psicoativos?**
- Não necessariamente. As terapias medicinais utilizam formulações ricas em fitoativos não-intoxicantes, focados no alívio de sintomas sem alterar a consciência.

**Pergunta 3: Para quais condições é indicado?**
- A indicação depende de avaliação médica, sendo comumente utilizado como terapia adjuvante em dores crônicas, condições neurológicas e transtornos de ansiedade.

---

### LP2 - Seção 8: CTA FINAL

**Fundo:** Azul Petróleo #006581
**Texto:** Branco

- **Headline:** Saúde baseada em evidência e respeito à vida.
- **CTA Principal:** "Falar no WhatsApp"
- **Link Secundário:** "Dúvidas sobre documentação? Clique aqui."

---

### LP2 - Footer

(Padrão - ver seção de padronizações)

---

# PÁGINA: LP3 - COMUNIDADE (/comunidade)

## Objetivo
Criar identificação e pertencimento. Para quem se sente sozinho na jornada.

## Paleta de Cores
- Verde Lime: #CED994
- Laranja Vibrante: #EC8323
- Verde Profundo: #005742

---

### LP3 - Navbar

- **Logo:** logo-novos-caminhos.webp
- **Links:** O Movimento | Nossas Histórias | Benefícios | Eventos
- **Botão:** "Quero me Associar" (laranja)

---

### LP3 - Seção 1: HERO

**Layout:** Título grande sobre imagem de fundo
**Fundo:** Imagem com overlay

**Conteúdo Texto:**
- **Headline (H1):** Você não está sozinho na sua busca por saúde
- **Subheadline:** Junte-se a uma comunidade de milhares de pessoas que encontraram alívio, acolhimento e novos caminhos através da medicina integrativa.
- **CTA Primário:** "Já tenho receita"
- **CTA Secundário:** "Quero marcar consulta"
- **Prova Social:** "Junte-se a mais de 5.000 famílias acolhidas."

**Imagem:** `LP3-HERO.webp` - Grupo diverso em ambiente externo, luz do sol, conversando naturalmente.

---

### LP3 - Seção 2: NOSSA CAUSA (Manifesto)

**Layout:** Texto centralizado
**Fundo:** Branco
**Ícone:** Abelha conectando elementos (colmeia abstrata)

**Título:** Mais que um tratamento, um movimento por dignidade
**Texto:** Acreditamos que o acesso à saúde é um direito fundamental. A Associação Novos Caminhos nasceu para quebrar barreiras e conectar pacientes, médicos e conhecimento. Lutamos pelo direito de acesso a terapias naturais sérias, legais e seguras.
**Destaque:** "Aqui, sua voz é ouvida e sua dor é validada."

**Imagem:** `LP3-MOVEMENT.webp`

---

### LP3 - Seção 3: O MOVIMENTO EM NÚMEROS (Prova Social)

**Layout:** 4 contadores grandes com animação
**Cores:** Números em Laranja ou Verde Lime

| Número | Legenda |
|--------|---------|
| +10.000 | Vidas Impactadas |
| 100% | Legalizado (Anvisa) |
| 24h | De Acolhimento e Suporte |
| 26 | Estados Alcançados |

---

### LP3 - Seção 4: JORNADAS REAIS (Documentário)

**Layout:** 2 cards estilo thumbnail de vídeo
**Fundo:** Cinza claro

**Título:** Histórias que nos movem

**Card História 1:**
- **Imagem:** `LP3-TESTIMONIAL-VIDEO-1.webp` (com play button)
- **Título:** "A solidão da dor crônica acabou."
- **Personagem:** Carlos, paciente há 2 anos.
- **Resumo:** Carlos conta como a comunidade o ajudou a entender seus direitos e a encontrar um médico que realmente o escutou.
- **Botão:** "Assistir História"

**Card História 2:**
- **Imagem:** `LP3-TESTIMONIAL-VIDEO-2.webp` (com play button)
- **Título:** "Lutei pela saúde da minha filha e venci."
- **Personagem:** Juliana, mãe atípica.
- **Resumo:** A jornada de uma mãe contra a burocracia e como a assessoria jurídica da associação simplificou tudo.
- **Botão:** "Assistir História"

---

### LP3 - Seção 5: CLUBE DE BENEFÍCIOS

**Layout:** Grid de 4 ícones com texto
**Fundo:** Branco

**Título:** Por que fazer parte da Novos Caminhos?

**Benefício 1: Acesso Facilitado**
- Rede de médicos prescritores parceiros com valores acessíveis para associados.

**Benefício 2: Assessoria Jurídica Gratuita**
- Cuidamos de todo o processo de autorização na ANVISA para você.

**Benefício 3: Grupos de Apoio**
- Troca de experiências e suporte emocional com quem vive desafios parecidos com os seus.

**Benefício 4: Educação Contínua**
- Acesso a webinars, palestras e conteúdos exclusivos sobre saúde integrativa.

**Imagem:** `LP3-BENEFITS.webp`

---

### LP3 - Seção 6: EVENTOS E ENCONTROS (Agenda)

**Layout:** Lista de eventos
**Fundo:** Verde Lime com 10% opacidade

**Título:** Acompanhe nossa agenda

**Evento 1:**
- [Webinar] "Entendendo a Terapia Integrativa" - Com Dr. Especialista

**Evento 2:**
- [Encontro Online] Roda de Acolhimento para Mães Atípicas

**CTA:** "Inscrever-se nos eventos"

**Imagem:** `LP3-EVENT.webp`

---

### LP3 - Seção 7: COMPARTILHE SUA HISTÓRIA (Engajamento)

**Layout:** Box com CTA
**Fundo:** Bege ou Verde muito claro

**Título:** Sua história inspira
**Texto:** Você já faz uso de terapias naturais? Compartilhe sua jornada e ajude a inspirar outras pessoas que estão começando agora.
**Botão:** "Quero contar minha história"

---

### LP3 - Seção 8: CTA FINAL

**Fundo:** Gradiente Verde Lime → Verde Profundo
**Texto:** Branco

- **Headline:** Vamos caminhar juntos?
- **Subheadline:** O primeiro passo para uma nova qualidade de vida começa com o nosso acolhimento.
- **CTA Principal:** "Falar no WhatsApp"

---

### LP3 - Footer

(Padrão - ver seção de padronizações)

---

# Ordem de Implementação

## Fase 1 - Infraestrutura
- [ ] Criar `src/assets/images/`
- [ ] Copiar logo para assets
- [ ] Criar CTAButtons.astro (componente reutilizável)
- [ ] Atualizar Navbar.tsx com logo correto
- [ ] Padronizar Footer.astro

## Fase 2 - HOME
- [ ] Criar HeroSlider.tsx
- [ ] Criar HeroHome.astro
- [ ] Criar LPCards.astro
- [ ] Criar novo index.astro

## Fase 3 - Reorganizar LP1
- [ ] Mover index atual → jornada-terapeutica.astro
- [ ] Atualizar Hero com novos CTAs
- [ ] Ajustar Navbar/Footer

## Fase 4 - Criar LP2
- [ ] Criar medicina-integrativa.astro
- [ ] Criar componentes específicos

## Fase 5 - Criar LP3
- [ ] Criar comunidade.astro
- [ ] Criar componentes específicos

---

# Dependências Técnicas

- **Slider:** React com useState + useEffect (transição automática 5s)
- **Imagens:** astro:assets para otimização
- **Contadores LP3:** Animação CSS ou IntersectionObserver
- **FAQ LP2:** Accordion com detalhes/summary ou React
