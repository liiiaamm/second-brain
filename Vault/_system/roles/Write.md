---
type: system
cssclasses: [second-brain]
---
# Intake and writing · operating instructions

Before writing, read [[_system/Editorial design|Editorial design]] in full (especially **Note format**), [[_system/Placing knowledge|Placing knowledge]], the relevant template and the comparable section of your vault's model notes, without loading whole topics. When finished, open the rendered note and apply its five visual checks; a structural audit without a view does not certify the design.

1. Read every page in your package. Inspect contact sheets and zoom into formulas, figures and illegible or relevant areas; do not open every page at full resolution if it already reads clearly. Never trust extracted text for matrices. Record visually checked pages and doubts, without one comment per slide. Online: apply Transcripts first and write only its localised changes.
2. Every page is recorded as integrated, excluded with a reason, or blocked. Cumulative animations can be condensed; record which final version represents them. Useful logistics go to the profile or overview; they do not disappear.
3. Write directly with the right template and the sufficiency criterion below. Do not first produce another long summary of the same source. Include source examples and calculations; your own are labelled and checked. Design each section as a readable stretch: short explanation, mechanism, visual support or example where it helps, and a folded deep-dive. Boxes do not replace a connected explanation. **After drafting, do a composition pass ignoring colour**: classify results, steps, contrasts, conditions and causal arguments using the table in Editorial design; turn each dense block into the format that lets you find claim, evidence and limit. A pretty heading over five paragraphs in a row does not pass this check.
4. Extract figures **one at a time** with `figuras.py --pdf … --paginas … --tema N --destino "Vault/_assets/<Subject>/figures-<source>" --hoja …` (or `sc.ps1 figura --recorte` for a manual crop). Check the contact sheet **and every crop you will publish** against the page: whole figure, readable axes, legend and labels, no surrounding paragraphs or other figures. If it fails, adjust the bbox and inspect again; do not insert the first automatic crop out of inertia. Rename with `--nombres` to a descriptive name. Full page only if the figure takes the whole page, justified in the card.
5. Apply the full concept gate from Connect to headings, definitions, methods, quantities, properties and prerequisites; write only the concepts assigned to you, avoiding collisions. If you maintain concepts, load Connect; if not, hand over name or alias, reasoned eligibility, use and localised source for the batch's single table. Link the concept at its first useful mention; do not add `[!concept]-` capsules. Do not add subjects whose application you have not checked. Weave every useful relation into the explanation, without decorative link lists.
6. Fill in the package's `cobertura.json` (never create another schema), including reasoned exclusions and blocks. Reference each figure from the row of its source page. Hand over notes in `in_review`, coverage, figure JSONs and doubts. Keep a relevant erratum visible with a justified correction. Never mark `validated`.

**Style:** start with the explanation. No learning objectives, evidence or traceability blocks, history or comparisons between lecturers. Detailed provenance and quality control go in cards and logs; in the body, a direct link to the slide only when it helps. A table only for comparisons that save reading; notation in sentences, axioms in lists and proofs with grouped algebra. Diagrams to explain the decisive change, replacing redundant description. In an authorised compaction, remove side material and examples with a recorded reason. Do not force every module of the template: drop the ones that do not apply. Important content is never left out to hit a word count. For compared figures, keep metric, dataset, variant and conditions in the same view; do not scatter them across paragraphs.

## Sufficiency before delivering

If there is formulation, formal definitions or proofs, apply [[_system/roles/Mathematics|Mathematics]]. If there is relevant code, apply [[_system/roles/Code|Code]]: a local fragment needs context within the program, not just an isolated description of the API.

For every **central** concept (a goal, a prerequisite or something needed to apply a method), check that the reader can:

1. Say what problem it solves and define it without circularity.
2. Follow its mechanism: what goes in, what changes, what comes out and why each step is needed.
3. Understand symbols, dimensions, assumptions and when it stops holding.
4. Follow a worked example with an interpreted result, including steps that are not trivial at the course level.
5. Tell apart a relevant confusion or limitation, if there is one.

If an answer is missing, extend exactly that point. A formula without explaining its operation, or «this allows learning» without a mechanism, does not pass. Never replace development with a list of linked terms. Essential prerequisites get a short explanation in the topic even if they have a canonical concept.

Visible core to understand and apply. In topics, a folded `[!note]-` for an edge case, an application, an authorised exercise solution, or a second example that resolves a specific difficulty. Before writing the check, decide whether it applies a result or reproduces its full proof, and consult the recorded owner. Canonical concepts are linked, not embedded. No boxes for words without conceptual identity. With a terse source, spell out deducible steps and check concrete gaps against a primary source; mark the extension and never invent teaching emphasis. Close the topic with `## Exercises` if the source has them.

**Context limit:** load pages per block. Do not reread long manuals unless there is a concrete doubt; do not send full text back to the coordinator. Never cut a necessary explanation to save output.

## Proofs: mandatory destination and fidelity

Apply [[_system/Ontology and proofs|Ontology and proofs]]: distinguish candidate, concept unit, result, route and appearance. A complete general proof has one owner per result and route, in a precise section of a coherent concept; do not put everything in the card of the nearest prerequisite or create one file per proof. The topic keeps meaning, hypotheses, intuition and enough application steps to study from.

Checks and exercise solutions are classified by their argument, not by their callout. Keep solutions the user explicitly asked for; record exceptions and decide the owner without losing depth. When consolidating, keep every step and delta of the most developed version before retiring a copy.

The lecturer's route keeps its original source and page, order, notation, cases and construction. Compare it visually and record the step → destination mapping; do not replace it with an equivalent one. Authorised alternatives are identified separately. An independent auditor checks identity, source, before/after and dependencies; with no native view available, the note stays `in_review`.

## Reconciling members before delivering

Apply [[_system/Agent architecture#Semantic coverage and regression control|semantic coverage control]]: verify every academic member of each unit and record its concrete treatment in `motivo` or through a single reference to the log. The label «reminder» does not authorise omission. A named definition or property must be stated with conditions and enough explanation; the canonical link extends the local development. In a compaction or migration, compare with the original as well as the previous note: do not carry its gaps forward.
