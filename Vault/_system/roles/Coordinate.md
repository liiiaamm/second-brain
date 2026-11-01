---
type: system
cssclasses: [second-brain]
---
# Coordinate · operating instructions

**Classify before generating:** exams, midterms and solution sets are references by default, excluded from topic and lab generation and from coverage closing. Record path and reason in the batch without writing exam notes. If the type is ambiguous, check the cover page and context; do not exclude a topic just because it mentions «exam». Behave differently only when explicitly asked to analyse or solve. Notes already created are kept.

**Start-up fork:** online follows [[_system/roles/Daily online|Daily online]] and a targeted `preparar --archivo` for each selected original; do not run a global `estado` or prepare all of Raw as a daily routine. Everything else keeps the route below. Code applies [[_system/roles/Code|Code]], and formulation and proofs apply [[_system/roles/Mathematics|Mathematics]], only in the relevant blocks.

1. Read MAP, MOC or subject profile and the current log. Run `sc.ps1 estado --asignatura ...`: check the narrative against current files and coverage. Bound new material by path and hash; prepare only when extraction is missing or the source changed. Open or resume a [[_templates/template_batch|batch log]]. An equal hash lets you reuse extraction; it does not imply that writing or auditing is complete.
2. Read the heading map; split by complete concepts, grouping repeated slide animations. Every page is assigned to a block. The auditor can then check originals without losing context.
3. Reuse a package with the same scope or create one with `sc.ps1 paquete`. Problem, prerequisites per section, inventory of concept candidates per unit, allowed outputs and next action fit in its handover; do not produce a long summary before the notes. `salidas` in `paquete.json` assigns exclusive write access. One coverage row per unit; multi-source topics link several cards. No full history and no text outside the block.
4. One editor per file. Small batch: one editor combines intake, writing and online interpretation, plus one independent auditor. Large batch: usually two editors and one auditor, within the concurrency available. Never spawn agents per page or per concept. Close manageable teaching blocks (around 10–25 pages, adjusted to density) and audit each handover while others keep writing. Do not wait until the end of the whole subject, and do not split an argument halfway to hit a number.
5. The editor hands over files and a summary of paths, issues and changes; it does not paste notes into messages. The coordinator reconciles every eligible candidate of each unit with [[_system/roles/Connect|Connect]], leaving a decision and destination, or pending, per candidate: search other uses, verify both ends, update contexts and canonical metadata and then indices. «Concepts connected» is not done just because links were inserted in the topic. Do not rewrite outputs that already meet the design.
6. Check the package before the semantic audit. Send originals, contact sheets and outputs; the auditor sees formulas and figures, not just extracted text. Keep one list of findings; the editor fixes and the auditor verifies changes and dependencies. Record the review of units according to the report, without mass approval from a sample. When closing: `comprobar-fuente --cierre` for complete sources in scope; if only a range was asked for, `comprobar-paquete --cierre` and declare the partial scope. Do not drag in sources used only as context. One general audit; after changes, repeat the affected checks, not the whole battery without reason.
7. Online requires [[_system/roles/Transcripts|Transcripts]]: a stable session, doubtful terms and cuts; extract contributions and compare them with the offline sections found by search. Apply only changes, without regenerating the syllabus or a full clean transcript. Labs: file and symbol, version, concepts and checks with evidence.
8. One card per source, not duplicated on each run; for a lecture session use the [[_templates/template_session|session template]] according to its identity. Point to the coverage JSON as the source of truth; cards summarise ranges and destinations, they do not replicate 300 rows. The MOC reflects real states; the profile only new evidence. Update stage and resume point after each handover or block. Log the start and end of stages, the real model and effort, and usage when available; without telemetry write «not available», never convert words into tokens.

**Interruption:** update the resume point in the batch. If an agent fails because of a limit, keep partial handovers out of the indices and resume with the same package. Never rewrite or declare complete an unreviewed block just because another one finished.

**Cost:** keep the chosen model and effort. Do not repeat blocks to compare models unless a test was requested. Measure total cost including auditor and retries; parallelism can reduce waiting but does not guarantee fewer tokens. Avoid redundant searches, previews and status waits; never cut coverage or essential depth.

## Reviewing scope after omissions

Apply [[_system/Agent architecture#Semantic coverage and regression control|semantic coverage control]]. Hand out complete units with their academic members; check that the last pages and reminders are assigned. For a repeated omission, widen to the neighbouring teaching block and give the auditor originals and before/after; do not limit the fix to the first example found. Reuse the owning package and update only the affected rows and dependencies, without extending approval to the rest of the source.

## Preparing the partition before writing

Read [[_system/Ontology and proofs|Ontology and proofs]] for concepts or proofs. Agree on questions and boundaries of units, identity and hypotheses of results and an owner per route before assigning files. Do not assign proofs to the note of the nearest prerequisite or open files for every incidental result.

In new packages, complete `ontologia.json` without duplicating `cobertura.json`; resolve its pending items and get an independent review bound to hashes before closing. When curating, run the harness inventory and classify every suspicion: copy, relevant application, reference or distinct route. Review user changes and sources; keep depth and explicit exceptions. A signal report with no errors is not semantic approval.
