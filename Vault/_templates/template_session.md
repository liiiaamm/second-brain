---
schema: 2
type: source
status: draft
audit: ""
phase: online
source_id: "{{main_source_id}}"
session_id: "{{stable_or_unique_provisional_id}}"
subjects: []
sources: []
concepts: []
created: {{date:YYYY-MM-DD}}
updated: {{date:YYYY-MM-DD}}
cssclasses: [second-brain]
tags: [source, session]
---
# {{title}}

> [!abstract] What this session adds
> {{topics_and_new_material_in_a_few_lines,_without_repeating_the_notes}}

## Identity and originals

- **Lecture date:** {{documented_date_or_not_stated}}.
- **Single session:** {{session_id_and_evidence_that_the_fragments_are_the_same_lecture}}.
- **Offline context consulted:** {{existing_links_to_specific_sections_and_pages}}.

| Original file | Source ID / SHA-256 | Locators and scope | Version / relation to another |
|---|---|---|---|
| {{raw_path}} | {{id_and_hash}} | {{existing_timestamps,_original_lines_or_derived_paragraphs}} | {{new_fragment,_extension,_correction_or_uncertain_relation}} |

**Technical coverage:** {{coverage_JSON_paths_and_existing_cards_per_source}}. {{total}} units = {{integrated}} integrated + {{excluded}} excluded with a reason + {{pending}} pending + {{blocked}} blocked. Count the transcript available, not lecture time that was lost.

## Contributions and changes

| ID / source + hash + locator | Contribution | Basis | Decision and exact destination | Applied / review |
|---|---|---|---|---|
| {{verifiable_id_and_anchor}} | {{idea,_without_transcribing_everything}} | {{lecture,_offline_context_or_reconstruction,_with_citation}} | {{add,_clarify,_contradiction,_already_covered_or_no_academic_value,_with_reason_and_section}} | {{pending,_integrated_or_blocked,_and_independent_review}} |

## Fixes that change meaning

| Anchor | Short original text | Proposal / alternative | Evidence and reason | Confidence / decision |
|---|---|---|---|---|
| {{locator}} | {{literal_uncorrected}} | {{reading_or_unresolved}} | {{located_source_and_audio_checked_or_not_available}} | {{high_medium_low_and_action}} |

## Cuts and discrepancies

> [!warning] {{documented_cut,_suspected_jump_or_contradiction}}
> **Between:** {{real_anchors_before_and_after_or_available_boundary}}.
>
> **What is known:** {{evidence,_without_inventing_duration_or_what_was_said}}.
>
> **Context from the notes:** {{cited_bridge_or_unresolved}}.
>
> **Pending:** {{localised_doubt_and_effect_on_destinations}}.

## Resuming and review

- **Versions applied / earlier IDs:** {{hashes_and_mappings_if_the_original_changed}}.
- **Last change integrated:** {{contribution_id_and_destination}}.
- **Next action:** {{concrete_pending_item_or_none}}.
- **Independent auditor:** {{report_and_scope,_or_reason_for_in_review}}.
- **Sessions counted:** one per confirmed `session_id`; fragments, hashes and re-runs never add sessions.

{{delete_rows_and_sections_that_do_not_apply,_without_hiding_issues}}
