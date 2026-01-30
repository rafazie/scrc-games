async function loadPartial(name) {
  const res = await fetch(`partials/${name}.html`);
  const html = await res.text();
  document.getElementById("app").innerHTML = html;

  await ensureModal();
}

async function ensureModal() {
  if (document.getElementById("modal")) return;

  const res = await fetch("partials/modal.html");
  const html = await res.text();
  document.body.insertAdjacentHTML("beforeend", html);
}
