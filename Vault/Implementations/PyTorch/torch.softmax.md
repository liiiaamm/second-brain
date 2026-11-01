---
schema: 2
cssclasses: [second-brain]
type: implementation
subtype: api_reference
status: draft
audit: ""
phase: mixed
subjects: []
sources: []
concepts: ["[[Concepts/Softmax]]"]
aliases: [softmax dim, F.softmax]
created: 2026-11-01
updated: 2026-11-01
tags: [implementation, api, example]
---
# torch.softmax

**Example note.** An API card under [[_system/Placing knowledge|Placing knowledge]]: it answers what the operation does in general, not how one lab used it. The mechanism is in [[Concepts/Softmax|Softmax]].

> [!abstract] The operation in one sentence
> Applies [[Concepts/Softmax|softmax]] along one axis of a tensor, so that the values along that axis are positive and sum to one; every other axis is left as independent slices.

## Contract and axes

| Input or parameter | Shape / type | Meaning and condition |
| :---: | :---: | :---: |
| `input` | any shape, floating point | Scores (logits) |
| `dim` | `int` | The axis that will sum to one; negative values count from the end |

**Output:** same shape and dtype as `input`. Each 1-D slice taken along `dim` is a probability distribution. Large logits do not overflow: `torch.softmax(torch.tensor([1000., 1001.]), 0)` returns `[0.2689, 0.7311]`.

## Minimal example

> [!example] The same tensor, two different axes
> ```python
> import torch
> x = torch.tensor([[1., 2., 3.],
>                   [1., 1., 1.]])
> torch.softmax(x, dim=-1)   # each ROW sums to 1
> # tensor([[0.0900, 0.2447, 0.6652],
> #         [0.3333, 0.3333, 0.3333]])
> torch.softmax(x, dim=0)    # each COLUMN sums to 1
> # tensor([[0.5000, 0.7311, 0.8808],
> #         [0.5000, 0.2689, 0.1192]])
> ```
>
> **Reading:** `dim` names the axis you sum over to get one. With `dim=-1` the first row becomes the softmax of $(1,2,3)$; with `dim=0` each column is normalised on its own, so the first column of two equal scores becomes $(0.5,\,0.5)$.

> [!warning] Picking the axis by habit
> `dim=1` and `dim=-1` coincide only for 2-D tensors. In attention, scores usually have shape `(batch, heads, queries, keys)`; normalising over keys needs `dim=-1`, while `dim=1` would normalise across heads and still return numbers that look plausible. Check with a small tensor: `out.sum(dim=-1)` must be all ones.

## Where it is used

In attention, the score matrix is normalised over the key axis so that each query spreads one unit of weight over the keys. In classification it is applied over the class axis, though training code usually feeds raw logits to `cross_entropy`, which applies `log_softmax` itself.

Official docs: [torch.nn.functional.softmax](https://pytorch.org/docs/stable/generated/torch.nn.functional.softmax.html); `torch.softmax` gives the same result (checked on the example above).
