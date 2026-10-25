(function () {
  "use strict";
  var root = document.documentElement;
  var button = document.getElementById("themeBtn");
  var label = document.getElementById("themeLbl");
  var meta = document.getElementById("themeColor");
  function apply(theme, save) {
    var next = theme === "dark" ? "dark" : "light";
    var name = next === "dark" ? "다크" : "라이트";
    root.setAttribute("data-theme", next);
    if (label) label.textContent = name;
    if (button) button.setAttribute("aria-label", "테마 전환: 현재 " + name);
    if (meta) meta.setAttribute("content", next === "dark" ? "#181a19" : "#faf9f6");
    if (save) { try { localStorage.setItem("plcmanjp-theme", next); } catch (_) {} }
    // Calculator canvases resolve their colours again on resize.
    window.dispatchEvent(new Event("resize"));
  }
  function refresh() {
    var next = root.getAttribute("data-theme");
    try { next = localStorage.getItem("plcmanjp-theme"); } catch (_) {}
    apply(next, false);
  }
  if (button) button.addEventListener("click", function () { apply(root.getAttribute("data-theme") === "dark" ? "light" : "dark", true); });
  window.addEventListener("pageshow", refresh);
  window.addEventListener("storage", function (event) { if (event.key === "plcmanjp-theme" || event.key === null) refresh(); });
  apply(root.getAttribute("data-theme"), false);
}());
