# shreyas.sh — Design Direction

## 1. Design thesis

**A quiet personal playground for thinking, writing, and making.**

The site should feel like a well-designed personal notebook rather than a
portfolio, startup site, or content publication.

Three qualities should dominate:

- **Calm** — generous whitespace, restrained visual language, low cognitive
  load.
- **Editorial** — typography and rhythm do most of the design work; essays
  should be genuinely pleasurable to read.
- **Playful** — small moments of surprise, interactive experiments, and games
  should feel native to the site rather than bolted on.

The design should communicate taste without trying to demonstrate taste. The
feeling should be: “This is unusually thoughtful and easy to spend time in,”
not “This person has made a fancy personal website.”

## 2. What the site is

The site has three equal identities:

- **Writing** — essays, notes, observations, and things being figured out.
- **Making** — experiments, games, interactive toys, prototypes, and side
  projects.
- **Person** — a light sense of who Shreyas is, what he is interested in, and
  where else to find him.

It is an evolving collection of things worth spending time with, not a
chronological blog or a conventional portfolio.

------------------------------------------------------------------------

## 3. Current information architecture

The public navigation is intentionally small: site name, **Home**, **Work**,
and a theme toggle. Do not add navigation items merely to expose archives;
Writing, Making, and Podcasts are reached through the homepage and their
durable URLs.

- **Home**: personal introduction, curated Writing, Making, and Podcasts.
  It is not a dashboard and has no currently/elsewhere module.
- **Writing**: `/blog/`; a simple chronological archive. The homepage shows
  selected essays with a date above the title and a short description.
- **Making**: selected experiments on the homepage and the `/demos/` index.
- **Work**: the lightweight about page; text-led, not a résumé landing page.
- **Podcasts**: `/podcasts/` plus one dedicated page per episode.

Avoid portfolio cards, carousels, thumbnail walls, and a larger top-level
navigation system.

------------------------------------------------------------------------

## 4. Centered layout and spacing

### Site grid

The desktop site is one centered column system. Header, main, and footer share
the same expression:

```css
width: min(calc(100% - var(--gutter) - var(--gutter)), var(--page-max));
margin-inline: auto;
```

Current tokens:

```css
--page-max: 62rem;       /* 992px: active site grid */
--content-max: 46rem;    /* 736px: ordinary content/index column */
--reading-max: 42rem;    /* 672px: essay and episode reading measure */
--gutter: clamp(1.25rem, 4vw, 3rem);
```

At a 1280px viewport, the active 62rem grid has equal 144px margins. Do not
return to a wide shell with narrower, left-biased children. The prior 78rem
value remains only as `--page-max-current`; the active test assignment is
`--page-max-narrow-test: 62rem`.

General index content is centered at `--content-max`. Essay copy and podcast
body/media use the centered `--reading-max` measure. The overall grid and the
reading column intentionally serve different jobs.

### Spacing scale

```css
--space-1: .25rem;  --space-2: .5rem;   --space-3: .75rem;
--space-4: 1rem;    --space-5: 1.5rem;  --space-6: 2rem;
--space-7: 3rem;    --space-8: 4rem;    --space-9: 5rem;
--space-10: 6rem;   --space-11: 8rem;
```

Use these values rather than one-off margins. Preserve generous space between
major sections; do not fill it with decoration.

### Header and footer

The header is a baseline-aligned flex row: name first, then the small
navigation and theme control. It never spans wider than the page below it.
The footer uses the same grid, one subtle top separator, name left, and
elsewhere links right; it stacks on small screens.

------------------------------------------------------------------------

## 5. Typography

Typography, proportion, and whitespace establish hierarchy. Never compensate
with cards, shadows, or heavier weights.

### Typeface and weights

**Fira Sans is the approved primary typeface.** Use the local font files and
only these interface weights:

- **400 Regular** — body, navigation, footer, and supporting text.
- **500 Medium** — display headings, item titles, metadata emphasis, and
  important controls.
- **600 SemiBold** — sparingly, only where a stronger heading or label needs
  it.

Do not use 700/800 on redesigned pages. The local Fira Sans files are
`FiraSans-Regular.ttf`, `FiraSans-Medium.ttf`, and `FiraSans-SemiBold.ttf`,
with `font-display: swap`.

Implementation note: the homepage currently carries the local Fira Sans trial
class, while the shared `--font-sans` stack still names FiraGo. This mismatch
must be resolved before the Fira Sans decision is fully propagated; do not add
a third type family as a workaround.

### Implemented scale and rhythm

```css
body:  clamp(1.0625rem, 1.6vw, 1.1875rem); /* 17–19px */
body leading: 1.68;
h1:    clamp(2.25rem, 5vw, 3.75rem);       /* 36–60px */
h2:    clamp(1.5rem, 3vw, 2rem);           /* 24–32px */
h3:    clamp(1.25rem, 2.3vw, 1.5rem);      /* 20–24px */
```

Default headings use `1.15` line-height and `-0.035em` tracking. Homepage
display type is `clamp(2.75rem, 5vw, 4.25rem)`, weight 500, `0.98`
line-height, and `-0.055em` tracking. Homepage section headings are
`clamp(1.75rem, 3.4vw, 2.5rem)`, weight 500.

Body text is open and readable. Metadata is 0.75rem, uppercase, weight 500,
and `0.08em` tracking. Navigation and footer text are 0.875rem and
understated. Use size, position, measure, spacing, and contrast before weight.

------------------------------------------------------------------------

## 6. Color and themes

Light mode is a daytime reading environment: warm paper, dark-brown ink, and
faded-ink supporting text—not generic off-white UI chrome. Dark mode is the
same room at night, not a second visual identity.

```css
/* light */
--color-bg: #f4eedf;
--color-surface: #eee5d4;
--color-text: #29251f;
--color-text-muted: #706758;
--color-border: #d9cfbd;
--color-link: #654b35;
--color-focus: #654b35;
--color-selection: #dccba8;
--color-game-board: #1c1c1a;
--color-game-grid: #302f2b;

/* html[data-theme="dark"] */
--color-bg: #191917;
--color-surface: #23221f;
--color-text: #efede8;
--color-text-muted: #b4b0a8;
--color-border: #3a3833;
--color-link: #b7b9ff;
--color-focus: #c9caff;
--color-selection: #414360;
--color-game-board: #151514;
--color-game-grid: #242421;
```

Components consume semantic tokens; do not hardcode light/dark colors in page
components. Links use restrained underlines, borders are sparse and
low-contrast, and selection uses the matching token.

### Theme behavior

An inline head script sets `html[data-theme]` before the stylesheet paints:

1. `localStorage["shreyas-theme"]` wins when it contains `light` or `dark`.
2. Otherwise, visitor-local time chooses light from 07:00–18:59 and dark from
   19:00–06:59.
3. `data-theme-source` records `manual` or `auto`.

The small sun/moon button is keyboard accessible, updates its accessible label,
and persists the manual choice. There is deliberately no visible Auto control;
clearing `shreyas-theme` restores time-based behavior. Do not add a theme
library or duplicated light/dark stylesheets.

------------------------------------------------------------------------

## 7. Content presentation

### Homepage

The homepage is a short, human entrance to the notebook:

1. Eyebrow, greeting, and personal introductory paragraph.
2. **Writing**: selected essays with date, title, and short description.
3. **Making**: three plain text-led experiment entries in a three-column
   desktop grid; no cards or thumbnail wall.
4. **Podcasts**: selected text-only episodes with show, role, optional date,
   and an internal page link.

No YouTube or Spotify iframe may load on the homepage. Do not restore the
currently/elsewhere section that was intentionally removed.

### Writing and essays

The Writing archive is concise and chronological. Essays are the highest
priority reading experience: no sidebars, share widgets, newsletter prompts,
ads, reading-progress indicator, or other distracting chrome. Use the
centered 672px measure, warm paper/ink palette, `1.68` body leading, modest
paragraph separation (`--space-5`), quiet blockquotes, and simple code blocks.

The current template keeps article heading and body in the same reading
column. Do not make the body wider; a future title treatment may use more of
the site grid only if it stays visibly related to the centered reading column.

### Making and experiments

The surrounding interface is restrained, but an experiment may be strange,
playful, unfinished, or visually unconventional. Avoid conventional portfolio
cards. Provide a small contextual header, clear controls, and enough room to
play. Preserve working legacy behavior before attempting modernization.

### Podcasts

Episodes are collection documents with `title`, `show`, `role`, optional
`date`, `platform`, `external_url`, `embed_id`, description/content, and
`featured` fields. Their pages use shared metadata, short context, a lazy
privacy-enhanced YouTube iframe or Spotify embed, and an external
watch/listen link.

The podcast title/header may use the full 62rem site grid so long titles fit in
two lines. Description, player, and source retain a 42rem reading measure, but
their left edge aligns with the title/header. Keep embeds off the homepage.

### Work

Work is the about page: personal, text-led, and left-aligned inside a centered
46rem content column. Do not turn it into a corporate bio or résumé dump.

------------------------------------------------------------------------

## 8. Responsive behavior, motion, and accessibility

Mobile keeps the same grid formula, producing fluid 20–48px gutters without a
separate mobile shell. At `38rem` (608px) and below:

- header top/bottom spacing becomes `--space-4`;
- main top/bottom spacing becomes `--space-7` / `--space-8`;
- footer content stacks;
- homepage section spacing and list gaps reduce modestly;
- Making changes from three columns to one;
- the theme button remains a 2.75rem / 44px touch target.

Individual games may use narrower breakpoints for controls or boards, but may
not cause page-level horizontal scrolling.

Motion is rare. The system has small hover/focus responses and game state
changes; it has no page transitions, entrance animation, or navigation loading
indicator. Do not add one without a behavior that needs feedback.
`prefers-reduced-motion: reduce` removes animation and smooth scrolling.

Accessibility is part of the visual system: semantic headings and landmarks,
visible `:focus-visible` outlines, real buttons, labelled theme switching,
`aria-live` status for game results, meaningful alt text, sufficient contrast,
and keyboard-operable interactions are required.

------------------------------------------------------------------------

## 9. Performance and page-specific JavaScript

The baseline is static HTML and CSS. Home, Writing, essays, Work, podcast
index, and podcast chrome load no framework, jQuery, Bootstrap JS, Vue, or
Angular. The only shared JavaScript is the small inline theme initialization
and control behavior.

Declare an experiment’s scripts in front matter so the default layout emits
them with `defer`. Keep dependencies isolated:

- Bizarre News: Vue 2 plus its page script.
- Brown’s Criterion: jQuery, Handlebars, and local page scripts.
- Game of Life: AngularJS 1.2 and its page script.
- WorldView: local OpenLayers scripts.

Do not bundle legacy libraries globally or rewrite a demo just to modernize its
framework. Lazy-load media embeds, locally host fonts where available, and
avoid render-blocking third-party additions.

------------------------------------------------------------------------

## 10. Metadata and URL conventions

Every indexable page uses shared metadata. Titles are `Page title · Shreyas
Satish`, except the homepage (`Shreyas Satish`). Use a real summary or useful
excerpt where available; never keyword-stuff. Canonical, Open Graph, and
Twitter metadata use `https://shreyas.sh`.

Keep public URLs stable. Indexable content belongs in `sitemap.xml`;
`robots.txt` permits normal crawling and points to it. Redirect-only legacy
pages are intentionally excluded and use `noindex,follow`.

When adding content, make sure its title, summary or useful excerpt, canonical
URL, and social metadata are supplied by the shared layout. Do not add
analytics or SEO scripts merely for metadata.

------------------------------------------------------------------------

## 11. Adding content without breaking the visual language

### Essay

Add a post with a durable permalink, title, date, category, and concise
`summary`. Use semantic Markdown and the shared layout. Keep ordinary writing
inside the centered reading column; do not add bespoke shells, sidebars, or a
page-specific framework.

### Experiment

Preserve shared header/footer and semantic tokens, then let the playable area
have its own personality. Put all dependencies in that page’s front matter or
standalone document. Defer noncritical scripts and provide clear instructions
with focus-aware controls.

### Podcast episode

Create a document in `_podcasts/` with the listed fields. The homepage links
only to the internal episode page; the episode owns its lazy embed and external
platform link. Keep the page typographic and spacious rather than
media-platform-like.

------------------------------------------------------------------------

## 12. Design principles

1. **Typography over decoration.** Use type, measure, and whitespace first.
2. **Content is the interface.** Let writing and experiments carry the site.
3. **Quiet by default; playful by exception.** Chrome recedes; games may be
   weird.
4. **Centered system, comfortable measure.** The 62rem site grid and 42rem
   reading column serve different jobs.
5. **Earn complexity.** No generic cards, gradients, glass, oversized heroes,
   excessive borders, or startup-landing-page aesthetics.
6. **Fast feels sophisticated.** Static pages first; JavaScript only when a
   behavior requires it.

------------------------------------------------------------------------

## 13. The one-line brief

**Design shreyas.sh like a quiet, warmly typeset personal notebook that happens
to contain essays, software experiments, games, and conversations.**
