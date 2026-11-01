---
type: system
cssclasses: [second-brain]
---
# How a subject is organised

[[Home|← Home]]

```text
Subjects/<Subject>/
├── _MOC.md          map of notes: learning path, concepts, labs, coverage   (template_moc)
├── _profile.md      goals, assessment, depth criteria, teaching changes    (template_subject_profile)
├── _style.md        optional: this subject's variations on the note format
├── Notes/           one note per teaching unit: "Topic NN - Title"         (template_base)
├── Labs/            one note per lab: global map of the real code         (template_lab)
├── Sources/         one card per original and per lecture session          (template_source, template_session)
└── Raw/             untouched originals: PDFs, transcripts, briefs
```

Figures go to `_assets/<Subject>/`, logs to `_system/Logs/`, and code stays outside the vault in `Code/`. Nothing in `Raw/` is ever edited; every note points back to it by physical page, timestamp or line.

To start a subject, create the folder, drop the originals in `Raw/` and run the offline prompt from [[_system/New task prompts|New task prompts]].
