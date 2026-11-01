---
type: system
cssclasses: [second-brain]
---
# Editorial design

> [!abstract] Understand at a glance; go deeper on purpose
> Clear hierarchy, colour with a function, room for maths and figures where they are needed. Every box has a job; colour is never the only signal.

**Required reading:** every editor that creates or modifies topics, concepts, labs or implementations reads this document before writing. The auditor checks the result, not just that the reading was declared. See [[_system/Visual sample|Visual sample]] and the [[_templates/template_base|topic template]]. The active style lives in `.obsidian/snippets/second-brain.css`; if it is not loaded, check `.obsidian/appearance.json` and the real Obsidian view.

Visual composition is combined with [[_system/Placing knowledge|Placing knowledge]]: a concept card must not be a second topic, and a PyTorch card must not turn into the story of one exercise. First decide the note's function, then give it its visual rhythm.

## Note format

The standard for every new or rewritten topic, in any subject. Template: [[_templates/template_base|topic template]]. Minimal sample: [[_system/Visual sample|Visual sample]].

If a subject folder holds its own `_style.md`, its variations on this format take priority for that subject's notes (for example: proofs in concepts, short notation, no mandatory variable tables). The rules it does not touch (concept links at first mention, LaTeX, final exercises with statements and solutions when authorised) stay the same.

| Element | How it is done |
| --- | --- |
| Frontmatter | The [[_system/Note contract|note contract]] fields plus `title` («Title - Topic N»), `subject` and `topic` (number). |
| Navigation | First line after the frontmatter, no blank line: `[[…/_MOC\|MOC - Subject]] \| [[previous topic]] \| [[next topic]]`. |
| Title | `# Title - Topic N`. |
| Opening | One or two sentences or short paragraphs as needed: what came before (linked), what this topic adds and what it is for. No header `[!abstract]`, no «central question», no learning objectives. |
| Comparison | A table only if it really allows comparing and is shorter than two sentences or a list. No routine tables of symbols, axioms or two-line cases. |
| Hierarchy | `##` per block of the syllabus; `###` per concept or method. Inside each `###`: definition → mechanism (numbered steps if it is a sequence) → formula with a reading of its symbols → example or figure → limit. |
| Figures | Always inside `> [!example] Example: <what it shows>`: the image `![[…png\|450–700]]`, an empty `>` line and a caption of your own that says what to look at and what it shows, ending in `[[…pdf#page=N\|p. N]]` with the **physical** page. One figure per crop, never the whole page by default (see Figures that teach). |
| Numerical examples | `[!example] Example: …` with data, the calculation in LaTeX and an interpreted result. Verify the numbers with code before writing them. If it is your own and could be mistaken for the source, say so. |
| Limits | `[!warning]` with a title that names the limit or the error, only when it changes the interpretation. |
| Going deeper | Folded `[!note]-` with a specific title: a conceptual nuance, an edge case, a numerical check. The essential step is never hidden. |
| Lecture (recorded) | Integrate only the useful delta, briefly in existing prose or resources; a callout only for a function, not for a contribution. Provenance and anchors go in the session card, with no parallel block and no invented date. Exam announcements: explicit specific content in the topic; logistics and conditions in the subject profile and session card, with visible uncertainty. |
| Concepts | A link `[[Concepts/Name\|text]]` at the first useful mention in the note, not every time. **No embedded `[!concept]-` capsules**. Open the target to check that it adds a transferable mechanism or real contrast, not a copy of the local explanation. Sync the `concepts` frontmatter. |
| Exercises | A final `## Exercises` section: a sentence saying where they come from and whether the source has solutions; one `> [!exercise] Exercise N: title` per statement, complete; checks or verified solutions in `[!note]- Check for exercise N`. |
| No longer used | «At a glance», «Central question», «Test yourself», a final «Summary», link inventories, loose figures outside a callout, screenshots of full pages, page citations after every paragraph. |
| Language | One language per vault. A foreign technical term in italics the first time (*stride*, *pooling*), then used naturally. |

Depth is measured by the core needed to understand and apply the syllabus. See **Fidelity and compaction**: terse sources are clarified when needed, and repetition or side material is removed when asked to shorten.

## Visual identity

The vault palette is **teal + violet + coral + amber**, with tinted surfaces that read in light and dark mode. Do not solve the design with grey boxes, grey headings or a uniform column of text. The CSS provides colours and spacing; the note must provide the composition. No HTML, hand-inserted colours, repeated emojis or empty tables for decoration.

| Element | Expected treatment |
| --- | --- |
| Title and sections | Title with a visual accent; level-2 headings as clear, short milestones. Each section answers a question of the topic. |
| Opening | One or two sentences or short paragraphs that connect to what came before and say what the topic adds. Topics do not open with `[!abstract]`; concepts can have a short summary. |
| Mechanism | Short prose and a readable sequence; a diagram when relations or flow are hard to picture. |
| Formula | A separate block, with symbols and an intuitive reading nearby; colour or a box does not replace explanation. |
| Comparison | A compact table with a common criterion, limits of comparability and a useful conclusion. |
| Example and figure | `[!example] Example: …` right after the mechanism it clarifies: data, steps and interpreted result, or a cropped figure with its own caption and a link to its page. |
| Concept | A link `[[Concepts/…]]` at the first useful mention. No embedded `[!concept]-` capsules in new notes. |
| Warning | `[!warning]` for a real failure or a limit that changes interpretation; not for generic caution. |

**Reading rhythm:** alternate explanation, visual resource and application. After two explanatory paragraphs in a row, decide whether the reader needs an airy equation, an example, a figure, a table or a synthesis; choose by function, not by quota. Split paragraphs that mix several ideas. Avoid three closed boxes in a row, stacked concept blocks and sections longer than a screen without a useful visual pause. Keep the necessary idea visible; folds hold extra detail.

**Composition gate, after drafting:** reread each section ignoring colour. Identify what job each piece of data does and **change representation** when prose makes it hard to scan. Shortening sentences or adding a coloured title is not enough. If the page is still a column of paragraphs once you cover the titles, the design is not finished. CSS alone does not turn a wall of text into a visual note.

| Content in the section | Preferred form and usefulness test |
|---|---|
| Three or more results on the same metric, or several metrics for the same systems | **Results table**: comparable rows, columns for task/dataset, system, metric and value. Separate non-comparable metrics; one sentence interprets the pattern. |
| Sequence, pipeline or conditional decision | **Short numbered list** or a diagram with input → transformation → output; explain in prose why the decisive step matters. |
| Before/after, two versions, right/wrong | **Contrast table** or two labelled cases, with a common criterion and a conclusion below. |
| Definition or claim with hypotheses, limit and consequence | A short visible statement; conditions in a compact list if independent; `[!warning]` only for the limit that changes interpretation. |
| Experiment with setup, result and interpretation | Setup in one line, **table or figure for numbers**, a 1–2 sentence reading of the result; methodological limits separate. |
| Causal mechanism that needs continuous explanation | Short connected prose; do not force a table where it would break the reasoning. Example or sketch only if it clarifies a step. |

**Selection rule:** first classify the content, then choose the shortest format that makes it understandable. Tables and callouts are optional; do not use them for a sentence or a definition that fits in a list. A table without a comparison axis, a list that fragments a causal explanation or a box that only repeats the paragraph makes reading worse. Keep exact figures, units, denominators, conditions and caveats when transforming prose; do not turn results from different datasets into a global ranking.

**Fidelity and compaction:** keep the core of the scope: statements, hypotheses, results, essential steps of proofs and teaching exercises. Compactness is part of quality: explain an idea once, define notation where it is used and group direct algebra with `aligned`. Do not repeat a statement as both setup and conclusion, and do not add a variable table to every formula.

If the user asks to shorten, side development, redundant self-made examples and reminders already available in concepts can go. Record the cuts and their reasons. The core must be studyable without jumping between notes. A required proof is developed in the concept and keeps the route, order, symbols, substitutions, cases and construction of the teaching original; shortening prose does not allow skipping proof steps. Apply «Proofs: mandatory destination and fidelity» below. Cutting side material never authorises deleting hypotheses, assessable exercises or central results.

**Explanatory diagrams:** consider a visual for every hard mechanism, not just geometric objects. A drawing must show what changes, why and with what consequence: labelled states, steps or cases, a connection to nearby symbols and one sentence of reading. It can replace redundant prose; it should not sit next to an identical explanation. No image quota.

**Example of transforming dense evidence.** If an experiment reports two RAG variants on two datasets, another generation result and an index-swap test, do not leave five paragraphs of numbers under a flashy heading. Put the QA results in a table with columns `dataset / variant / EM`; generation in a second table because BLEU and ROUGE are not EM; the index swap in a small matrix `index / evaluated cohort / accuracy`. Next to those views, develop the **whole** reading of the result: which comparison is valid, why one with *gold* evidence is not symmetrical, what the index swap shows and what the metrics do not show about permissions, latency and operations. The operational conclusion stays visible. Secondary methodological detail can fold, kept whole and with a title saying what it holds; never hide the conclusion needed to read the numbers.

**Last pass per section:** can you find the claim, the data that supports it and its limit in seconds? If finding a number or a contrast means reading four full paragraphs, recompose. A paragraph of about six lines at normal width, or three prose paragraphs in a row, are signals to review; they are not blind quotas or a licence to drop content.

The first screen must contain recognisable academic content: navigation line (MOC | previous | next), title, prose opening and first block. No objectives, process metadata or summaries before starting.

## Three reading layers

| Layer | Content | Presentation |
|---|---|---|
| Orientation | Problem and first intuition; prerequisites explained where needed | Straight into the content |
| Core | Definition, intuition, equation with conditions, essential figure and example | Always visible |
| Going deeper | Derivation, edge case or technical detail | `[!note]- Going deeper — specific title` |

Do not hide steps needed to solve the central problem. A required proof lives in the canonical concept, with a precise link from the topic. Avoid turning the note into a collection of closed boxes.

No «what you will learn», objectives, traceability, maintenance or comparisons between lecturers in topics or concepts. Detailed evidence and audit go in cards and logs; in the body, only a direct link to the slide where it adds something. Integrate connections into the explanation, with mechanism and limits, without mandatory link catalogues.

## Visual vocabulary

| Native callout | Consistent use |
|---|---|
| `abstract` | 2–4 line summary in concepts and system notes; topics do not open with it |
| `tip` | An idea to keep |
| `info` | A short intuition that is not an example |
| `note` | Formula and notation; with `-`, going deeper |
| `concept` | Legacy. Not used in new notes; when migrating a note, replace it with a link at the first mention |
| `example` | A figure (image + own caption + page link) or a worked example: data, steps, conclusion |
| `exercise` | Statement of an exercise in the final `## Exercises` section; its check goes in a folded `note-` |
| `question` | A standalone comprehension question inside a section; syllabus exercises use `exercise` |
| `warning` | A concrete error, limitation or discrepancy |
| `quote` | A useful, verified literal quote, never an evidence card by routine |

At most two nested levels. Alternate short prose, figures and boxes without wrapping every paragraph. Orientation paragraphs of 2–4 sentences, split by idea.

## Maths with room to breathe

Academic Markdown uses only `$...$` and `$$` blocks on their own lines. The `\(...\)` and `\[...\]` delimiters can end up as literal text after Markdown processing; do not use them. Every wikilink with a path uses a readable alias; the path stays as an internal target. Avoid maths in link aliases and in callout or navigation headers: the label is text and the formula is written outside. Reference: [Obsidian maths syntax](https://obsidian.md/help/advanced-syntax).

For content, apply [[_system/roles/Mathematics|Mathematics]]: intuition and a precise statement, a reading of the terms, an example and a justified proof where appropriate. The strategy and detailed steps of a proof are presented in the concept, following the teaching original.

- `$x$` for symbols in a sentence, with no spaces after opening or before closing the delimiter; central equations with `$$` on their own lines and blank lines before and after.
- Inside a callout, **every** line has `>`, including empty lines and delimiters.
- `aligned` for several steps. Explain symbols, dimensions, units, assumptions and intuition.
- No equations in code blocks or titles. Avoid tables with wide formulas.
- If a formula is wide, split steps with `aligned` or conditions with `gathered` before shrinking the font. In tables, use `\mid` instead of vertical bars that could split cells.
- Cite paths with spaces through wikilinks; quote YAML values that contain colons or links. No HTML for folds: native callouts keep the behaviour in Obsidian.
- Check signs, indices, normalisation and edge cases against the source as well as checking that it renders.

## Figures that teach

**If the source lacks a useful figure**, apply [[_system/skills/didactic-figures/SKILL|Didactic figures]]: create a simple diagram of your own when it makes the geometry, relations or process understandable. Put it in an `[!example]` with an interpretive caption and the label «Own diagram»; record its real provenance in JSON. The page link supports the formulation; it does not attribute the drawing to the lecturer. A created resource needs no source page or crop bbox. The crop rules below apply to extracted figures.

Crop the full chart with axes, legend and labels. If it loses context, widen the bbox or add a second context crop; the full page is exceptional and justified only when the figure really takes the whole page. Inspect page and crop: extracting only embedded images can lose vector diagrams.

**One figure per crop.** Each figure is cropped separately with [[_system/Tools#Cropping figures by their caption|figuras.py]] (it detects «Figure N.M» captions and crops image + attached vector strokes). Path and name: `_assets/<Subject>/figures-<short-source>/topic-N-figure-N.M-description.png` (slides without a numbered caption: `topic-N-pNNN-figK-description.png`), with a side JSON holding physical page, bbox, dpi, pixels, caption and SHA-256 of the original. It goes inside an `[!example]` (see Note format) with a width of 450–700 depending on density, followed by a caption that interprets rather than translates the original. Check the contact sheet **and open the final PNG next to the page** before linking: a crop that is cut, tiny or carrying surrounding text gets redone.

Do not upscale blurry screenshots: render at higher resolution. Never present a generated image as extracted from a lecture. A very dense figure also needs a detail crop or a zoomable page, not microscopic text squeezed to fit on mobile.

**Slides with institutional branding: the logo is not background, it is one more object.** In many university PDFs the logo, coloured footer band, footer URL and watermark are real image or vector objects inside the page, with coordinates like any chart or pseudocode. Automatic proximity grouping (`figuras.py --sin-pies`) merges every image object on a page without telling branding from content, so it can fuse the logo with the real figure and produce a crop with visible branding, foreign text cut mid-word, or content cropped to «make room» for the brand. This is systematic: the higher the real figure starts on the page, the more likely the bbox invades the header logo; the lower it ends, the more likely it invades the footer.

**Rule:** every crop that comes out of `--sin-pies` (or any automatic proximity grouping) is opened and compared visually with the full slide before linking. If branding, footer or watermark enter the bbox, or if the automatic crop cuts real content to avoid them, replace it with a manual bbox (`sc.ps1 figura --recorte 'x0,y0,x1,y1'`), adjusted with a reference grid (10% overlay with coordinates) on a page render at enough resolution.

Checklist when cropping from a branded slide:

- **Must never appear:** the institution's logo, the coloured band, the footer URL, the watermark when legible or opaque over content, and body text unrelated to the figure (another bullet, another example on the same page).
- **Must never be cut:** axis labels, legends, units, formula subscripts or superscripts, pseudocode box borders (title and last line included), diagram edges and labels, or the number and text of a numbered caption if included.
- A translucent watermark in an empty corner, not overlapping legible content, is an acceptable minor flaw if avoiding it means sacrificing real content; an opaque logo or colour band is not.
- Also check that the **content** of the crop matches what the caption describes: automatic grouping and caption↔image matching can shift by one figure or one page, especially when several figures in a row share a naming pattern or the same topic mixes slides from two sources. Compare cited page, visible content and caption before linking.

## Deciding depth

1. Needed to understand the next block or solve exercises: **full core**.
2. A derivation, nuance or useful bridge that interrupts the first read: **fold**.
3. Reusable across topics: **canonical concept**, with brief context in each topic.
4. Repetition or extension with no use for the scope: **recorded exclusion**. Exam announcements, materials, conditions and dates are kept in the profile and session card with anchor and uncertainty, without theory; an explicit announcement of specific content goes in the topic.

A terse slide may need a long explanation; ten repeated ones can be condensed. Word count does not measure coverage.

The canonical concept is linked at the first useful mention in the topic; it is not embedded. The explanation the reader needs to follow the topic lives in the topic itself: the concept extends and connects subjects, it does not replace.

The operational threshold is in [[_system/roles/Write|Sufficiency before delivering]]: problem, mechanism, conditions, application and limits for central concepts. «Short» describes each paragraph; it does not license a shallow explanation. A folded derivation must contain real steps and an interpreted conclusion.

## Visual review

Check reading view and Live Preview, light and dark mode and narrow width: long equations, figure labels, folds and code. For export, also check PDF and expand content where needed.

Before delivering, open **the start, a dense stretch and the end** of each modified note. In each stretch check:

1. Can you tell title, hierarchy, main idea, example and warning apart without reading everything?
2. Does the teal/violet/coral/amber palette show on surfaces and headings, also in dark mode, with no low-contrast text?
3. Are there long paragraphs, a stack of callouts, a wide table or a block of concepts pushed to the end? Reorganise before accepting.
4. Do formula, figure, table and code read at narrow width, with an immediate explanation?
5. Is every figure inside an `[!example]`, cropped (not the full page), with a caption that explains what to look at and a link to its physical page?

A structural check does not prove visual quality. If only an auxiliary view is available, note that Obsidian is pending and keep `in_review`; do not call an HTML screenshot «validated».

CSS in `.obsidian/snippets/second-brain.css`, scoped to `cssclasses: [second-brain]`. Official references: [callouts](https://obsidian.md/help/callouts), [snippets](https://obsidian.md/help/snippets), [embeds](https://obsidian.md/help/embeds).

## Proofs: mandatory destination and fidelity

Apply [[_system/Ontology and proofs|Ontology and proofs]]: distinguish candidate, concept unit, result, route and appearance. A complete general proof has one owner per result and route, in a precise section of a coherent concept; do not put everything in the card of the nearest prerequisite or create one file per proof. The topic keeps meaning, hypotheses, intuition and enough application steps to study from.

Checks and exercise solutions are classified by their argument, not by their callout. Keep solutions the user explicitly asked for; record exceptions and decide the owner without losing depth. When consolidating, keep every step and delta of the most developed version before retiring a copy.

The lecturer's route keeps its original source and page, order, notation, cases and construction. Compare it visually and record the step → destination mapping; do not replace it with an equivalent one. Authorised alternatives are identified separately. An independent auditor checks identity, source, before/after and dependencies; with no native view available, the note stays `in_review`.
