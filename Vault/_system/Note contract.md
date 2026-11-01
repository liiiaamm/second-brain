---
type: system
cssclasses: [second-brain]
---
# Note contract

> [!abstract] One structure for every subject
> The topic tells a complete story. The concept keeps what is reusable. The source lets you check it. The lab shows how it is implemented.

## Stable properties

New knowledge uses `schema: 2`, `cssclasses: [second-brain]` and these fields:

| Field | Values / use |
|---|---|
| `title`, `subject`, `topic` | Topics only: «Title - Topic N», subject and topic number |
| `type` | `topic`, `concept`, `lab`, `implementation`, `source`, `audit`, `moc`, `profile`; `system` and `demo` for infrastructure |
| `subtype` | `implementation` only: `api_reference`, `reusable_pattern` or `local_case`; when migrating legacy cards, classify before rewriting |
| `status` | `draft` → `in_review` → `validated`; substantive changes reopen review |
| `phase` | `offline`, `online`, `mixed`, independent of `status` |
| `subjects` | List of exact folder names; can hold several |
| `sources` | List of quoted internal links to existing source cards |
| `concepts` | List of paths of existing concepts actually linked in the body; sync after every edit |
| `created`, `updated` | ISO dates; keep the creation date when updating |
| `aliases` | Synonyms, and the name in another language when it disambiguates |
| `tags` | A few stable tags; concepts connect through links |
| `audit` | Link to the approving log, mandatory for validated knowledge; the audit report itself uses `result`, `editor` and `auditor`, with no recursive audit |

Use real lists, not comma-separated strings. Templates with `{{fields}}` need filling in: Obsidian only replaces its native variables such as `{{title}}` and `{{date}}`.

## Evidence and coverage

Every definition, formula, result, figure and claim from the lecturer keeps per-block provenance in the source card or log: destination and section, plus page, time range or code symbol. A generic bibliography is not enough. Notes start with the content: no "what you will learn" goals, evidence boxes, history, traceability or comparisons between lecturers. In the body, only a direct link to the slide when it helps; do not copy the control matrix.

| Provenance | How it is shown |
|---|---|
| Course material | Precise locator in card or log; direct link to the slide in the note when it helps |
| Checked extension | Record the extension, the primary source consulted, its section and, for the web, the date; never attribute it to the lecturer |
| Constructed example | «Own teaching example», with assumptions and checked arithmetic |
| Inference | «Inference pending verification», outside the assessable core |
| Discrepancy | `[!warning] To be resolved`, with both pieces of evidence and their effect |

100 % coverage means every block in scope is recorded and its academic information represented, or its exclusion justified (cover page, duplicate, logistics). It does not mean copying every slide. Never declare complete coverage with unreadable or skipped pages, or with essential incidents still open.

The source card distinguishes **inventoried**, **incorporated** and **audited**. Finding a PDF is not the same as reading it. Bound files and pages before processing.

## Knowledge graph

Inventory candidates in every unit, including secondary ones and prerequisites. Create a concept if it brings a reusable definition, an important prerequisite or a connection between topics. Search names and aliases first. Apply the single table in Connect: every eligible candidate has a motivated decision and a developed destination, a local treatment with a reason, or a temporary pending status with a reason; a pending item blocks approval of the note. Check exhaustiveness against the sources, not just against the central concepts already selected.

Every relation carries a sentence: «A is implemented with B», «A requires B», «A is a special case of B» or «A differs from B in…». The native graph shows links; **the meaning is in the sentence**, not in a supposed typed edge.

The identity rule and the topic / concept / API / pattern / lab split are in [[_system/Placing knowledge|Placing knowledge]]. Similar titles and aliases are candidates for review, not permission to merge. A canonical card must add a transferable mechanism or a contrast without reproducing the topic. Check the meaning of a link by opening its target: a valid path can point to the wrong notion.

Do not create empty concepts to decorate the graph. Candidates that have not been studied yet go as text in the run log. Link each concept at its first useful mention in the note; repeat it only when a new context needs a different relation, and say why.

In topics, labs and implementations, every canonical concept used to understand or apply the content is linked at its first useful mention with readable text: `[[Concepts/Name|text]]`. Do not embed it with `[!concept]-` capsules (a legacy format): the local explanation needed is in the topic and the concept keeps the reusable development. Full topic structure in [[_system/Editorial design#Note format|Note format]].

Apply [[_system/roles/Connect|Connect]]: look for uses in other subjects and compare sections before linking. The canonical concept collects every checked context in `subjects` and links to topics; a link from a new topic does not complete that integration. Explain the shared mechanism, why the transfer is useful and the differences; do not force artificial connections.

Transcripts: keep anchors to the original text. A justified ASR normalisation does not turn a doubtful quotation into a safe literal one. Offline context and teaching reconstruction are labelled separately and do not fill recording gaps. Procedure: [[_system/roles/Transcripts|Transcripts]].

## Code and documentation

A lab identifies file, function or class or notebook cell, version or commit if there is one, and the concepts applied. Label snippets as extracted, adapted or teaching examples.

An API note explains purpose, inputs and outputs, tensor shapes, parameters, a minimal example and failure modes; it includes the official documentation **actually consulted**, with version and date. If it could not be consulted, say so without inventing links. A pattern coordinates reusable APIs; a local implementation explains the symbol and the path through the real program. Templates: [[_templates/template_api|API]], [[_templates/template_code_pattern|pattern]] and [[_templates/template_implementation|local case]].

Tests: `not run`, `failed` or `passed`, with command, environment, date and result. «The user says they pass» is declared evidence, not an execution by the agent.

## Legacy

Notes written before this contract (topics with "At a glance" boxes, `[!concept]-` capsules, whole-page figures) keep their format until their turn to migrate; their previous status does not certify the new contract. When migrating: redo from the source, crop figures with `figuras.py`, replace capsules with links and back up the previous version.
