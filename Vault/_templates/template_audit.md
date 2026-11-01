---
schema: 2
cssclasses: [second-brain]
type: audit
status: draft
result: pending
editor: ""
auditor: ""
phase: mixed
subjects: []
sources: []
concepts: []
created: {{date:YYYY-MM-DD}}
updated: {{date:YYYY-MM-DD}}
tags: [audit]
---

# {{title}}

> [!abstract] Verdict
> **Result:** {{pending_fit_or_needs_fixes}}
>
> **Scope:** {{exact_notes_and_versions_reviewed}}
>
> **Blockers:** {{number_and_summary}}

## Independence and evidence

| Item | Record |
| --- | --- |
| Author of the notes | {{author_or_agent}} |
| Auditor | {{auditor_different_from_author_or_independent_review_pending}} |
| Date and version audited | {{date_and_hashes_or_run_identifier}} |
| Material actually checked | {{sources_and_locators_read}} |
| Review limits | {{not_checked_and_why}} |

## Checks

| Area | Criterion | Verifiable evidence | Result |
| --- | --- | --- | --- |
| Fidelity | Claims supported; extensions labelled | {{source_and_block}} | {{pending_pass_fail_or_justified_n/a}} |
| Coverage | Every inventoried block has a destination or a reasoned exclusion | {{inventory_and_count}} | {{result}} |
| Depth | Essentials visible; development justified in folds | {{blocks_reviewed}} | {{result}} |
| Mathematics | Notation, dimensions, hypotheses and result correct | {{formulas_and_check}} | {{result}} |
| Figures | Embeds exist, legible, relevant and with a real page | {{figures_and_render_inspected}} | {{result}} |
| Concepts | Every unit reviewed both ways; every heading/definition/method/quantity/property/prerequisite has a decision; every eligible candidate has a development or a pending; every canonical use has a linked first mention, visible context and a target that adds something different from the topic | {{inventory,_targets,_duplications,_semantic_links_and_audit_output}} | {{result}} |
| Connections | Canonical concepts developed and semantic relations verified, with no artificial links | {{links_and_relations}} | {{result}} |
| Code | Version, symbols and tests match the evidence | {{files_and_report_or_n/a}} | {{result}} |
| Presentation | Clean reading with no objectives, traceability or lecturer comparisons; callouts, folds, tables and formulas checked in the real view | {{view_and_evidence_or_not_verified}} | {{result}} |
| Update | Traceable changes without losing valid knowledge | {{comparison_and_source}} | {{result}} |

## Findings and resolution

| ID | Severity | Note and block | Problem and evidence | Fix needed | Resolution and re-check |
| --- | --- | --- | --- | --- | --- |
| {{id}} | {{blocking_major_or_minor}} | {{destination}} | {{finding}} | {{concrete_action}} | {{pending_or_closing_evidence}} |

## Independent close

- **Final verdict:** {{pending_until_evidence_and_fixes_are_reviewed}}
- **Issued by:** {{auditor_different_from_the_writer}}
- **Notes cleared for validation:** {{list_only_after_a_satisfactory_independent_review}}
- **Pending items that block validation:** {{list_or_none_with_evidence}}

> [!warning] Validation rule
> Filling in this template or passing automatic checks does not validate the notes. The writer never self-approves; findings must be closed and the independent review recorded.

The report does not need another recursive audit of itself. `result` is the verdict on the notes; the body identifies the versions reviewed and the checks. A partial academic approval is kept apart from full validation when presentation is still missing.
