const digitsLength = 7; 

async function loadCounter() {
  const counter = document.getElementById("counter");
  counter.innerHTML = "loading...";
  try {
    const res = await fetch(
      "https://typhe.github.io/neocities-counter/views.json"
    );

    const data = await res.json();
    const views = data.info.views;
    counter.innerHTML = "views: " + views + "<br>";
    const digits = views.toString().padStart(digitsLength,"0").split("");

    digits.forEach(d => {
      const img = document.createElement("img");
      img.src = d + ".gif";
      img.width = 37;
      counter.appendChild(img);
      counter.appendChild(document.createTextNode(" "));
    });
  } catch(e) {
    counter.innerHTML = "error: " + e;
  }
}

loadCounter();
