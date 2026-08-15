# shreyas.sh --- Design Direction

## 1. Design thesis

**A quiet personal playground for thinking, writing, and making.**

The site should feel like a well-designed personal notebook rather than
a portfolio, startup site, or content publication.

Three qualities should dominate:

-   **Calm** --- generous whitespace, restrained visual language, low
    cognitive load.
-   **Editorial** --- typography and rhythm do most of the design work;
    essays should feel genuinely pleasurable to read.
-   **Playful** --- small moments of surprise, interactive experiments,
    and games should feel native to the site rather than bolted on.

The design should communicate taste without trying to demonstrate taste.

### The emotional target

When someone lands on the site, the feeling should be:

> "This is unusually thoughtful and easy to spend time in."

Not:

> "This person has made a fancy personal website."

------------------------------------------------------------------------

# 2. What the site is

The site has three equal identities:

### Writing

Essays, notes, observations, and things you're figuring out.

### Making

Experiments, games, interactive toys, prototypes, and side projects.

### Person

A lightweight sense of who Shreyas is, what he is interested in, and
where else to find him.

The site should **not** feel like a chronological blog. It should feel
like an evolving collection of things worth spending time with.

------------------------------------------------------------------------

# 3. Information architecture

Keep the top-level navigation extremely small.

**Header**

-   Shreyas
-   Writing
-   Making
-   About

Optional right-side utility:

-   Search
-   Theme toggle

Avoid a large navigation system.

### Home

The homepage should be a curated introduction, not a dashboard.

Suggested structure:

1.  Short introduction
2.  Featured writing
3.  Featured experiments / games
4.  A small "currently" or "elsewhere" section
5.  Footer

Do not show every piece of content on the homepage.

### Writing

A simple chronological / curated index.

Each item:

-   Title
-   Short description
-   Date
-   Reading time

Consider grouping by year only when the archive becomes large enough to
need it.

### Essay

The essay page is the most important template on the site.

It should feel closer to a beautiful book page than a blog CMS.

### Making

A visual / interactive index of experiments.

Projects can be much more expressive here than elsewhere on the site.

Each project should have:

-   Name
-   One-line description
-   Small visual or interactive preview
-   Date / status
-   Link to play or explore

### About

Keep it short.

A photograph is optional. The page should primarily answer:

-   Who is Shreyas?
-   What does he work on?
-   What does he care about?
-   Where can I find him?

No traditional résumé dump unless there is a strong reason.

------------------------------------------------------------------------

# 4. Visual direction

## Overall aesthetic

**Minimal editorial design + subtle digital character.**

Reference the feeling of:

-   a beautifully typeset independent magazine
-   a personal notebook
-   a thoughtful software product
-   an early-web personal site, but with contemporary restraint

Avoid:

-   startup-land gradients
-   excessive cards
-   glassmorphism
-   giant hero illustrations
-   excessive animations
-   decorative blobs
-   generic "designer portfolio" layouts
-   everything being perfectly centered

The site should have **structure without looking designed-to-death**.

------------------------------------------------------------------------

# 5. Layout

## Desktop

Use a generous page margin.

Suggested max-width:

**1200--1280px**

But don't use that entire width for reading.

### Content widths

General pages:

**720--900px**

Essay text:

**640--700px**

Essay title:

**760--900px**

Interactive experiments:

Can expand to **1000--1200px** where the experience benefits from it.

The key principle:

> The site can be wide. The reading column should not be.

## Grid

Use an underlying 12-column grid for layout decisions, but don't visibly
expose the grid.

Prefer asymmetric compositions occasionally:

-   metadata in a narrow column
-   content in the main column
-   small notes / captions offset to the side

This gives sophistication without adding decoration.

------------------------------------------------------------------------

# 6. Typography

Typography is the primary visual element.

Use **one excellent sans-serif family** for the interface and either:

-   the same family for essays, with careful sizing and spacing, OR
-   a complementary serif for long-form writing.

Do not use more than two typefaces.

### Suggested hierarchy

**Display** - 48--64px desktop - tight line-height - restrained weight

**Page heading** - 36--48px

**Essay title** - 48--64px desktop - 34--42px mobile

**Body** - 18--20px - 1.55--1.7 line-height - comfortable measure

**Small text** - 13--14px - used sparingly

Avoid too many font weights.

A sophisticated site should get most of its hierarchy from:

-   size
-   spacing
-   line length
-   contrast

---not weight, borders, shadows, or color.

### Recommended starting fonts

Test these before committing:

-   Inter
-   Geist
-   IBM Plex Sans
-   Suisse Intl / similar neo-grotesk if licensed
-   Instrument Sans

For an editorial serif:

-   Source Serif 4
-   Newsreader
-   Literata

The final choice should be made by looking at actual essays, not font
specimens.

------------------------------------------------------------------------

# 7. Color

Default to an almost-white warm background rather than pure white.

Example starting palette:

``` css
--bg: #F8F7F4;
--text: #171717;
--muted: #77736D;
--line: #E4E1DB;
--accent: #5B5CE2;
```

But the accent should be used extremely sparingly.

Potentially:

-   links
-   interactive states
-   selected controls
-   tiny moments inside games

Do not build the site around a loud brand color.

### Dark mode

Support dark mode, but don't design two separate visual identities.

Use:

-   warm near-black background
-   soft off-white text
-   muted secondary text
-   restrained accent

Dark mode should feel like the same room at night.

------------------------------------------------------------------------

# 8. Spacing

Spacing is where much of the sophistication should come from.

Use a consistent spacing scale, e.g.:

``` text
4
8
12
16
24
32
48
64
80
96
128
```

Prefer large jumps between sections.

A useful rule:

> If something feels slightly too spacious, it is probably close to
> right.

Especially prioritize whitespace:

-   above page titles
-   between title and metadata
-   between essay paragraphs
-   between major sections
-   around interactive projects

Do not fill empty space simply because it exists.

------------------------------------------------------------------------

# 9. Essay experience

This is the highest-priority interaction on the site.

### Essay header

Example:

``` text
Designing for the world we actually live in

A few thoughts on designing products for messy,
real-world constraints.

Aug 2026 · 12 min read
```

Then a substantial amount of whitespace before the article begins.

### Reading experience

Priorities:

1.  Excellent typography
2.  Comfortable line length
3.  Clear hierarchy
4.  Minimal distractions
5.  Fast page load
6.  Excellent mobile reading

Avoid:

-   sticky social-share bars
-   recommendation widgets
-   newsletter popups
-   ads
-   unnecessary sidebars
-   excessive inline UI

### Article details

Support:

-   pull quotes
-   images
-   captions
-   footnotes
-   code blocks where necessary
-   embedded interactive experiments

But use them editorially.

### Progress

A very subtle reading-progress indicator is acceptable.

It should be almost invisible until useful.

------------------------------------------------------------------------

# 10. Games & interactive experiments

This is where the site gets personality.

The contrast is important:

**Writing should be calm. Making should be playful.**

Games can have:

-   bolder colors
-   unusual layouts
-   animation
-   sound
-   playful typography
-   experimental interactions

But the surrounding chrome should remain minimal.

### Project cards

Avoid generic rectangular cards with shadows.

Instead consider:

``` text
GAME OF LIFE

A tiny experiment in emergent behavior.

[interactive preview]

Play →
```

The preview itself should provide the visual interest.

### Game pages

Give the experiment room.

The UI should get out of the way and let the game occupy the screen.

Include a tiny contextual header/footer so users can easily return to
the rest of the site.

------------------------------------------------------------------------

# 11. Homepage direction

The homepage should feel almost unexpectedly simple.

Possible structure:

``` text
Shreyas

I build things, run companies, write about
what I'm learning, and occasionally make
things that are completely unnecessary.

                ↓

Writing

Designing for...
12 min · Aug 2026

What I learned from...
8 min · Jul 2026

...

                ↓

Making

Game of Life
Brown's Criterion
Other experiments

                ↓

Currently

Building ownpath.
Making things.
Trying to spend more time...

                ↓

Elsewhere

X · LinkedIn · GitHub · Email
```

The copy should be personal and specific, not professional-brand
language.

------------------------------------------------------------------------

# 12. Motion

Motion should be **rare but delightful**.

Use animation to communicate:

-   navigation
-   state changes
-   interaction
-   playfulness

Do not animate everything entering the viewport.

### Good

-   subtle link underline transitions
-   gentle page transitions
-   game interactions
-   tiny hover responses
-   cursor / pointer feedback for experiments

### Avoid

-   scroll-jacking
-   parallax everywhere
-   excessive fade-ins
-   loading animations for content that doesn't need them

The site should feel fast.

------------------------------------------------------------------------

# 13. Micro-interactions

A few memorable details are better than dozens of generic ones.

Potential ideas:

-   Hovering an experiment gives a tiny live preview.
-   Certain words reveal contextual notes.
-   A subtle "shuffle" action surfaces a random essay.
-   A "surprise me" button opens a random game or experiment.
-   The footer contains a tiny unexpected interaction.
-   Keyboard shortcuts for browsing essays.
-   A hidden easter egg somewhere on the site.

The rule:

> Discoverability is more important than explanation.

Don't advertise every fun thing.

------------------------------------------------------------------------

# 14. Responsive behavior

Mobile should not feel like the desktop site squeezed into a phone.

### Mobile priorities

-   20--24px horizontal padding
-   34--42px essay titles
-   17--19px body text
-   generous vertical spacing
-   no unnecessary horizontal UI
-   touch targets at least \~44px
-   games adapt to portrait screens where possible

Navigation can collapse into a simple menu, but avoid a heavy mobile
navigation system.

------------------------------------------------------------------------

# 15. Accessibility

Treat accessibility as part of the visual system.

Requirements:

-   strong text contrast
-   visible keyboard focus
-   semantic HTML
-   proper heading hierarchy
-   reduced-motion support
-   accessible interactive controls
-   alt text for meaningful images
-   games should provide basic instructions / fallback where possible

Do not sacrifice usability for minimalism.

------------------------------------------------------------------------

# 16. Performance

The website should feel almost instant.

Prioritize:

-   static rendering where possible
-   minimal JavaScript on content pages
-   optimized images
-   lazy-loading below-the-fold media
-   system / locally hosted fonts where practical
-   no unnecessary third-party scripts

An essay page should feel closer to loading a document than loading a
web app.

Games can load heavier assets only when the user chooses to play.

------------------------------------------------------------------------

# 17. Content model

Treat content as structured data rather than hardcoded pages.

### Essay

``` ts
{
  title: string
  description: string
  date: Date
  readingTime: number
  tags?: string[]
  featured?: boolean
  content: MDX
}
```

### Experiment

``` ts
{
  title: string
  description: string
  date: Date
  status?: "active" | "archived"
  thumbnail?: string
  url: string
  featured?: boolean
}
```

This makes the site easy to evolve.

------------------------------------------------------------------------

# 18. Existing site → new site

The current site already has the right underlying ingredients: writing,
experiments, and interactive work. It currently presents them primarily
as a simple list. citeturn0view0

Keep that spirit.

Do **not** turn it into a conventional portfolio.

The redesign should preserve the feeling that this is a personal corner
of the internet, while making the typography, hierarchy, reading
experience, and interaction substantially better.

The existing Game of Life and Brown's Criterion pieces are particularly
useful signals: they suggest that "making weird little things" should be
a first-class part of the site's identity, not an afterthought.
citeturn0view0

------------------------------------------------------------------------

# 19. Design principles

If there are disagreements during implementation, use these principles
to decide.

### 01 --- Typography over decoration

If something can be communicated with typography and spacing, don't add
a component.

### 02 --- Content is the interface

The site should make the actual writing and experiments feel valuable.

### 03 --- Quiet by default

The interface should disappear when you're reading.

### 04 --- Playful by surprise

Fun should emerge from interactions rather than visual noise.

### 05 --- Earn complexity

Every component needs a reason to exist.

### 06 --- Space is a feature

Don't optimize away whitespace.

### 07 --- Personal, not personal-brand

This is Shreyas's corner of the internet, not a marketing website for
Shreyas.

### 08 --- Fast feels sophisticated

Performance is part of the aesthetic.

------------------------------------------------------------------------

# 20. Implementation checklist

-   [ ] Establish typography and spacing system first
-   [ ] Build homepage without decorative components
-   [ ] Build essay template before the rest of the site
-   [ ] Test typography using a real long essay
-   [ ] Build responsive behavior from the start
-   [ ] Build Making / experiments template
-   [ ] Add dark mode
-   [ ] Add subtle motion
-   [ ] Add search only when the archive warrants it
-   [ ] Add easter eggs after the core experience is excellent
-   [ ] Test keyboard navigation
-   [ ] Test mobile reading experience
-   [ ] Test page speed
-   [ ] Remove anything that feels like generic portfolio UI

------------------------------------------------------------------------

# 21. The one-line brief

**Design shreyas.sh like a quiet, beautifully typeset personal notebook
that happens to contain essays, software experiments, and games.**
