---
type: system
cssclasses: [second-brain]
---
# Conversations · integrating what you learned without polluting the vault

Triggered when the user asks to bring into the vault what they learned in a chat connected to the project. The conversation is an **input**, not a verified technical source and not an order to copy the answer. Keep Raw and code untouched. Read [[_system/Placing knowledge|Placing knowledge]], the module for the chosen destination and the candidate sections; do not load the whole vault.

## First pass: what was asked and what was hard to understand

Before routing anything, reread the whole conversation in thematic blocks and, for each one, identify:

- **What was asked**: the concrete doubt, not the LLM's complete answer.
- **How hard it was to resolve**: whether it was settled at once, or needed rephrasing, extra examples or correcting a wrong idea the user had. That real effort to understand is the signal of what deserves a note, not the length of the answer or the number of messages.
- **Whether it was closed**: a point counts as understood when the user stops asking about it and moves on, or uses a closing phrase («ok, I see it now», «that makes sense», «got it», and equivalents). Without one of those two signals the point stays `pending`: it is not written up as resolved and a close that never happened is not forced.

This analysis feeds the card in the next step; it is not written separately and the full transcript is not stored.

## Minimal capture and routing

1. Log in a short card under `_system/Logs/` only the points closed according to the first pass: date, scope, concrete question, the real difficulty and the conclusion the user now understands. Points without a close stay `pending`, with no conclusion or destination yet. If the chat is not accessible or a claim depends on a run you did not see, say so explicitly.
2. Separate claims: **API/documentation**, **conceptual mechanism**, **course decision**, **behaviour of real code**, **preference or trick from one session**. Search destinations by title, alias and nearby terms. For each claim choose a single main destination with [[_system/Placing knowledge|the placement table]]; the others get a link or a short local example.

   **Destination rule for course doubts:** if the doubt is tied to a specific topic of the course (a question about what that topic already explains, even if it was hard to grasp), the default destination is **that same topic**, not a card in `Concepts/`. It moves up to `Concepts/` only when the mechanism reappears outside the subject itself (reappearing in another topic of the same subject is not enough: the topic already covers that with a link). Inside the topic, the point goes in as a nuance or deep-dive, a folded `[!note]-` callout in the section where the doubt already lives, never as a flat paragraph wedged in or hidden in another note. Examples that helped understanding are adapted to the vault's «own example» format but keep their concrete numbers; they are not replaced by an abstract version or summarised elsewhere.

   `contexto sugerir` and the optional [[_system/Kev routing|Kev]] router can propose candidates or a category. Use Kev only if the destination is still ambiguous after searching; send a short claim, not the whole chat. Neither decides identity, level of detail or technical truth; that judgement is documented in the card.
3. Verify: official docs and version for library semantics; a teaching source to attribute something to the course; file, symbol and hash for code; a calculation or a test actually run for results. If evidence is missing, add `pending` to the log; never publish it as fact.
4. **Quality over quantity**: integrate only the point that was hard to understand and got closed, not every claim that appeared in the chat. A topic the user grasped at once, with no visible doubt, generates no note even if it took several messages; a topic with a single question but a real confusion does. A narrow question does not turn the glossary into the story of that exercise, and a long chat does not require writing a lot: a short note that settles the exact point beats a long one full of correct but dispensable filler. If it is already explained, improve the confusing point or its link; do not add another note.
5. Check paths, anchors, link meaning, metadata and the visual render. Log before/after and pending items; send the change to an independent auditor. Without an auditor or native view, `in_review`.

## Example of a split

Suppose a chat asks about `softmax(dim=1)` versus `dim=-1` while building attention, and the user at first confuses which axis each one normalises, until they answer «ah ok, now I get it» after an example with small shapes. That point closed with real difficulty and deserves a card. The general PyTorch card explains **which axis `softmax` normalises**, how a negative axis is read and how to check it with small shapes, and nothing else from the exchange. The concept note explains the normalisation of attention weights if needed; the NLP or CV topic shows why the key axis is normalised in that mechanism. The lab card cites the **real** tensor, symbol and shape only if the code exists. A shape exception specific to one function stays in the lab, not in the general reference.

For `gather` or `scatter`, if the student needs to understand indexed selection or writing, their general contracts and examples deserve their own cards. Their role in DQN, segmentation or a loss is explained where the real program appears. How often `dim=-1` was asked about does not automatically give it more space than these operations; and if that question was settled without friction, it gives it no space at all.

## Templates

Use [[_templates/template_concept|concept]], [[_templates/template_api|API]], [[_templates/template_code_pattern|pattern]] or [[_templates/template_implementation|local implementation]] depending on the decision; [[_templates/template_base|topic]] and [[_templates/template_lab|lab]] when the content belongs to a subject. Modules without real evidence are removed, not filled with assumptions.
