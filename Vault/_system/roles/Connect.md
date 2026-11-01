---
type: system
cssclasses: [second-brain]
---
# Connect · developing and relating knowledge

Load this module only when maintaining concepts or integrating a batch. The search covers every new or modified eligible candidate, not just the central ones; you are not required to find a relation that does not exist. Never spawn an agent per concept.

Before deciding the destination, apply [[_system/Placing knowledge|Placing knowledge]]. A canonical card answers for the transferable mechanism, not for the order of the topic or the solution of one session. Compare topic and card before publishing: if they hold the same sequence, the same examples and the same conclusion with no new transfer, redistribute.

## Complete inventory, proportional development

Walk through every unit in scope and collect definitions, methods, representations, quantities, properties and prerequisites with their own meaning. Group aliases and repetitions. Something is eligible if it allows a reusable explanation, is an important prerequisite or connects real content; not every technical word needs a note.

### Mandatory concept gate

Do not start from a short intuitive list. In each unit review, in this order:

1. every academic heading;
2. every defined element in lists, tables, boxes and prose, even under a plural heading; defining expressions (`X is`, `X is called`, `X measures`, `X consists of`) and highlighted terms;
3. algorithms, architectures, losses, metrics, distributions, theorems, properties, representations and design patterns;
4. variables or quantities that change how a formula is read;
5. prerequisites used to explain another concept, even if the source takes them for granted;
6. names that reappear in another unit, subject or implementation.

A candidate receives a coverage decision, not a file by default. Apply [[_system/Ontology and proofs|Ontology and proofs]]: publish a unit when it has its own identity and question, enough autonomous explanation and real usefulness for understanding or applying the syllabus. Needing a prerequisite does not authorise absorbing it into its dependant or creating an empty card for it. An incidental candidate can be integrated locally; a property can live in a stable section of its object.

A family is kept if it explains a shared mechanism or a coherent comparison, even if its members have different formulas and conditions. Split members when object, identity or question change and they need autonomous explanation; never because of quotas, number of headings or length. Record the boundaries, dependencies and results of each unit before writing.

The review also runs in reverse: every heading and defined term must point to an inventory decision, and every published concept must have at least one real linked use. Sampling a few sections or counting links does not prove completeness.

Keep a single source of decisions. In new packages, `ontologia.json` holds units, results, appearances and review; the log references that plan and does not duplicate its declarations. Teaching coverage stays in `cobertura.json`. In older batches without a plan, keep a single table: unit/locator, candidate and aliases, eligibility and reason, decision (`reused`, `extended`, `new`, `integrated_in_topic`, `pending`), destination/section, search and relation result. Exclusions and pending items are justified too; «secondary» is not enough to discard. Every unit is reviewed and every eligible candidate has a developed destination or an explicit pending before closing. A pending item does not count as integrated.

Completeness is checked against the units, not against a short list chosen by the writer. Review the inventory first and group searches by alias or mechanism, reusing current evidence to avoid rereading the vault.

## Searching with little context

1. Query the local index with `sc.ps1 contexto buscar` and `sc.ps1 contexto sugerir` (commands in [[_system/Tools|Tools]]). Search name, aliases and the English term; include mechanisms and prerequisites when the name differs. Fuzzy suggestions return candidates and never prove equivalence. If two destinations are still plausible, the [[_system/Kev routing|Kev `ubicacion` profile]] can give a second opinion; read both cards before deciding.
2. Check existing concepts first, then uses in other subjects. Open only candidate headings and sections with their sources. If nothing comes back, try synonyms with a bounded search before recording «no evidence found». An outdated or incomplete index does not prove absence.
3. Decide identity: reuse if definition and assumptions match. For homonyms, specialisations or different conventions, keep them apart. Never merge just because titles look alike, and never duplicate a definition under an English name.

## Depth of the canonical concept

Every canonical concept must hold an autonomous explanation: problem or motivation, definition, mechanism, conditions and an interpreted example where appropriate. Length is proportional; central ones need a worked example and complete steps. Explain why the result makes sense, and a relevant limit or confusion. Define symbols and dimensions before using them. Do not force formulas onto concepts that do not need them.

If a step is missing that the student would have to look up elsewhere to follow the explanation, develop it with evidence. Use the original material and already verified sources first; consult a specific primary source for a real gap, marking the extension. Never invent teaching theory or use a «going deeper» label as a substitute for development.

The topic keeps its teaching development and every step needed to understand and apply the content. The complete reusable development lives once in the concept; link to its precise section to go deeper without duplicating it in each subject.

The concept must not just transcribe the topic or absorb one subject's narrative. It must earn at least one of these functions: a source-independent mechanism, a contrast between real uses, a limit that changes when it is transferred, or a minimal example that isolates the idea. If the topic already has all of that and there is no reusable value, integrate locally and record the decision; do not create a second copy. A «family» that only lists concepts with their own cards belongs in the topic or MOC, not in the concept space.

### Linking from the topic

Every canonical concept used in a topic, lab or implementation is linked at its **first useful mention** in the note, with readable text: `[[Concepts/Canonical name|text]]`. Not every occurrence is linked, and it is never embedded with `[!concept]-` capsules (legacy format). The topic explains the concept's local role with what is needed to follow it; the concept keeps the autonomous development and the connections between subjects. Never put the link inside a formula, a code block or another link's alias.

Open the target and check that the visible label names that content. A link to a neighbouring notion, prerequisite or variant is not a link to the concept being explained. Confirm anchors, useful reciprocity and the `concepts` frontmatter when closing. Tell apart lookup-table embeddings from already contextualised embeddings, same-named services across domains, and general operators from their use in one exercise.

## Making a connection visible

Every approved relation answers:

| Check | What to write |
|---|---|
| Ends | Links to two existing sections and real subjects |
| Mechanism | Which operation, assumption or structure is shared |
| Transfer | What it lets you understand or solve when going from A to B |
| Limit | What changes: domain, dimensions, goal, notation or assumptions |
| Evidence | A locator for both uses; not just intuitive similarity |

In the topic, weave the relation into the explanation where it adds value. In the concept, update contexts, `subjects` and links to the real topics. The body explains knowledge, without comparing lecturers or showing verification tables; locators and checks live in the batch. Update its index once when integrating. The reverse mention uses the right relation: «is a case of» is not copied as if it were symmetric. No mass linking and no quota.

If there is code, verify file, symbol and version and link through the implementation note: concept → concrete operation → inputs/outputs → topic or lab. Without code available, do not invent this branch.

## Handover and closing

One writer per shared concept. Editors propose candidate, use and locator; the coordinator integrates once with this module, without rewriting the topics. The auditor receives the sections of both ends and reviews semantics and sufficiency.

Reconcile the batch's complete inventory, with relations `verified/candidate/no_evidence`, destinations and a reason for each pending eligible candidate. Do not duplicate the table in every report. Pending relations are never published as facts or turned into empty links. A missing relation with clear evidence, or an index that denies existing notes, is an integration defect.

## Proofs: mandatory destination and fidelity

Apply [[_system/Ontology and proofs|Ontology and proofs]]: distinguish candidate, concept unit, result, route and appearance. A complete general proof has one owner per result and route, in a precise section of a coherent concept; do not put everything in the card of the nearest prerequisite or create one file per proof. The topic keeps meaning, hypotheses, intuition and enough application steps to study from.

Checks and exercise solutions are classified by their argument, not by their callout. Keep solutions the user explicitly asked for; record exceptions and decide the owner without losing depth. When consolidating, keep every step and delta of the most developed version before retiring a copy.

The lecturer's route keeps its original source and page, order, notation, cases and construction. Compare it visually and record the step → destination mapping; do not replace it with an equivalent one. Authorised alternatives are identified separately. An independent auditor checks identity, source, before/after and dependencies; with no native view available, the note stays `in_review`.
