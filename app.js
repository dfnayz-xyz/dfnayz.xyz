{
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
// "w/1500/q/75/i/HASH/name.jpg" or "m/HASH/name.mp4" → Cargo URL, or img/HASH-name.jpg once downloaded
const src = p => {
  if (p.startsWith("img/")) return p;            // your own folder
  if (!USE_LOCAL) return IMG_BASE + p;
  const m = p.match(/([A-Z][0-9]{20,})\/([^/]+)$/);
  return m ? `img/${m[1]}-${m[2]}` : IMG_BASE + p;
};
const isVid = p => /\.(mp4|webm|mov)$/i.test(p);
const pad2 = n => String(n).padStart(2, "0");
const fgOn = hex => {
  const n = parseInt(hex.slice(1), 16), r = n >> 16, g = (n >> 8) & 255, b = n & 255;
  return (0.299 * r + 0.587 * g + 0.114 * b) > 150 ? "#000" : "#fff";
};
const themeVars = w => `--a:${w.a};--b:${w.b};--t:${w.t};--t2:${fgOn(w.b)}`;
const INKS = Object.values(INK).filter(c => c !== INK.black);
const color2 = w => { const pool = INKS.filter(c => c !== w.a && c !== w.b); return pool[(WORKS.indexOf(w) * 5) % pool.length]; };

// newest at top gets the highest number, like a back-list
WORKS.forEach((w, i) => w.no = WORKS.length - i);
const state = { sort: "no", dir: "desc", open: null };

/* ---------- clock ---------- */
const clock = $("#clock");
const t = tz => new Date().toLocaleTimeString("en-US", { timeZone: tz, hour: "numeric", hour12: true }).replace(/\s/g, "");
const tick = () => { clock.textContent = `New York ${t("America/New_York")}   Los Angeles ${t("America/Los_Angeles")}`; };
tick(); setInterval(tick, 30000);
const YEAR = new Date().getFullYear();
document.querySelectorAll(".yr").forEach(e => e.textContent = YEAR);

/* ---------- panel ---------- */
const mediaOf = w => [w.cover, ...w.media.filter(m => m !== w.cover)];
const host = u => { try { return new URL(u).hostname.replace(/^www\./, ""); } catch (e) { return ""; } };
const linkLabel = u => ({ "instagram.com": "Instagram", "drive.google.com": "Drive", "docs.google.com": "Google Doc", "archive.org": "Internet Archive" })[host(u)] || host(u);
const ext = (u, label) => `<a href="${esc(u)}" target="_blank" rel="noopener">${esc(label)}</a>`;
const linksHTML = w => w.links.map(([l, u]) => ext(u, l)).join(", ");
const clientHTML = w => {
  if (!w.ctx) return "";
  const name = w.ctx.replace(/^For /, ""), hit = w.links.find(([l]) => l === name);
  return hit ? ext(hit[1], name) : esc(name);
};
const mediaTag = (m, w) => isVid(m)
  ? `<video src="${esc(src(m))}" autoplay muted loop playsinline></video>`
  : `<img src="${esc(src(m))}" alt="${esc(w.title)}" loading="lazy">`;

/* ---------- graphic kit: every project and update gets its own arrows and ribbons ---------- */
const ARROWS = [ // [width, height, path]
  [96, 54, "M0 14h46V0l40 27-40 27V40H0z"],          // block arrow
  [72, 54, "M0 0h30l30 27-30 27H0l30-27z"],          // chevron
  [80, 54, "M0 0l64 27L0 54z"],                      // triangle
  [100, 54, "M0 27L26 0v14h34V0l26 27-26 27V40H26v14z"], // double head
  [90, 54, "M20 0h60l-20 54H0z"],                    // slanted bar
  [118, 54, "M0 22h74V6l30 21-30 21V32H0z"],         // long thin arrow
  [76, 64, "M6 56L36 26H20V12h40v40H46V36L16 66z"],  // diagonal arrow
  [104, 54, "M0 0h72l22 27-22 27H0l16-27z"]          // notched tag
];
const arrowVars = (k, size) => {
  const [w, h, d] = ARROWS[k % ARROWS.length], gap = 12;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w + gap}" height="${h}" viewBox="0 0 ${w + gap} ${h}"><path d="${d}"/></svg>`;
  const s = size / h;
  return `--am:url('data:image/svg+xml,${encodeURIComponent(svg)}');--aw:${((w + gap) * s).toFixed(1)}px;--ah:${size}px`;
};
const SIZES = [54, 40, 64, 48, 34, 58];
// five ways to lay the ribbons across a cover
const ribbonsHTML = (k, words, b, t2, second) => {
  const text = Array(16).fill(words.map(t => `<span>${esc(t)}</span>`).join("")).join("");
  const style = ["", "rs-line", "rs-stripe"][Math.floor(k / 5) % 3];
  const one = (css, bg, fg, cls = style) => `<i class="ribbon ${cls}" style="${css};--b:${bg};background:${bg};color:${fg}" aria-hidden="true">${text}</i>`;
  const a = 6 + (k * 7) % 12;
  switch (k % 5) {
    case 0: return one(`top:28%;transform:rotate(-${a}deg)`, b, t2) + one(`top:52%;transform:rotate(${a - 3}deg)`, second, "#000", "");            // crossing
    case 1: return one(`top:22%;transform:rotate(-${a + 6}deg)`, b, t2) + one(`top:40%;transform:rotate(-${a + 6}deg)`, second, "#000", "");       // parallel
    case 2: return [0, 1, 2].map(n => one(`top:${30 + n * 12}%;left:-10%;transform-origin:0 50%;transform:rotate(${(n - 1) * (a + 4)}deg)`, n === 1 ? second : b, n === 1 ? "#000" : t2, n === 1 ? "" : style)).join(""); // fan
    case 3: return one(`top:44%;left:-35%;width:85%;transform-origin:100% 50%;transform:rotate(${a + 10}deg)`, b, t2) + one(`top:44%;left:50%;width:85%;transform-origin:0 50%;transform:rotate(-${a + 10}deg)`, second, "#000", ""); // folded V
    default: return one(`top:-10%;left:auto;right:12%;width:140%;transform-origin:100% 0;transform:rotate(-${66 + a}deg)`, b, t2) + one(`top:58%;transform:rotate(-${a - 2}deg)`, second, "#000", ""); // steep
  }
};

// preview inside the list: a plain colour box
const panelHTML = (w, l) => {
  const all = mediaOf(w), media = all.length >= 5 ? all.slice(0, 3) : all.slice(0, 1);
  return `<div class="panel">
    <i class="cross tl"></i><i class="cross tr"></i><i class="cross bl"></i><i class="cross br"></i>
    <div class="phead">
      <span class="fig">Fig. ${pad2(w.no)}</span><span>${w.year}</span>
      <span class="sp"></span><button data-close>Close ×</button>
    </div>
    <div class="pbody">
      <div class="pinfo">
        <h2><span class="on-b">${esc(w.title)}</span></h2>
        <p><span class="on-w">${esc(w.text)}</span></p>
        <dl>
          ${w.ctx ? `<dt>For</dt><dd>${clientHTML(w)}</dd>` : ""}
          <dt>Year</dt><dd>${w.year}</dd>
          ${w.links.length ? `<dt>Links</dt><dd>${linksHTML(w)}</dd>` : ""}
        </dl>
        <a class="more" href="#${w.slug}">{more}</a>
      </div>
      <div class="strip" tabindex="0" aria-label="${esc(w.title)} images">${media.map(m => `<figure class="fr">${mediaTag(m, w)}</figure>`).join("")}</div>
    </div>
  </div>`;
};

// the project's own page: a printed spread in its inks
const page = $("#v-project");
const renderProject = w => {
  const i = WORKS.indexOf(w);
  const prev = WORKS[(i - 1 + WORKS.length) % WORKS.length], next = WORKS[(i + 1) % WORKS.length];
  const media = mediaOf(w);
  const k = WORKS.indexOf(w);
  const words = [w.title, `No. ${pad2(w.no)}`, w.year, w.ctx || "", "dfnayz.xyz"].filter(Boolean);
  const second = color2(w);
  page.setAttribute("style", `${themeVars(w)};${arrowVars(k, SIZES[k % SIZES.length])}`);
  page.innerHTML = `
    <header class="pp-top">
      ${ribbonsHTML(k, words, w.b, fgOn(w.b), second)}
      <div class="pp-row">
        <a class="on-b" href="#works">← Index</a>
        <span class="sp"></span>
        <span class="fig">Fig. ${pad2(w.no)}</span><span>${w.year}</span>
      </div>
      <h1 class="pp-title"><span class="on-b">${esc(w.title)}</span></h1>
      <span class="cover-sp"></span>
      <div class="arrows" aria-hidden="true"></div>
      <div class="pp-line"><span>${esc(w.ctx || "Independent")}</span>${w.made ? `<span>${esc(w.made)}</span>` : ""}<span>${media.length} ${media.length === 1 ? "image" : "images"}</span></div>
    </header>
    <div class="pp-grid">
      <aside>
        <p class="lede"><span class="on-w">${esc(w.text)}</span></p>
        <dl>
          ${w.ctx ? `<dt>For</dt><dd>${clientHTML(w)}</dd>` : ""}
          ${w.made ? `<dt>Made</dt><dd>${esc(w.made)}</dd>` : ""}
          <dt>Year</dt><dd>${w.year}</dd>
          ${w.links.length ? `<dt>Links</dt><dd>${linksHTML(w)}</dd>` : ""}
        </dl>
      </aside>
      <div class="pp-media">${media.map((m, n) => `<figure class="${n % 3 === 0 ? "wide" : ""}">${mediaTag(m, w)}<figcaption><span class="on-b">Fig. ${w.no}.${n + 1}</span></figcaption></figure>`).join("")}</div>
    </div>
    <footer class="pp-foot">
      <div class="arrows back" aria-hidden="true"></div>
      <div class="pp-nav">
        <a class="on-b" href="#${prev.slug}">← ${esc(prev.title)}</a>
        <a class="on-w" href="#works">Index</a>
        <a class="on-b" href="#${next.slug}">${esc(next.title)} →</a>
      </div>
    </footer>`;
};

/* ---------- index ---------- */
const rows = $("#rows");
const sorted = () => {
  const k = state.sort, d = state.dir === "asc" ? 1 : -1;
  return WORKS.slice().sort((a, b) => (a[k] > b[k] ? 1 : a[k] < b[k] ? -1 : b.no - a.no) * d);
};
const render = () => {
  const l = sorted();
  document.querySelectorAll("[data-sort]").forEach(b => {
    if (b.dataset.sort === state.sort) b.dataset.dir = state.dir; else delete b.dataset.dir;
  });
  $("#bar").innerHTML = l.map(w => `<a href="#${w.slug}" style="${themeVars(w)}" class="${state.open === w.slug ? "on" : ""}" title="${pad2(w.no)} ${esc(w.title)}"></a>`).join("") + '<i class="reg" aria-hidden="true"></i>';
  rows.innerHTML = l.map(w => {
    const open = state.open === w.slug;
    return `<li style="${themeVars(w)}" id="w-${w.slug}"${open ? ' class="has-panel"' : ""}>
      <button class="row" data-slug="${w.slug}" aria-expanded="${open}">
        <span class="no">${pad2(w.no)}</span>
        <span class="t"><span class="nm">${esc(w.title)}</span><span class="sub">${w.year}</span></span>
        <span class="x">${esc(w.ctx || "")}</span>
        <span class="y">${w.year}</span>
        <span class="tab">${open ? "−" : "+"}</span>
      </button>${open ? panelHTML(w, l) : ""}
    </li>`;
  }).join("");
};
document.querySelector(".ihead").addEventListener("click", e => {
  const b = e.target.closest("[data-sort]"); if (!b) return;
  const k = b.dataset.sort;
  state.dir = state.sort === k ? (state.dir === "asc" ? "desc" : "asc") : (k === "title" ? "asc" : "desc");
  state.sort = k; render();
});
const openWork = slug => {
  state.open = slug; render(); peekOff();
  if (slug) requestAnimationFrame(() => $("#w-" + slug)?.scrollIntoView({ block: "start", behavior: "smooth" }));
};
rows.addEventListener("click", e => {
  if (e.target.closest("[data-close]")) { openWork(null); return; }
  const r = e.target.closest(".row"); if (!r) return;
  openWork(state.open === r.dataset.slug ? null : r.dataset.slug);
});
rows.addEventListener("keydown", e => {
  const s = e.target.closest(".strip");
  if (s && (e.key === "ArrowRight" || e.key === "ArrowLeft")) {
    e.preventDefault(); s.scrollBy({ left: (e.key === "ArrowRight" ? 1 : -1) * s.clientWidth * .8, behavior: "smooth" });
  }
});

/* ---------- hover preview ---------- */
const peek = $("#peek");
const fine = matchMedia("(hover:hover) and (pointer:fine)").matches;
let peekSrc = "";
const peekOn = (s, c) => {
  if (s !== peekSrc) { peek.innerHTML = isVid(s) ? `<video src="${esc(s)}" autoplay muted loop playsinline></video>` : `<img src="${esc(s)}" alt="">`; peekSrc = s; }
  peek.style.setProperty("--b", c); peek.classList.add("on");
};
const peekOff = () => peek.classList.remove("on");
const movePeek = e => {
  const w = peek.offsetWidth, h = peek.offsetHeight || 220;
  let x = e.clientX + 28, y = e.clientY + 18;
  if (x + w > innerWidth - 16) x = e.clientX - w - 28;
  if (y + h > innerHeight - 16) y = innerHeight - h - 16;
  peek.style.transform = `translate(${x}px,${y}px)`;
};
$("#bar").addEventListener("click", e => {
  const b = e.target.closest("a"); if (!b) return;
  e.preventDefault(); openWork(b.getAttribute("href").slice(1));
});
$("#bar").addEventListener("mouseover", e => {
  const b = e.target.closest("a"); rows.querySelectorAll(".row.hot").forEach(r => r.classList.remove("hot"));
  if (b) rows.querySelector(`[data-slug="${b.getAttribute("href").slice(1)}"]`)?.classList.add("hot");
});
$("#bar").addEventListener("mouseleave", () => rows.querySelectorAll(".row.hot").forEach(r => r.classList.remove("hot")));
if (fine) {
  document.addEventListener("mousemove", e => {
    const r = e.target.closest(".row");
    const u = null;
    if (r && r.getAttribute("aria-expanded") !== "true") {
      const w = WORKS.find(x => x.slug === r.dataset.slug);
      peekOn(src(w.cover), w.b); movePeek(e);
    } else if (u) { peekOn(src(u.dataset.img), u.style.getPropertyValue("--k")); movePeek(e); }
    else peekOff();
  });
  document.addEventListener("mouseleave", peekOff);
}

/* ---------- updates + awards ---------- */
// updates: a cover like a project page, then one printed entry per update
{
  const vars = (x, y) => `--a:${x};--b:${y};--t:${fgOn(x)};--t2:${fgOn(y)}`;
  const N = UPDATES.length, years = UPDATES.map(u => u[2]);
  const words = ["Updates", `${Math.min(...years)}–${Math.max(...years)}`, `${N} entries`, "posters, events, research, prints", "dfnayz.xyz"];
  const ribbon = Array(12).fill(words.map(t => `<span>${esc(t)}</span>`).join("")).join("");
  const cover = `<header class="u-cover" style="${vars(INK.silver, INK.pink)};${arrowVars(3, 46)}">
      ${ribbonsHTML(3, words, INK.pink, "#000", INK.orange)}
      <div class="pp-row"><span class="on-b">Updates</span><span class="sp"></span><span>${N} entries</span></div>
      <span class="cover-sp"></span>
      <div class="arrows" aria-hidden="true"></div>
      <div class="pp-line"><span>Posters up, events, research, prints in progress</span><span>${Math.min(...years)}–${Math.max(...years)}</span></div>
    </header>`;
  const entries = UPDATES.map(([t, kind, y, m, link, text], i) => {
    const [pa, pb] = UPDATE_PRINT[(i + 1) % UPDATE_PRINT.length];
    const no = pad2(N - i);
    const tstyle = ["", "rs-line", "rs-stripe"][i % 3];
    const tape = i % 3 === 1 || i % 5 === 3 ? `<i class="ribbon ${tstyle}" style="top:${68 + (i * 7) % 18}%;transform:rotate(${i % 2 ? -(4 + i % 6) : 3 + i % 7}deg);--b:${INK[pb]};background:${INK[pb]};color:${fgOn(INK[pb])}" aria-hidden="true">${Array(16).fill(`<span>${esc(t)}</span><span>No. ${no}</span><span>${y}</span>`).join("")}</i>` : "";
    const lead = `<div class="arrows${i % 2 ? " back" : ""}" aria-hidden="true"></div>`;
    const tag = isVid(m) ? `<video src="${esc(src(m))}" autoplay muted loop playsinline></video>` : `<img src="${esc(src(m))}" alt="${esc(t)}" loading="lazy">`;
    const media = m ? `<div class="e-media">${link ? `<a href="${esc(link)}" target="_blank" rel="noopener">${tag}</a>` : tag}</div>` : "<div></div>";
    return `<article class="entry${i % 2 ? " flip" : ""}" id="u-${no}" style="${vars(INK[pa], INK[pb])};${arrowVars(i + 5, SIZES[(i + 2) % SIZES.length])}">
      ${tape}
      ${lead}
      <div class="e-grid">
        <aside>
          <span class="fig">No. ${no}</span>
          <h2>${link ? `<a class="on-b" href="${esc(link)}" target="_blank" rel="noopener">${esc(t)}</a>` : `<span class="on-b">${esc(t)}</span>`}</h2>
          ${text ? `<p><span class="on-w">${esc(text)}</span></p>` : ""}
          <p>(${esc(kind)})</p>
          <p>${y}</p>
          ${link ? `<p>${ext(link, linkLabel(link) + " →")}</p>` : ""}
        </aside>
        ${media}
      </div>
    </article>`;
  }).join("");
  $("#v-updates").innerHTML = cover + entries;
}
$("#awards").innerHTML = AWARDS.map(([a, y], i) =>
  `<li style="--k:${INKS[(i * 5 + 2) % INKS.length]}"><span>${esc(a)}</span><span>${y}</span><span class="tab"></span></li>`).join("");

/* scale 1–4, remembered per viewer */
{ let s = "2"; try { s = localStorage.getItem("dfn-scale") || "2"; } catch (e) {}
  if (!["1", "2", "3"].includes(s)) s = "3";
  const set = v => { document.documentElement.dataset.scale = v;
    document.querySelectorAll(".scale button").forEach(b => b.setAttribute("aria-pressed", b.dataset.s === v));
    try { localStorage.setItem("dfn-scale", v); } catch (e) {} };
  set(s);
  document.querySelector(".scale").addEventListener("click", e => { const b = e.target.closest("button"); if (b) set(b.dataset.s); }); }

/* homepage intro: arrow strip in a random ink each visit */
{ const k = INKS[Math.floor(Math.random() * INKS.length)];
  $("#hi").setAttribute("style", `--hk:${k};${arrowVars(Math.floor(Math.random() * ARROWS.length), 26)}`); }

/* info blocks: a random ink on every visit */
{ const pool = INKS.slice().sort(() => Math.random() - .5);
  document.querySelectorAll(".rnd").forEach((el, i) => { const k = pool[i % pool.length]; el.style.setProperty("--k", k); el.style.color = fgOn(k); }); }

/* ---------- routing: #works, #updates, #info, or a project slug (its own page) ---------- */
const views = ["works", "updates", "info", "project"];
const route = () => {
  const h = location.hash.slice(1);
  if (h === "top") return;
  const w = WORKS.find(x => x.slug === h);
  const v = w ? "project" : (views.includes(h) ? h : "works");
  views.forEach(x => $("#v-" + x).hidden = x !== v);
  const navV = v === "project" ? "works" : v;
  document.querySelectorAll(".nav nav a").forEach(a => a.dataset.v === navV ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current"));
  document.title = w ? `${w.title} — defne ayaz` : v === "works" ? "defne ayaz" : `${v} — defne ayaz`;
  peekOff();
  if (w) { renderProject(w); state.open = w.slug; render(); scrollTo({ top: 0 }); }
  else if (v === "works" && state.open) requestAnimationFrame(() => $("#w-" + state.open)?.scrollIntoView({ block: "start" }));
  else scrollTo({ top: 0 });
};
addEventListener("hashchange", route);
document.addEventListener("click", e => { if (e.target.closest(".totop")) { e.preventDefault(); scrollTo({ top: 0, behavior: "smooth" }); } });
render();
route();
}
