---
type: system
cssclasses: [second-brain]
---
# Kev as a routing aid

[Kev](https://github.com/jaredpalmer/kev) is a **decision model** that answers multiple-choice, yes/no or scale questions about a shared text. Its questions share the text but **cannot read each other's answers**. It is not a fuzzy database and does not see the vault on its own. So `contexto sugerir` proposes notes by title and alias, a local Kev classifies a bounded fragment, and the editor opens the candidates and checks definition, sources and links.

```text
bounded input → search by name/alias → open candidates
              → optional Kev votes on class and review signals
              → human/LLM decision with evidence → write → independent auditor
```

The local integration is `ubicar.py`, and it never modifies the vault:

```powershell
& '<python-from-doctor>' 'Code/Tools/second_brain/ubicar.py' --texto 'How torch.gather acts along an axis and what shape the indices have' --consulta 'torch gather'
```

If Kev is **already installed and running** locally following its docs, add `--kev-url http://127.0.0.1:8009`. The script queries `/v1/systemone` with several independent questions in **one request**; it does not download models or install dependencies. With no server, lexical search and the editorial procedure work the same. Text is only ever sent to loopback; a remote endpoint is never accepted by accident. The `ubicacion` profile requires `--consulta`; the others take a fragment of up to 6000 characters through `--texto` or `--archivo`, never a whole topic or three hours of transcript at once.

| `--perfil` | Kev votes | What the proposal is for | What Kev does not decide |
|---|---|---|---|
| `ubicacion` (placement) | Main destination (including «undetermined»), transferability and visible evidence | Choosing which cards to open and where to plan the writing | Whether two concepts are the same, real sufficiency of the evidence |
| `ingesta` (intake) | Input class, visual cues and possible cut/ASR error | Prioritising inspection of PDFs and transcript segments | Excluding an exam without reading it, or claiming a figure is well cropped |
| `enlace` (link) | Explicit relation and relevance of the target | Flagging links worth opening with both excerpts side by side | Verifying path, anchor, equivalence or truth of the relation |
| `revision` (review) | Possible duplication, missing evidence and dense prose | Ordering an audit queue | Approving or rejecting a note |
| `profundidad` (depth) | Ordinal development scale and prerequisite signal | Suggesting whether context, mechanism, example or derivation is enough | Dropping essential steps or setting a note's length |

Intake example, only if Kev is running locally:

```powershell
& '<python-from-doctor>' 'Code/Tools/second_brain/ubicar.py' --archivo 'fragment.txt' --perfil ingesta --kev-url http://127.0.0.1:8009
```

A `choice` vote always picks some option, which is why placement and intake classes include «undetermined». Kev's `confidence` field describes its model's distribution, **not its accuracy on this vault**. No probability promotes a note to `validated`, deletes a candidate or skips a page. If the local index has errors, the tool prints them and exits with code 1; never infer that a card is missing from an incomplete index.

## Evaluate before automating

**Never automate writing from the vote.** Kev's published models are not calibrated to this taxonomy, language or notes. Collect labelled examples of real decisions and hold out a set that is never used to tune questions or train. `evaluar_kev.py` reads a labelled JSONL and reports accuracy and Brier score per question; it does not set a production threshold:

```json
{"state":"The sum of two embedding tables is used as the block input","profile":"ubicacion","labels":{"destino":"patron","transferible":true}}
```

```powershell
& '<python-from-doctor>' 'Code/Tools/second_brain/evaluar_kev.py' --datos 'held-out-eval.jsonl' --kev-url http://127.0.0.1:8009
```

Each label is decided by an editor against notes and sources. Results are broken down per question; for `profundidad` the mean absolute error of the scale is reported too. Pay special attention to costly false positives: merging homonyms, publishing without a source, linking a neighbouring notion or excluding teaching material. If you decide to fine-tune Kev, follow the [official procedure](https://github.com/jaredpalmer/kev#fine-tune-on-your-own-data) and compare against the base model on the same held-out set. The [performance notes](https://github.com/jaredpalmer/kev#what-to-expect) warn about degradation on long texts, which is why only small units are sent. Kev stays a second opinion, never a replacement for [[_system/Placing knowledge|the semantic gate]] or the independent audit.
