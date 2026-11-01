---
type: system
cssclasses: [second-brain]
---
# Placing knowledge and keeping links useful

This contract applies before creating a note or extending one, whether the input is PDFs and lectures or code and conversations. Search proposes destinations; the editor decides according to **which question the information answers**. A lexical match does not prove conceptual identity.

| Main question | Destination | What it keeps |
|---|---|---|
| How is this block of the course understood, and how is it applied here? | `Subjects/<subject>/Notes/Topic…` | The teaching sequence, formulation and examples of the topic, figures from the source, the course's own decisions. It must be readable without opening every link. |
| What is a mechanism that reappears outside this block, and how does it work? | `Concepts/<name>.md` | Object or statement, scope, assumptions, its own mechanism, an example that isolates it, and relevant relations. Coherent properties can have a section; dependencies are linked. It does not reproduce the topic. |
| What does a library operation do, with which axes, inputs and outputs, and which errors does it cause? | `Implementations/<library>/<API>.md` | The general API contract, shapes, semantics, a minimal example and verified official documentation. No incidental parameters from one lab. |
| How are several APIs combined to solve a reusable problem? | `Implementations/<library>/<pattern>.md` | Pattern, flow and general choices; it links the APIs without copying them. |
| How are the files coordinated and what does a symbol in the submitted code do? | `Subjects/<subject>/Labs/<lab>.md` and, if it deserves detail, its local card | Entry → modules → output, real paths and symbols, local contract, configurations and relation to theory. |
| What was asked, what was verified and what has no evidence yet? | Conversation log in `_system/Logs/` | Provenance, integration decisions and pending items. It does not turn the chat into syllabus. |

The same idea can appear in several destinations, but each appearance has a **different function**. The topic explains the teaching case; the concept explains the mechanism that lets you carry it elsewhere; the API explains the library's contract; the lab explains the real program. Before editing, write one sentence per destination in the log: «this information goes here because it answers…». If two sentences are the same, merge or redistribute before writing.

Apply [[_system/Ontology and proofs|Ontology and proofs]] when bounding a unit or assigning a proof. A concept answers a question of its own in the syllabus; its autonomous value does not require uses in two subjects. Covering a candidate and creating a file for it are separate decisions.

## Identity and proportionality gate

1. Extract candidates from headings, definitions, methods, formulas, properties, code and the user's questions. Search title, aliases, translation, acronyms and mechanism. Search returns candidates; open only the relevant ones.
2. Compare **definition, assumptions and object**. Same name with different semantics means different notes, disambiguated in title or alias. Different names with the same mechanism are one concept with aliases, unless a variant has its own conditions.
3. Before opening a new concept, check that it brings a reusable explanation that is not a copy of the topic. A family note is justified only if it explains a mechanism of the family; if it just lists members, that comparison belongs to the topic or the index.
4. Set depth by conceptual difficulty, dependency for understanding what follows, **verified** frequency of use and risk of confusion; never by the length of a conversation or the number of questions. A nuance of `dim` can be settled in a few lines with shapes and an example; `gather` and `scatter` need their own contracts and cases. The depth needed is kept in the right destination.
5. Write in the format of [[_system/Editorial design|Editorial design]]. Do not dump the same complete answer into concept, topic and code.

## Wikilink contract

Every published link passes four tests: **existing target**, existing anchor if there is one, **true semantic relation** and **usefulness at that point of reading**. The visible alias must name what the reader will find. Link at the first mention where the relation is explained, not every occurrence and not in a decorative index. Do not link a table *embedding* to "contextual embeddings" as if it already included context.

When citing a specialisation, explain what it adds and what it keeps from the general concept. For a connection between subjects, state the shared operation and the difference in domain, dimensions or goal; check both notes. Never create a link from verbal similarity alone. Links from a concept note to real topics and labs describe the use; they do not repeat the theory.

The `concepts` frontmatter holds the canonical concepts actually linked in the body and is synced on every edit. Never put a term there that you only intend to cover in the future. Navigation, source and implementation links are not concepts. If a canonical note loses its real uses after a migration, decide whether it stays as a prerequisite or is merged, without deleting information.

## Closing defined terms without inflating the graph

Every defined term in a topic (a label with a definition, bold text, «is called», a row of a definitions table) ends in one of these outcomes, and only the last one creates a file:

1. **Link** to a concept that already exists (title or alias). Before linking, check that it is the same object: if the concept does not list the topic's subject, it may be a homonym and is decided separately (an IAM «policy» is not an RL policy).
2. **Section** of an existing concept, when it is a coherent property of something that already has a card.
3. **Local**, with a written reason: support for the topic with no question of its own and no transferable mechanism.
4. **New card**, only if it passes the creation test.

**Creation test**, all three at once: *its own question* (it cannot be answered well inside another card), *its own content* (mechanism, conditions and an example or counterexample that are not just the topic's definition) and *dependency* (several results or exercises need this object, or it is reused in other topics). Isometry and homeomorphism pass: they are objects with properties, examples and exercises that depend on them. "Basis" or "coordinates" inside a topic do not: they are local support.

"Pending" is not an outcome; it is a temporary state with a reason, and a note with defined terms that have no outcome is not approved. `sc.py terminos --nota …` lists terms with no destination. It does not propose creating cards: it forces a decision and a recorded reason. The auditor approves the list of new cards before they are created and reviews local decisions with the source at hand. A high number of undecided terms usually points to structural labels, not missing concepts.

## Review before closing

- Resolve links, anchors, embeds and figures with the structural auditor. Then review the **meaning** of each new or modified link in its sentence and in the opened target; a path check is not enough.
- Compare neighbouring topic and concept: opening the concept should give the reader a transferable mechanism or a real contrast, not a second copy of the topic.
- Contrast nearby fuzzy-search candidates and record why each one was reused, distinguished or discarded. Similarity never merges automatically.
- Check that two-way links, aliases and `concepts` reflect the final state. An independent auditor reviews ambiguous cases and the visual sample.

## Proofs: mandatory destination and fidelity

Apply [[_system/Ontology and proofs|Ontology and proofs]]: distinguish candidate, concept unit, result, route and appearance. A complete general proof has one owner per result and route, in a precise section of a coherent concept; do not put everything in the card of the nearest prerequisite or create one file per proof. The topic keeps meaning, hypotheses, intuition and enough application steps to study from.

Checks and exercise solutions are classified by their argument, not by their callout. Keep solutions the user explicitly asked for; record exceptions and decide the owner without losing depth. When consolidating, keep every step and delta of the most developed version before retiring a copy.

The lecturer's route keeps its original source and page, order, notation, cases and construction. Compare it visually and record the step → destination mapping; do not replace it with an equivalent one. Authorised alternatives are identified separately. An independent auditor checks identity, source, before/after and dependencies; with no native view available, the note stays `in_review`.
