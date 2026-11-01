---
type: system
cssclasses: [second-brain]
batch: "{{batch_id}}"
subjects: []
phase: offline
stage: inventory
updated: {{date:YYYY-MM-DD}}
---
# Batch · {{title}}

## Scope and minimal context

- **Request:** {{result_the_user_asks_for}}.
- **Sources / hashes / units:** {{exact_paths_and_versions}}.
- **Goals and teaching order:** {{stated_or_inferred_and_marked}}.
- **Out of scope:** {{explicit_limit,_without_dropping_requested_sources}}.
- **Real model/effort:** {{observed_or_not_available}}.

## Ownership and packages

| Package / range | Assigned outputs | Real editor | Different auditor | Stage |
|---|---|---|---|---|
| {{package_path}} | {{allowed_paths:_notes,_concepts}} | {{id}} | {{id_or_pending}} | {{inventory_extraction_writing_review_fix_integration_close}} |

## Reconciled coverage

{{links_to_source_cards_and_coverage_JSON_paths}}

**Total:** {{n}} = {{integrated}} integrated + {{excluded_with_reason}} excluded + {{pending}} pending + {{blocked}} blocked. **Review:** {{fit}} fit, {{issues}} with issues, {{unaudited}} not audited.

## Concept inventory per unit

In new packages, reference the inventory and decisions in `ontologia.json`; do not fill in a second table. The table below is only for legacy batches without a plan. Group repetitions and aliases, review every unit and include secondary items and prerequisites. Never copy it into the notes. A unit without candidates is recorded with a reason. Every eligible candidate has a decision and a developed destination or an explicit pending; exclusions are justified too.

| Unit / locator | Candidate / alias | Eligibility and reason | Decision | Destination / section | Search and relations / evidence |
|---|---|---|---|---|---|
| {{unit}} | {{concept_and_aliases}} | {{eligible_or_excluded_and_reason}} | {{reused_extended_new_integrated_in_topic_pending_or_excluded}} | {{path,_section_or_pending_reason}} | {{query,_ends,_result_and_locators}} |

## Ontology plan

{{path_to_ontologia_json_or_single_legacy_table}}. The plan declares the question and scope of each unit, identity and hypotheses of results, owner and route of proofs, and the function of their appearances. Reference it; do not copy its declarations here. Record pending items, user exceptions and the source/route of variants. Approval keeps an editor different from the reviewer, a hash of the decisions and hashes of every output; any change reopens review.

## Quality control

- **Concepts:** {{units_reconciled,_eligible_candidates,_developed_destinations_and_pending_with_reason}}.
- **Connections:** {{uses_searched,_verified_relations_and_updated_canonical_contexts,_or_no_evidence_with_reason}}.
- **Structure:** {{command,_result_and_report_path}}.
- **Academic audit:** {{link_to_independent_report_and_fixes}}.
- **Presentation:** {{viewer,_mode,_theme_and_width_inspected,_or_pending}}.
- **Risks/limitations:** {{only_real_ones}}.

## Resume point

- **Last completed stage:** {{stage_and_package}}.
- **Files already written:** {{paths}}.
- **Exact next action:** {{pending_action_without_repeating_work}}.
- **Blockers:** {{reason_and_what_can_continue}}.

## Measuring this run

| Stage / block | Observed start and end | Result / rework |
|---|---|---|
| {{preparation_writing_review_fix_integration}} | {{UTC_or_not_available}} | {{handover_and_reason_if_repeated}} |

**Total usage of coordinator and subagents:** {{input,_output,_cache,_reasoning_if_the_platform_exposes_it,_or_not_available}}. Never add overlapping intervals as wall time. Never estimate tokens from characters. Never log one event per page.

## Close

{{changes_to_indices,_profiles,_concepts,_sources_and_final_status}}. Tokens/cost: {{real_figure_or_not_available}}, never estimated from words.
