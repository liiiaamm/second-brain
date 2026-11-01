---
type: system
cssclasses: [second-brain]
---
# Finding your way around the second brain

[[Home|← Home]] · [[_system/Visual sample|Design sample]]

## The usual path

1. Open **Home** and go into a subject.
2. Pick a topic in its index. The outline panel jumps between sections.
3. Follow links to concepts; use backlinks to find where they are applied.
4. Open the local graph at depth 1–2 to explore manageable neighbourhoods.
5. Go back to the source from the citation next to the formula or figure.

## Finding information

`Ctrl+O` opens a note by name or alias. `Ctrl+Shift+F` searches content. Queries to paste into search:

```text
path:"Subjects/NLP/Notes"
path:"Concepts" "attention"
[status:in_review] -path:"_templates"
```

The [[_indices/Knowledge.base|Bases]] show the properties of knowledge notes. They stay empty until you create notes under the [[_system/Note contract|note contract]].

## What is set up

- Native callouts, links, page preview, outline, properties, Bases and file recovery.
- Templates configured in `_templates`. Fill in the pending fields after inserting one.
- The `second-brain` style, enabled in the config. If it does not show when you open the vault, reload it in Settings → Appearance → CSS snippets.
- A graph coloured by concepts, subjects and labs, with filters that hide infrastructure and originals.

The style only applies to notes with `cssclasses: [second-brain]`, in light and dark themes. Use reading view or Live Preview to see formulas and callouts. If Obsidian was open during a change, you may need to reopen the vault.

## Keeping it light

Crop images at a readable resolution, avoid duplicates and keep PDFs out of the graph's usual path. Bases query properties; they are not semantic search over PDFs or a vector database. There is no need to duplicate the full text of sources to index them.

Workflows are started from [[_system/RUN|the entry prompt]]. **Adding a transcript does not start an agent automatically.** No community plugins or watch jobs are installed. The auxiliary preview in [[_system/Tools|Tools]] helps check formulas and callouts outside Obsidian.

References: [search](https://obsidian.md/help/plugins/search), [Bases syntax](https://obsidian.md/help/bases/syntax), [CSS snippets](https://obsidian.md/help/snippets). The real Obsidian view is still the final design check.
