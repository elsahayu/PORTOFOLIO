/* =====================================================
   main.js — interaksi website
   1. Menu hamburger   2. Daftar project + filter
   3. Halaman detail   4. Animasi saat scroll
   5. Lightbox (perbesar gambar hasil)
   ===================================================== */
(function () {
  // 1. Menu hamburger (HP)
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
  }

  // 2. Daftar project + filter (projects.html)
  const grid = document.getElementById("projGrid");
  if (grid && typeof PROJECT_GRID !== "undefined") {
    grid.innerHTML = PROJECT_GRID.map(([id, label, cat, sub]) =>
      `<a class="wcard" data-cat="${cat}" href="project.html?id=${id}"><div class="im"><img src="${PROJECTS[id].thumb}" alt="${label}" loading="lazy"></div><h3>${label}</h3><p>${sub}</p></a>`).join("");
    const apply = (f) => {
      document.querySelectorAll(".chip").forEach(c => c.classList.toggle("on", c.dataset.f === f));
      grid.querySelectorAll(".wcard").forEach(c => c.classList.toggle("hide", f !== "all" && c.dataset.cat !== f));
    };
    document.getElementById("filters").addEventListener("click", (e) => { const b = e.target.closest(".chip"); if (b) apply(b.dataset.f); });
    const h = location.hash.slice(1);
    if (["web", "design", "code", "motion"].includes(h)) apply(h);
  }

  // 3. Halaman detail (project.html?id=...)
  const detail = document.getElementById("detail");
  if (detail && typeof PROJECTS !== "undefined") {
    const id = new URLSearchParams(location.search).get("id");
    const p = PROJECTS[id];
    if (!p) { location.replace("projects.html"); return; }
    document.title = p.title + " — Elsa";
    const icons = [
      '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 5v5.4l4 2.4-1 1.7-5-3V7z"/></svg>',
      '<svg viewBox="0 0 24 24"><path d="M7 2h2v2h6V2h2v2h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3zM4 9v10h16V9z"/></svg>',
      '<svg viewBox="0 0 24 24"><path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-4.4 0-8 2.2-8 5v2h16v-2c0-2.8-3.6-5-8-5z"/></svg>',
      '<svg viewBox="0 0 24 24"><path d="M6 2h8l6 6v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm7 1.5V9h5.5z"/></svg>'
    ];
    const metas = p.meta.map((m, k) => `<li>${icons[k]}${m}</li>`).join("");
    const odd = p.results.length % 2 === 1;
    const shots = p.results.map((r, k) => {
      const full = r.wide || r.narrow || p.results.length === 1 || (odd && k === p.results.length - 1);
      return `<figure class="shot${full ? " full" : ""}"><img src="${r.img}" alt="${r.caption || "Hasil " + p.title}" loading="lazy">${r.caption ? `<figcaption>${r.caption}</figcaption>` : ""}</figure>`;
    }).join("");
    const phones = p.phones ? `<div class="phones">${p.phones.map(s => `<img src="${s}" alt="Tampilan aplikasi HIVE" loading="lazy">`).join("")}</div>` : "";
    const l = p.resultLink;
    const link = l ? `<br>${l.before}<a href="${l.href}" target="_blank" rel="noopener" style="color:var(--blue);text-decoration:underline">${l.text}</a>${l.after}` : "";
    const keys = Object.keys(PROJECTS), i = keys.indexOf(id);
    const pk = keys[(i + keys.length - 1) % keys.length], nk = keys[(i + 1) % keys.length];
    detail.innerHTML = `
      <section class="sheet d-hero reveal">
        <div>
          <span class="pill">Case study ${String(i + 1).padStart(2, "0")}</span>
          <div class="head"><span class="script">Project</span><h1 class="h-xl">${p.title}</h1></div>
          <p class="copy">${p.intro}</p>
          <ul class="metas">${metas}</ul>
        </div>
        <div class="cover"><img src="${p.polaroid || p.thumb}" alt="${p.title}"></div>
      </section>
      <section class="sheet two reveal">
        <div>
          <h2 class="h-lg">TOOLS USED</h2>
          <div class="tools-row">${p.toolsIcons ? `<img src="${p.toolsIcons}" alt="Tools yang dipakai">` : ""}${p.toolsBold ? `<p class="bold">${p.toolsBold}</p>` : ""}</div>
          ${p.toolsText ? `<p class="copy">${p.toolsText}</p>` : ""}
          <p class="copy"><b>Peran saya.</b> ${p.role}</p>
        </div>
        <div>
          <h2 class="h-lg">THE OUTPUT</h2><p class="copy">${p.features}</p>
          <h2 class="h-lg" style="margin-top:1em">HOW IT WORKS</h2><p class="copy">${p.process}</p>
        </div>
      </section>
      <section class="sheet reveal">
        <div class="sec-title" style="margin-bottom:1em"><span class="pill">Result</span><p class="copy" style="max-width:68ch;margin:1em auto 0">${p.resultIntro}${link}</p></div>
        <div class="shots">${shots}</div>${phones}
      </section>
      <section class="sheet pager reveal">
        <a class="btn line" href="project.html?id=${pk}">&larr; ${PROJECTS[pk].title}</a>
        <a class="btn" href="projects.html">Semua project</a>
        <a class="btn line" href="project.html?id=${nk}">${PROJECTS[nk].title} &rarr;</a>
      </section>`;
  }

  // 4. Animasi muncul saat scroll
  const items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((es) => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.08 });
    items.forEach(el => io.observe(el));
  } else items.forEach(el => el.classList.add("in"));

  // 5. Lightbox
  const box = document.createElement("div");
  box.className = "lightbox"; box.innerHTML = "<img alt=''>";
  document.body.appendChild(box);
  document.addEventListener("click", (e) => {
    const img = e.target.closest(".shot img, .phones img");
    if (img) { box.querySelector("img").src = img.src; box.classList.add("open"); }
    else if (box.classList.contains("open")) box.classList.remove("open");
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") box.classList.remove("open"); });
})();
