---
type: system
cssclasses: [second-brain]
tags: [system]
---

# Agent architecture

> [!abstract] A team whose deliverables can be checked
> Agents turn sources into notes, concepts and links to code. Every delivery keeps its evidence and passes an independent review before it is marked as validated.

## What "agent" means here

Agents are **working roles with instructions and contracts**, carried out during a session. These documents do not create permanent processes, background monitoring or scheduled jobs. New material needs a new run: the coordinator works out what is new and decides which roles to activate.

One agent can take on several compatible roles. **Whoever writes a note never signs the independent audit of that note.** If no other agent is available, deliver the useful work as `in_review` and record why. Keep the model and effort level the user selected; do not force a higher one.

## Roles and contracts

| Role | Receives | Delivers | Must not |
| --- | --- | --- | --- |
| Coordinator | Request, MAP, rules and vault state | Scope, batch, assigned files and acceptance criteria | Promise coverage of material nobody has read |
| Intake and evidence | Specific sources and existing notes | Inventory, context, goals, a map of pages or blocks, open questions | Write unreadable text as if it were certain, or infer missing content |
| Note editor | Evidence, subject profile and template | One note per topic, deep enough, with examples and useful links to slides; detailed provenance outside the body | Turn every slide into a bullet list, or fill gaps without saying where the filling came from |
| Concept curator | Notes and the concept catalogue | Canonical concepts, aliases and explained relations | Create empty links or duplicate a concept per subject |
| Transcript interpreter | Original fragments, a backed glossary and the offline sections | Justified ASR corrections, cuts, useful deltas and exam announcements with anchor and uncertainty | Attribute to the lecturer a reconstruction of content that was never recorded |
| Lab integrator | Identified code, assignment and available tests | Concept → implementation explanation, snippets and docs | Claim it ran tests that only the user reports |
| Content auditor | Original sources, the delivery and its coverage log | Located findings, severity and a decision | Accept the editor's summary without checking the source |
| Visual auditor | Markdown, images and the rendered view if available | Checks of formulas, foldable callouts, readability and navigation | Mistake a syntax check for a real visual inspection |

## Coordination rules

1. **Read before writing.** Enter through [[_system/RUN|RUN]] and its selective loading. The coordinator reads MAP and the relevant notes; each editor gets its own package. Do not hand every manual to every role.
2. **One writer per file.** Each file has a single active editor. Auditors report changes; the editor applies them and returns the corrected version.
3. **Share enough evidence.** A handoff includes the source, a locator and open questions, not just conclusions.
4. **Integrate in sequence.** Extraction and audits can run in parallel. The coordinator consolidates shared concepts, indices and profiles at the end to avoid collisions.
5. **Keep the original.** `Raw/` is immutable: never move, rename, overwrite or correct sources. Crops and logs live outside Raw. Executable code lives in `Code/`, outside the vault.

> [!info] Scale to the need
> A short topic shares intake and editing, with a separate auditor. A large batch usually has two editors and one auditor who reviews finished blocks while others are being written. The coordinator owns the shared concepts. Turn on transcript interpretation and labs when they apply, without spawning one agent per role.

## Concept units and owners of results

The [[_system/Ontology and proofs|Ontology and proofs]] contract separates candidate, unit, result, route, appearance and file. Each concept needs its own question and identity. It can hold coherent properties and links its dependencies instead of developing all of them. An exhaustive inventory is not the same as one file per term. A family can have variants without becoming a catalogue; what justifies a split is a change of object or a self-contained explanation, not length.

A result keeps its object, domain, hypotheses and conclusion. A complete proof has one owner per result and route, usually a section of its concept or result, never a third file called "Proof of…". The topic keeps its teaching narrative and applications. Work through every solution the user asked for and do not trim them silently; a check callout can hold a general proof too.

Before writing, the coordinator agrees these boundaries and owners in `ontologia.json`, kept separate from teaching coverage. The curator resolves suspected duplicates and the auditor checks the plan against notes and sources. New packages with integrated content do not close without a plan approved by someone other than the editor, current hashes of every output and a hash of the plan's decisions. Older packages stay as they are until explicitly curated.

The tooling detects signals and validates declarations. It does not decide semantic identity, move text or sign approvals. A migration prepares complete destinations, keeps the deepest reasoning, fixes every consumer and is reviewed before a section is retired.

## Handoff contract

Every run keeps a log in `_system/Logs/`, named by date, subject and batch. It can start with these fields, without inventing pending values:

```yaml
batch: YYYY-MM-DD-subject-description
scope: sources and topics being processed
sources: exact paths, plus version or fingerprint when available
outputs: paths of notes, concepts and images
phase: offline
editor: real identifier of the agent or session
auditor: pending
review: pending
```

The body of the log holds brief context and goals, a link to the canonical JSON coverage, depth decisions, problems, changes and the audit result. Do not copy every row again into source cards and reports. A date or a role name is not evidence of review. Record observed stage and resume times, without inventing token counts.

## Status and provenance are independent

| Note field | Values | What it says |
| --- | --- | --- |
| `phase` | `offline`, `online`, `mixed` | Which process contributed to the current version |
| `status` | `draft`, `in_review`, `validated` | Whether the current version passed the checks |

An offline note **can be validated**; receiving a transcript **does not validate it automatically**. Any substantial change sends the note back to `draft`, keeps the previous log and requires auditing the changes and their consequences. A lab is identified by `type`, not by a fourth phase.

Full metadata follows the [[_system/Note contract|Note contract]]: schema 2, `subjects` as a list and `cssclasses: [second-brain]` on study notes. Layout follows [[_system/Editorial design|Editorial design]].

## Closing criteria

- Every page or block in scope has a justified disposition; exclusions stay visible.
- Core claims, equations and figures have verifiable locators. External extensions are identified and cited; a proposed explanation that was not verified is marked as pending.
- The main reading is enough to study from. Foldable callouts hold extensions, derivations or solutions, never hidden prerequisites.
- Links to concepts and code resolve to existing targets and carry a useful, explicit relation.
- An independent content audit is complete and its findings are fixed. One open material question blocks `validated`.
- Formulas, images and callouts are inspected in the rendered view before visual validation is claimed. If no viewer is available, record **visual pending** and do not present the layout as verified.

> [!warning] What "100 %" means
> Every piece of material **included in the batch** is accounted for and the relevant content is covered. Coverage does not demand new text for content that is already sufficient, and it is not measured by volume. It does not mean the whole subject is complete, or that a missing or unreadable source was processed.

Operating procedure: [[_system/Workflows|Workflows]].

## Semantic coverage and regression control

The coverage unit is still the page or block of the package, but its integration is checked for **every definition, hypothesis, result, property, example and exercise** in it. A heading, a link or a generic target does not prove that its members are developed. Labels such as "reminder", "note", "appendix" or "already known" do not exclude academic content on their own.

Before closing a unit, the editor lists its members and points to where each one is treated in the output, using the `reason` field of the canonical row for that short mapping instead of creating another coverage schema. If the list is long, the field points to a single mapping in the batch log. Exclusions are recorded per member, with reason and applicable authorisation. A necessary prerequisite keeps its local definition and use even if it also has a canonical link.

Online, `already_covered` means an existing treatment was checked, so nothing is written. Each addition fills an identified gap, corrects meaning or captures useful emphasis from the lecturer. It goes briefly into its section, reusing examples and avoiding properties the topic or concept already explains well. Exam announcements, even doubtful ones, are kept according to the Transcripts role and are never discarded as `no_academic_value`. Measure added and net readable academic text separately from formulas, metadata, paths and provenance. The auditor judges necessity and redundancy against the previous note, without universal percentages or quotas.

The auditor compares the whole original unit with each member and its destination, including the end of the source. Having a destination or passing a structural check does not prove sufficiency. A pending review is never inherited as approved, and an audit of new sources does not certify untouched context sources.

In compactions, migrations and other rewrites, compare source → previous version → final version. Check that no core content is lost and that the original did not already have omissions. Content missing from the previous version is not automatically out of scope. Previous approval stays as history, but the review of the affected units and their dependants is reopened; a whole batch is never approved from a sample. If an omission reveals a pattern, extend the check to the neighbouring units of that teaching block and record the real scope.
