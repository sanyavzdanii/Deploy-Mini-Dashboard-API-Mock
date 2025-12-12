document.getElementById("load").addEventListener("click", async () => {
  const div = document.getElementById("data");
  div.innerHTML = "⏳ Завантаження...";

  try {
    const res = await fetch("/api/data.json");
    const json = await res.json();

    div.innerHTML = `
      <h3>Отримані дані:</h3>
      <pre>${JSON.stringify(json, null, 2)}</pre>
    `;
  } catch (e) {
    div.innerHTML = "❌ Помилка завантаження";
  }
});
