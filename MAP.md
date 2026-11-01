# MAP

```text
.
├── AGENTS.md                 pointer for any agent harness → Vault/_system/RUN.md
├── MAP.md                    this file
├── Code/
│   ├── Subjects/<Subject>/   lab repositories, untouched
│   └── Tools/second_brain/   the sc.py toolkit (see its README)
└── Vault/                    open this folder in Obsidian
    ├── Home.md
    ├── _system/              how the system works
    │   ├── RUN.md            entry point: shared rules and what each role loads
    │   ├── Agent architecture.md · Workflows.md · Note contract.md
    │   ├── Placing knowledge.md · Ontology and proofs.md · Editorial design.md
    │   ├── Tools.md · Kev routing.md · Obsidian guide.md · New task prompts.md
    │   ├── roles/            Coordinate, Write, Audit, Connect, Code, Mathematics,
    │   │                     Transcripts, Daily online, Conversations, Research
    │   ├── skills/           didactic-figures
    │   └── Logs/             one log per run (not published)
    ├── _templates/           14 note templates
    ├── _indices/             Obsidian Bases over note properties
    ├── _assets/              figures
    ├── Concepts/             canonical concepts, shared across subjects
    ├── Implementations/      API, pattern and local-case cards
    └── Subjects/             one folder per subject
```

The coordinator reads this file, then `Vault/_system/RUN.md`, then the module for its role and the MOC and profile of the subject in scope.
