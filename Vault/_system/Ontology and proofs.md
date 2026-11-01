---
type: system
cssclasses: [second-brain]
---
# Ontology of the syllabus and ownership of proofs

A shared contract for creating, extending, splitting or auditing knowledge. Enter through [[_system/RUN|RUN]]. This document decides the boundaries of units and the function of each appearance; [[_system/Editorial design|Editorial design]] decides how they look. A complete inventory guarantees coverage; it does not require publishing one file per term.

## Distinct identities

| Element | Identity and function |
|---|---|
| Candidate | Term, heading, method or result that must receive a coverage decision. It can be explained locally, inside an existing unit or in a new note. |
| Concept unit | Object, relation, mechanism or result that answers a stable question and needs its own explanation. It has a definition or statement, scope, conditions, mechanism and relevant applications. |
| Result | A proposition with a precise object, domain, hypotheses and conclusion. Those conditions are part of its identity; sharing a word or a formula is not enough. |
| Proof route | The argument that establishes a result, with its own construction, order, cases, notation and provenance. Two routes to the same result stay distinct; they are not merged for being equivalent. |
| Appearance | A concrete use of a unit or result: contextual definition, intuition, statement, reference, application, solution or full proof. The callout title does not decide its function. |
| File | The navigable presentation of a coherent unit. It can hold properties and related sections; neither every candidate nor every proof needs its own file. |

A concept is an ontological unit of the syllabus, even if it appears in a single subject. "Transferable" means it explains the object or mechanism beyond an incidental example; it does not require inventing connections or proving use in two courses. The topic keeps its teaching sequence and the development needed to study without opening every link.

## Deciding the boundary of a concept

### Recognising units inside a presentation

A plural or comparative title does not turn its whole content into a single concept. Walk through every element of lists, tables, boxes and prose: labels followed by a definition, «is called», «is defined as», membership conditions, relations between objects, characterising properties and methods with assumptions are all signs of candidates. The word does not need to be a heading or appear in another subject. Visual format does not decide identity either.

For each candidate ask: what object, relation, mechanism or result does it define? What sets it apart from its neighbours? What conditions does it need? Does it require explaining how it works or giving its own examples? If it has its own identity and explanation, find or develop its unit; if it is a coherent property, give it a section; if it is incidental use, justify its local treatment. A shared heading can compare several units and link them without absorbing their developments into the container concept. Never decide by length, bold text or matching names alone.

Before writing, record term, source locator, decision, reason and destination for each candidate. The auditor rereads the originals to catch omitted definitions: the tooling's detector only proposes signals, and the absence of a signal does not allow excluding a term. This pass is mandatory for every provider and effort level; it does not depend on the model remembering this conversation.

Before writing, complete three sentences in the plan: «this unit explains…», «its scope is…» and «to understand it you need…». Keep these working statements out of the academic body. Then read each section: it must define the unit, explain its mechanism, establish a relevant property or use an example that isolates that same idea.

**Keep a section** when it explains a property of that object, a specialisation of the same mechanism, a limiting case or a necessary example. A short result can have its own section and anchor inside a coherent unit. Different formulas or hypotheses between members do not by themselves invalidate a family.

**Split a unit** when the object or the main question changes and it needs its own definition or statement and explanation. Also when a property has enough identity, hypotheses and independent use to be looked up as a result. Search existing cards and aliases first. The new note must hold its own explanation; do not publish a skeleton that forces the reader to open the old container to understand it.

**Link a dependency** when another unit is used for reasoning. Add only the reminder needed to follow the current step; its full development has its own owner. "Needed to understand" does not mean "belongs to the concept". Convergence and Cauchy sequences use a metric, but they have definitions and questions different from the distance axioms.

**Integrate locally** when the explanation depends on the data of the example or the context of the course and has no autonomous entity. Do not create notes for every intermediate inequality, exercise number, symbol, paragraph or question in a conversation.

The partition is decided by identity and coherence, never by length, number of headings, number of proofs or a quota of concepts. A dual pair such as supremum and infimum can stay together; a family of sequence spaces can compare size, support and limit through a shared mechanism. By contrast, the almost-everywhere classes of Lp and continuous functions with uniform convergence need their objects and modes of convergence kept apart.

## One owner per result and route

For each result, record its statement with hypotheses and a precise canonical destination: note plus section. A complete proof lives once per result and route. By default, the owner of the general result is a note in `Concepts/`, titled by the object or result it explains; do not open a "Proof of X" note as a third copy next to topic and concept. If the proof sits in a section of the concept, that section names the result and keeps its hypotheses.

The topic keeps meaning, conditions, relations, intuition, examples and application steps. It can show the strategy of a proof without developing the whole argument again. A link to the concept and a link to a proof section are navigation, not two copies; use the precise access that helps in each block, with an understandable label. Repeating a link in distant contexts is not duplicated knowledge; stacking generic "proof" links to the same argument should be reviewed for usefulness.

The identity of a result includes domain and hypotheses: an inclusion under finite measure is not an unconditional inclusion; a property of all norms is not the same as its case for p-norms. The identity of a route includes source, physical page or locator, version and construction. Do not deduplicate because two arguments reach the same conclusion: two different constructions can prove the same incompleteness without being the same proof.

## Exercises and applications with depth

Classify a block by what it establishes, not by its label. A `[!note]- Check`, an example or a solution can contain a complete proof of a general property. The inventory and the audit also cover exercises, foldable callouts and final figures.

A solved application keeps the data, the choice of result, the check of hypotheses, substitutions, operations and an interpreted conclusion. Do not strip those steps to turn the topic into a list of references. Applying Hölder to a concrete problem does not require copying its general proof as well. A minimal numerical example can appear in topic and concept if it plays different roles; record why when it is flagged as a similarity finding.

When an exercise's solution coincides with the proof of a transferable result, choose one complete owner and explain how it is used from the other place. The exercise statement stays in the topic. Consolidate the most complete argument: if the topic brings cases, justifications or limits missing from the concept, move them to the destination before retiring a copy. Losing steps is not a "summary".

Explicit requests for solutions under exercises take priority over a generic rule. Keep them while researching; never delete them silently. For new work, give the local solution needed and use the canonical proofs as dependencies. If the user insists on repeating a full proof for standalone reading, record the exception, its scope and its authorisation; do not pretend a copy is another route, and do not automatically validate the whole batch. A purely local solution can be owned by the topic; that does not make it a second canonical proof of the general result.

## Fidelity to the lecturer's route

If there is a proof from the lecture, keep that proof: same route, order of steps, notation and substitutions, separate cases, auxiliary results and construction. Prioritise originals identified as lecture notes (topic notes, proof handouts, handwritten notes); slides and books complement that route without replacing it. Different teaching versions stay identified and separate. An alternative of your own is developed only when it is authorised and kept distinct from the source.

Before writing or moving a proof, compare the original visually and record, outside the body, the mapping from lecture step to destination step, with physical file and page. Clarifications explain transitions of the same route; they never replace operations with «normalising», «by convexity» or «it is immediate». If evidence is missing or unreadable, declare the gap and keep it pending. A similarity detector does not prove fidelity.

## Curation procedure

1. Save a recoverable version of the scope before splitting or consolidating. If the tooling lives outside the vault's repository, keep its code and configuration in a verifiable copy of its own as well.
2. Inventory candidates by teaching unit and blocks by function. Read the topic and the relevant destinations in full, including exercises and later additions; check their logs to recognise earlier authorisations.
3. Search identity by object, definition or statement, domain and hypotheses. Group aliases; distinguish variants and dependencies. Give each unit a question and a boundary, plus one owner per result and route.
4. Record decisions and appearances in the package's ontology plan. This plan replaces recording the same decisions in other tables; the teaching coverage remains `cobertura.json`, without copying its rows.
5. Prepare complete standalone destinations first. In a migration, compare before → destination → final topic: every step, hypothesis, case, clarification and figure must be kept or have an authorised, motivated cut. Never decide automatically from text similarity.
6. Resolve all incoming links, anchors, aliases and the `concepts` frontmatter. Keep a compatibility route or update consumers before retiring a section. An existing anchor must lead to the right result and route, not just the same topic.
7. An independent auditor checks the partition, the owner, the depth of the topic, the source and before/after. The author never approves their own plan. If originals or the native view are missing, state exactly what remains pending and keep `in_review`.

## What the tooling certifies

The declared inventory holds candidates and decisions; units are their explanatory destinations, not a one-to-one copy of that inventory. The `results` collection holds canonical general results; a purely local solution is recorded among units and candidates, or as an application of a result when appropriate, without inventing a conceptual owner for it.

The ontology command inventories blocks and links, and locates identical or similar texts, or arguments next to canonical destinations, for review. Its signals are warnings: it does not decide whether an autonomous unit exists, whether two proofs are the same, whether a local example is useful or whether a family should be split. Zero matches does not mean zero semantic duplication.

The plan validator checks explicit declarations: identifiers, questions and boundaries, owners and existing anchors, declared uniqueness of the canonical proof, authorised variants, and a review tied to the current hashes of the notes and of the plan's decisions, with different editor and reviewer. It does not check whether the decisions are true; an "approved" field needs evidence from the auditor. New packages with integrated content need this plan to close; older ones adopt it when curated, without routinely invalidating all previous work.

Closing requires an independent review, resolved pending decisions and current hashes of the declared scope. Structural and ontological checks do not replace semantic coverage, proof fidelity or the native view. Concrete rules and commands are in [[_system/Tools|Tools]].

## Acceptance criteria

- Every candidate has a motivated disposition, without forcing one file per candidate.
- Every concept answers a coherent question; its dependencies do not invade its explanation.
- Every result keeps domain, hypotheses and conclusion; every complete route has an identified owner.
- Local uses let the reader follow and apply the topic; there is no unnoticed full duplication and no loss of steps when consolidating.
- Variants and exceptions rest on evidence or authorisation, with a concrete scope.
- Anchors lead to the right content; the report records real limits and an independent review.
