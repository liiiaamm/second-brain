---
type: demo
cssclasses: [second-brain]
aliases: [Note sample]
---
[[Home|Home]] | [[_system/Editorial design|Editorial design]]
# Weighted mean - Sample

**Format sample · a self-made teaching example · not part of any syllabus.** It shows, with trivial content, what a note in this vault looks like: a prose opening, sections per concept, a figure inside an example, an explained formula, a limit, a folded deep-dive and exercises at the end.

An arithmetic mean gives every value the same importance. In many problems that is not what we want: an exam grade weighs more than a lab grade, and a reliable sensor should count more than a noisy one. The weighted mean solves exactly that.

First the formula is defined and read, then the operation is shown with a figure and a calculation, and finally we look at when it stops behaving like a mean.

## Definition and formula

The weighted mean combines $n$ values, giving each a weight that decides how much it contributes to the result:

$$
y=\sum_{i=1}^{n}w_i\,x_i,\qquad w_i\geq0,\qquad \sum_{i=1}^{n}w_i=1 .
$$

$x_i$ is each input value, $w_i$ its (dimensionless) weight and $y$ the result, in the same units as the $x_i$. The two conditions on the weights are what let us call it a *mean*: if the weights are non-negative and sum to one, the result always lies between the smallest and the largest value.

| Kind of mean | Weights | Result with $x=(2,8)$ |
| :---: | :---: | :---: |
| Arithmetic | Equal, $w_i=1/n$ | $5$ |
| Weighted | $w=(0.25,\,0.75)$ | $6.5$ |

### Seeing the operation

> [!example] Example: each value contributes in proportion to its weight
> ![[_assets/system/weighted-mean.svg|600]]
>
> The second value weighs three times as much as the first, so the result sits much closer to 8 than to 2. In a real note, the link to the physical page of the source PDF would go at the end of this caption.

> [!example] Example: a calculation with two values
> Data: $x_1=2$, $x_2=8$, $w_1=0.25$, $w_2=0.75$.
>
> $$
> y=0.25\cdot2+0.75\cdot8=0.5+6=6.5 .
> $$
>
> Check: the weights sum to $1$ and $2\leq6.5\leq8$.

> [!warning] Unnormalised weights
> With weights $1$ and $3$ the weighted sum is $26$, which is not a mean. Divide by the sum of weights: $26/4=6.5$.

> [!note]- Why the result lies between the extremes
> Let $m=\min_i x_i$ and $M=\max_i x_i$. Since $w_i\geq0$, we have $w_i m\leq w_i x_i\leq w_i M$. Summing over $i$ and using $\sum_i w_i=1$:
>
> $$
> m\leq\sum_i w_i x_i\leq M .
> $$
>
> With a negative weight the inequality can flip and the argument no longer holds.

## Exercises

Self-made exercises for the sample.

> [!exercise] Exercise 1: equal weights
> Compute the weighted mean of $x=(2,8)$ with $w=(0.5,\,0.5)$ and compare it with the arithmetic mean.

> [!note]- Check for exercise 1
> $y=0.5\cdot2+0.5\cdot8=5$, the same as the arithmetic mean: with equal weights the two coincide.
