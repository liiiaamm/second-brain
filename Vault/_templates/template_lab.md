---
schema: 2
cssclasses: [second-brain]
type: lab
status: draft
audit: ""
phase: mixed
subjects: []
sources: []
concepts: []
created: {{date:YYYY-MM-DD}}
updated: {{date:YYYY-MM-DD}}
tags: [lab]
---

# {{title}}

<!-- Explain the problem and the operations directly. Version log, provenance, commands and pending items go in cards and logs; keep here the paths and symbols needed to follow the program, and the results and limits that affect its interpretation. -->

> [!abstract] From the idea to the program
> {{problem_and_expected_result}}
>
> **Concepts:** {{links_to_existing_concepts}}

## Reference code

| Item | Verified value |
| --- | --- |
| Location outside the Vault | {{real_path_in_Code}} |
| Version | {{commit_or_hash_and_date}} |
| File and symbol | {{file_lines_and_function_or_class}} |
| Environment | {{verified_versions_or_not_available}} |
| Brief | {{existing_source_and_locator}} |

## How the project coordinates

**Entry point:** {{script_cli_notebook_or_public_function_and_locator}}.

**Configuration:** {{parameters_paths_and_state_that_change_behaviour,_with_source}}.

| Module and symbol | Responsibility | Checked relation and evidence |
| --- | --- | --- |
| `{{path_and_symbol}}` | {{role_in_the_result}} | {{calls_receives_returns_configures_or_imports,_and_locator}} |

{{mermaid_only_if_it_clarifies_coordination,_with_labelled_edges_and_evidence,_never_treating_import_as_a_call}}

## The data path

{{inputs_transformations_outputs_and_dimensions_in_short_steps}}

{{where_relevant_separate_training_validation_inference,_learned_state,_checkpoints_and_artefacts,_with_locators}}

> [!tip] Design decision
> {{real_decision_and_reason_backed_by_the_code}}

## Concept ↔ implementation

| Concept | Real symbol | Operation that embodies it |
| --- | --- | --- |
| [[{{existing_concept}}]] | `{{file_and_symbol}}` | {{precise_mapping_and_dimensions}} |

> [!example] An explained fragment
> **Role in the whole:** {{who_calls_the_symbol_and_where_its_result_is_used,_with_locators}}.
>
> {{link_or_path_to_real_lines_and_explanation_in_logical_steps}}
>
> {{if_a_short_fragment_helps,_insert_it_as_a_fenced_block_inside_the_callout_without_copying_the_program}}

> [!note]- Going deeper · {{important_api_or_decision}}
> **Contract:** {{inputs_outputs_dimensions_effects}}
>
> **Use here:** {{how_and_why_it_is_used}}
>
> **From formula to code:** {{matching_variables_axes_reductions_and_assumptions_if_there_is_maths}}.
>
> **Official docs:** {{verified_link_version_and_date_consulted}}

> [!warning] Error or limitation
> {{concrete_problem_symptom_and_check}}

## Results and tests

| Check | Evidence | Result | Provenance |
| --- | --- | --- | --- |
| {{test}} | {{command_or_report,_environment,_date,_version_and_result}} | {{not_run_failed_or_passed}} | {{run_in_session,_supplied_by_user_or_unverified}} |

**Interpretation:** {{what_the_results_show_and_what_they_do_not}}

## What changes in the notes

- [[{{existing_topic}}]] — {{what_is_integrated_and_target_block}}.
- [[{{existing_concept}}]] — {{nuance_or_example_that_is_integrated}}.
