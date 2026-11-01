---
type: system
cssclasses: [second-brain]
---
# Prompts for a new task

Open the workspace in your agent harness and pick your usual model and effort level. These prompts do not change the model selector and do not need any chat history. Replace the fields in brackets with real names or paths. `AGENTS.md` is the short pointer at the workspace root that sends every agent to [[_system/RUN|RUN]].

## Offline · notes from original sources

Exams and their solutions are kept as references; uploading them does not trigger note generation or automatic solving, unless explicitly asked.

```text
Process [subject] in offline mode following AGENTS.md and Vault/_system/RUN.md. Before editing notes, read Vault/_system/Editorial design.md in full and the relevant template. Keep the selected model and effort. Reconcile every original in scope, reuse what is verified and complete only new and pending material. Require enough depth on central concepts, readable figures, a pleasant visual composition and checked connections between subjects. Run an independent audit per block, fix findings and update concepts and indices. Log time and observable usage without inventing them.
```

## Online · transcripts with errors and cuts

```text
Integrate the transcripts [paths or folder] into [subject] in online mode following AGENTS.md and Vault/_system/RUN.md. Before editing notes, read Vault/_system/Editorial design.md in full and keep its visual composition. Keep the selected model and effort. Follow Daily online: prepare only those files, read bounded segments, recover context once per topic and consolidate its changes together. Apply Transcripts for doubtful terms and cuts without inventing what was not recorded. Develop new maths with intuition and rigour. Audit contributions and exclusions, keep canonical coverage and avoid duplicating sessions or rewriting untouched topics. Log time and observable usage.
```

## Improving existing notes · bounded scope

```text
Review [specific topics or concepts] following AGENTS.md and Vault/_system/RUN.md. Read Vault/_system/Editorial design.md in full before editing. Keep the selected model and effort. Keep what is correct and fix gaps in explanation, justifiable missing connections and visual composition problems. Apply Write and Connect, audit the changes and update the context of shared concepts. Do not regenerate the whole subject.
```

If the agent runs outside the workspace, give it the workspace root first. For code use `practicas` mode and name the files. A missing review or view keeps `in_review` with a reason; never fake a validation.

## Code · a lab and its pieces

```text
Document [lab path] in practicas mode following AGENTS.md and Vault/_system/RUN.md, with the selected model and effort. Read Vault/_system/Editorial design.md in full before editing and apply its visual composition to code and formulas. Apply Code: explain the global path from input to result, how the modules coordinate and how the important pieces work locally. Connect real symbols and operations to concepts and formulas, using Mathematics where relevant. Keep the code as is, avoid copying it whole or running training to document it. Audit the relations and contracts; state which checks were really verified.
```

References: [[_system/RUN|minimal entry]] and [[_system/Tools|reproducible tools]].
