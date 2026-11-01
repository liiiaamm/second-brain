---
type: system
cssclasses: [second-brain]
---
# Independent audit · operating instructions

Never audit as independent a note you wrote. You receive source and range, PNGs and the note; you can use cached extraction, but you compare formulas, examples and figures visually.

The [[_system/Kev routing|Kev `revision` profile]] can order candidate findings in a large queue, but the auditor inspects source and note; Kev neither approves nor replaces a check. Do not spend inference on an issue a deterministic check already resolves.

| Check | Evidence needed |
|---|---|
| Coverage | Every assigned page reconciled; no academic block lost |
| Correctness | Definitions, signs, dimensions, conditions, numerical results |
| Depth | Each central concept lets the reader explain problem, mechanism, conditions, example and limit; locate missing steps, do not count words or boxes |
| Provenance | Verifiable block/locator mapping in a card or log; links to slides where they add something; errata and self-made examples labelled, without bureaucracy in the notes |
| Visuals | Each figure cropped individually (no unjustified full page), legible, inside an `[!example]` with its own caption and a link to the correct physical page; Markdown and render observed |
| Note format | The structure in [[_system/Editorial design#Note format|Note format]]: navigation, prose opening, `##`/`###`, comparisons where useful, figures in `[!example]`, a final `## Exercises` with `[!exercise]`; no «At a glance», «Summary» or full pages |
| Editorial design | Apply [[_system/Editorial design|Editorial design]]: palette active in light and dark, a useful first screen, recognisable hierarchy, rhythm between prose and resources, readable paragraphs, tables/equations/code at narrow width and concepts near their first explanation; do not accept a final stack of capsules. Also inspect **every dense section without being swayed by colour**: comparable results findable in a table, sequences in steps, limits separate from evidence, causality explained with connected prose. Five paragraphs under a coloured heading are not a redesign. In an authorised compaction, require the core, conditions and essential steps to be kept and side cuts to be recorded; do not reject removing repetition for the sake of keeping every sentence. Judge whether figures explain the mechanism and reduce reading. |
| Concepts | Apply the concept gate to every heading, definition, method, quantity, property and prerequisite; each eligible candidate has a reasoned decision and a developed or pending destination; each concept used is linked at its first useful mention. In new or migrated notes, an embedded `[!concept]-` capsule breaks the format and is fixed before approval; legacy notes are reviewed when migrated. |
| Connections | Search eligible candidate uses; verify both ends, the shared mechanism and the differences; check reverse context and concept metadata, not just the link from the topic |
| Placement and links | Apply [[_system/Placing knowledge|Placing knowledge]]: topic/concept/API/pattern/local case with distinct functions. Open every new or modified target; check anchor, label, true relation and local usefulness. Compare concept with topic to catch copies. Check the `concepts` frontmatter against the real links. |
| Online | Original anchors, ASR fixes with evidence, cuts kept apart from suspicions; offline context never attributed to the lecturer; every addition fills a gap, meaning or useful emphasis against before/after; `ya_cubierto` (already covered) with no new writing, properties and examples without duplication; exam announcements kept with visible anchor, destination and uncertainty |
| Mathematics | Intuitive strategy, hypotheses and justified transitions; a proven conclusion; a numerical example never presented as a proof |
| Maths rendering | `$`/`$$` delimiters, no escaped alternatives, formulas out of aliases and code, well-separated blocks and continuous callouts; MathJax with no errors in the available view |
| Code | Global flow from input to result and a local explanation of central operations; connections between files checked, imports not mistaken for calls. Do not approve an API card whose core depends on one session's problem, or a lab note without real symbols. |

Output: file + section/page + problem + expected fix + severity (`blocking`, `major`, `minor`). If there are no problems, state the scope actually reviewed, never a generic approval. Do not rewrite notes: send them back to the editor. Verify fixes afterwards.

**Per-block review:** check the whole coverage, the concept inventory per unit and all central content; use contact sheets to locate and zoom into relevant visual content. Never infer equation errors from incomplete OCR. Review every ASR fix that changes meaning, contradictions, reconstructed steps and new connections. In an update, review before/after, evidence and affected dependencies; do not re-audit untouched sections whose review still applies.

Online, check necessity and redundancy against earlier sections: coverage is not volume. Check that the added and net text separate readable academic text from formulas, metadata, paths and provenance; do not impose percentages or quotas. Review «in / not in the exam» announcements, assessable emphasis, format, materials and dates, including excluded or doubtful ones: explicit specific content in the topic; logistics and conditions in the profile plus session card with anchor and status `confirmed`, `provisional` or `uncertain`. Do not accept a relative date converted without the lecture date, or permissions inferred from ambiguous ASR.

The concept audit runs in two directions: source/unit → candidates and concept → real uses. Reject the batch if there are headings or defined terms without a decision, canonical concepts used without a link, topics that depend on the linked concept to be understood, or groupings that hide members with their own mechanism. A high concept count does not make up for a concrete omission.

After fixes, review findings and side effects; widen only for a systemic error and record why. Return the units actually reviewed and the decision so `cobertura.json` stays in sync with the report. Never approve a whole batch from a sample. A missing native view leaves visuals pending; do not start repeated cycles trying to work around a missing capability.

The missing native Obsidian view is recorded separately. An HTML check page can catch problems, but it is never presented as proof of Live Preview. Do not raise the status to `validated` if a mandatory check is missing. Do not run redundant web searches for claims already well supported by the original source.

## Proofs: mandatory destination and fidelity

Apply [[_system/Ontology and proofs|Ontology and proofs]]: distinguish candidate, concept unit, result, route and appearance. A complete general proof has one owner per result and route, in a precise section of a coherent concept; do not put everything in the card of the nearest prerequisite or create one file per proof. The topic keeps meaning, hypotheses, intuition and enough application steps to study from.

Checks and exercise solutions are classified by their argument, not by their callout. Keep solutions the user explicitly asked for; record exceptions and decide the owner without losing depth. When consolidating, keep every step and delta of the most developed version before retiring a copy.

The lecturer's route keeps its original source and page, order, notation, cases and construction. Compare it visually and record the step → destination mapping; do not replace it with an equivalent one. Authorised alternatives are identified separately. An independent auditor checks identity, source, before/after and dependencies; with no native view available, the note stays `in_review`.

## Coverage by content, not by destination

Apply [[_system/Agent architecture#Semantic coverage and regression control|semantic coverage control]]. Check every member of each unit against its concrete treatment, including final notes and reminders. Reject as a major omission a missing definition, hypothesis or teaching result even if the page is marked integrated and has a link. In rewrites, check for new losses and earlier omissions against the original; extend the review to the neighbouring block when the defect is systemic. Rule only on the units actually reviewed and return locators to update canonical coverage.

## Auditing boundaries and ownership of arguments

Review [[_system/Ontology and proofs|Ontology and proofs]], the ontology plan and the complete blocks, including exercises and folds. Check the question and scope of each unit, the hypotheses of each result, and the owner and route of each argument. Tell apart repeated links, necessary statements, local applications, complete copies and variants. A correct result can sit in a conceptually wrong container.

A consolidation keeps the most developed version, not the shortest. Compare every step, condition and clarification before/after; check sources if teaching fidelity is claimed. Record explicit user exceptions and pending items without reinterpreting a copy as a variant. Approving the plan requires a reviewer different from the editor, a hash of its decisions and hashes of every declared output; any change reopens the review. A warning with no matches does not prove the absence of semantic duplication.
