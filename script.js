const form = document.getElementById("bookingForm");
const result = document.getElementById("bookingResult");
const date = document.getElementById("date");
const today = new Date();
const yyyy = today.getFullYear();
const mm = String(today.getMonth()+1).padStart(2,"0");
const dd = String(today.getDate()).padStart(2,"0");
date.min = `${yyyy}-${mm}-${dd}`;

const whatsappNumbers = {
  "Toma — @21._toma": "40724696496",
  "Albert — @21alberttt": "40768753876"
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const barber = document.getElementById("barber").value;
  const service = document.getElementById("service").value;
  const day = date.value;
  const time = document.getElementById("time").value;
  const name = document.getElementById("name").value.trim();
  const contact = document.getElementById("contactField").value.trim();
  const notes = document.getElementById("notes").value.trim();

  if (!barber || !service || !day || !time || !name || !contact) return;

  const number = whatsappNumbers[barber];
  const message =
`Salut! Vreau să fac o programare la ${barber.split(" — ")[0]}.

Nume: ${name}
Serviciu: ${service}
Data: ${day}
Ora: ${time}
Telefon / Instagram: ${contact}${notes ? `\nObservații: ${notes}` : ""}

Aș vrea să știu și prețul pentru serviciul ales.`;

  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  result.innerHTML = `Se deschide WhatsApp pentru <strong>${barber.split(" — ")[0]}</strong>...`;
  window.open(url, "_blank");

  form.reset();
});
