---
schema: 2
cssclasses: [second-brain]
type: concept
status: draft
audit: ""
phase: mixed
subjects: []
sources: []
concepts: []
aliases: [softmax function, normalised exponential]
created: 2026-11-01
updated: 2026-11-01
tags: [concept, example]
---

# Softmax

**Example note.** It shows what a canonical concept looks like under the [[_system/Note contract|note contract]]: an autonomous mechanism, not a copy of any course topic. The library contract lives in [[Implementations/PyTorch/torch.softmax|torch.softmax]], following [[_system/Placing knowledge|Placing knowledge]].

> [!abstract] The idea
> Softmax turns a vector of arbitrary real scores into a probability distribution that keeps their order. It answers: how do I compare scores that have no common scale, in a way that is differentiable?

A model produces raw scores (*logits*) that can be negative and do not sum to anything in particular. Taking the largest one throws away how close the others were and has no useful gradient. Softmax keeps every score in play, gives more mass to larger ones and lets the gradient flow to all of them.

## Definition and conditions

For $z\in\mathbb{R}^K$, softmax returns the vector $p\in\mathbb{R}^K$ with components

$$
p_i=\frac{e^{z_i}}{\sum_{j=1}^{K}e^{z_j}},\qquad i=1,\dots,K .
$$

Every $p_i$ is strictly positive and $\sum_i p_i=1$, so $p$ lives in the interior of the probability simplex. It is defined for any real vector; nothing has to be normalised beforehand.

## How it works and why

1. **Exponentiate:** $e^{z_i}$ makes every score positive and turns differences into ratios: $e^{z_i}/e^{z_j}=e^{z_i-z_j}$.
2. **Normalise:** dividing by the sum makes the components add up to one.
3. **Read the result:** only differences between scores matter. One unit of difference multiplies the odds by $e\approx2.72$.

> [!example] Example: three scores (own teaching example)
> Data: $z=(2,\,1,\,0)$.
>
> $$
> \sum_j e^{z_j}=e^{2}+e^{1}+e^{0}\approx7.389+2.718+1=11.107,
> \qquad p\approx(0.665,\;0.245,\;0.090).
> $$
>
> The largest score takes two thirds of the mass, but the others keep a share proportional to $e^{-1}$ and $e^{-2}$. Check: the components sum to $1$.

### Only differences matter

Adding the same constant $c$ to every score does not change the output:

$$
\frac{e^{z_i+c}}{\sum_j e^{z_j+c}}=\frac{e^{c}\,e^{z_i}}{e^{c}\sum_j e^{z_j}}=\frac{e^{z_i}}{\sum_j e^{z_j}} .
$$

This is also why implementations subtract $\max_j z_j$ before exponentiating: the result is identical and $e^{z_i}$ can no longer overflow.

### Temperature

Dividing the scores by $T>0$ controls how peaked the distribution is: $p=\operatorname{softmax}(z/T)$. With $z=(2,1,0)$, $T=2$ gives $p\approx(0.507,\,0.307,\,0.186)$ and $T=0.5$ gives $p\approx(0.867,\,0.117,\,0.016)$. As $T\to0$ the mass concentrates on the maximum; as $T\to\infty$ it tends to the uniform distribution.

> [!warning] Not a calibrated probability by default
> Softmax always returns a valid distribution, whatever the scores mean. Whether $p_i$ matches the real frequency of class $i$ depends on how the model was trained, not on softmax.

> [!note]- Going deeper · the gradient
> **Motivation:** training needs $\partial p_i/\partial z_k$.
>
> **Development:** differentiating the quotient,
>
> $$
> \frac{\partial p_i}{\partial z_k}=p_i\,(\delta_{ik}-p_k),
> $$
>
> where $\delta_{ik}$ is $1$ if $i=k$ and $0$ otherwise.
>
> **Conclusion:** raising one score increases its own probability and lowers every other one, in proportion to their current mass. Combined with cross-entropy against a one-hot target $y$, the gradient with respect to $z$ simplifies to $p-y$.

## Where the context changes

- **Classification:** the last layer outputs one score per class and softmax turns them into class probabilities; the axis is the class axis.
- **Attention:** each query compares itself with every key, and softmax normalises those comparisons over the **key** axis, so each query distributes one unit of weight across the keys. The same function, a different axis and a different meaning of the output.
- **Sampling from a language model:** temperature rescales the logits before softmax to trade diversity for precision.

## How it is implemented

[[Implementations/PyTorch/torch.softmax|torch.softmax]] documents the `dim` argument, which decides which axis sums to one.
