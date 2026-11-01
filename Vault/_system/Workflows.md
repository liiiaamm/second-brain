---
type: system
cssclasses: [second-brain]
tags: [system]
---

# Workflows

> [!abstract] One circuit for every subject
> Inventory → understand → extract evidence → write → connect → audit → update indices. Offline, lecture and lab work share the same design, traceability and checks.

Roles and statuses: [[_system/Agent architecture|Agent architecture]]. The layout of notes is set by [[_templates/template_base|template_base]].

## 1. Open a batch

- Follow the [[_system/RUN|RUN]] entry. The coordinator reads MAP, MOC, profile and relevant notes; editors receive bounded packages.
- Record exact sources, available version, topics and limits. Separate **new material**, **already processed** and **pending**.
- Create a log in `_system/Logs/`. Assign editors and an independent auditor.
- Keep one card per source in `Subjects/<Subject>/Sources/`, with its locators, coverage and destinations, and link it from the batch log. The log documents the run; the card keeps the processing history of that source.
- If material is missing or the folder is empty, record the absence. Never generate theory attributed to a lecture that does not exist.

## 2. Offline process · slides and documents

Before distributing pages, identify exams and solutions. They are kept as reference and stay out of automatic note and lab generation. "All originals" includes counting them and explaining this treatment, not writing them up. Do not create writing packages or demand an academic close for them unless explicitly asked. Exercises embedded in teaching material are not excluded by this rule.

Offline describes documentary provenance; it does not mean "no Internet". Consult specific primary sources when an explanation needs checking; do not search the whole syllabus by default. Full scope does not mean rewriting existing parts: resolve verified novelties and pending items.

### Understand before summarising

Read the full structure of the source. Note in a few lines what problem it solves, what goals it states, what it assumes and how the explanation progresses. If the goals are inferred, say so. Do not assume each PDF is a topic: merge or split according to the content, keeping traceability.

### Extract and decide depth

Review every page in scope, including tables, figure captions and content that does not come out with text extraction. Use OCR when needed and check symbols, indices, negations and numbers visually.

| Treatment | When to use it | Result |
| --- | --- | --- |
| Essential, visible | Definition, mechanism, conditions, notation and necessary consequences | A short, complete explanation in the main reading |
| Foldable depth | Relevant derivation, hard intuition, nuance or worked example | Same style as the note, inside a folded callout |
| Brief reference | Secondary context, lookup detail or repetition | A summary with a link to its development or source |
| Justified exclusion | Cover page, logistics with no study value or an exact duplicate | Reason in the coverage; never silence |

Importance rests on goals, dependencies, difficulties and teaching evidence; never label something "on the exam" without backing. Necessary derivations are explained, even if they take space. Add external sources only to solve concrete needs, keeping them apart from the course material.

Apply the sufficiency criterion of [[_system/roles/Write|Write]] and the integration of [[_system/roles/Connect|Connect]]. Page coverage and conceptual depth are different checks: a page marked as integrated can still contain concepts that are not explained well enough.

Before writing, build the concept inventory **from every unit**, not from a selection of highlighted terms. Every heading, definition, method, quantity, property and prerequisite gets a destination or a motivated pending status. After writing, do the reverse check: every eligible candidate is developed and every concept used is linked at its first useful explanation (without an embedded capsule). A final summary of links does not satisfy this check.

### Bring figures in as evidence

1. Identify which image teaches something that would be lost in a summary: a curve, an architecture, a drawing, a result or a visual example.
2. Render the original page and crop the useful region. Keep axes, legends, labels and the context needed. If the whole page is the useful unit, include it whole.
3. Crop each figure separately with `figuras.py` and save it in `_assets/<Subject>/figures-<short-source>/topic-N-figure-N.M-description.png`, with a side JSON (physical page, bbox, dpi, pixels, caption, SHA-256 of the original). Figures already cited by notes are never overwritten: a new crop gets a new name.
4. Insert the image on its own line with `![[path-to-image.png|720]]`; add a brief reading and the exact link to `Raw/...pdf#page=7` in the note. Record physical page, cropped region or whole page, and the source of the derivative.
5. Check that text, symbols and colours are legible and that the crop does not change the interpretation. Never replace an original figure with an unlabelled recreation. A link to the PDF is a backup; it does not replace the image that should be visible in the note.

### Record coverage before closing

Use one row per page or significant block. Group a range only if **every** page in it was reviewed and receives exactly the same treatment. For text without pages, use heading plus lines or paragraphs; for lectures, timestamps when they exist.

The canonical source is the package's `cobertura.json`, with the schema in Tools. The table below is a conceptual guide, not another format to write and maintain. Cards and batches link those JSON files and summarise ranges; get totals from the tooling. Do not rename fields or reviews to skip a check.

| Source and locator | Block / goal | Destination and section | Treatment | Image / evidence | Review |
| --- | --- | --- | --- | --- | --- |
| exact path, physical page N or identified block | What it contributes | Real path and heading | visible / foldable / reference / excluded + reason / pending | Path of the crop, quotation or n/a | pending / validated / incident |

**Coverage accounted for** = units with a disposition / units inventoried. Also report pending and excluded units separately: a full table does not prove that the content is well explained. The auditor checks the table against the sources and reviews whether the destinations are correct and sufficient. In the card, keep each block's ingestion state (`pending`, `integrated`, `excluded`, `blocked`) apart from its independent review (`pending`, `pass`, `incident`), with auditor and report. A block can be integrated and still unaudited.

## 3. Online process · lecture transcript

For daily uploads use [[_system/roles/Daily online|Daily online]]: preparation per file, bounded segments as a reading view, and consolidation per topic before editing. The segment manifest does not create another coverage or count as proof of integration.

Detailed procedure, required only for online work: [[_system/roles/Transcripts|Transcripts]]. Use the [[_templates/template_session|session card]] or extend the existing card without duplicating it. Several originals keep their own IDs, hashes and coverage even if they share a session.

1. Register the session once, with date, source and a stable `session_id` in the card: subject + date + an identifier that tells same-day sessions apart. If date or correspondence is uncertain, keep a unique provisional ID and record the doubt before merging. The ID identifies the lecture; the hash identifies a version of the file. Corrections, fragments and alternative transcripts of the same lecture keep the `session_id` and do not increase the count. Keep each original in Raw; never correct it there.
2. Map blocks to existing topics. Extract clarifications, examples, corrections, questions, emphasis and novelties, with time or locator when available.
3. Compare each contribution with the notes. Integrate what is new into its section; avoid chronological appendices that duplicate the whole explanation.
4. Resolve doubtful terms with local context and evidence; record corrections that change meaning, with a qualitative confidence. Never replace globally by phonetic similarity. Distinguish documented cuts from suspected jumps; a bridge from offline material must be cited as context, never as words recovered from the lecturer. When sources contradict each other, keep both references instead of automatically choosing the most recent one.
5. Review the shared concepts and labs affected as well. Update `phase` and send modified notes back to `draft` until the review is complete.
6. Update the profile only with new evidence. Count distinct confirmed `session_id` values as **unique sessions**, not PDFs, hashes, topics or repeated runs. Emphasis from the lecturer does not by itself support an exam prediction.

> [!warning] Gaps and contradictions
> State which claim is in doubt, where the versions appear and what is missing to resolve it. Keep the rest of the work going; a doubt does not authorise inventing the missing content.

## 4. Labs · from concept to implementation

Apply [[_system/roles/Code|Code]] to explain both the global coordination and the local pieces; use [[_system/roles/Mathematics|Mathematics]] for formulation, definitions and proofs. Documenting functions one by one is not enough when the result depends on several modules.

- Identify assignment, code and version: commit if there is one, or files and date consulted. The repository and executable files stay in `Code/Subjects/<Subject>/`.
- Save the lab note in `Subjects/<Subject>/Labs/`; reusable implementation cards are organised from [[Implementations/_Index|Implementations]].
- Read the real implementation. Tie each important concept to a **file, function or class**, its role in the algorithm and its inputs and outputs; include shapes, types and parameters when they help.
- Bring short snippets into the note with their language declared and their context. Distinguish **literal excerpt**, **teaching adaptation** and **pseudocode**.
- Link the library's official documentation and the version checked when relevant. Your own explanation documents local use and is never presented as official documentation.
- Separate tests **run in this session**, **results reported by the user** and **unverified**. Record command or procedure, version and result when they are run; an illustrative block is never assumed to be tested.
- Create relations both ways between concept, topic and lab note. Explain what the code illustrates instead of listing links.
- Reuse the [[Concepts/_Index|Concepts]] catalogue before creating a new card. A relation between subjects must describe the shared mechanism or the relevant difference.

## 5. Audit and publish inside the vault

1. The editor delivers note and coverage; status moves to `in_review`.
2. The independent auditor checks omissions per unit, the complete inventory of eligible concepts, notation, examples, provenance in logs, figures and relations. They walk source → candidates and concept → uses; a sample or a high count is not proof of exhaustiveness. Each incident is recorded with its destination and the expected fix.
3. The editor fixes; the auditor checks the fixes and the affected sections. The editor saying it is fixed is not enough.
4. Run the checks in [[_system/Tools|Tools]] per package and per complete source, plus the structural auditor. Review multiline formulas, images and open or closed callouts. Record the real limits of the viewer used.
5. If it meets the architecture's closing criteria, mark `validated`, date the review and fill `audit` in the YAML with a quoted link to the existing approving independent report. The field can stay empty while in draft or in review, never on validated knowledge. If it does not pass, keep `in_review` or go back to `draft` when it needs editing, with the reasons recorded.
6. Update the affected `_MOC.md`, concepts and profile. Summarise created and changed files, scope covered and pending items in the batch log.

## 6. Repeat without duplicating

In a new run, compare the inventory with the previous log. Reuse valid notes and crops, process only novelties and affected dependants, and do not increase counters by reprocessing. Keep the user's manual contributions; if there is a substantial discrepancy, point it out with evidence before replacing them.

> [!tip] First pilot
> Start with a bounded batch of one subject. Review coverage, depth, figures and the reading experience before extending the same circuit to the other topics. An approved pilot validates the method; it does not certify that the rest of the subject has been processed.
