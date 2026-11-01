---
type: system
cssclasses: [second-brain]
---
# Code · understanding the system and its pieces

Read this module when the scope includes labs, new code or an implementation explanation. It does not require an extra agent: it is the editor's responsibility. Load only the relevant lab or implementation template. Keep the user's code, data, results and environment untouched.

**Choose the type before writing:** [[_system/Placing knowledge|Placing knowledge]] separates API reference, reusable pattern and local case. Use [[_templates/template_api|API]] for `torch.gather`, `softmax` and the like; [[_templates/template_code_pattern|pattern]] for general compositions; [[_templates/template_implementation|local case]] only when a real symbol exists in a lab. The lab note holds the global map. The length of a chat never decides the size of a card.

## Read enough, once

1. Bound lab and version: source tree, README or brief, dependencies and relevant configuration. Exclude caches, environments, binaries and bulk data. Do not dump every `.py` into context.
2. Find the real entry point (script, CLI, notebook or public function); follow its calls to the symbols needed to explain the path. Read bodies, not just names and docstrings. Check configuration where it affects behaviour.
3. Record in the package the path, symbol, lines and commit or hash of the files used. Reuse the map if those files do not change; if they do, also review their directly affected consumers. A local change does not force regenerating the whole lab.
4. Never run training, downloads, installs or code with side effects in order to write. If a check is agreed, record the exact command, environment, version and result. A report from the user is supplied evidence, not your own run.

## Global view · the lab

The note must answer «how do these files coordinate to produce the result?»:

- **Entry and configuration:** what runs, what it receives and which parameters and paths control the experiment. A command is presented as run only if it was.
- **Responsibilities:** a table of relevant modules with symbols, role in the system and checked relation. Not a catalogue of every helper file.
- **Path:** origin → transformation/splits → consumer → output; tensor shapes and their meaning where relevant. Separate training, validation and inference if they exist; explain learned state, checkpoint selection and loading, and produced artefacts where present.
- **Coordination:** who calls whom, what it returns, what it shares or modifies and where it is used next. Separate dependency by import, by call and by data flow. `import` does not prove a call; a static call does not prove it ran. Unresolved dynamic dispatch is flagged as such.

Use Mermaid when it clarifies a path with several pieces. Labelled edges (`calls`, `returns`, `configures`, `reads/writes`) backed by nearby symbols and locators. Never draw an ideal architecture foreign to the code. If a simple script reads in three steps, three steps are enough.

## Local view · the implementation

Pick the symbols that embody important concepts, decisions or errors; do not comment line by line or copy every file. Explain:

1. Intuitive purpose and position in the global flow: who uses it and why it needs its output.
2. Contract: inputs, outputs, shape/type/units, preconditions, state and side effects. Separate checked shapes from inferred ones.
3. Logical steps: transformation, reason and consequence; a short snippet only when it helps to see a concrete operation.
4. Concept ↔ operation: tie the real symbol to the canonical concept. Where there is maths, translate variables, axes and reductions, normalisation and assumptions into code expressions; state simplifications or differences, never claiming equivalence from similar names.
5. A minimal example with a reading of the result and a relevant failure or limit. Separate observed from expected results when nothing was run. Use official docs for unfamiliar APIs at the checked version; if they were not consulted, do not invent a reference.

The lab keeps the global map; the local-case card develops one specific piece and links back. The API or pattern card keeps only what is reusable. The concept links to the real use and explains what it illustrates. Never duplicate the same long explanation across the three notes.

A cross-cutting API is documented with no mandatory project path and no incidental solution. The lab links that API and adds the shape, axis and consequence **specific** to its tensor. If a note mixes the general contract with one exercise's implementation, split them when migrating. A general pattern earns its own note only if it coordinates several operations with a reusable decision; otherwise it is explained locally.

## Handover and audit

Hand over only in-scope notes, locators, changes and doubts. Auditor: check one complete input→output path, relations between modules, contracts and the mathematical correspondence; extend to every central path and decision and to the doubtful areas. Check that concept↔use links are navigable and that tests that were not run are labelled as such. An important edge without evidence or an uncertain contract needs a fix or an explicit issue, never a fictitious approval.
