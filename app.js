const form = document.getElementById("responseForm");
const message = document.getElementById("formMessage");

function showMessage(text, ok = true) {
  message.textContent = text;
  message.style.color = ok ? "#1f8d4d" : "#b3261e";
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const button = form.querySelector("button");
  button.disabled = true;
  button.style.opacity = ".65";
  showMessage("Submitting…");

  const payload = {
    response: form.response.value.trim(),
    location: form.location.value.trim(),
    sector: form.sector.value,
    submittedAt: new Date().toISOString()
  };

  try {
    const res = await fetch("/api/respond", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(payload)
    });

    if (!res.ok) throw new Error("server");
    const data = await res.json();

    if (!data.ok) throw new Error("rejected");
    form.reset();
    showMessage("Thank you. Your response has been recorded.");
  } catch (err) {
    // Keep the pilot usable while the online database is being configured.
    const local = JSON.parse(localStorage.getItem("zenort_pending_responses") || "[]");
    local.push(payload);
    localStorage.setItem("zenort_pending_responses", JSON.stringify(local));
    form.reset();
    showMessage("Response saved on this device. Online capture is being connected.", false);
  } finally {
    button.disabled = false;
    button.style.opacity = "1";
  }
});
