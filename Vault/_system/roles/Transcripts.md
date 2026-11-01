---
type: system
cssclasses: [second-brain]
---
# Transcripts · interpreting without inventing the lecture

**Minimal load:** RUN, this module, the assigned package and related offline sections. Use `template_session` for a new card; if a card for that session already exists, add the fields needed there. Do not duplicate cards or produce a complete corrected transcript: hand localised contributions and changes to the editor.

## 1. Anchor before interpreting

For long daily loads, follow [[_system/roles/Daily online|Daily online]] first: size-based packaging, reading only what is new and consolidating by topic. Do not run a full cycle per technical segment.

- Keep Raw untouched. Record `session_id`, files, hashes and version. Several fragments can belong to one session; do not merge them because their names or dates look close without evidence. Unknown date: a unique provisional ID, never an invented date.
- Read every assigned unit. Extractor blocks are line ranges, not teaching units: if a sentence is cut, read only the contiguous stretch needed.
- Each contribution gets a stable ID tied to **source + hash + original locator**, independent of the corrected text. Use existing timestamps or original line numbers; if there are none, numbered paragraphs in a derived copy bound to the hash. Never fabricate timestamps or overwrite locators from earlier versions.
- Search topic and term in the indices and read their offline section; zoom into specific slides when needed. Do not load the whole subject as context for every fragment.

## 2. Resolving speech recognition

| Qualitative confidence | Treatment |
|---|---|
| High: a single candidate, consistent with the sentence and backed by a concrete source | Normalise in the explanation; record original, proposal, reason and evidence |
| Medium: a plausible reading, with an alternative or weak support | Keep an explicit hypothesis; never turn it into a fact or a lecturer quote |
| Low: unresolved ambiguity or contradiction | A localised issue; keep the safe meaning and continue with other blocks |

A phonetic match alone is not enough. Pay special attention to negations, figures, symbols, dimensions, algorithm names and exam statements. If audio is available, check only the doubtful stretch; if not, state that it was not listened to. A conceptual correction by the lecturer can also contradict the slides: record both, without automatically siding with the offline text.

Keep a **batch-local** glossary of supported terms; reuse it as a hint, never as an automatic global replacement. The auditor reviews every fix that changes meaning. Do not log every filler word or harmless typo.

## 3. Handling cuts and jumps

Identify file boundaries, pause marks and abrupt changes. Tell a **documented cut** apart from a **suspected jump**: an odd transition does not prove lost audio. Never estimate duration or missing content.

Always separate:

- **Lecture evidence:** a contribution backed by an identifiable fragment; any literal quote keeps the original text and flags its doubts.
- **Offline context:** a prerequisite or bridging step explained from a cited note or slide. Record its provenance in the card; never attribute it to the lecturer or add bureaucratic labels in the explanation.
- **Teaching reconstruction:** an inference or self-made example labelled as such; it does not restore what was recorded and does not prove coverage of the gap.

If a transition cannot be rebuilt with enough evidence, keep the gap explicit. Missing transcripts for the first week do not mean missing content, and do not allow claiming that lecture was recovered.

## 4. Integrating only the change

For each contribution, compare with the existing section: `add`, `clarify`, `contradiction`, `already_covered` or `no_academic_value` with a reason. Hand over the exact destination, evidence and the identified gap, meaning fix or useful teaching emphasis that justifies each addition. `already_covered` generates no writing. Integrate briefly in the existing section, without parallel blocks per contribution; never rewrite a whole topic for one clarification. Reuse examples and create your own only if essential; do not duplicate a property already explained well in topic or concept. If a canonical concept is extended, update its explanation once and link from the topic.

Keep exam announcements: in/out of the exam, assessable emphasis, format, materials and dates are never `no_academic_value`, even when doubtful. Explicit specific content: a short note next to the topic section. Logistics and conditions: subject profile plus session card with the original anchor; the card also keeps evidence of the topic note. Flag `confirmed`, `provisional` or `uncertain` by evidence and keep the doubt visible in every destination; an academic repetition does not prove assessable emphasis. Never fix relative dates if the lecture date is unknown, and never turn an ambiguous ASR reading into permission to bring materials.

Identical hash and contribution already integrated: reuse, with no new session and no edit. Extended or corrected file: compare stretches, link old IDs to new ones and review only changes and dependencies; never delete manual contributions. Record the applied version and pending items for resuming.

Fill in the existing `cobertura.json` per unit without changing its schema; the contribution table complements that coverage, it does not replace it. The editor receives deltas; the independent auditor also receives originals, cited context, fixes, cuts and before/after. Priority: meaning changes, contradictions, reconstructions and lecturer statements. Uncertain parts stay `in_review`; uncertainty is never propagated as fact to concepts or profiles. A doubtful announcement can be logged in the profile as `uncertain`, with anchor and explicit doubt; that is not confirming it.
