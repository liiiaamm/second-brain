(() => {
  "use strict";
  const $ = (id) => document.getElementById(id);

  // ------------------------------------------------------------ the lecture (a toy example of my own)
  const PAGES = [
    { t: "Scores", body: `<p>A query <i>q</i> is compared with every key <i>k</i>:</p><p style="text-align:center"><i>s = q·k / √d</i></p><p>Without √d, softmax saturates.</p>` },
    { t: "Definitions", body: `<p><b>Logit</b>: a raw score.</p><p><b>Softmax</b>: turns scores into weights that sum to 1.</p><p><b>Temperature</b>: divides the scores first.</p>` },
    { t: "Attention weights", body: `<p>For each query, the weights over the <b>keys</b> sum to 1.</p><p>Output: a weighted mix of the values.</p>` },
    { t: "Before next week", body: `<p>The √d derivation <b>will be on the exam</b>.</p><p>Office hours move to Thursday.</p>` },
  ];
  let HASH = PAGES.map(() => "········");

  const pages = (opts = {}) => `<div class="pages">${PAGES.map((p, i) => `
      <div class="pg ${opts.hot && opts.hot.includes(i) ? "hot" : ""} ${opts.dim && opts.dim.includes(i) ? "dim" : ""}">
        <span class="n">p${i + 1}</span><h4>${p.t}</h4>${p.body}
        ${opts.hash ? `<div class="hash">✓ ${HASH[i]}</div>` : ""}
      </div>`).join("")}</div>`;

  const AV = (letter, color) => `<span class="av" style="background:${color}">${letter}</span>`;

  const noteDraft = ({ status, badge, weights, sqrt, temp, link }) => `
    <div class="note">
      <span class="badge ${badge}">${status}</span>
      <h5 style="margin-top:8px">Attention · Topic 07</h5>
      <h6>Scores</h6>
      <p>Each query is compared with every key, and the score is divided by ${sqrt} so ${link ? `<u>softmax</u>` : "softmax"} doesn't saturate.</p>
      <div class="callout"><b>Exam:</b> the √d derivation will be asked (p. 4).</div>
      <h6>Weights</h6>
      <p>Scores are turned into weights with softmax, ${weights}, so they sum to one.${temp || ""}</p>
    </div>`;

  // ------------------------------------------------------------ the seven stages
  const STAGES = [
    {
      k: "Raw",
      title: "Four pages arrive",
      text: "A new lecture lands in the subject's <code>Raw/</code> folder. Before any model reads it, a script takes a fingerprint (SHA-256) of every page.",
      why: "If a page changes later, the system knows exactly which notes depend on it. Originals are never edited.",
      scene: () => `<p class="label">Raw/lecture-07.pdf</p>${pages({ hash: true })}
        <p class="lock">🔒 Read-only. Every note will point back to a page number here.</p>`,
    },
    {
      k: "Plan",
      title: "One writer, one checker",
      text: "A coordinator agent turns the pages into a work package. One agent writes the note, and a different one will check it. It also lists every term the lecture defines.",
      why: "The writer never approves its own work. And no defined term can be quietly skipped, because each one needs a decision.",
      scene: () => `
        <div class="flow">
          <div class="box"><h5>Package nlp-07</h5><p class="sub">Pages 1–4 · output: Topic 07</p></div>
          <span class="arrow">→</span>
          <div class="who">
            <div class="agent">${AV("E", "#b16315")}<div><b>Editor</b><br><span class="sub" style="color:var(--mut);font-size:13px">writes the note</span></div></div>
            <div class="agent">${AV("A", "#0c716f")}<div><b>Auditor</b><br><span class="sub" style="color:var(--mut);font-size:13px">a different agent, checks it</span></div></div>
          </div>
        </div>
        <p class="label" style="margin-top:26px">Terms the lecture defines, each needs a decision</p>
        <div class="terms">${["logit", "softmax", "temperature", "attention weights"].map((t) => `<span class="chip">${t} <small>?</small></span>`).join("")}</div>`,
    },
    {
      k: "Write",
      title: "The editor drafts the note",
      text: "The editor reads every page, images included, and writes one note for the topic. Page 4 is split: the exam announcement goes into the note, the office hours into the subject's profile.",
      why: "Exam hints are never thrown away as noise, but logistics don't clutter the notes either.",
      scene: () => `
        <div class="split">
          ${noteDraft({ status: "draft", badge: "b-draft", weights: "over the queries", sqrt: `<code>\\(\\sqrt d\\)</code>` })}
          <div>
            <p class="label">Page 4 goes to two places</p>
            <div class="box" style="margin-bottom:10px"><h5>“will be on the exam”</h5><p class="sub">→ warning in the topic note</p></div>
            <div class="box"><h5>“office hours Thursday”</h5><p class="sub">→ subject profile</p></div>
            <p class="label" style="margin-top:18px">Terms decided</p>
            <div class="terms">
              <span class="chip ok">logit <small>local</small></span><span class="chip ok">softmax <small>link</small></span>
              <span class="chip ok">attention weights <small>local</small></span><span class="chip">temperature <small>?</small></span>
            </div>
          </div>
        </div>`,
    },
    {
      k: "Gate",
      title: "The write gate bounces it",
      text: "The draft can't be written into the vault directly. A script checks the maths syntax, every link and every anchor first. This draft used a LaTeX delimiter Obsidian doesn't render.",
      why: "Broken formulas and dead links never reach the vault, and the original note is backed up before anything is replaced.",
      scene: () => `
        <div class="vs">
          <div class="panel bad"><div class="verdict"><span class="i">✕</span>Rejected</div>
            <p class="line">…divided by <code class="e">\\(\\sqrt d\\)</code> so softmax doesn't saturate.</p>
            <p class="small">Inline maths must use <code>$…$</code>. Nothing was written.</p></div>
          <div class="panel ok"><div class="verdict"><span class="i">✓</span>Accepted</div>
            <p class="line">…divided by <mark class="g">√d</mark> so softmax doesn't saturate.</p>
            <p class="small">Maths, links and anchors pass. Backup saved. Status: in review.</p></div>
        </div>
        <p class="small" style="margin-top:18px">Passing the gate proves the note is well formed, not that it is right. That's the next step.</p>`,
    },
    {
      k: "Audit",
      title: "A second agent checks it against the source",
      text: "The auditor didn't write the note. It opens the original pages next to it and finds two problems the gate can't see.",
      why: "This is the step that catches the confident mistakes an LLM makes when it summarises.",
      scene: () => `
        <div class="find">
          <div class="row">
            <div class="src"><span class="n">page 3 says</span>For each query, the weights over the <b>keys</b> sum to 1.</div>
            <span class="ne">≠</span>
            <div class="src" style="border-style:solid;background:#fff8f6;border-color:#f2c2b7"><span class="n">the note says</span>Scores are turned into weights <mark class="e">over the queries</mark>.</div>
          </div>
          <div class="row">
            <div class="src"><span class="n">page 2 defines</span><b>Temperature</b>: divides the scores first.</div>
            <span class="ne">≠</span>
            <div class="src" style="border-style:solid;background:#fff8f6;border-color:#f2c2b7"><span class="n">the note</span><mark class="e">never decides what to do with it</mark></div>
          </div>
        </div>
        <p class="small" style="margin-top:16px">Findings go back to the editor. The auditor never rewrites the note itself.</p>`,
    },
    {
      k: "Fix",
      title: "Fixed, and connected",
      text: "The editor fixes both. Temperature doesn't get a new note, because the existing Softmax note already has a section on it, so the topic links there. The Softmax note gets a line back.",
      why: "Each idea is explained once and linked from everywhere it's used, instead of being copied into every subject.",
      scene: () => `
        ${noteDraft({ status: "in review", badge: "b-review", weights: `<mark class="g">over the keys</mark>`, sqrt: "√d", link: true, temp: ` <mark class="g">A <u>temperature</u> T sharpens or flattens them.</mark>` })}
        <div class="link2" style="margin-top:16px">
          <div class="mini"><h5>Topic 07 · Attention</h5>links to Softmax § Temperature</div>
          <svg viewBox="0 0 90 60" aria-hidden="true"><path d="M8 24 H82 M74 16 L82 24 L74 32 M82 40 H8 M16 32 L8 40 L16 48" fill="none" stroke="#1a8a55" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <div class="mini"><h5>Concepts · Softmax</h5>already exists<div class="add">+ used in: Attention (NLP)</div></div>
        </div>`,
    },
    {
      k: "Done",
      title: "Only now is it validated",
      text: "The auditor re-checks just the two findings. A note is marked validated only when every check below is green.",
      why: "Green isn't the default here. Anything still unchecked stays visibly “in review”.",
      scene: () => `
        <ul class="checks">
          <li><span class="i">✓</span><div><b>Coverage 4 / 4 pages</b><span>Every page is in the note, in the profile, or excluded with a written reason.</span></div></li>
          <li><span class="i">✓</span><div><b>Write gate</b><span>Maths, links and anchors well formed. Original backed up.</span></div></li>
          <li><span class="i">✓</span><div><b>Independent audit</b><span>2 findings raised by the auditor, 2 closed after the fix.</span></div></li>
          <li><span class="i">✓</span><div><b>Every defined term decided</b><span>logit · softmax · temperature · attention weights</span></div></li>
          <li><span class="i">✓</span><div><b>Rendered view checked</b><span>Light mode, dark mode, narrow screen.</span></div></li>
        </ul>
        <p style="margin:18px 0 0"><span class="badge b-ok">validated</span> &nbsp;Subjects/NLP/Notes/Topic 07 - Attention.md</p>`,
    },
  ];

  // ------------------------------------------------------------ pipeline + navigation
  const pipe = $("pipe");
  const fill = document.createElement("span");
  fill.className = "fill";
  pipe.appendChild(fill);
  STAGES.forEach((s, i) => {
    const b = document.createElement("button");
    b.className = "st";
    b.innerHTML = `<span class="c">${i + 1}</span><span class="l">${s.k}</span>`;
    b.setAttribute("aria-label", `Stage ${i + 1}: ${s.title}`);
    b.onclick = () => go(i);
    pipe.appendChild(b);
  });

  let cur = 0;
  function setFill() {
    const st = pipe.querySelectorAll(".st");
    const span = st[STAGES.length - 1].offsetLeft - st[0].offsetLeft;
    fill.style.width = `${(span * cur) / (STAGES.length - 1)}px`;
  }
  function go(i) {
    cur = Math.max(0, Math.min(STAGES.length - 1, i));
    const s = STAGES[cur];
    $("stepn").textContent = `Step ${cur + 1} of ${STAGES.length}`;
    $("title").textContent = s.title;
    $("text").innerHTML = s.text;
    $("why").innerHTML = `<b>Why it matters</b>${s.why}`;
    const sc = $("scene");
    sc.classList.remove("enter");
    sc.innerHTML = s.scene();
    void sc.offsetWidth;
    sc.classList.add("enter");
    [...pipe.querySelectorAll(".st")].forEach((b, k) => { b.classList.toggle("on", k === cur); b.classList.toggle("done", k < cur); });
    setFill();
    $("prev").disabled = cur === 0;
    $("next").textContent = cur === STAGES.length - 1 ? "Start again ↺" : "Next →";
  }
  $("prev").onclick = () => go(cur - 1);
  $("next").onclick = () => {
    const wasLast = cur === STAGES.length - 1;
    go(wasLast ? 0 : cur + 1);
    if (innerWidth < 860) pipe.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") go(cur + 1);
    if (e.key === "ArrowLeft") go(cur - 1);
  });
  addEventListener("resize", setFill);

  // real SHA-256 of each page's text, computed in the browser
  const text = PAGES.map((p) => p.t + " " + p.body.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
  if (crypto.subtle) {
    Promise.all(text.map((t) => crypto.subtle.digest("SHA-256", new TextEncoder().encode(t))))
      .then((bufs) => { HASH = bufs.map((b) => [...new Uint8Array(b)].map((x) => x.toString(16).padStart(2, "0")).join("").slice(0, 12)); if (cur === 0) $("scene").innerHTML = STAGES[0].scene(); });
  }
  go(0);
})();
