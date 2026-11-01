---
type: system
cssclasses: [second-brain]
---
# Daily online · hours of lectures without repeating work

This is the usual online path. [[_system/roles/Transcripts|Transcripts]] defines evidence, ASR and cuts; this module organises the work. It does not start watchers or automatic runs. Reading three new hours has an unavoidable cost: what gets reduced is repeated context, repeated editing and redundant documentation, never material skipped by heuristics.

## Local preparation, no model

- Take only the lecture files named, or new and pending ones. Identify subject and session; never group different lectures because they share a day. Do not inventory or re-extract whole PDFs to prepare a transcript.
- Use `diario.py` as described in [[_system/Tools|Tools]]. It produces bounded segments with exact text, version and anchors; it does not summarise them or decide their importance. The character limit stops a single-line transcript from reaching the model whole. A segment is not a topic or a session.
- Register the source with `sc.ps1 preparar --asignatura ... --archivo ...`: only that original, keeping the other index entries. Create or resume its canonical `--fase online` package. `diario.py` is the reading view of that same file and hash; it does not replace its identity. Do not load the whole `paginas.md` on top of the segments. Prepare one package per canonical range, not one per segment.
- An identical hash lets you reuse packaging. A matching segment in another version only suggests reuse: check destination, earlier review and adjacent context before inheriting a decision. A change of negation, context or offline source can invalidate it.

## One read and one retrieval per topic

1. One editor can walk several contiguous segments. Read everything new in scope, keeping only the neighbouring context needed, a supported glossary and a short list of destinations. No agents per segment, and no loading of every lecture's daily history.
2. Classify contributions with anchors: new, clarification, contradiction, already covered, or no academic value with a reason. Declaring «already covered» requires checking the matching section; similar words are not enough. Record silences and doubts without transcribing filler words. Exam announcements are kept with their uncertainty and destination according to Transcripts; they are never «no academic value».
3. Group contributions by topic and retrieve their offline headings and sections together through the index. Keep the consulted sections in that topic's package; do not repeat the same search and read for every mention. Widen evidence only if a doubt requires it.
4. Compare and apply in one coherent edit per topic: every addition must fill an identified gap, fix meaning or add useful teaching emphasis. Integrate briefly in the existing section; «already covered» produces no writing and no parallel blocks. Reuse examples and do not duplicate properties already explained well in topic or concept. Never produce first a long summary of the recording, then a clean transcript, then another version of the notes. Keep manual contributions. Shared concepts: integrate changes once at the end, with a single writer.

Contributions are a short work log, not another narrative note. One row can group repetitions of the same idea with all their anchors; do not split every sentence. Prepare one handover per topic or teaching group, not one per 6,000-character technical block.

## Audit without regeneration

The independent auditor receives the changes, the offline context used and access to every original fragment in scope. It reviews every new contribution, semantic fix, contradiction and bridge, and also checks exclusions and «already covered» decisions to catch omissions. A long source is read in segments, never dropped from scope for its length. An audit bounded to changes does not mean approving what was discarded without checking it.

A second review covers only findings, changes and dependencies; do not repeat the whole read without a systemic reason. On the daily start, untouched notes are not audited again. If the native view is missing, say so once and do not try to install or rebuild Obsidian every session.

## A single close

The daily manifest is a text and reuse index; it **does not replace `cobertura.json` or certify integration**. Keep one canonical coverage and summarise it in the session card. Use each segment's `unidades_sc`: a many-to-many relation, since a segment can cross units and a unit can contain many segments. Reconcile all its segments and contributions before marking a unit integrated or fit; for a single-line transcript that means all its parts. If it has several destinations, the row points to the session card that lists them with anchors, included in the package's `salidas`. Do not copy contribution decisions into the JSON as new states.

- `add/clarify`: integrated only after the change is applied and the destination cited; pending before that.
- `already_covered`: integrated with a checked destination, without rewriting it.
- `no_academic_value`: excluded with a reason; a mixed unit keeps its useful content, including exam announcements.
- `contradiction`: document the versions and the doubt; blocked if it prevents safe integration. Never mark an unresolved issue as fit.

Update one card per session, the batch log and only the affected indices. Save the resume point, destination versions and pending items. Measure per session and stage; do not log one event per sentence. If text already applied reappears, check context and destination changes before deciding it is a no-op; never count it as another lecture.

Measure added text and net change against the previous version: separate readable academic text from formulas, metadata, paths and provenance notes, declaring the criterion used. There is no universal percentage or quota; the auditor judges necessity and redundancy against the earlier notes. Coverage and depth are never proven by volume.
