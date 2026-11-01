---
name: didactic-figures
description: Create and integrate simple teaching figures while writing or reviewing vault knowledge, whenever an image would make geometry, relations, transformations or processes easier to follow than text.
---

# Didactic figures for the vault

Apply to any subject, concept or implementation in the vault. Choose a figure by the reader's difficulty, without sticking to examples from one subject or forcing an image per section. If a visual representation makes a step understandable that prose or formulas make hard to picture, create it and integrate it into that explanation without waiting to be asked.

## Finding opportunities and explaining the mechanism

While walking through a note, find where it is hard to picture a transformation, follow dependencies, compare cases or understand a quantifier. Consider those points as well as geometric definitions: sequences, convergence, algorithms, flows, changes of representation and conditions that make a result fail. Pick the useful opportunities, with no quota and no bias towards one subject.

A figure answers one concrete question. Show the starting object, the decisive step or relation, and the effect; use labelled panels or arrows for a process. Mark what stays fixed, what changes and what tells two cases apart. In plots, relate curve, error and parameter to the symbols in the text. Avoid generic drawings that only name the concept.

Image and caption must allow a guided reading in one or two sentences. Replace prose that describes exactly the same thing; keep the hypotheses and justifications the drawing does not prove. The goal is to understand with less reading, not to make the note flashier or longer. Do not add a table, a diagram and a paragraph to repeat one idea.

Prefer a useful figure from the course, cropped individually with `figuras.py`. If none exists, or it does not show the relation needed, create a simple **own diagram**. Never attribute an image or added stages to the lecturer.

## Method and style

- Geometry, plots or exact quantities: reproducible drawing through code, SVG or a plotting tool. Check coordinates, scales, set membership and edge cases.
- Relations or processes: simple boxes and arrows showing input, transformation and output. Tell operations, data flow and decisions apart. Do not add stages that are not in the source.
- An illustration that needs a generated image: use the available generation tool and its instructions, and check the result against the formulation. Keep long formulas in Markdown to avoid fake text inside the image.

A moderately priced model must be able to run this flow with the tools available. It does not require switching models, paying for services or installing dependencies by routine.

Clean background, clear lines, few colours with a function, short labels and a readable size. No textures, decorative perspective, mascots or effects. Never use colour as the only distinction: add labels, shapes or different strokes. If there are too many ideas, pick the decisive step or split into a few panels. Check that labels read at narrow width too; a wide sheet with microscopic text does not pass. Prefer a vertical layout, or minimal labels with an external caption, over forcing the reader to zoom.

## Short specification

Before drawing or asking for generation, pin down:

1. **Idea:** what should be understood by looking at the figure.
2. **Objects:** elements and exact names.
3. **Relations:** positions, inclusions, arrows or changes that must hold.
4. **Distinctions:** which cases must not be confused.
5. **Labels:** only the necessary ones; full conditions and formulas go in the caption or the text.
6. **Reading:** what the reader should look at first and what conclusion they can draw.

Do not turn this specification into a long report. It exists to generate and check the resource.

## Integration and checks

Save the stable result in `Vault/_assets/<Subject>/own-figures/` or, if shared, in `Vault/_assets/Concepts/own-figures/`, with a descriptive name and a side JSON. The JSON records `origin: own_diagram`, method, idea, target note and the teaching references that support the formulation, with the source hash when there is one. Never invent a page, bbox or crop provenance for a generated figure.

Open the final image and check academic accuracy, the match between labels and objects, no overlaps, legibility and what the arrows mean. For geometry, also check that the drawing satisfies the inequalities or properties described. If the drawing is an intuition and does not represent the general case, say so in the caption.

Insert it inside an `[!example]`, near the step it clarifies, at a sufficient size and with a short caption that guides the reading order and says what conclusion it supports. Do not duplicate the whole explanation under the image. Label it briefly as **«Own diagram»**. Cite the lecture page only as the source of the definition or mechanism, never as the origin of the image. Extracted figures keep the crop and physical-page contract from Editorial design.

Check the note in light, dark and narrow width. The independent auditor reviews image and formulation; if the native view is missing, keep `in_review` and record that limit as `RUN.md` requires.
