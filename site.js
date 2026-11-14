// The latest versions from versions.json, and a hairline under the header once the page scrolls.
fetch("versions.json", { cache: "no-store" }).then(r => r.json()).then(v => {
  for (const el of document.querySelectorAll("[data-version]")) {
    const n = v[el.dataset.version];
    if (n) el.textContent = "Version " + n;
  }
}).catch(() => {});
const top = document.querySelector(".top");
if (top) {
  const mark = () => top.classList.toggle("scrolled", window.scrollY > 8);
  addEventListener("scroll", mark, { passive: true }); mark();
}
