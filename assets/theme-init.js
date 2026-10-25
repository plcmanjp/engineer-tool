/* Shared preference and light default match the developer landing page. */
(function () {
  var theme = "light";
  try { if (localStorage.getItem("plcmanjp-theme") === "dark") theme = "dark"; } catch (_) {}
  document.documentElement.setAttribute("data-theme", theme);
  var meta = document.getElementById("themeColor");
  if (meta) meta.setAttribute("content", theme === "dark" ? "#181a19" : "#faf9f6");
}());
