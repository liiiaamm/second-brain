---
schema: 2
cssclasses: [second-brain]
title: "{{readable_title}} - Topic {{n}}"
subject: "{{subject}}"
topic: "{{n}}"
type: topic
status: draft
audit: ""
phase: offline
subjects: []
sources: []
concepts: []
created: {{date:YYYY-MM-DD}}
updated: {{date:YYYY-MM-DD}}
tags: [topic, "{{subject-slug}}"]
---
[[Subjects/{{Subject}}/_MOC|MOC - {{Subject}}]] | [[Subjects/{{Subject}}/Notes/{{previous_topic}}|{{previous_topic_readable}}]] | [[Subjects/{{Subject}}/Notes/{{next_topic}}|{{next_topic_readable}}]]
# {{readable_title}} - Topic {{n}}

<!-- NOTE FORMAT (Editorial design § Note format).
- The navigation line sits right after the frontmatter; drop «previous»/«next» if they do not exist.
- Prose opening, no [!abstract], no «central question», no objectives.
- ## per block of the syllabus, ### per concept or method. Inside: definition → mechanism → formula → example/figure → limit.
- Every figure goes INSIDE an [!example] with an interpretive caption and a link to the physical page of the PDF. Figures cropped one by one with figuras.py; never the whole page by default.
- Tell apart definition, result, proof, application and solution; see _system/Ontology and proofs.md and the plan. Complete proofs live with their canonical owner in Concepts, faithful to the lecturer's route and linked by section; the topic keeps intuition and application without copying proofs.
- Concepts: a [[Concepts/X|text]] link at the first useful mention in the note. No embedded [!concept]- capsules.
- Tables are optional, for comparing; no routine tables of variables or axioms. Diagrams explain a step and replace redundant prose.
- End with ## Exercises ([!exercise] per statement; checks in a folded [!note]-). No «Summary» or «Test yourself».
- Delete this comment and any blocks that do not apply. -->

{{short_opening:_what_the_topic_adds_and_the_necessary_link_to_what_came_before}}

## {{syllabus_block}}

{{sentence_explaining_what_this_block_decides_or_compares}}

<!-- Optional comparison: a table only if it saves reading compared with sentences or a list. -->

### {{concept_or_method}}

{{definition_in_prose_with_a_[[Concepts/Name|link]]_at_first_mention;_what_problem_it_solves}}

{{mechanism:_what_goes_in,_what_changes,_what_comes_out;_a_short_numbered_list_if_it_is_a_sequence}}

$$
{{central_formula}}
$$

{{reading_the_formula:_what_each_symbol_means,_dimensions,_conditions_and_why_it_has_that_form}}

> [!example] Example: {{what_the_figure_shows}}
> ![[_assets/{{Subject}}/figures-{{source}}/topic-{{n}}-figure-{{n.m}}-{{slug}}.png|{{450_to_700}}]]
>
> {{what_to_look_at_in_the_figure_and_what_it_shows;_do_not_copy_the_original_caption}}. [[Subjects/{{Subject}}/Raw/{{file}}.pdf#page={{physical_page}}|p. {{physical_page}}]]

> [!example] Example: {{numerical_case}}
> {{data}}
>
> {{calculation_steps_in_latex}}
>
> {{result_and_interpretation}}

> [!warning] {{limit_or_common_error}}
> {{when_it_fails_or_what_gets_confused_and_why}}

> [!note]- {{conceptual_nuance_or_edge_case}}
> {{conceptual_explanation_without_a_full_proof}}

## Exercises

The statements below are the topic's exercises{{;_say_whether_the_source_has_solutions}}.

> [!exercise] Exercise 1: {{short_title}}
> {{complete_statement_with_data_and_formulas_in_LaTeX}}

> [!note]- Check for exercise {{n}}
> {{authorised_application_or_solution:_data_hypotheses_operations_conclusion;_reference_to_the_canonical_proof_without_copying_it;_delete_if_none}}
