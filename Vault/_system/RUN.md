---
type: system
cssclasses: [second-brain]
---
# Run the second brain

## The user's prompt

«Process [subject] in [offline/online/labs] mode following `Vault/_system/RUN.md`. Keep the selected model and effort. Integrate only what is new or pending, with enough depth, checked connections and an independent auditor.»

To grow the vault from a chat: «Integrate what we learned in this conversation following `Vault/_system/RUN.md` and `Vault/_system/roles/Conversations.md`. Classify each contribution as topic, concept, API, pattern or lab; verify before writing, reuse existing notes and audit links and duplicates.»

Keep whatever model and effort the user chose in their app; do not force a higher setting or switch provider. Subagents use the same model and effort when possible, with a fresh context and no history; never invent identifiers from another provider. If the model cannot be chosen, record the real configuration. A prompt does not change the main model. Do not escalate automatically: a localised problem needs evidence or review, not a full rerun with a bigger model.

## Starting with no prior context

The root is the folder that holds `AGENTS.md`, `MAP.md`, `Vault/` and `Code/`. If the task opened somewhere else, find the folder the user gave you; never search their whole disk. The coordinator reads `MAP.md`, its module, and `Subjects/<name>/_MOC.md` and `_profile.md` inside the vault. Look only for logs of that subject. Notes from other subjects are read only for a concrete connection.

Tools: [[_system/Tools|Tools]]. Run `doctor` once per environment and reuse a valid result. Offline covers the originals in scope and reconciles what is already done without regenerating it. Online covers the transcripts named, or new and pending ones, and does not reprocess every PDF. Offline means documentary material, not a ban on looking things up. If transcripts are missing, never reconstruct imaginary lectures.

**Mandatory visual gate:** before creating or changing any topic, concept, lab or implementation note, the editor reads **all of** [[_system/Editorial design|Editorial design]] and the matching template. It is not an optional manual and is not skipped to save tokens. When closing each note, the editor does that document's **composition pass**: choose the shortest representation that still lets the reader follow each idea; tables only for useful comparisons, notation inside sentences, diagrams that explain the hard step without repeating it in prose. The auditor reviews that transformation, not just headings, CSS or paragraph length. Then check the view in light mode, dark mode and narrow width. The `second-brain` CSS must be active. If the native view is not available, keep `in_review` and say what remains to check.

**Note format:** every new or rewritten topic follows [[_system/Editorial design#Note format|Editorial design § Note format]] and the [[_templates/template_base|topic template]]. Older notes keep their format until they are migrated.

**Own teaching figures, across the vault:** while writing or reviewing, ask whether geometry, relations or a process need visual support. When a figure would help, load and apply the [[_system/skills/didactic-figures/SKILL|didactic figures skill]] and draw a simple, verified diagram labelled as your own. This applies to every provider and model and does not require switching models. Own images are not crops of course material and do not replace proofs. Consider processes and transformations too, showing what changes and why. The figure replaces redundant description; it does not lengthen the topic for decoration.

**Place before writing:** read [[_system/Placing knowledge|Placing knowledge]] when creating or moving information. Separate teaching topic, transferable concept, API, pattern and local code; check identity by searching titles, aliases and similarity before opening a new card. A link that resolves can still be wrong in meaning. Growing the vault from chats: [[_system/roles/Conversations|Conversations]].

**Kev is optional and selective:** [[_system/Kev routing|Kev profiles]] only propose decisions on short fragments when a classification is still ambiguous or a review queue needs ordering. Batch independent questions into one request; do not call it for every page when the destination is already known. Without a local server the full architecture still works. Never turn its probabilities into an automatic close, exclusion, merge or link without your own evaluation.

## Shared rules · always

**Exams:** uploading an exam, a midterm or its solutions does not generate notes or solved labs by default. Keep it in Raw as reference and, if it helps navigation, link the original from the index. Record its classification in the inventory or batch and leave it out of generation and academic closing. Do not extract it page by page or build long cards out of routine. Analyse, solve or turn it into material only when the user asks explicitly. An exercise inside teaching slides keeps its normal treatment. Never delete existing exam material.

1. Raw and the user's code stay untouched. Reuse processed notes, sources and figures by hash; do not duplicate sessions.
2. One note per teaching unit. A central concept must let the reader explain what problem it solves, how it works, when it applies and how to use it on an example; a definition plus a formula is not enough. Essential steps are visible where they belong; proofs live in concepts, nuances fold away. Keep the necessary justifications without repeating statements, glosses or known symbols. A compaction request allows removing accessory material with a recorded reason; it does not require keeping every sentence or moving it to appendices.
3. Callouts: `example` for a figure or a worked example, `exercise` for exercise statements, `warning` for a limit or a pitfall, `note` for a formula or nuance and, folded (`-`), for depth or a check; `tip` for practical judgement, `quote` for a useful literal quotation; `abstract` only in concepts and system notes. The central equation goes in `$$` on its own lines; inside a callout every line starts with `>`.

**Readable links:** in note bodies, every wikilink with a path uses a readable alias; keep target and section. Concept paths in YAML are metadata, not reading text. Do not insert `[!concept]` capsules in new or migrated topics.

**Math rendering contract:** use `$...$` inline and `$$` on their own lines for blocks; never `\(...\)` or `\[...\]` in note Markdown. No formulas inside wikilink aliases or navigation titles: readable text in the link, formula outside. In tables, use `\vert`/`\Vert` for absolute values and norms and `\mid` for conditions, so bars never split cells. No spaces next to the inside of inline delimiters: write `$x$`, not `$x $`. Check closures on every line, wikilinks swallowed by formulas and the `>` prefix of blocks inside callouts. Keep backslashes when writing from code. Run the structural auditor and check formulas in the viewer; counting delimiters is not enough.

4. Relevant figures are cropped **one by one** with `figuras.py` (never the whole page by default), inside an `[!example]` with an interpretive caption and a link to the physical PDF page. Inspect the contact sheet, not just the text.
5. Clean reading: start with the content, with no "what you will learn" goals, evidence boxes, traceability, history or comparisons between lecturers in the notes. Per-block provenance (page, time, symbol), extensions, inferences and decisions live in source cards and logs; in the body, only a direct link to the slide where it helps. Own examples are labelled briefly and doubts that affect meaning stay visible. Never attribute to the lecturer figures, proofs or emphasis that are not on record.
6. Apply the concept gate to **every academic heading, defined term, method, quantity, property and named prerequisite**, even if it appears only once. Every candidate gets a verifiable decision; not searching cannot be justified by calling it "secondary". Every candidate needs a coverage decision, which does not mean it needs a file. The canonical concept explains its own unit and **does not copy the topic**; the topic keeps its case and context. Link the first useful mention without an embedded capsule; check target, anchor, meaning and usefulness of each link. Keep the `concepts` frontmatter in sync with real links. Look for uses across subjects and check both ends before connecting. Do not invent relations or impose quotas. Official documentation only when it was actually consulted; tests that were not run are declared as such. Run `sc.py terminos --nota …` on every topic and resolve each defined term with no target according to [[_system/Placing knowledge#Closing defined terms without inflating the graph|Closing defined terms]]: link, section, local with a reason, or a card that passes the creation test. "Pending" is not a final decision, and the command never proposes creating cards.
7. Properties: schema 2, type, status, phase, subjects/sources/concepts as lists, ISO created/updated, `cssclasses: [second-brain]`. Status is draft/in_review/validated; phase offline/online/mixed, independent of status. Validated requires an approving audit and a documented visual check.
8. The independent auditor receives originals and outputs, not just the writer's summary. Fix and review the changes. With no auditor or viewer available, deliver useful work as `in_review` and record what is missing; do not stop all production or fake validation. Report coverage, exclusions and incidents.
9. **Safe writes to existing notes.** Use the `sc.ps1 escribir --nota … --candidato …` gate from [[_system/Tools#Validated writes|Validated writes]]: a complete separate candidate, checks of equations, callouts and links before writing, a backup and an atomic replace. Old direct-edit scripts are not an editing route for new runs. Any script edit of a vault file (as opposed to Obsidian's own editor) backs up the file first and checks the result **before** overwriting the original, never after: size no less than 90 % of the original unless the operation is explicitly a cut, and the replacement always applied to the variable that holds the **whole file**, never to an isolated fragment that later replaces the entire file. Write to a separate temporary file first and move it over the original only if the check passes. A `print` or a log after writing is not a check; if it fails, the script must abort without touching the original.

**Online integration without inflation:** covering a transcript means completing what matters, not adding volume. `already_covered` requires a checked destination and generates no writing. Each addition fills an identified gap, corrects meaning or captures useful emphasis from the lecturer; it goes briefly into the existing section, with no parallel block per contribution. Reuse examples; create an own example only if it is essential to understand the change. Do not duplicate a property the topic or concept already explains well. Keep the core, the conditions and the essential steps.

**Exam announcements from lecturers:** keep what is in or out, assessable emphasis, format, materials and dates, even when doubtful; never exclude them as `no_academic_value`. An explicit announcement about specific content goes next to that content in the topic; logistics and conditions go to the profile and are documented in the session card with an anchor to the original. Distinguish `confirmed`, `provisional` and `uncertain` according to the evidence, with the uncertainty visible at the destination; do not turn an academic mention into assessable material. Do not resolve relative dates without a documented lecture date, or infer permissions from ambiguous ASR. This rule does not authorise analysing or solving uploaded exams.

## Load by role

| Role | Read after this file | Output |
|---|---|---|
| Coordinator | [[_system/roles/Coordinate|Coordinate]], MAP, [[_system/Tools|Tools]], the relevant MOC, profile and log | Packages, integration, close |
| Intake / editor | [[_system/roles/Write|Write]], the template for the type, the assigned pages | Notes + coverage + figures |
| Online interpretation | [[_system/roles/Transcripts|Transcripts]], fragments and the relevant offline sections | Contributions, ASR corrections, cuts and localised changes |
| Online organisation | [[_system/roles/Daily online|Daily online]], only new or pending daily material | Bounded segments and changes consolidated per topic |
| Code | [[_system/roles/Code|Code]], entry point and relevant project modules | Global and local explanation tied to theory |
| Conversations | [[_system/roles/Conversations|Conversations]], the question and candidate sections | A verified novelty in the right place, a minimal log and pending items |
| Mathematics | [[_system/roles/Mathematics|Mathematics]], the relevant formulation and proofs | Checkable definitions, steps and intuition |
| Concept integration | [[_system/roles/Connect|Connect]], search results and candidate sections | Canonical development and connections with evidence |
| Auditor | [[_system/roles/Audit|Audit]], the sources of the block and its notes | Located findings, without rewriting |
| Research literature | [[_system/roles/Research|Research]], the card and pages of **one paper**, its row in the reading plan | Located evidence before thematic synthesis; originals untouched |

For special cases, read specific sections of the [[_system/Note contract|Note contract]] or [[_system/Workflows|Workflows]]. Editorial design is always required for knowledge that is written or reworked; do not load the other manuals "just in case".

Roles are responsibilities, not mandatory agents: online interpretation and intake usually share an editor. The coordinator integrates connections. Reserve an independent auditor and send finished blocks while others are being written. One canonical coverage table per package; reports and cards reference it, they do not copy it.

The operating rule lives here; modules develop each role's decisions and templates give the output its shape. If a contradiction appears, keep originals and evidence, apply the most specific rule compatible with the request and fix the outdated reference when closing.

## Ontological units of the syllabus

When creating, extending or reviewing concepts and proofs, read [[_system/Ontology and proofs|Ontology and proofs]] and apply it before writing. Walk through elements defined inside lists, tables, boxes and prose, even under a plural heading: each definition may identify a different unit. Record term, locator, decision, reason and destination; the auditor checks the inventory against the originals. Inventorying every candidate does not require one note per candidate. Each concept answers a stable question about an object, relation, mechanism or result; it keeps its relevant properties and links dependencies without absorbing them. Split when identity or self-contained explanation changes, not because of length or number of headings.

Record domain, hypotheses and statement of each result; assign an owner and section to each complete route, with source, locator and authorisation if it is an alternative. Walk through exercises and callouts too: a link to the concept does not remove a proof copied into the topic. Keep the depth of topics and the authorised solutions; the label "check" does not decide where something goes.

New packages with integrated content use `ontologia.json` for decisions and owners; `cobertura.json` remains the teaching coverage. Closing requires reviewing the plan and every output by current hashes, with different editor and reviewer. Similarity warnings are candidates for semantic review, not permission to split, merge, delete or approve. Older packages adopt the contract when they are curated.

## Proofs: mandatory destination and fidelity

Apply [[_system/Ontology and proofs|Ontology and proofs]]: distinguish candidate, concept unit, result, route and appearance. A complete general proof has one owner per result and route, in a precise section of a coherent concept; do not put everything in the card of the nearest prerequisite or create one file per proof. The topic keeps meaning, hypotheses, intuition and enough application steps to study from.

Checks and exercise solutions are classified by their argument, not by their callout. Keep the solutions the user explicitly asked for; record exceptions and decide the owner without losing depth. When consolidating, keep every step and delta of the most developed version before retiring a copy.

The lecturer's route keeps its original source and page, order, notation, cases and construction. Compare it visually and record the step → destination mapping; do not replace it with an equivalent one. Authorised alternatives are identified separately. An independent auditor checks identity, source, before/after and dependencies; with no native view available, the note stays `in_review`.

## Semantic coverage gate

Apply [[_system/Agent architecture#Semantic coverage and regression control|Semantic coverage and regression control]] before marking a unit as integrated or approving it: reconcile every definition, hypothesis, result, property, example and exercise with its concrete treatment, including reminders and final pages. An assigned page or a link does not prove development. In rewrites, compare source, previous version and final version; catch both new losses and older gaps. If a pattern of omission appears, review the whole neighbouring block. Keep the canonical coverage and record the real scope and what is pending.
