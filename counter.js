// URL ?user=
const params = new URLSearchParams(window.location.search);
const sitename = params.get("user");
const digitsLength = 7; 

async function loadCounter() {
  try {
    const res = await fetch(
      `https://weirdscifi.ratiosemper.com/neocities.php?sitename=${sitename}`
    );
    const data = await res.json();
    const views = data.info.views;

    const digits = views.toString().padStart(digitsLength,"0").split("");
    const counter = document.getElementById("counter");
    counter.innerHTML = "";

    digits.forEach(d => {
      const img = document.createElement("img");
      img.src = d + ".gif";
      counter.appendChild(img);
    });

  } catch(e) {
    console.error("Visitor counter error:", e);
  }
}

loadCounter();
