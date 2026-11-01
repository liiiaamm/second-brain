---
schema: 2
cssclasses: [second-brain]
type: source
status: draft
audit: ""
phase: offline
source_id: "{{stable_source_identifier}}"
session_id: ""
subjects: []
sources: []
concepts: []
created: {{date:YYYY-MM-DD}}
updated: {{date:YYYY-MM-DD}}
tags: [source]
---

# {{title}}

> [!abstract] What this source brings
> **Topic:** {{context_and_central_problem}}
>
> **Goals:** {{what_it_aims_to_teach}}
>
> **Thread:** {{why_the_blocks_appear_in_this_order}}

## Identity and reading

| Item | Value |
| --- | --- |
| Untouched original | [[{{existing_raw_path}}]] |
| Type | {{pdf_transcript_brief_or_code}} |
| Author and date | {{documented_or_not_stated}} |
| Session ID (lectures only) | {{subject_date_and_stable_id_or_n/a}} |
| SHA-256 | {{hash_computed_from_the_original}} |
| Checked length | {{real_number_of_pages_or_duration}} |
| Locators | {{physical_pdf_page_or_existing_timestamps_or_original_lines/paragraphs}} |
| Extraction method | {{native_text,_ocr_or_visual_reading,_and_limitations}} |
| Date read | {{date}} |

## Content map

{{blocks,_goals,_prerequisites_and_dependencies_in_a_short_list}}

## Coverage inventory

**Canonical coverage:** {{paths_to_coverage_JSON_per_package_and_version}}. Detailed rows and exclusion decisions live there; do not copy them or keep a second schema in this card.

| Teaching range | Exact destination | Relevant decision / review |
| --- | --- | --- |
| {{real_range_reviewed}} | {{note_and_section_or_pending}} | {{only_depth_decisions_or_issues_that_need_explaining,_and_report}} |

{{summarise_by_block,_no_row_per_page;_take_totals_from_the_tool}}

**Reconciliation:** {{total_units}} = {{integrated}} integrated + {{excluded_with_reason}} excluded + {{pending}} pending + {{blocked}} blocked.

**Justified coverage:** {{integrated_plus_excluded}} / {{total_inventoried_units}}. **Coverage of relevant content:** {{relevant_units_integrated}} / {{total_relevant_units}}. {{never_declare_complete_while_relevant_content_is_pending}}

## Figures kept

**Technical provenance:** {{paths_to_side_JSONs_or_existing_manifest_with_source,_hash,_page,_bbox,_resolution}}. Reuse generated metadata; never transcribe it by hand.

| Resource or group | Destination | Visual check / decision |
| --- | --- | --- |
| {{asset_path_or_manifest}} | {{note_and_block}} | {{legibility,_labels_and_context_verified_or_pending}} |

## Uncertainties and contradictions

> [!warning] {{finding_or_delete_if_none}}
> **Locator:** {{page_or_time}}
>
> **Problem:** {{ambiguous_text,_uncertain_ocr_or_contradiction}}
>
> **Treatment:** {{do_not_invent;_action_needed}}

## Lecture identity and versions

- **Single session:** {{session_id_from_frontmatter_or_n/a}}. Kept when the transcript is corrected or extended.
- **Versions of the original:** {{untouched_paths,_hashes_and_dates_of_each_version}}.
- **Counting rule:** one session can have several files or versions; count by `session_id`, never by hash or by run.

## Processing log

- **Run:** {{identifier,_date_and_owner}}
- **Changes since the previous hash:** {{verified_difference_or_first_intake}}
- **Notes affected:** {{existing_links}}
- **Audit:** {{existing_report_or_pending}}
