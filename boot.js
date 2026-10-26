if (window.top !== window.self) { try { window.top.location.replace(window.self.location.href); } catch (e) { document.documentElement.style.display = "none"; } }
document.documentElement.classList.add("js");
if (matchMedia("(prefers-reduced-motion: reduce)").matches) document.documentElement.classList.add("rm");
