---
type: system
cssclasses: [second-brain]
---
# Tools · a reproducible route

The agents never write academic content straight from memory: they go through a small command-line toolkit (`sc.py`, wrapped by `sc.ps1` on Windows) that inventories sources, builds work packages, checks coverage and guards every write. Run it from the workspace root. The launcher only finds a Python interpreter; it does not pick a model or call any API. Do not reinstall dependencies that `doctor` already finds.

> [!note] Command names
> The CLI verbs are kept in their original form (`preparar` = prepare, `estado` = status, `contexto` = context, `paquete` = package, `figura` = figure, `comprobar-paquete` = check-package, `comprobar-fuente` = check-source, `auditar` = audit, `escribir` = write, `terminos` = terms, `vista` = preview, `ontologia` = ontology). Paths below assume the toolkit lives in `Code/Tools/second_brain/` next to the `Vault/`.

```powershell
& './Code/Tools/second_brain/sc.ps1' doctor
& './Code/Tools/second_brain/sc.ps1' preparar --asignatura 'NLP'
```

`preparar` inventories `Raw/` with SHA-256 and extracts only new or changed sources. PDF: text per page. TXT/SRT/VTT/MD: blocks with original line numbers. Other formats are explicitly left pending; read them with their own tool, never skip them. Files with no text need inspection or OCR: the extractor does no OCR and does not interpret matrices.

## Cache and minimal reading

### Daily lecture recordings · a targeted pass

```powershell
& './Code/Tools/second_brain/sc.ps1' preparar --asignatura 'Computer Vision' --archivo 'Vault/Subjects/Computer Vision/Raw/Transcripts/CV 2026-09-09.txt'
```

This updates only that file and keeps the other sources in the index without opening them or recomputing their hashes; it does not certify that the rest is up to date. Then:

```powershell
python Code/Tools/second_brain/diario.py --archivo 'Vault/Subjects/Computer Vision/Raw/Transcripts/CV 2026-09-09.txt' --sesion cv-2026-09-09
```

It returns a manifest and character-bounded segments, with no academic text printed to the console. The session ID must be backed by evidence; several files from the same lecture share a session and keep distinct source identities. Original text, timestamps and hashes are kept. `unidades_sc` maps segments to the 80-line units of the canonical record.

Create or resume the package with the `paquete --fase online` command below, using ID and range from `fuentes.json`. The editor reads assigned segments instead of dumping `paginas.md`; coverage stays in the package JSON. Review every segment linked to a unit before closing it. Never read mechanical segment limits as pauses in the recording. See [[_system/roles/Daily online|Daily online]] for grouping changes by topic.

### Other operations

Before preparing, check status:

```powershell
& './Code/Tools/second_brain/sc.ps1' estado --asignatura 'NLP'
```

Read-only: compares current hashes, caches, packages and coverage. It separates new/changed sources, unassigned, integrated and pending audit, and finds missing files and inconsistencies. Use it when starting or resuming and when closing, not after every paragraph. It does not read pages or certify academic sufficiency, extraction integrity or rendering. A source with no extracted units is still pending. The narrative log never wins over a missing output.

Recovering context and connections:

```powershell
& './Code/Tools/second_brain/sc.ps1' contexto buscar --consulta 'attention' --limite 5
& './Code/Tools/second_brain/sc.ps1' contexto buscar --consulta 'attention' --excluir-asignatura 'NLP' --limite 3
```

Search updates the cache by hash and returns metadata and headings, not full text. The coordinator searches and hands out minimal results; never run indexers in parallel. Results are lexical candidates, not equivalences: read the sections before connecting. Search aliases and the English term. It will not find everything that appears only inside paragraphs; if nothing comes back, run a bounded text search over study notes.

Before creating or renaming a card, also check similar names and aliases:

```powershell
& './Code/Tools/second_brain/sc.ps1' contexto sugerir --consulta 'multi head attention' --tipo concepto --limite 5
```

Similarity is a review list, not a merge decision. Compare definition and assumptions with [[_system/Placing knowledge|Placing knowledge]]. For conversations and decision routing, see [[_system/roles/Conversations|Conversations]].

`ubicar.py` adds Kev profiles **only if a local server is already running**; `evaluar_kev.py` checks its votes against labelled, held-out examples. Options and limits are in [[_system/Kev routing|Kev routing]]. With no server, `ubicar.py` only returns lexical suggestions for `--consulta`; it does not classify text by itself.

For shared concepts, search without exclusion: that filter drops any note that declares the subject, even if it declares others too. The cache in `trabajo/contexto/` excludes Raw, historical files and instructions, and never modifies notes. An index with errors is not exhaustive.

Read `trabajo/<subject-slug>/fuentes.json`: it holds real IDs, hashes, number of units and cache path. Read each source's `mapa.txt` to propose blocks; it is a truncated index and does not replace reading the assigned pages.

The cache is versioned by ID and hash. An earlier extraction can be imported **only if its SHA-256 matches**. That never imports drafts or certifies coverage.

## PDF package for writing

Replace ID and range with values from the index. A package has one source and one range of units; the coordinator groups packages when a topic uses several sources. Never keep two writers on the same topic.

```powershell
& './Code/Tools/second_brain/sc.ps1' paquete --asignatura 'NLP' --fuente 'ID-FROM-INDEX' --unidades '1-20' --lote 'nlp-block-01' --destino 'Subjects/NLP/Notes/Topic 01 - Title'
```

It returns the path to `paquete.md`, which points to `paginas.md` (assigned text), `paquete.json`, `cobertura.json` and contact sheets. The editor inspects every sheet and zooms into every page with relevant visual content. Empty units are not excluded automatically. For transcripts, the range means blocks of lines, not pages or lectures; add `--fase online` and follow [[_system/roles/Transcripts|Transcripts]]. The tool does not detect cuts semantically or fix ASR. A very long line is read in contiguous chunks, keeping the original line and position; never truncate content.

## Extracting a figure

```powershell
& './Code/Tools/second_brain/sc.ps1' figura --asignatura 'NLP' --fuente 'ID-FROM-INDEX' --pagina 7 --recorte '0.05,0.12,0.95,0.95' --dpi 216 --numero 1
```

The crop uses **normalised x0,y0,x1,y1**, origin at the top left of the rendered page. `0,0,1,1` keeps the whole page; use it only if the figure really takes the whole page, and justify it in the card. Inspect before picking coordinates and after saving. The output includes path, page, hash, bbox and pixels. It is saved under `_assets/<Subject>/<id>/<hash>/pNNN-figNN.png`; the hash prevents replacing figures already cited by earlier notes. For another crop of the same original use another number, never overwrite evidence.

## Cropping figures by their caption

For PDFs with numbered captions («Figure 4.1:») this is the normal route: it crops each figure (images + attached vector strokes) without the page text.

```powershell
python './Code/Tools/second_brain/figuras.py' --pdf 'Vault/Subjects/Computer Vision/Raw/lecture-notes.pdf' --paginas 74-101 --tema 4 --destino 'Vault/_assets/Computer Vision/figures-cv' --hoja 'Code/Tools/second_brain/trabajo/review-topic-4.png'
```

`--listar` shows what it would crop without saving. `--nombres names.json` (`{"4.1": "depth-maps"}`) gives descriptive names. `--sin-pies` crops groups of images on slides with no numbered caption (`topic-N-pNNN-figK.png`), grouping by proximity (`zonas_sin_pies()`) every image object within 12pt. Needs `pypdfium2` and `Pillow`. Always check the contact sheet; if a crop fails, redo it with `sc.ps1 figura --recorte`.

**`--sin-pies` cannot tell institutional branding from content.** On branded slides (logo, colour band, footer URL, watermark), those elements are real image objects and proximity grouping can fuse them with the figure, or crop the figure to dodge them. Every `--sin-pies` crop must be opened and compared with the full slide before linking (see [[_system/Editorial design#Figures that teach|Editorial design]] for what must never appear or be cut); if branding enters the bbox or the automatic crop sacrifices real content, use a manual bbox with `sc.ps1 figura --recorte`, tuned on a render with a reference grid, instead of retrying `--sin-pies`.

## Checking and closing

Exams, midterms and solution sets are classified as references: no writing packages and no academic closing of their pages unless explicitly asked. Keep the originals and record the scope exclusion; never delete earlier notes.

```powershell
& './Code/Tools/second_brain/sc.ps1' comprobar-paquete --lote 'Code/Tools/second_brain/trabajo/nlp/lotes/nlp-block-01'
& './Code/Tools/second_brain/sc.ps1' comprobar-fuente --asignatura 'NLP' --fuente 'ID-FROM-INDEX' --cierre
& './Code/Tools/second_brain/sc.ps1' auditar
```

Check each package first. Before closing, run `comprobar-fuente` **for each complete source in the batch scope**, not for unrelated originals that `preparar` happened to inventory. An unrestricted offline pass includes every relevant original; an online pass does not force a review of untouched PDFs used only as context. If the user bounds a range of a source, close its packages with `comprobar-paquete --cierre` and declare the rest out of scope, without faking a close of the whole source. `--cierre` requires rows audited as fit; without it, pending review is allowed but open issues are not. An empty or unextracted source can never pass as zero coverage. `--cierre` also runs the same structure, equation, callout and link guard on every Markdown output assigned to the package; a broken output blocks closing even if coverage is audited. Closing a source propagates that check. Notes outside the package do not block it.

Coverage uses only the targets in `salidas` (outputs) in `paquete.json`. The coordinator can extend that list with context, profile or concept notes that really receive content. Every figure in a row must have its side JSON and match that row's source, hash and page; references to a figure from another page go in the row of its original page.

`auditar` checks metadata, links and sections, delimiters and configuration. **No technical check proves academic sufficiency.** The independent auditor also steps in and the presentation is inspected. An issue is never resolved by relabelling it «fit».

The audit keeps checks for legacy `[!concept]` capsules **only in notes that still contain them**. The current format links the concept at first mention and inserts no capsules. Completeness and link semantics are reviewed with the concept gate and [[_system/Placing knowledge|Placing knowledge]], not by counting capsules.

It includes the `matematicas_md.py` guard: it detects incompatible delimiters, formulas in titles or aliases, and block or table problems. It does not modify notes when auditing. Its normalisation is conservative and does not replace reviewing the change: keep code and metadata, resolve ambiguity by hand, then check links to any modified heading.

## Validated writes

Prepare a candidate with the complete file in `trabajo/`, separate from the note. From the root:

```powershell
& './Code/Tools/second_brain/sc.ps1' escribir --nota 'Vault/Concepts/Metric space.md' --candidato 'Code/Tools/second_brain/trabajo/candidate.md' --comprobar
& './Code/Tools/second_brain/sc.ps1' escribir --nota 'Vault/Concepts/Metric space.md' --candidato 'Code/Tools/second_brain/trabajo/candidate.md' --hash-original 'SHA256-OF-THE-VERSION-READ'
```

The first command checks without writing. The second validates and applies; replace the hash with the real value of the version used for drafting. The gate checks only the candidate, its links and targets; unrelated errors do not block a local fix. It rejects unclosed delimiters, spaces at the edges of inline maths, broken TeX control sequences, blocks without a callout prefix, formulas in aliases or headers, visible paths, incomplete wikilinks and missing targets or sections. Code, comments, YAML and embeds keep their function.

Before replacing the original, it requires at least 90% of its size, keeps an exact backup and checks that the original has not changed in the meantime. `--recorte` allows a planned reduction but keeps the format checks. Raw, configuration and external paths are protected. A passing check proves structure; independent review and the native view are still needed for `validated`.

## Defined terms with no destination

```powershell
& './Code/Tools/second_brain/sc.ps1' terminos --nota 'Vault/Subjects/<Subject>/Notes/<Topic>.md' [--decisiones 'PATH/decisions.json'] [--cierre]
```

Read-only. It classifies each defined term: `ya_enlazado` (already linked), `enlazar` or `seccion` (a target exists), `homonimo_posible` (the concept does not declare the subject), `por_decidir` (defined and with no destination) and `local_propuesto` (no explicit definition). It adds first mentions of existing concepts that are not linked. It never proposes creating cards and never edits notes. `--decisiones` takes `{"decisiones":[{"termino","decision","motivo","destino"}]}`; `--cierre` fails if a `por_decidir` remains without a reasoned decision, an existing target is not linked or a homonym is undecided. The detector is heuristic: it cannot prove that no terms are missing and does not replace the auditor rereading the source.

## Auxiliary format preview

```powershell
& './Code/Tools/second_brain/sc.ps1' vista --nota 'Vault/_system/Visual sample.md'
```

It returns a local HTML file with bundled MathJax, figures, callouts, dark mode, narrow width and expanded details. It is for checking formulas and layout before opening Obsidian; **it does not emulate Live Preview, navigation or every Obsidian embed**. MathJax and its licence ship with the toolkit, so nothing is downloaded on each run. For a bulk TeX syntax check, `verificar_mathjax.py` generates a test page: open it and read the result once the engine finishes. Generating the HTML is not running the check. Zero TeX errors proves neither mathematical correctness nor Obsidian's exact behaviour.

## Resuming

If the batch exists with the same scope, it is reused without deleting coverage or notes. If source or scope change, use a new batch version. The coordinator reads the last log and continues from the last completed stage; it never regenerates approved content because of a usage interruption.

Do not create a second package owning the same units and hash for a fix: reuse the existing one. `comprobar-fuente` reconciles every package of the current version and detects duplicates. A new version of the original keeps earlier evidence and requires comparing changes; never replace old coverage with an automatic approval.

## Inventory and ontology plan

Apply [[_system/Ontology and proofs|Ontology and proofs]] before drafting concepts or distributing proofs. The inventory separates defined candidates, explanatory units, general results and appearances. A list of definitions under a common heading may contain several autonomous units. Read each element and record its decision; never create files automatically from bold text, headings or the number of candidates.

```powershell
& './Code/Tools/second_brain/sc.ps1' ontologia --asignatura 'Advanced Mathematics' --output 'Code/Tools/second_brain/trabajo/inventory-am.json'
& './Code/Tools/second_brain/sc.ps1' ontologia --asignatura 'Advanced Mathematics' --plan 'BATCH-PATH/ontologia.json' --cierre
```

The first command inventories signals in the current notes: similar text, arguments next to canonical links and defined candidates. It does not read the original PDFs by itself and does not prove completeness. The editor reconciles assigned pages or segments, including lists, tables, boxes and prose. The second validates the declared plan; it does not create or move notes and does not approve their meaning.

New packages include `contrato_ontologico: 1`, `contrato_inventario: 1` and a pending `ontologia.json`. Older ones are not rewritten when reused; they adopt the contract when curated. A package with integrated content does not close without a current review of inventory, plan and all its outputs. A fully excluded package keeps its reasons without fabricating academic units.

The plan uses `version: 1` and these collections:

| Field | Declaration |
|---|---|
| `editor` | Identity of whoever made the decisions. |
| `inventario` | `estado` pending/reviewed and `motivo`; an empty list needs an explicit reason. |
| `candidatos` | `id`, `localizador`, `termino`, `decision`, `motivo` and `destino`, except for exclusions. Decisions: reuse, extend, create, section, local, exclude or pending. |
| `unidades` | `id`, `destino`, `pregunta`, `alcance`, reasoned `decision`. The target can be a note or a section; a local candidate points to the topic. |
| `resultados` | `id`, `enunciado` with domain and conclusion, `hipotesis`, `propietario` Concepts/note#section, `estado` resolved/pending and `apariciones`. Only canonical general results. |
| `apariciones` | `destino`, `papel` canonical/reference/application/variant; each variant has an ID, `via` and `autorizacion` or documented teaching provenance. One main canonical and at most one per variant. |
| `revision` | `estado` pending/approved, `revisor` different from the editor, `plan_sha256` and `archivos_sha256` of every declared output. |

Fill in the package skeleton; never paste an example with a fake approval. Purely local solutions are declared as units or candidates, or as application appearances; they do not require inventing a general result. Decisions on candidates and units live here; `cobertura.json` keeps teaching coverage and the logs link both without copying rows.

The auditor receives original sources, plan, notes and relevant earlier versions. After reviewing, it uses `ontologia_md.plan_sha256(plan)` for the plan hash: SHA-256 of the UTF-8 JSON of every key except `revision`, sorted and without separator spaces (`ensure_ascii=False`, `sort_keys=True`, `separators=(',', ':')`). Note hashes are computed on their exact bytes; keys are vault-relative paths ending in `.md`. Any change to a decision, candidate or note invalidates that approval. A written identity and a hash are verifiable version declarations, not a signature that proves independence or quality.

`comprobar-paquete --cierre` requires every real Markdown output to appear in the reviewed plan, on top of coverage and the write guards. Pending items block that close. The coordinator keeps the independent audit report: mechanical signals never authorise splitting, merging, deleting, skipping candidates or marking knowledge as validated on their own.
