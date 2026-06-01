// ============================================================
// KTR BRAND STUDIO — Pre-generated brand data for all concepts
// ============================================================

// ─── ASK FOR LUIGI ──────────────────────────────────────────

export const AFL_VOICE = JSON.stringify({
  voiceAttributes: [
    { trait: "Familial", description: "Every interaction feels like being welcomed into someone's home, not a restaurant. Warmth is non-negotiable.", examples: ["Come as you are", "Pull up a chair", "Just like Nonno used to make"] },
    { trait: "Unpretentious", description: "Michelin-recommended but never stuffy. The food is serious; the attitude is relaxed. No ego on the plate.", examples: ["Simple food, made well", "Nothing fancy — just good", "Handmade, not overthought"] },
    { trait: "Rooted", description: "Every dish connects to a real place, a real memory, a real person. Luigi is not a character — he's a philosophy.", examples: ["He didn't believe in buying food you could grow yourself", "Born in the kitchen", "The way it's always been done"] },
    { trait: "Generous", description: "Family-style service is a statement of values. Food lands in the middle of the table for everyone. Abundance is the point.", examples: ["Dishes for sharing", "Order more than you think you need", "The table is always bigger than the plate"] },
    { trait: "Unhurried", description: "The ritual of dining together takes time. Copy never rushes. It invites you to linger.", examples: ["Settle in", "Take your time", "The evening is yours"] }
  ],
  toneGuidelines: {
    do: ["Write in first person plural — 'we' and 'our', never corporate third-person", "Use simple, sensory language — tastes, textures, smells, sounds of a kitchen", "Reference the communal, family-style nature of dining in most touchpoints", "Keep sentences short and warm — like speech, not marketing copy", "Let the ingredients speak — name them plainly and with pride"],
    dont: ["Never use fine-dining clichés: 'elevated', 'curated', 'artisanal', 'crafted'", "Don't be precious about the Michelin recognition", "Avoid urgency language — 'limited', 'exclusive', 'don't miss out'", "Don't use second-person commands — 'Try our...' or 'Visit us...'", "Never write as though the restaurant is the star — the guest and the table are"]
  },
  vocabularyBank: {
    powerWords: ["handmade", "together", "share", "fresh", "simple", "seasonal", "homegrown", "family", "gather", "table", "ritual", "honest"],
    avoidWords: ["elevated", "curated", "artisanal", "bespoke", "exclusive", "innovative", "crafted"]
  },
  writingSamples: {
    heroHeadline: "Fresh pasta. Family table. Railtown.",
    menuDescription: "Pumpkin gnocchi — brown butter, sage, parmigiano. Made this morning.",
    reservationCTA: "Pull up a chair",
    socialPost: "The radiatore verde is back. Same recipe. Same reason — it's good, and we missed it.",
    emailSubject: "Sunday brunch is set. Come hungry.",
    aboutBlurb: "Luigi didn't believe in buying food you could grow or make yourself. Neither do we. Everything on the table started somewhere real — a farm, a garden, a kitchen. We just finished it for you."
  },
  summary: "Ask For Luigi speaks like a family member who happens to cook exceptionally well. The voice is warm, direct, and completely free of restaurant pretension. It honors the ritual of the shared table without ever making it feel like an event."
}, null, 2)

export const AFL_DESIGN = JSON.stringify({
  colors: [
    { name: "Background", hex: "#F8F3EB", usage: "Page background — warm parchment" },
    { name: "Gold", hex: "#A27E51", usage: "Primary brand accent — headings, nav, buttons, borders" },
    { name: "Emerald", hex: "#10312B", usage: "Footer, mobile nav, dark surfaces" },
    { name: "Black", hex: "#2A2727", usage: "Body text — near-black, warm undertone" },
    { name: "Cream", hex: "#EAE5E1", usage: "Alternate buttons, secondary surfaces" }
  ],
  fonts: [
    { role: "display", family: "Britannic Bold Regular", weight: "700", notes: "Headings, navigation — always uppercase, letter-spacing 0.095em, gold color" },
    { role: "body", family: "Univers LT Std Light", weight: "300", notes: "All body copy, weight 100. Near-black. Fluid 14–18px. Strong uses Univers LT Std Regular." },
    { role: "accent", family: "Avenir Next Bold", weight: "700", notes: "Buttons only — uppercase, letter-spacing 0.12em, inside custom SVG cartouche shape." }
  ],
  moodKeywords: ["warm", "handcrafted", "intimate", "abundant", "unhurried"],
  designPrinciples: ["Warmth over polish — parchment tones and antique gold over cold whites", "Shape as identity — chamfered octagon corners and scalloped masks are signature marks", "Typography does the heavy lifting — Britannic Bold provides all the character", "Restraint in layout — generous whitespace, nothing competing for attention", "Ornament with purpose — SVG border motif used sparingly at section breaks"],
  imageStyle: "Warm, natural light. Food shot close and real — not styled to perfection. Pasta with flour still on the board. Hands in frame. Illustrated exterior reinforces the handmade ethos.",
  layoutApproach: "Generous vertical rhythm. Two-column grid breaks into full-width for hero and feature sections. Chamfered content blocks create visual anchors. Menu in two columns with lowercase section titles."
}, null, 2)

export const AFL_CSS = `/* Ask For Luigi — Brand CSS Package */
:root {
  --afl-background: #F8F3EB; --afl-gold: #A27E51; --afl-gold-50: rgba(162,126,81,0.5);
  --afl-emerald: #10312B; --afl-black: #2A2727; --afl-cream: #EAE5E1;
  --afl-font-display: "Britannic Bold Regular", serif;
  --afl-font-body: "Univers LT Std Light", sans-serif;
  --afl-font-button: "Avenir Next Bold", sans-serif;
  --afl-text-base: clamp(14px, 1.17vw, 18px);
  --afl-text-xl: clamp(20px, 1.61vw, 24px);
  --afl-text-2xl: clamp(20px, 1.76vw, 26px);
  --afl-chamfer: polygon(0 5%,5% 0,95% 0,100% 5%,100% 95%,95% 100%,5% 100%,0% 95%);
}
body { background: var(--afl-background); color: var(--afl-black); font-family: var(--afl-font-body); font-weight: 300; }
h2,.afl-heading { font-family: var(--afl-font-display); text-transform: uppercase; letter-spacing: 0.095em; color: var(--afl-gold); }
.afl-btn { font-family: var(--afl-font-button); text-transform: uppercase; letter-spacing: 0.12em; color: var(--afl-gold); border: 2px solid var(--afl-gold); clip-path: var(--afl-chamfer); padding: 0.85em 2em; background: transparent; transition: 0.2s; }
.afl-btn:hover { background: var(--afl-gold); color: var(--afl-background); }
.afl-footer { background: var(--afl-emerald); color: white; }
.afl-chamfer { clip-path: var(--afl-chamfer); }
hr { background: var(--afl-gold-50); border: none; height: 1px; }`

// ─── CARLINO ────────────────────────────────────────────────

export const CARLINO_VOICE = JSON.stringify({
  voiceAttributes: [
    { trait: "Soulful", description: "The cooking has feeling behind it — a chef's love for the land expressed through restrained, confident plates. Nothing flashy. Everything intentional.", examples: ["Simple and soulful", "The ingredient does the work", "Let the season decide"] },
    { trait: "Grounded", description: "BC and northern Italy share the same geography of spirit — mountains, forests, clean water, small farms. That connection is real and the voice reflects it.", examples: ["Sourced from our backyard", "The mountains in the north of Italy look like ours", "From farm to plate, literally"] },
    { trait: "Refined without formality", description: "Michelin-recommended and hotel-located, but the tone never stiffens. Elegance through restraint, not through distance.", examples: ["Come for breakfast. Stay for everything.", "A table worth your evening", "No performance. Just the food."] },
    { trait: "Seasonal", description: "The menu changes because the land does. The voice should feel in tune with time of year, what's growing, what's available.", examples: ["This week's pasta", "What the garden gave us this morning", "Gone when the season ends"] },
    { trait: "Considered", description: "Every sourcing decision has a reason. The eggs from the Maran hens in Abbotsford aren't a talking point — they're a value made visible.", examples: ["We raise our own hens", "Knowing your farmers by name", "It matters where it comes from"] }
  ],
  toneGuidelines: {
    do: ["Lead with the ingredient — the provenance is the story", "Write with restraint — short sentences carry more weight than long descriptions", "Reference the BC–northern Italy geographic parallel when introducing the concept", "Be quietly proud — Michelin recognition acknowledged once, never repeated", "Let the seasonal menu create natural freshness in all communications"],
    dont: ["Don't write like a hotel restaurant — Carlino transcends that context", "Avoid food-trend language: 'nose-to-tail', 'zero-waste', 'farm-to-table' as buzzwords", "Never oversell or stack adjectives — one strong noun beats three weak modifiers", "Don't use urgency tactics — the guest should feel chosen, not pressured", "Avoid comparison to other restaurants, even within the KTR group"]
  },
  vocabularyBank: {
    powerWords: ["soulful", "seasonal", "sourced", "considered", "restrained", "honest", "local", "Friuli", "BC", "fresh", "daily", "farm"],
    avoidWords: ["elevated", "innovative", "farm-to-table", "artisanal", "curated", "bespoke", "experience", "journey"]
  },
  writingSamples: {
    heroHeadline: "Northern Italian soul. BC heart.",
    menuDescription: "Black copper Maran egg, cured yolk, fresh truffle — from our farm in Abbotsford.",
    reservationCTA: "Reserve a table",
    socialPost: "Pasta changes with the season. This week's shape is what we felt like making. Come find out.",
    emailSubject: "The autumn menu is ready.",
    aboutBlurb: "Carlino is where northern Italy and British Columbia discover they've always had the same soul. The mountains. The forests. The insistence on real ingredients. Pasta made fresh each morning. A menu that changes when the season does."
  },
  summary: "Carlino speaks with quiet authority — the confidence of a kitchen that knows exactly what it's doing and doesn't need to announce it. Warm but measured, seasonal but never precious, rooted in two landscapes at once."
}, null, 2)

export const CARLINO_DESIGN = JSON.stringify({
  colors: [
    { name: "Parchment", hex: "#F5F0E8", usage: "Primary background — warm, natural, understated" },
    { name: "Forest", hex: "#2C4A3E", usage: "Primary dark — headers, footer, strong accents" },
    { name: "Gold", hex: "#B8935A", usage: "Brand accent — warmer, richer than AFL gold" },
    { name: "Ink", hex: "#1E1E1E", usage: "Body text — near-black" },
    { name: "Stone", hex: "#D4CBC0", usage: "Borders, dividers, subtle backgrounds" }
  ],
  fonts: [
    { role: "display", family: "Cormorant Garamond", weight: "600", notes: "Elegant serif for headings — suggest italic for hero text. Refined, classical, not heavy." },
    { role: "body", family: "Freight Text Pro", weight: "400", notes: "Warm readable serif for body copy. Comfortable at small sizes for menu descriptions." },
    { role: "accent", family: "Gill Sans", weight: "400", notes: "Clean sans-serif for navigation, labels, small caps UI elements." }
  ],
  moodKeywords: ["soulful", "considered", "seasonal", "quiet luxury", "rooted"],
  designPrinciples: ["Restraint as sophistication — every element earns its place or is removed", "The crest/eagle mark anchors all formal applications", "Photography is the primary design element — let ingredients fill space", "Dark green as the anchor colour — forest, depth, nature", "Never compete with the food — design creates the frame, not the picture"],
  imageStyle: "Close, natural, still. Ingredients on stone or linen surfaces. Hands at work. The farm in Abbotsford. Steam rising from fresh pasta. Understated plating with natural light — no dramatic lighting or artificial staging.",
  layoutApproach: "Generous whitespace. Single column for storytelling sections. The eagle crest mark used as a section divider. Minimal navigation. The menu should breathe — generous line spacing, clear hierarchy."
}, null, 2)

export const CARLINO_CSS = `/* Carlino — Brand CSS Package */
:root {
  --carlino-parchment: #F5F0E8; --carlino-forest: #2C4A3E; --carlino-gold: #B8935A;
  --carlino-ink: #1E1E1E; --carlino-stone: #D4CBC0;
  --carlino-font-display: "Cormorant Garamond", "Georgia", serif;
  --carlino-font-body: "Freight Text Pro", "Georgia", serif;
  --carlino-font-ui: "Gill Sans", "Optima", sans-serif;
}
body { background: var(--carlino-parchment); color: var(--carlino-ink); font-family: var(--carlino-font-body); }
h1,h2,.carlino-heading { font-family: var(--carlino-font-display); font-weight: 600; color: var(--carlino-forest); letter-spacing: 0.02em; }
h1 { font-style: italic; font-size: clamp(2rem, 4vw, 3.5rem); }
h2 { font-size: clamp(1.4rem, 2.5vw, 2rem); }
.carlino-nav { font-family: var(--carlino-font-ui); font-size: 0.85rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--carlino-forest); }
.carlino-btn { font-family: var(--carlino-font-ui); letter-spacing: 0.1em; text-transform: uppercase; font-size: 0.8rem; border: 1px solid var(--carlino-forest); padding: 0.75em 2em; background: transparent; color: var(--carlino-forest); transition: 0.2s; cursor: pointer; }
.carlino-btn:hover { background: var(--carlino-forest); color: var(--carlino-parchment); }
.carlino-footer { background: var(--carlino-forest); color: var(--carlino-parchment); }
.carlino-divider { border: none; height: 1px; background: var(--carlino-stone); margin: 2rem 0; }`

// ─── DI BEPPE ───────────────────────────────────────────────

export const DIBEPPE_VOICE = JSON.stringify({
  voiceAttributes: [
    { trait: "Immigrant soul", description: "Di Beppe carries the emotional weight of an Italian who packed their culture into a suitcase and rebuilt it in a new city. That longing and pride is the brand's emotional core.", examples: ["A piece of home, far from home", "The recipes that crossed the ocean", "What Italy tastes like when you miss it"] },
    { trait: "Old world charm, new world energy", description: "The soul is old Italian — unhurried, warm, opinionated about food. But the space and the audience are young, modern Vancouver.", examples: ["An old soul in a Gastown building", "The way your Italian grandmother would do it, if she lived here", "Traditional. Uncompromising. Ours."] },
    { trait: "Multi-dimensional", description: "Di Beppe is not one thing — it's a caffe, a deli, a ristorante, a grocer, a pastry shop. The voice reflects that richness without confusion.", examples: ["Start with an espresso. Stay for the pasta.", "Shop, then eat. Or just eat.", "Morning to night, we've got you"] },
    { trait: "Warm and opinionated", description: "Italians are not shy about food. Di Beppe has a point of view and isn't afraid to share it.", examples: ["This is how it's done", "We don't compromise on the pasta", "Authentic means this, not that"] },
    { trait: "Neighbourly", description: "Gastown's Italian anchor. The voice should feel like a local institution — familiar, reliable, yours.", examples: ["Your Gastown local", "See you tomorrow", "Part of the neighbourhood since day one"] }
  ],
  toneGuidelines: {
    do: ["Lean into the duality — old Italian soul, new Vancouver energy", "Use Italian words naturally and sparingly (caffè, ristorante, aperitivo) — never pretentiously", "Be warm and familiar — guests are regulars, even on their first visit", "Reference the immigrant story with pride, not sentimentality", "Embrace the multi-concept nature — it's a feature, not confusion"],
    dont: ["Don't over-explain the concept — trust the guest to discover it", "Avoid the word 'authentic' — show it, don't claim it", "Don't sound like a tourism brochure about Italy", "Never use formal restaurant language — this is a caffe first", "Don't compete with Ask For Luigi — Di Beppe is its own world"]
  },
  vocabularyBank: {
    powerWords: ["home", "espresso", "regional", "family", "morning", "Gastown", "tradition", "share", "deli", "aperitivo", "culture", "immigrant"],
    avoidWords: ["authentic", "elevated", "curated", "bespoke", "artisanal", "experience", "journey", "concept"]
  },
  writingSamples: {
    heroHeadline: "A young restaurant with an old Italian soul.",
    menuDescription: "Cacio e pepe — the way they've been making it in Rome since before we were born. Pecorino, black pepper, nothing else.",
    reservationCTA: "Book a table",
    socialPost: "Aperitivo hour starts at 3. The Negroni is cold. The olives are ready. See you soon.",
    emailSubject: "New in the deli this week.",
    aboutBlurb: "When Italians leave Italy, the first thing they rebuild is the kitchen. Di Beppe is that kitchen — the ristorante, the caffè, the deli, the place where the neighbourhood gathers over food that doesn't need to explain itself."
  },
  summary: "Di Beppe speaks with the warmth of an Italian immigrant who built something real in a new city. The voice is proud, multi-dimensional, unpretentious, and deeply rooted in both Italian food culture and the Gastown community it calls home."
}, null, 2)

export const DIBEPPE_DESIGN = JSON.stringify({
  colors: [
    { name: "Linen", hex: "#F2EAE1", usage: "Primary background — warm linen, directly from brand meta theme-color" },
    { name: "Terracotta", hex: "#C4622D", usage: "Primary accent — warm Italian earth, energy and warmth" },
    { name: "Espresso", hex: "#2A1F1A", usage: "Primary dark — rich near-black with warm brown undertone" },
    { name: "Sage", hex: "#6B7C5C", usage: "Secondary accent — Italian countryside, herbs, olives" },
    { name: "Cream", hex: "#EDE4D8", usage: "Secondary surface, card backgrounds, subtle contrast" }
  ],
  fonts: [
    { role: "display", family: "Playfair Display", weight: "700", notes: "Confident editorial serif. Used for restaurant name and key headlines. Mix regular and italic." },
    { role: "body", family: "Libre Baskerville", weight: "400", notes: "Readable, warm serif for body copy and menu descriptions. Classical but accessible." },
    { role: "accent", family: "Raleway", weight: "300", notes: "Light sans-serif for labels, nav, small caps. Provides modern counterpoint to serif-heavy palette." }
  ],
  moodKeywords: ["old world", "warm", "layered", "immigrant soul", "gastown"],
  designPrinciples: ["Warmth is structural — linen and terracotta are not accents, they are the foundation", "Layered like the concept — the design should feel like different rooms discovered over time", "Italian typography references — editorial, magazine-influenced layouts", "Photography mixes food, people, and the deli/grocery environment", "The caffè aesthetic extends into all design — espresso cups, pastry cases, morning light"],
  imageStyle: "Documentary and warm. Early morning caffè light. Hands holding espresso. The deli counter in motion. People at tables mid-conversation. Not styled — observed. Italian magazine energy.",
  layoutApproach: "Multi-column editorial layout. Large typographic moments balanced with intimate photography. The various sub-concepts (caffè, deli, ristorante) get distinct but harmonious visual zones."
}, null, 2)

export const DIBEPPE_CSS = `/* Di Beppe — Brand CSS Package */
:root {
  --dibeppe-linen: #F2EAE1; --dibeppe-terracotta: #C4622D; --dibeppe-espresso: #2A1F1A;
  --dibeppe-sage: #6B7C5C; --dibeppe-cream: #EDE4D8;
  --dibeppe-font-display: "Playfair Display", "Georgia", serif;
  --dibeppe-font-body: "Libre Baskerville", "Georgia", serif;
  --dibeppe-font-ui: "Raleway", sans-serif;
}
body { background: var(--dibeppe-linen); color: var(--dibeppe-espresso); font-family: var(--dibeppe-font-body); line-height: 1.65; }
h1,h2,.dibeppe-heading { font-family: var(--dibeppe-font-display); color: var(--dibeppe-espresso); }
h1 { font-size: clamp(2.2rem, 4.5vw, 4rem); font-weight: 700; }
h2 { font-size: clamp(1.3rem, 2vw, 1.8rem); }
em, .dibeppe-italic { font-family: var(--dibeppe-font-display); font-style: italic; color: var(--dibeppe-terracotta); }
.dibeppe-nav { font-family: var(--dibeppe-font-ui); font-weight: 300; letter-spacing: 0.15em; text-transform: uppercase; font-size: 0.8rem; }
.dibeppe-btn { font-family: var(--dibeppe-font-ui); font-weight: 300; letter-spacing: 0.12em; text-transform: uppercase; font-size: 0.85rem; border: 1px solid var(--dibeppe-terracotta); color: var(--dibeppe-terracotta); padding: 0.8em 2.2em; background: transparent; transition: 0.2s; cursor: pointer; }
.dibeppe-btn:hover { background: var(--dibeppe-terracotta); color: var(--dibeppe-linen); }
.dibeppe-accent { color: var(--dibeppe-terracotta); }
.dibeppe-footer { background: var(--dibeppe-espresso); color: var(--dibeppe-linen); }`

// ─── FARINA A LEGNA ─────────────────────────────────────────

export const FARINA_VOICE = JSON.stringify({
  voiceAttributes: [
    { trait: "Community-first", description: "Farina is North Van's Italian restaurant. Not a destination — a neighbour. The voice reflects that local rootedness above everything.", examples: ["Your Lower Lonsdale local", "We're part of the neighbourhood", "For the people who live here"] },
    { trait: "Wood and fire", description: "The oven is not just equipment — it's the identity. Everything radiates from that brick oven. The voice should carry that warmth and elemental directness.", examples: ["Wood-fired, every time", "The oven decides", "Flour on wood. That's it."] },
    { trait: "Inclusive", description: "Purists and non-traditionalists both welcome. The voice never makes anyone feel like they ordered wrong.", examples: ["Classic or creative — both are right", "Order what you want", "No pizza philosophy required"] },
    { trait: "Unpretentious craft", description: "The craft is real — handmade pasta, wood-fired technique — but it's never performed for the audience. It just is.", examples: ["Made by hand, every day", "The dough knows", "Simple ingredients. Serious technique."] },
    { trait: "Cozy", description: "Farina is a warm room on a North Van evening. The voice carries that physical comfort.", examples: ["Come in from the cold", "A good table is waiting", "Settle in"] }
  ],
  toneGuidelines: {
    do: ["Lead with the neighbourhood — North Van identity is a source of pride", "Reference the wood-fired oven naturally and often — it's the heart of the brand", "Be inclusive — welcome both pizza traditionalists and creative eaters equally", "Keep it cozy and direct — this is a neighbourhood spot, not a destination restaurant", "Use the name's meaning occasionally — flour on wood — it grounds the brand in craft"],
    dont: ["Don't position Farina as a destination or special occasion restaurant", "Avoid pizza pedantry — never make guests feel judged for their order", "Don't use overly Italian language — the concept is Italian-inspired, not imported", "Avoid the word 'artisanal' — show the craft, don't label it", "Don't compete with or reference other KTR concepts"]
  },
  vocabularyBank: {
    powerWords: ["wood-fired", "handmade", "neighbourhood", "cozy", "community", "flour", "oven", "gather", "North Van", "fresh", "honest", "simple"],
    avoidWords: ["artisanal", "elevated", "destination", "curated", "authentic", "purist", "traditional", "experience"]
  },
  writingSamples: {
    heroHeadline: "Flour on wood. Lower Lonsdale.",
    menuDescription: "Margherita — San Marzano, fior di latte, fresh basil. From the wood oven. The one you come back for.",
    reservationCTA: "Get a table",
    socialPost: "The oven's been going since 4am. The dough is ready. Come for dinner.",
    emailSubject: "Colanzo brunch is back this weekend.",
    aboutBlurb: "Farina is Italian for flour. A legna is Italian for wood. Put them together and you have what we do — handmade pasta and wood-fired pizza, made every day for the people of Lower Lonsdale."
  },
  summary: "Farina a Legna speaks like a warm, skilled neighbour — genuinely part of the community, proud of the craft but never precious about it. The wood oven is always in the room, and the voice carries its warmth."
}, null, 2)

export const FARINA_DESIGN = JSON.stringify({
  colors: [
    { name: "Dough", hex: "#F4EDE0", usage: "Primary background — warm flour/dough tone" },
    { name: "Char", hex: "#2B2420", usage: "Primary dark — wood char, warm near-black" },
    { name: "Ember", hex: "#C45C2A", usage: "Primary accent — fire, ember, burnt orange energy" },
    { name: "Wheat", hex: "#D4A96A", usage: "Secondary warm accent — golden wheat, aged wood" },
    { name: "Smoke", hex: "#8C7E72", usage: "Secondary neutral — ash, stone, smoke" }
  ],
  fonts: [
    { role: "display", family: "Bodoni Moda", weight: "700", notes: "Confident Italian editorial serif — strong contrast, classic structure. For restaurant name and hero text." },
    { role: "body", family: "Source Serif Pro", weight: "400", notes: "Readable serif for body copy and menus. Approachable, not fussy." },
    { role: "accent", family: "Barlow Condensed", weight: "500", notes: "Condensed sans-serif for labels, nav, categories. Efficient and honest." }
  ],
  moodKeywords: ["elemental", "cozy", "fire", "handmade", "neighbourhood"],
  designPrinciples: ["The oven is the visual anchor — fire and ember tones throughout", "Texture over gloss — the design should feel like flour, wood, brick", "Community warmth expressed through approachable layouts, nothing intimidating", "Photography captures the process — hands, dough, flame, not just plated food", "Illustration and hand-lettering could supplement photography for a craft-forward feel"],
  imageStyle: "Close, warm, process-oriented. The oven at temperature. Dough being stretched. Wood stacked by the kitchen door. Plates arriving at real tables with real people. North Van street shots for location warmth.",
  layoutApproach: "Warm and approachable — no cold whitespace. Content sits close together like a neighbourhood restaurant menu. Bold section headers, generous food photography, minimal chrome."
}, null, 2)

export const FARINA_CSS = `/* Farina a Legna — Brand CSS Package */
:root {
  --farina-dough: #F4EDE0; --farina-char: #2B2420; --farina-ember: #C45C2A;
  --farina-wheat: #D4A96A; --farina-smoke: #8C7E72;
  --farina-font-display: "Bodoni Moda", "Didot", serif;
  --farina-font-body: "Source Serif Pro", "Georgia", serif;
  --farina-font-ui: "Barlow Condensed", sans-serif;
}
body { background: var(--farina-dough); color: var(--farina-char); font-family: var(--farina-font-body); }
h1,h2,.farina-heading { font-family: var(--farina-font-display); color: var(--farina-char); font-weight: 700; }
h1 { font-size: clamp(2.5rem, 5vw, 4.5rem); letter-spacing: -0.01em; }
.farina-nav { font-family: var(--farina-font-ui); font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; font-size: 0.85rem; color: var(--farina-char); }
.farina-btn { font-family: var(--farina-font-ui); font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; font-size: 0.9rem; background: var(--farina-ember); color: var(--farina-dough); border: none; padding: 0.85em 2em; cursor: pointer; transition: 0.2s; }
.farina-btn:hover { background: var(--farina-char); }
.farina-accent { color: var(--farina-ember); }
.farina-footer { background: var(--farina-char); color: var(--farina-dough); }
.farina-divider { border: none; height: 2px; background: var(--farina-wheat); margin: 2rem 0; }`

// ─── GIOVANE CAFFÈ ──────────────────────────────────────────

export const GIOVANE_VOICE = JSON.stringify({
  voiceAttributes: [
    { trait: "Precise", description: "Giovane is serious about coffee. The voice reflects that precision — specific, knowledgeable, confident. Not showy, but exacting.", examples: ["Extracted at 93°C", "This espresso was made for this milk", "We measured so you don't have to"] },
    { trait: "Modern Italian", description: "The Italian caffè tradition updated for a sophisticated contemporary audience. Respect for the classics, room for evolution.", examples: ["The classic, perfected", "Old method, new thinking", "Italy taught us. We kept learning."] },
    { trait: "Quietly confident", description: "Giovane doesn't need to announce its quality. The confidence is expressed through restraint — a single strong sentence, no excessive explanation.", examples: ["The espresso speaks for itself", "We don't need to say much", "Good coffee is self-evident"] },
    { trait: "Welcoming to purists", description: "A coffee bar that can satisfy even the most demanding espresso drinker is a rare thing. The voice acknowledges that without being exclusionary.", examples: ["Even the purists approve", "The standard you were looking for", "No compromises in the cup"] },
    { trait: "Refined", description: "Located in the Fairmont Pacific Rim and W Georgia — the physical context requires a certain polish. The voice is refined without being stuffy.", examples: ["A considered start to your day", "The coffee worth pausing for", "Make this part of the morning"] }
  ],
  toneGuidelines: {
    do: ["Use coffee-specific language with confidence — extraction, origin, roast notes — but never condescendingly", "Keep copy short and precise — brevity is the brand", "Reference the Italian caffè tradition as the foundation, not the destination", "Let the product carry the communication — minimal copy, maximum quality signal", "Acknowledge the hotel context gracefully — it's part of the premium positioning"],
    dont: ["Don't use coffee shop clichés: 'third wave', 'small batch', 'single origin' as buzzwords", "Never be preachy about coffee quality", "Avoid informal language that breaks the refined tone", "Don't over-explain the Italian reference — wear it, don't display it", "Never apologize for the price point"]
  },
  vocabularyBank: {
    powerWords: ["espresso", "precise", "Italian", "craft", "classic", "morning", "considered", "clean", "balanced", "ritual", "pure", "refined"],
    avoidWords: ["third wave", "artisanal", "small batch", "elevated", "curated", "specialty", "craft coffee", "sourced"]
  },
  writingSamples: {
    heroHeadline: "The Italian caffè, considered.",
    menuDescription: "Cortado — equal parts espresso and warm whole milk. Precise. Nothing extra.",
    locationCTA: "Find us at the Fairmont Pacific Rim",
    socialPost: "The espresso is ready. The milk is steamed. The rest is yours.",
    emailSubject: "Good morning from Giovane.",
    aboutBlurb: "Giovane is an Italian caffè — a place where the espresso is right, the milk is steamed correctly, and the ritual of the morning coffee is taken seriously. Classic drinks made well. Modern variations made carefully. Both welcome."
  },
  summary: "Giovane speaks with the quiet authority of a coffee bar that knows exactly what it's doing. Precise, refined, informed by Italian tradition but not trapped by it. The voice is as clean and well-balanced as the espresso it serves."
}, null, 2)

export const GIOVANE_DESIGN = JSON.stringify({
  colors: [
    { name: "White", hex: "#FAFAF8", usage: "Primary background — clean, near-white with warmth" },
    { name: "Espresso", hex: "#1C1410", usage: "Primary dark — deep coffee brown-black" },
    { name: "Brass", hex: "#A68B5B", usage: "Brand accent — brass fixtures, warm metallic Italian caffè reference" },
    { name: "Crema", hex: "#E8D9C0", usage: "Secondary warm tone — espresso crema, steamed milk" },
    { name: "Stone", hex: "#9A9089", usage: "Secondary neutral — marble, concrete, Italian stone surfaces" }
  ],
  fonts: [
    { role: "display", family: "Canela", weight: "300", notes: "Elegant light editorial serif. Thin weight creates refinement. For wordmark and hero text." },
    { role: "body", family: "Aperçu", weight: "400", notes: "Clean, precise grotesque for body copy. Modern without being clinical." },
    { role: "accent", family: "Canela Condensed", weight: "400", notes: "Condensed serif for pull quotes and callouts. Pairs tightly with display." }
  ],
  moodKeywords: ["precise", "refined", "minimal", "Italian", "morning ritual"],
  designPrinciples: ["Minimalism as quality signal — the less that's there, the more each element matters", "White space is the luxury", "Material references: marble, brass, ceramic espresso cups", "Typography is primary decoration — the wordmark and type carry the visual identity", "Photography: close crops of coffee in motion, hands, steam — never lifestyle clichés"],
  imageStyle: "Minimal, close, precise. Espresso extracting. The crema surface. A cortado in a ceramic cup on marble. Steam from a portafilter. Clean light, no drama. The craft visible without theatrics.",
  layoutApproach: "Spare and considered. Wide margins. Single-column storytelling. The menu is a clean list, not a document. Everything is given room to breathe — including the white space itself."
}, null, 2)

export const GIOVANE_CSS = `/* Giovane Caffè — Brand CSS Package */
:root {
  --giovane-white: #FAFAF8; --giovane-espresso: #1C1410; --giovane-brass: #A68B5B;
  --giovane-crema: #E8D9C0; --giovane-stone: #9A9089;
  --giovane-font-display: "Canela", "Georgia", serif;
  --giovane-font-body: "Aperçu", "Helvetica Neue", sans-serif;
}
body { background: var(--giovane-white); color: var(--giovane-espresso); font-family: var(--giovane-font-body); font-size: 0.95rem; line-height: 1.6; }
h1,.giovane-hero { font-family: var(--giovane-font-display); font-weight: 300; font-size: clamp(2.5rem, 6vw, 6rem); letter-spacing: -0.02em; color: var(--giovane-espresso); }
h2,.giovane-heading { font-family: var(--giovane-font-display); font-weight: 400; font-size: clamp(1.2rem, 2vw, 1.6rem); }
.giovane-nav { font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--giovane-espresso); }
.giovane-btn { font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase; border: 1px solid var(--giovane-espresso); color: var(--giovane-espresso); padding: 0.9em 2.5em; background: transparent; cursor: pointer; transition: 0.2s; }
.giovane-btn:hover { background: var(--giovane-espresso); color: var(--giovane-white); }
.giovane-accent { color: var(--giovane-brass); }
.giovane-footer { background: var(--giovane-espresso); color: var(--giovane-crema); }`

// ─── GIGI'S ─────────────────────────────────────────────────

export const GIGIS_VOICE = JSON.stringify({
  voiceAttributes: [
    { trait: "Love letter tone", description: "Gigi's is explicitly framed as a love letter — to Nonno Gigi, to Italian summers, to the table. The voice carries that emotional warmth without becoming maudlin.", examples: ["For Nonno, with love", "Every summer had a table like this", "The recipe he never wrote down"] },
    { trait: "Fresh and joyful", description: "As the newest KTR concept, Gigi's has a youthful energy. It celebrates, it welcomes, it delights. More vibrant than its siblings.", examples: ["New tonight", "Come celebrate anything", "The burrata just arrived from Italy"] },
    { trait: "West coast Italian", description: "Italian roots, BC ingredients. The voice bridges both — the warmth of Italian family food with the lightness of Pacific Northwest produce.", examples: ["Local ingredients, Italian instincts", "What Nonno would have made with BC seafood", "The west coast made our pasta better"] },
    { trait: "Inviting", description: "Gigi's opened in Coquitlam — a broader, more suburban audience. The voice is welcoming to everyone: experienced diners and first-timers equally.", examples: ["First time? You'll be back.", "No reservations about reservations needed", "Come as you are, hungry"] },
    { trait: "Story-led", description: "The Nonno narrative gives every touchpoint a story to tell. The voice finds natural moments to bring Gigi's story into the conversation.", examples: ["Nonno Gigi taught us this one", "The summers that shaped this menu", "He would have approved"] }
  ],
  toneGuidelines: {
    do: ["Lead with the family story — Nonno Gigi is the emotional anchor of the brand", "Celebrate the burrata bar — it's the signature, mention it often", "Embrace the west coast–Italian duality with genuine pride", "Welcome all experience levels — the voice should never intimidate", "Reference Bar Lucia as the upstairs complement to create a full-evening narrative"],
    dont: ["Don't compete with Ask For Luigi — Gigi's has its own distinct story", "Avoid nostalgia that feels manufactured — the Nonno story is real, keep it grounded", "Don't use fine-dining language — this is joyful, accessible Italian", "Never be exclusive or intimidating — Coquitlam audience values welcome over prestige", "Don't ignore the west coast setting — it's a source of pride, not a compromise"]
  },
  vocabularyBank: {
    powerWords: ["Nonno", "love", "family", "burrata", "fresh", "Italy", "summer", "gather", "celebrate", "handmade", "local", "rooftop"],
    avoidWords: ["elevated", "curated", "exclusive", "fine dining", "bespoke", "artisanal", "crafted", "concept"]
  },
  writingSamples: {
    heroHeadline: "Italian roots. Local ingredients. A love letter to Nonno.",
    menuDescription: "Burrata — flown in from Italy, served with local heirloom tomatoes and basil from our herb garden. The one thing Nonno would recognize immediately.",
    reservationCTA: "Join us",
    socialPost: "The burrata arrived this morning. Fresh from Italy. The table is set. Come find out what we did with it.",
    emailSubject: "Nonno would approve of tonight's menu.",
    aboutBlurb: "Gigi is what everyone called Nonno. He had a table in the garden and a philosophy about pasta: make it fresh, share it with everyone, don't rush. We built this restaurant for him, and for everyone who has a Nonno like that."
  },
  summary: "Gigi's speaks with the warmth of a family story genuinely told — joyful, welcoming, rooted in love and Italian food culture while embracing its west coast home. The freshest voice in the KTR family."
}, null, 2)

export const GIGIS_DESIGN = JSON.stringify({
  colors: [
    { name: "Cream", hex: "#F5EFE0", usage: "Primary background — warm, welcoming, pastoral Italian summer" },
    { name: "Forest Night", hex: "#1A2E22", usage: "Primary dark — deep green, evening gathering, Bar Lucia upstairs" },
    { name: "Terracotta", hex: "#C96B3A", usage: "Primary accent — warmth, Italian earth, celebratory energy" },
    { name: "Sage", hex: "#7A8C6E", usage: "Secondary accent — herbs, garden, west coast nature" },
    { name: "Gold", hex: "#C9A96E", usage: "Highlight — warm gold for Bar Lucia elements and special moments" }
  ],
  fonts: [
    { role: "display", family: "Domaine Display", weight: "400", notes: "Warm editorial serif with character. Mix regular and italic for personality. Headline use." },
    { role: "body", family: "Söhne", weight: "400", notes: "Clean, warm grotesque for body. Modern but with character — bridges Italian warmth and west coast simplicity." },
    { role: "accent", family: "Domaine Display Italic", weight: "400", notes: "Italic serif for pull quotes, menu section names, the love-letter moments." }
  ],
  moodKeywords: ["joyful", "summery", "family", "rooftop", "love letter"],
  designPrinciples: ["Warmth and joy are the primary design emotions — every element should feel celebratory", "The cream and terracotta palette references Italian summer evenings", "Bar Lucia gets darker, more intimate treatment — forest green and gold", "Photography captures abundance — the burrata bar, the pasta, the rooftop at golden hour", "The Gigi wordmark in cream on dark surfaces is a key signature"],
  imageStyle: "Golden hour warmth. Abundant food — the burrata bar overflowing, pasta steaming. People laughing mid-conversation. The rooftop terrace at dusk. Local BC produce displayed with Italian generosity. Never cold or still.",
  layoutApproach: "Warm, layered, generous. Photography leads. Typography is expressive — mix of serif and italic for the love-letter moments. The menu should feel handwritten in spirit even if printed. Rooftop and ground floor get distinct visual treatments."
}, null, 2)

export const GIGIS_CSS = `/* Gigi's — Brand CSS Package */
:root {
  --gigis-cream: #F5EFE0; --gigis-forest: #1A2E22; --gigis-terracotta: #C96B3A;
  --gigis-sage: #7A8C6E; --gigis-gold: #C9A96E;
  --gigis-font-display: "Domaine Display", "Georgia", serif;
  --gigis-font-body: "Söhne", "Helvetica Neue", sans-serif;
}
body { background: var(--gigis-cream); color: var(--gigis-forest); font-family: var(--gigis-font-body); line-height: 1.6; }
h1,.gigis-hero { font-family: var(--gigis-font-display); font-weight: 400; font-size: clamp(2rem, 4.5vw, 4rem); color: var(--gigis-forest); }
h2,.gigis-heading { font-family: var(--gigis-font-display); font-size: clamp(1.3rem, 2.5vw, 2rem); color: var(--gigis-forest); }
.gigis-italic { font-family: var(--gigis-font-display); font-style: italic; color: var(--gigis-terracotta); }
.gigis-nav { font-size: 0.8rem; letter-spacing: 0.15em; text-transform: uppercase; }
.gigis-btn { font-family: var(--gigis-font-body); font-size: 0.85rem; letter-spacing: 0.08em; background: var(--gigis-terracotta); color: var(--gigis-cream); border: none; padding: 0.9em 2.2em; cursor: pointer; transition: 0.2s; border-radius: 2px; }
.gigis-btn:hover { background: var(--gigis-forest); }
.gigis-footer { background: var(--gigis-forest); color: var(--gigis-cream); }
/* Bar Lucia (upstairs) overrides */
.lucia { --gigis-bg: var(--gigis-forest); --gigis-text: var(--gigis-cream); --gigis-accent: var(--gigis-gold); }`

// ─── MERCATO DI LUIGI ────────────────────────────────────────

export const MERCATO_VOICE = JSON.stringify({
  voiceAttributes: [
    { trait: "The Italian grocer", description: "Mercato is first and foremost a store — a place to shop, to browse, to discover Italian ingredients you can't get elsewhere. The grocer identity leads.", examples: ["Stock your Italian pantry", "What we carry this week", "The pasta you've been looking for"] },
    { trait: "Everyday", description: "Not a special occasion. Mercato is Tuesday morning espresso and a pastry, Thursday lunch pasta, Friday take-home ingredients. The voice reflects daily use, not occasion.", examples: ["See you tomorrow morning", "Your regular order is ready", "Lunch is on at 11:30"] },
    { trait: "Knowledgeable but accessible", description: "The staff know Italian food deeply. The voice shares that knowledge generously, without gatekeeping.", examples: ["This is what it's for", "How to use it at home", "The Italian way to store pasta"] },
    { trait: "Warm and quick", description: "Caffè energy — short interactions, warm service, efficient. The voice matches that pace.", examples: ["Ready when you are", "Quick lunch, good pasta", "In and out, always worth it"] },
    { trait: "Neighbourhood anchor", description: "Two Vancouver locations, each embedded in their neighbourhood. Mount Pleasant Italian anchor, Georgia Street urban pitstop.", examples: ["Your Mount Pleasant grocer", "The Italian stop on Georgia", "Part of the block for years"] }
  ],
  toneGuidelines: {
    do: ["Lead with what's in store and what's good today — freshness and specificity matter", "Keep it practical — this is an everyday brand, not a special occasion brand", "Share product knowledge generously — the groceries are the editorial content", "Reference the two locations as distinct personalities when appropriate", "Use the Luigi connection lightly — Mercato shares DNA with Ask For Luigi but is its own world"],
    dont: ["Don't position Mercato as a fine food shop — it's a real grocer", "Avoid pretension about Italian products — make them approachable", "Don't be vague — 'great selection of Italian goods' means nothing; 'we got San Marzanos in this morning' means everything", "Never make the grocer feel like a restaurant afterthought", "Avoid the word 'curated' — these are groceries, not a gallery"]
  },
  vocabularyBank: {
    powerWords: ["pantry", "fresh", "housemade", "daily", "lunch", "espresso", "pasta", "Italian", "local", "in today", "seasonal", "take home"],
    avoidWords: ["curated", "artisanal", "elevated", "bespoke", "small batch", "hand-selected", "gourmet", "boutique"]
  },
  writingSamples: {
    heroHeadline: "Your Italian pantry. Your neighbourhood caffè.",
    menuDescription: "Housemade ricotta — made fresh each morning. On the sandwich, in the pasta, or take a container home. It's that simple.",
    locationCTA: "Find your nearest Mercato",
    socialPost: "San Marzano tomatoes just came in. You know what to do. (Make the sauce. We have the recipe on the back of the tin.)",
    emailSubject: "New in the pantry this week.",
    aboutBlurb: "Mercato di Luigi is part grocer, part caffè, part deli — the Italian shop your neighbourhood needs. Stock your pantry with real Italian ingredients, grab a housemade sandwich for lunch, or just stop in for the espresso. We're here most days."
  },
  summary: "Mercato speaks like a friendly Italian shopkeeper who genuinely loves their products and wants you to cook well at home. Practical, knowledgeable, warm, and firmly embedded in the daily rhythm of the neighbourhood."
}, null, 2)

export const MERCATO_DESIGN = JSON.stringify({
  colors: [
    { name: "Market White", hex: "#F8F5EE", usage: "Primary background — clean but warm, market stall linen" },
    { name: "Bottle Green", hex: "#2D4A35", usage: "Primary brand colour — Italian grocer signage energy" },
    { name: "Vermillion", hex: "#C93B2A", usage: "Accent — Italian deli, tomato, urgency for specials/new arrivals" },
    { name: "Kraft", hex: "#C4A882", usage: "Secondary warm — paper bags, kraft wrapping, Italian packaging" },
    { name: "Ink", hex: "#1E1E1E", usage: "Body text" }
  ],
  fonts: [
    { role: "display", family: "Clarendon", weight: "700", notes: "Bold slab serif — Italian grocer signage energy. Confident, readable, unpretentious." },
    { role: "body", family: "Freight Sans", weight: "400", notes: "Clean humanist sans for body and labels. Approachable and legible at small sizes." },
    { role: "accent", family: "Clarendon Light", weight: "300", notes: "Light slab serif for secondary headings — creates weight variation with the bold display." }
  ],
  moodKeywords: ["market", "everyday", "Italian grocer", "neighbourhood", "practical"],
  designPrinciples: ["Market stall energy — bold labels, clear pricing, real food forward", "Green bottle colour as primary identifier — immediately reads as Italian grocer", "Hand-chalked specials aesthetic for promotions and new arrivals", "Photography should show the product — on shelf, in hands, in the kitchen at home", "The deli counter and the caffè have distinct visual zones but unified colour system"],
  imageStyle: "Bright and market-fresh. Product close-ups. The deli counter from customer eye level. Morning light through the caffè window. Hands picking out pasta from the shelf. Honest, documentary, everyday.",
  layoutApproach: "Market-inspired grid — bold headers, practical information hierarchy, prominent daily specials. Menu boards feel like chalk. Product pages are efficient and factual. Warm but not precious."
}, null, 2)

export const MERCATO_CSS = `/* Mercato di Luigi — Brand CSS Package */
:root {
  --mercato-white: #F8F5EE; --mercato-green: #2D4A35; --mercato-red: #C93B2A;
  --mercato-kraft: #C4A882; --mercato-ink: #1E1E1E;
  --mercato-font-display: "Clarendon", "Rockwell", serif;
  --mercato-font-body: "Freight Sans", "Gill Sans", sans-serif;
}
body { background: var(--mercato-white); color: var(--mercato-ink); font-family: var(--mercato-font-body); }
h1,.mercato-hero { font-family: var(--mercato-font-display); font-weight: 700; font-size: clamp(2rem, 4vw, 3.5rem); color: var(--mercato-green); letter-spacing: -0.01em; }
h2,.mercato-heading { font-family: var(--mercato-font-display); font-weight: 700; font-size: clamp(1.2rem, 2vw, 1.6rem); color: var(--mercato-green); }
.mercato-special { font-family: var(--mercato-font-display); color: var(--mercato-red); font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; }
.mercato-btn { font-family: var(--mercato-font-body); font-weight: 600; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 0.08em; background: var(--mercato-green); color: var(--mercato-white); border: none; padding: 0.85em 2em; cursor: pointer; transition: 0.2s; }
.mercato-btn:hover { background: var(--mercato-red); }
.mercato-footer { background: var(--mercato-green); color: var(--mercato-white); }
.mercato-tag { background: var(--mercato-red); color: white; font-size: 0.7rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; padding: 0.3em 0.8em; }`

// ─── MONZO BURGER ────────────────────────────────────────────

export const MONZO_VOICE = JSON.stringify({
  voiceAttributes: [
    { trait: "Confident", description: "MONZO knows it makes the best burger in Vancouver. The voice carries that certainty without arrogance. #BestinBeef is a statement, not a question.", examples: ["#BestinBeef", "This is what a burger should be", "We settled this a while ago"] },
    { trait: "Fashion-forward Italian", description: "The Paninari reference is real — this is a brand where food and culture intersect. The voice has taste in all things, not just beef.", examples: ["Where food, fashion and culture meet", "The Milanese kids were right", "Style is not optional"] },
    { trait: "Fast and sharp", description: "Counter service, open late, smashburger energy. The copy is fast. Short sentences. Bold claims. No padding.", examples: ["Open 11am. Midnight close.", "The fries are cooked in beef fat.", "That's it."] },
    { trait: "Playful but serious about quality", description: "The tone is fun and bold, but the obsession with ingredients and process is genuine. Custom-ground beef, hand-made chicken, soft serve gelato.", examples: ["We took our time on this one", "Canadian beef, custom ground", "The details matter. Especially here."] },
    { trait: "Community builder", description: "Like the Paninari, MONZO is about building community through shared food, friendship, and hospitality. Not just transactions.", examples: ["Come back with your crew", "MONZO is for everyone", "The table is always open"] }
  ],
  toneGuidelines: {
    do: ["Be bold and confident — this brand has earned its swagger", "Keep copy short, punchy, and declarative", "Reference the Paninari/Milanese connection naturally — it's the cultural DNA", "Lean into the late-night, Vancouver House, Granville St energy", "The hashtag #BestinBeef is a real brand asset — use it"],
    dont: ["Don't use fine-dining or Italian restaurant language — this is fast-casual with attitude", "Avoid anything that sounds corporate or chain-like", "Don't over-explain the Italian reference — it's a vibe, not a history lesson", "Never be apologetic about being a burger joint — own it completely", "Don't be exclusionary — the Paninari were about community, not gatekeeping"]
  },
  vocabularyBank: {
    powerWords: ["smash", "beef", "custom", "fresh", "Canadian", "hand-made", "crispy", "late night", "crew", "culture", "Milan", "bold"],
    avoidWords: ["artisanal", "elevated", "curated", "gourmet", "fine", "casual dining", "experience", "journey", "crafted"]
  },
  writingSamples: {
    heroHeadline: "#BestinBeef. Vancouver House.",
    menuDescription: "King Monzo — double smash patty, shredded iceberg, tomato, diced onion, sour pickle, signature sauce. Custom ground Canadian beef. Made to order.",
    orderCTA: "Order online",
    socialPost: "Beef fat fries just dropped. Crispy. Salty. You already know. Open til midnight.",
    emailSubject: "New drop: the chicken cutlet sandwich.",
    aboutBlurb: "In 1980s Milan, the Paninari were young Italians who believed that what you ate said something about who you were. They were obsessed with panini, style, and their crew. MONZO is built on that same idea — great food, made seriously, shared with everyone."
  },
  summary: "MONZO speaks with the confidence of a brand that knows exactly what it is — an Italian-inspired burger concept with swagger, craft, and genuine community values. Short, bold, and unapologetically itself."
}, null, 2)

export const MONZO_DESIGN = JSON.stringify({
  colors: [
    { name: "Black", hex: "#0D0D0D", usage: "Primary background — strong, graphic, fashion-forward" },
    { name: "Red", hex: "#E02020", usage: "Primary accent — Italian flag energy, urgency, appetite" },
    { name: "White", hex: "#F5F5F2", usage: "Primary type on dark — clean, high contrast" },
    { name: "Yellow", hex: "#F5C842", usage: "Secondary accent — fast food heritage reclaimed, mustard energy" },
    { name: "Chrome", hex: "#A8A8A0", usage: "Secondary neutral — metallic, contemporary, Vancouver House aesthetic" }
  ],
  fonts: [
    { role: "display", family: "Helvetica Neue Condensed Bold", weight: "700", notes: "The definitive Italian modernist typeface — Paninari would approve. Condensed, bold, graphic. All caps." },
    { role: "body", family: "Helvetica Neue", weight: "400", notes: "Clean system-level Helvetica for body and UI. Consistent with the graphic identity." },
    { role: "accent", family: "Druk Wide", weight: "900", notes: "Ultra-heavy display weight for hero moments, merchandise, social graphics. Maximum impact." }
  ],
  moodKeywords: ["bold", "graphic", "Italian streetwear", "fast", "confident"],
  designPrinciples: ["Black as the primary canvas — fashion and food brands that lead with black own the night", "Red as the only colour that fights through the dark", "Typography IS the design — Helvetica Neue Condensed Bold at large scale is the identity", "Grid-breaking layouts — overlapping type, asymmetric, high energy", "Photography: editorial food, not restaurant food — closer to magazine than menu"],
  imageStyle: "High contrast, graphic, night-time energy. The burger as hero object — styled like a fashion shot, not a food shoot. Vancouver House architecture as backdrop. Young crowd, energy, late night. Black and red dominant.",
  layoutApproach: "Bold and graphic. Large type, tight grid, high contrast. The menu is graphic design as much as information design. Night-time dark mode is the default, not the exception."
}, null, 2)

export const MONZO_CSS = `/* MONZO Burger — Brand CSS Package */
:root {
  --monzo-black: #0D0D0D; --monzo-red: #E02020; --monzo-white: #F5F5F2;
  --monzo-yellow: #F5C842; --monzo-chrome: #A8A8A0;
  --monzo-font-display: "Helvetica Neue Condensed", "Impact", sans-serif;
  --monzo-font-body: "Helvetica Neue", "Helvetica", sans-serif;
}
body { background: var(--monzo-black); color: var(--monzo-white); font-family: var(--monzo-font-body); }
h1,.monzo-hero { font-family: var(--monzo-font-display); font-weight: 700; text-transform: uppercase; font-size: clamp(3rem, 8vw, 8rem); letter-spacing: -0.02em; color: var(--monzo-white); line-height: 0.95; }
h2,.monzo-heading { font-family: var(--monzo-font-display); font-weight: 700; text-transform: uppercase; font-size: clamp(1.5rem, 3vw, 2.5rem); letter-spacing: 0.02em; }
.monzo-red { color: var(--monzo-red); }
.monzo-nav { font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--monzo-chrome); }
.monzo-btn { font-family: var(--monzo-font-display); font-weight: 700; font-size: 0.9rem; letter-spacing: 0.1em; text-transform: uppercase; background: var(--monzo-red); color: var(--monzo-white); border: none; padding: 1em 2.5em; cursor: pointer; transition: 0.15s; }
.monzo-btn:hover { background: var(--monzo-white); color: var(--monzo-black); }
.monzo-tag { background: var(--monzo-red); color: var(--monzo-white); font-size: 0.7rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; padding: 0.4em 1em; }
.monzo-footer { background: #111; color: var(--monzo-chrome); border-top: 1px solid #222; }`

// ─── POURHOUSE ───────────────────────────────────────────────

export const POURHOUSE_VOICE = JSON.stringify({
  voiceAttributes: [
    { trait: "Old soul", description: "Pourhouse looks backward deliberately — to pre-Prohibition drinking culture, to century-old buildings, to the craft of the classic cocktail. The voice reflects that historical reverence.", examples: ["Old-fashioned, and proud of it", "The way they drank in 1910", "Nothing new about a well-made cocktail"] },
    { trait: "The building speaks", description: "The 38ft reclaimed Douglas fir bar, the 1910 Leckie Boot Company bones — the physical space is the primary storytelling device. The voice should make you feel the room.", examples: ["Handcrafted from 120-year-old wood", "The bar has heard it all", "This room has a century of stories in it"] },
    { trait: "Elevated comfort", description: "Hearty, mouth-watering food — Scotch Egg, Pourhouse Burger, Wagyu tartare. The food is serious but it's still comfort food. The voice threads that needle.", examples: ["The best Scotch Egg in Vancouver", "Comfort food that earned its reputation", "Come for the cocktail. Stay for the burger."] },
    { trait: "Gastown belonging", description: "Pourhouse is a Gastown institution. That neighbourhood identity — heritage, creative, gritty and beautiful — is in the voice.", examples: ["Gastown's living room", "Part of the neighbourhood since 2010", "Right near the steam clock"] },
    { trait: "Genuine pleasure", description: "The tagline — 'the sublime pleasure of drink, the joy of good food, the comfort of family' — is the voice. Unabashed enjoyment, not performance.", examples: ["Drink well tonight", "Simple pleasures, taken seriously", "This is what a good evening feels like"] }
  ],
  toneGuidelines: {
    do: ["Lead with the physical space — the bar, the building, the Douglas fir — it's what makes Pourhouse singular", "Reference the cocktail heritage with genuine knowledge — this is a serious bar", "Balance sophistication with warmth — Pourhouse is not a snooty cocktail bar", "Sunday jazz is a brand cornerstone — bring it into social and email consistently", "Use heritage language naturally — 'plain and fancy', 'old-fashioned soul'"],
    dont: ["Don't write like a modern cocktail bar — no 'craft' or 'small batch' language", "Avoid tech or startup adjacent language — Pourhouse is rooted in a different era", "Never be precious about the heritage — it should feel lived-in, not curated", "Don't reference the Italian concepts — Pourhouse is its own world entirely", "Avoid food trend language — the menu is classic, not contemporary"]
  },
  vocabularyBank: {
    powerWords: ["heritage", "handcrafted", "reclaimed", "classic", "whiskey", "Gastown", "pleasure", "century", "Douglas fir", "comfort", "jazz", "Sunday"],
    avoidWords: ["craft", "artisanal", "small batch", "curated", "elevated", "innovative", "experience", "concept", "modern", "contemporary"]
  },
  writingSamples: {
    heroHeadline: "A century of good evenings. Gastown.",
    menuDescription: "Scotch Egg — soft-boiled, wrapped in seasoned pork sausage, deep-fried to a golden crisp. The one you've been thinking about since last time.",
    reservationCTA: "Book your table",
    socialPost: "Jazz starts at 7. The bar is stocked. The Douglas fir is ready. Sunday is Pourhouse's best night. See you there.",
    emailSubject: "New cocktail on the menu. You know where to find it.",
    aboutBlurb: "Pourhouse opened in a 1910 building that was built to last, and has. The bar — 38 feet of reclaimed Douglas fir, over a century old — sets the tone for everything else. Cocktails made the old way. Food designed for real hunger. The kind of evening that earns its place in memory."
  },
  summary: "Pourhouse speaks with the unhurried confidence of a Gastown institution that has genuinely earned its reputation. The voice is warm, heritage-rich, and utterly comfortable in its own skin — like the building it occupies."
}, null, 2)

export const POURHOUSE_DESIGN = JSON.stringify({
  colors: [
    { name: "Bourbon", hex: "#2C1810", usage: "Primary dark — deep whiskey brown, aged wood" },
    { name: "Brass", hex: "#C09A50", usage: "Primary accent — bar fixtures, aged metal, classic warmth" },
    { name: "Parchment", hex: "#F2EBD9", usage: "Primary light background — aged paper, old menus" },
    { name: "Slate", hex: "#4A4540", usage: "Secondary dark — chalk menu boards, worn leather" },
    { name: "Cream", hex: "#E8DCC8", usage: "Secondary warm — aged linen, vintage bar towels" }
  ],
  fonts: [
    { role: "display", family: "Freight Display", weight: "700", notes: "Classical editorial serif with gravitas. The weight and authority of a pre-Prohibition bar. All caps or mixed case depending on application." },
    { role: "body", family: "Mercury Text", weight: "400", notes: "Authoritative newspaper serif for body. Reads like a menu from a serious establishment." },
    { role: "accent", family: "Caslon", weight: "400", notes: "Classic American typeface for secondary elements. Historically appropriate and deeply readable." }
  ],
  moodKeywords: ["heritage", "whiskey", "Gastown", "Douglas fir", "old soul"],
  designPrinciples: ["The room is the brief — every design decision should evoke that Douglas fir bar and 1910 building", "Aged and warm — no bright whites, no cold greys, nothing digital-feeling", "Brass and bourbon as the material palette — aged metal, dark wood", "Typography should feel like it was designed before computers", "Photography: the bar itself, cocktails mid-pour, the room before the night begins"],
  imageStyle: "Warm, amber-lit, intimate. The bar at the beginning of an evening — glasses set, bottles in place. Cocktails in heavy crystal. The dining room through candlelight. Documentary — observational, not staged. The building's bones always visible.",
  layoutApproach: "Generous, unhurried, classic. Wide margins and ruled lines. Menu design references early 20th century print. Navigation is minimal and typographic. The menu is the hero document."
}, null, 2)

export const POURHOUSE_CSS = `/* Pourhouse — Brand CSS Package */
:root {
  --ph-bourbon: #2C1810; --ph-brass: #C09A50; --ph-parchment: #F2EBD9;
  --ph-slate: #4A4540; --ph-cream: #E8DCC8;
  --ph-font-display: "Freight Display", "Georgia", serif;
  --ph-font-body: "Mercury Text", "Times New Roman", serif;
  --ph-font-accent: "Caslon", "Palatino", serif;
}
body { background: var(--ph-parchment); color: var(--ph-bourbon); font-family: var(--ph-font-body); line-height: 1.65; }
h1,.ph-hero { font-family: var(--ph-font-display); font-weight: 700; font-size: clamp(2.5rem, 5vw, 5rem); color: var(--ph-bourbon); letter-spacing: 0.01em; }
h2,.ph-heading { font-family: var(--ph-font-display); font-size: clamp(1.3rem, 2.5vw, 2rem); color: var(--ph-bourbon); }
.ph-nav { font-family: var(--ph-font-accent); font-size: 0.85rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ph-slate); }
.ph-btn { font-family: var(--ph-font-accent); letter-spacing: 0.1em; text-transform: uppercase; font-size: 0.8rem; border: 1px solid var(--ph-brass); color: var(--ph-brass); padding: 0.85em 2.2em; background: transparent; cursor: pointer; transition: 0.2s; }
.ph-btn:hover { background: var(--ph-bourbon); color: var(--ph-parchment); border-color: var(--ph-bourbon); }
.ph-accent { color: var(--ph-brass); }
.ph-footer { background: var(--ph-bourbon); color: var(--ph-cream); }
.ph-rule { border: none; height: 1px; background: linear-gradient(to right, transparent, var(--ph-brass), transparent); margin: 2rem 0; }`
