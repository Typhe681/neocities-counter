const digitsLength = 7; 

async function loadCounter() {
  try {
    const res = await fetch(
      `https://weirdscifi.ratiosemper.com/neocities.php?sitename=typhe`
    );
    const data = await res.json();
    const views = data.info.views;

    const digits = views.toString().padStart(digitsLength,"0").split("");
    const counter = document.getElementById("counter");
    counter.innerHTML = "views: " + views + "<br>";
    
    digits.forEach(d => {
      const img = document.createElement("img");
      img.src = d + ".gif?" + Date.now();
      img.style.width = "calc(100% / 7)";
      counter.appendChild(img);
    });

  } catch(e) {
    counter.innerHTML = "error: " + e;
  }
}

loadCounter();
