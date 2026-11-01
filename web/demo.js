(() => {
  "use strict";
  const $ = (id) => document.getElementById(id);

  // ------------------------------------------------------------------ the source: four pages in Raw/
  const PAGES = [
    {
      t: "7.1 Scores",
      html: `<p>A query <i>q<sub>i</sub></i> asks, a key <i>k<sub>j</sub></i> answers. Their match is the scaled dot product</p>
             <p style="text-align:center"><i>s<sub>ij</sub> = q<sub>i</sub>·k<sub>j</sub> / √d</i></p>
             <p>Without the √d, scores grow with the dimension and softmax saturates.</p>`,
    },
    {
      t: "7.2 Definitions",
      html: `<ul><li><b>Logit</b>: an unnormalised score.</li>
             <li><b>Softmax</b>: turns logits into weights that sum to 1.</li>
             <li><b>Temperature</b> <i>T</i>: divides the logits first. Low <i>T</i> sharpens, high <i>T</i> flattens.</li></ul>`,
    },
    {
      t: "7.3 Attention weights",
      html: `<p><i>α<sub>ij</sub> = softmax<sub>j</sub>(s<sub>ij</sub>)</i>: for each query, the weights over the <b>keys</b> sum to 1.</p>
             <svg class="mini" width="150" height="74" viewBox="0 0 150 74" aria-hidden="true">
               ${[0, 1, 2].map((r) => [0, 1, 2].map((c) => `<rect x="${8 + c * 26}" y="${6 + r * 22}" width="22" height="18" rx="2" fill="#0c716f" opacity="${[[.6, .25, .15], [.2, .7, .1], [.33, .33, .34]][r][c]}"/>`).join("")).join("")}
               ${[0, 1, 2].map((r) => `<text x="92" y="${19 + r * 22}" font-size="10" font-family="monospace" fill="#6b6f78">→ Σ = 1</text>`).join("")}
             </svg>
             <p>Output: <i>o<sub>i</sub> = Σ<sub>j</sub> α<sub>ij</sub> v<sub>j</sub></i></p>`,
    },
    {
      t: "Before next week",
      html: `<p>The derivation of the √d scaling <b>will be on the exam</b>.</p>
             <p>Office hours move to Thursday, 16:00.</p>`,
    },
  ];
  const plain = PAGES.map((p) => p.t + "\n" + p.html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
  let HASH = PAGES.map(() => "…");

  // ------------------------------------------------------------------ roles
  const ROLE = {
    start: ["Start", "#6b6f78"],
    tool: ["sc.py", "#4b5563"],
    coord: ["Coordinator", "#6f4caf"],
    editor: ["Editor", "#b16315"],
    gate: ["Write gate", "#c4563a"],
    auditor: ["Auditor", "#0c716f"],
    connect: ["Connect", "#19844f"],
  };

  // ------------------------------------------------------------------ the replay
  const STEPS = [
    {
      who: "start",
      say: "Four new lecture pages land in Raw/. The vault has nothing on attention yet.",
      log: [["tool", "dim", "waiting for a run…"]],
    },
    {
      who: "tool",
      say: "The toolkit inventories every page with SHA-256. Raw/ is read, never edited.",
      log: [["tool", "", "sc.py preparar --asignatura NLP"], ["tool", "ok", "4 units · 4 new · 0 changed"]],
      do(s) {
        s.hashed = true;
        s.cov = PAGES.map(() => ({ st: "pending", dest: "—", rv: "—" }));
      },
    },
    {
      who: "coord",
      say: "The coordinator cuts one package out of whole teaching units and gives every output exactly one writer.",
      log: [
        ["coord", "", "paquete nlp-07 · units 1–4"],
        ["coord", "", "Notes/Topic 07 → editor · Concepts/* → connect"],
        ["coord", "", "auditor: a different agent"],
      ],
      do(s) {
        s.terms = [
          ["logit", "pending", "—"],
          ["softmax", "pending", "—"],
          ["temperature", "pending", "—"],
          ["attention weights", "pending", "—"],
        ];
      },
    },
    {
      who: "editor",
      say: "The editor reads pages 1–3, images included, and drafts the topic note. It decides on three of the four terms and quietly skips one.",
      log: [["editor", "", "read p1–p3 + contact sheet"], ["editor", "", "draft Notes/Topic 07 - Attention.md"]],
      do(s) {
        s.reading = [0, 1, 2];
        s.cov[0] = { st: "integrated", dest: "Topic 07 §Scores", rv: "—" };
        s.cov[1] = { st: "integrated", dest: "Topic 07 §Weights", rv: "—" };
        s.cov[2] = { st: "integrated", dest: "Topic 07 §Weights", rv: "—" };
        s.terms[0] = ["logit", "local", "support term, no question of its own"];
        s.terms[1] = ["softmax", "link", "Concepts/Softmax exists, same object"];
        s.terms[3] = ["attention weights", "local", "it is this topic"];
        s.note = { v: 1, status: "draft" };
      },
    },
    {
      who: "editor",
      say: "Page 4 looks like logistics, but exam announcements are never thrown away. The content goes into the topic and the logistics into the subject profile.",
      log: [["editor", "", "read p4 · exam announcement → topic"], ["editor", "", "office hours → _profile.md (confirmed)"]],
      do(s) {
        s.reading = [3];
        s.cov[3] = { st: "integrated", dest: "Topic 07 ⚠ + _profile", rv: "—" };
        s.exam = true;
        s.side.push({ k: "profile" });
      },
    },
    {
      who: "gate",
      say: "Nothing goes straight into a note. The draft goes through the write gate first, and it bounces.",
      log: [["gate", "", "sc.ps1 escribir --comprobar"], ["gate", "bad", "✗ §Scores: \\( … \\) delimiter, use $…$"]],
      do(s) {
        s.reading = [];
        s.gateErr = true;
        s.side.push({ k: "gate-bad" });
      },
    },
    {
      who: "gate",
      say: "Fixed and re-submitted. It passes: structure, maths and links are checked, a backup is saved, and the note moves to in_review.",
      log: [["editor", "", "fix delimiter → $\\sqrt{d}$"], ["gate", "ok", "✓ maths · callouts · links · backup saved"]],
      do(s) {
        s.gateErr = false;
        s.side = s.side.filter((c) => c.k !== "gate-bad");
        s.side.push({ k: "gate-ok" });
        s.note = { v: 2, status: "in_review" };
      },
    },
    {
      who: "auditor",
      say: "A different agent audits, with the original pages open instead of the editor's summary. It finds two things the gate can't see.",
      log: [
        ["auditor", "", "open p1–p4 next to the note"],
        ["auditor", "bad", "BLOCKING §Weights: normalised over queries, p3 says keys"],
        ["auditor", "bad", "MAJOR p2 defines temperature: no decision"],
      ],
      do(s) {
        s.flag = [1, 2];
        s.err = true;
        s.terms[2] = ["temperature", "por_decidir", "terminos --cierre fails"];
        s.cov[1].rv = "issue";
        s.cov[2].rv = "issue";
        s.side.push({ k: "findings" });
      },
    },
    {
      who: "editor",
      say: "The editor fixes both. Temperature doesn't get a new card: Softmax already has a section that answers it.",
      log: [["editor", "", "§Weights: over the keys"], ["editor", "", "temperature → Concepts/Softmax#Temperature"]],
      do(s) {
        s.flag = [];
        s.err = false;
        s.fix = true;
        s.terms[2] = ["temperature", "section", "Concepts/Softmax#Temperature"];
        s.note = { v: 3, status: "in_review" };
      },
    },
    {
      who: "auditor",
      say: "The re-check covers only the findings and whatever they touch, not the whole batch again.",
      log: [["auditor", "ok", "2/2 findings closed"], ["auditor", "ok", "p1–p4 reviewed: fit"]],
      do(s) {
        s.closed = true;
        s.cov.forEach((r) => (r.rv = "fit"));
      },
    },
    {
      who: "connect",
      say: "Connect writes the other direction of the link: Softmax now lists attention as a real use, so the link works both ways.",
      log: [["connect", "", "Concepts/Softmax.md · subjects + NLP"], ["connect", "", "+ use: attention normalises over keys"]],
      do(s) {
        s.side.push({ k: "concept" });
      },
    },
    {
      who: "tool",
      say: "Only now is it validated. Coverage is closed, the audit is approved and the rendered view has been checked.",
      log: [["tool", "ok", "comprobar-paquete --cierre ✓ 4/4 fit"], ["auditor", "ok", "view: light · dark · narrow ✓"]],
      do(s) {
        s.note = { v: 3, status: "validated" };
        s.done = true;
      },
    },
  ];

  // ------------------------------------------------------------------ state at step i
  function stateAt(i) {
    const s = { hashed: false, cov: [], terms: [], reading: [], flag: [], note: null, side: [], log: [] };
    for (let k = 0; k <= i; k++) {
      if (STEPS[k].do) STEPS[k].do(s);
      STEPS[k].log.forEach((l) => s.log.push({ l, step: k }));
    }
    return s;
  }

  // ------------------------------------------------------------------ rendering
  const pill = (v) => `<span class="pill p-${v.replace(/\s/g, "_")}">${v}</span>`;

  function renderPages(s) {
    $("pages").innerHTML = PAGES.map((p, i) => {
      const cls = ["page", s.hashed ? "hashed" : "", s.reading.includes(i) ? "reading" : "", s.flag.includes(i) ? "flag" : ""].join(" ");
      return `<article class="${cls}"><span class="pn">p${i + 1}</span><h4>${p.t}</h4>${p.html}<div class="hash">sha256 ${HASH[i]}</div></article>`;
    }).join("");
  }

  function renderLog(s, i) {
    const el = $("log");
    el.innerHTML = s.log.map(({ l: [r, cls, t], step }) => {
      const [name, col] = ROLE[r];
      return `<li class="${step === i ? "new" : ""}"><span class="r" style="color:${col === "#4b5563" ? "#c9cbd1" : col}">${name}</span> <span class="${cls}">${t.replace(/</g, "&lt;")}</span></li>`;
    }).join("");
    el.scrollTop = el.scrollHeight;
  }

  let prevCells = {};
  function renderTables(s) {
    const cells = {};
    const tb = $("cov").tBodies[0];
    tb.innerHTML = s.cov.length
      ? s.cov.map((r, k) => {
          const a = `p${k + 1}`, key = (c) => (cells[a + c] = c === "s" ? r.st : c === "d" ? r.dest : r.rv);
          const ch = (c) => (prevCells[a + c] !== undefined && prevCells[a + c] !== key(c) ? "changed" : (key(c), ""));
          return `<tr><td>${a}</td><td class="${ch("s")}">${pill(r.st)}</td><td class="${ch("d")}">${r.dest}</td><td class="${ch("r")}">${r.rv === "—" ? "—" : pill(r.rv)}</td></tr>`;
        }).join("")
      : `<tr><td colspan="4" style="color:var(--mut)">no package yet</td></tr>`;
    const tt = $("terms").tBodies[0];
    tt.innerHTML = s.terms.length
      ? s.terms.map(([t, d, why]) => {
          const ch = prevCells["t" + t] !== undefined && prevCells["t" + t] !== d ? "changed" : "";
          cells["t" + t] = d;
          return `<tr><td>${t}</td><td class="${ch}">${pill(d)}</td><td>${why}</td></tr>`;
        }).join("")
      : `<tr><td colspan="3" style="color:var(--mut)">inventoried by the coordinator</td></tr>`;
    prevCells = cells;
  }

  function renderNote(s) {
    const n = s.note;
    $("notepath").textContent = n ? "Subjects/NLP/Notes/Topic 07 - Attention.md" : "Subjects/NLP/Notes/";
    if (!n) {
      $("note").innerHTML = `<p class="empty">No note yet. Nothing gets written before the source is inventoried and a package exists.</p>`;
      return;
    }
    const sqrt = s.gateErr ? `<code class="raw">\\(\\sqrt d\\)</code>` : n.v === 1 ? `<code>\\(\\sqrt d\\)</code>` : `√d`;
    const over = s.err ? `<mark class="err">over the queries</mark>` : s.fix ? `<mark class="fix">over the keys</mark>` : `over the queries`;
    const denom = n.v === 3 ? `Σ<sub>m</sub> exp(s<sub>im</sub>)` : `Σ<sub>m</sub> exp(s<sub>mj</sub>)`;
    const sm = n.v === 3 ? `<a class="wl" href="https://github.com/liiiaamm/second-brain/blob/main/Vault/Concepts/Softmax.md">softmax</a>` : "softmax";
    const temp = s.fix
      ? ` <mark class="fix">Dividing the scores by a <a class="wl" href="https://github.com/liiiaamm/second-brain/blob/main/Vault/Concepts/Softmax.md">temperature</a> T first makes the weights sharper or flatter.</mark>`
      : "";
    $("note").innerHTML = `
      <div class="meta">${pill(n.status)} <span>type: topic</span><span>phase: offline</span><span>concepts: ${n.v === 3 ? "[Softmax]" : "[]"}</span></div>
      <div class="nav">MOC - NLP | Topic 06 | Topic 08</div>
      <h5>Attention - Topic 07</h5>
      <p>Topic 06 turned tokens into vectors. This topic shows how each position decides which other positions to read from.</p>
      <h6>Scores</h6>
      <p>Each query is compared with every key through a scaled dot product:</p>
      <span class="f">s<sub>ij</sub> = q<sub>i</sub>·k<sub>j</sub> / √d</span>
      <p>Dividing by ${sqrt} keeps the scores from growing with the dimension, which would push ${sm} into saturation.</p>
      ${s.exam ? `<div class="co warning"><b>Exam announcement · confirmed</b>The derivation of the √d scaling will be asked. <span style="color:var(--mut)">p. 4</span></div>` : ""}
      <h6>Weights</h6>
      <p>The scores are normalised with ${sm} ${over}, so each set of weights sums to one.${temp}</p>
      <span class="f">α<sub>ij</sub> = exp(s<sub>ij</sub>) / ${denom}</span>
      <div class="co example"><b>Example: each row is one query</b>A 3 × 3 weight matrix where every row sums to 1: query <i>i</i> spreads one unit of attention over the keys. <span style="color:var(--mut)">p. 3</span></div>
      <p>The output mixes the values with those weights: <i>o<sub>i</sub> = Σ<sub>j</sub> α<sub>ij</sub> v<sub>j</sub></i>.</p>`;
  }

  function renderSide(s) {
    const html = s.side.map(({ k }) => {
      if (k === "profile")
        return `<div class="card"><div class="t">_profile.md · Assessment</div>Office hours: Thursday 16:00 · ${pill("confirmed")} <span style="color:var(--mut)">p. 4</span></div>`;
      if (k === "gate-bad")
        return `<div class="card gate-bad"><div class="t">write gate · rejected</div>Inline maths must use <code>$…$</code>. The candidate is not written and the original note is untouched.</div>`;
      if (k === "gate-ok")
        return `<div class="card gate-ok"><div class="t">write gate · passed</div>Maths, callouts, links and anchors checked. Exact backup kept. Passing proves structure, not quality.</div>`;
      if (k === "findings")
        return `<div class="card"><div class="t">audit · auditor ≠ editor</div>
          <div class="find ${s.closed ? "closed" : ""}">${pill("blocking")} §Weights normalises over queries; p3 says keys.</div>
          <div class="find ${s.closed ? "closed" : ""}">${pill("major")} p2 defines temperature; no decision recorded.</div></div>`;
      if (k === "concept")
        return `<div class="card"><div class="t">Concepts/Softmax.md · diff</div>
          <div style="font:12px var(--mono);color:var(--green)">+ subjects: [NLP]</div>
          <div style="font:12px var(--mono);color:var(--green)">+ Attention: same function, normalised over the key axis → Topic 07</div></div>`;
      return "";
    }).join("");
    $("side").innerHTML = html;
  }

  // ------------------------------------------------------------------ controls
  let cur = 0, timer = null;
  const track = $("track");
  STEPS.forEach((st, k) => {
    const b = document.createElement("button");
    b.setAttribute("role", "tab");
    b.setAttribute("aria-label", `Step ${k + 1}: ${ROLE[st.who][0]}`);
    b.title = ROLE[st.who][0];
    b.onclick = () => { stop(); go(k); };
    track.appendChild(b);
  });

  function go(i) {
    cur = Math.max(0, Math.min(STEPS.length - 1, i));
    const s = stateAt(cur);
    const [name, col] = ROLE[STEPS[cur].who];
    $("caption").innerHTML = `<span class="who" style="background:${col}">${name}</span>${STEPS[cur].say}`;
    $("count").textContent = `${cur + 1} / ${STEPS.length}`;
    [...track.children].forEach((b, k) => { b.className = k === cur ? "on" : k < cur ? "done" : ""; b.setAttribute("aria-selected", k === cur); });
    $("prev").disabled = cur === 0;
    $("next").disabled = cur === STEPS.length - 1;
    renderPages(s); renderLog(s, cur); renderTables(s); renderNote(s); renderSide(s);
  }
  function stop() { clearInterval(timer); timer = null; $("play").textContent = cur === STEPS.length - 1 ? "Replay" : "Play"; }
  function play() {
    if (timer) return stop();
    if (cur === STEPS.length - 1) { prevCells = {}; go(0); }
    $("play").textContent = "Pause";
    timer = setInterval(() => { if (cur >= STEPS.length - 1) return stop(); go(cur + 1); if (cur === STEPS.length - 1) stop(); }, 3200);
  }
  $("prev").onclick = () => { stop(); go(cur - 1); };
  $("next").onclick = () => { stop(); go(cur + 1); };
  $("play").onclick = play;
  addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") { stop(); go(cur + 1); }
    if (e.key === "ArrowLeft") { stop(); go(cur - 1); }
    if (e.key === " " && e.target === document.body) { e.preventDefault(); play(); }
  });

  // real SHA-256 of each page's text
  const sha = async (t) => {
    if (!crypto.subtle) return "unavailable";
    const b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(t));
    return [...new Uint8Array(b)].map((x) => x.toString(16).padStart(2, "0")).join("").slice(0, 24) + "…";
  };
  Promise.all(plain.map(sha)).then((h) => { HASH = h; go(cur); });
  go(0);
})();
