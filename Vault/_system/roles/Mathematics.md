---
type: system
cssclasses: [second-brain]
---
# Mathematics · rigour you can follow

Load only when writing or auditing formal definitions, formulation or proofs. Keep the existing design. Detail means explaining steps and decisions, not piling up symbols or restating a definition in other words.

## Definition and formulation

1. **Question and intuition:** what object or problem we want to describe; a concrete example before abstracting when it helps. State the limits of an analogy.
2. **Precise statement:** domain, quantifiers, hypotheses and the meaning of each symbol; dimensions and units where relevant. Tell a definition apart from a derived property and from a modelling choice.
3. **Reading the formula:** explain each term, operation, normalisation and effect. In optimisation: what is chosen, what stays fixed, objective, constraints and what minimising or maximising means. In probability: variable, distribution and conditioning.
4. **Worked application:** data → substitution → steps → result → interpretation. Check dimensions and a relevant edge case. If an example does not meet the hypotheses, explain why the result cannot be applied.
5. **Connection:** how it is used later and, if there is real code, which operation implements each part and where the implementation approximates or changes the formulation.

The visible core lets the reader understand and use the result. An important formula never appears alone behind a fold, and is never considered explained by an external link.

## Proofs: mandatory destination and fidelity

Apply [[_system/Ontology and proofs|Ontology and proofs]]: distinguish candidate, concept unit, result, route and appearance. A complete general proof has one owner per result and route, in a precise section of a coherent concept; do not put everything in the card of the nearest prerequisite or create one file per proof. The topic keeps meaning, hypotheses, intuition and enough application steps to study from.

Checks and exercise solutions are classified by their argument, not by their callout. Keep solutions the user explicitly asked for; record exceptions and decide the owner without losing depth. When consolidating, keep every step and delta of the most developed version before retiring a copy.

The lecturer's route keeps its original source and page, order, notation, cases and construction. Compare it visually and record the step → destination mapping; do not replace it with an equivalent one. Authorised alternatives are identified separately. An independent auditor checks identity, source, before/after and dependencies; with no native view available, the note stays `in_review`.

## Review

**Note syntax:** `$...$` inline and `$$` on their own lines for display; never `\(...\)` or `\[...\]`. Never hide LaTeX in code, navigation headers or link aliases. Move the formula out of the link and use a plain-text label. In tables, use `\vert`, `\Vert` or `\mid` according to meaning. A norm is never turned into a conditioning bar to dodge a pipe. Generate text with raw strings or safe serialisation so that `\frac` never becomes a control character. Check the rendered view as well as the syntax.

The auditor checks statement, hypotheses, symbols, steps and conclusion against evidence and points to concrete logical gaps. Check signs, indices, boundary cases, dimensions and examples. Check presentation separately: `$$` on their own lines, `>` on every line inside a callout, wide formulas split, and symbols not buried in unreadable tables.
