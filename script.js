

function createStars() {
  const container = document.querySelector("body");
  for (let i = 0; i < 1000; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.width = "1px";
    star.style.height = "1px";
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    container.appendChild(star);
  }
}
createStars();

function closeModal() {
  document.getElementById("nasaModal").style.display = "none";
}

function fetchNASAImage() {
  const apiKey = "qLInhNt7EzNZVFXXqwx4677JJeCjlIgRMU1Y5qHV";
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("nasaImage").src = data.url;
      document.getElementById("nasaTitle").innerText = data.title;
      document.getElementById("nasaDescription").innerText =
        data.explanation;
      document.getElementById("nasaModal").style.display = "flex";
    })
    .catch((error) => console.error("Error fetching image from NASA:", error));
}

function fetchRandomFact() {
  const facts = [
    "Mercury is the closest planet to Sun.",
    "Venus is the hottest planet in the solar system.",
    "Earth is the only planet known to support life.",
    "Mars is known as the Red Planet due to its reddish appearance.",
    "Jupiter has the most moons of any planet in the solar system.",
    "Saturn is famous for its stunning ring system.",
    "Uranus rotates on its side, making it unique in the solar system.",
    "Neptune is the most distant planet in the solar system.",
    "Pluto was reclassified as a dwarf planet in 2006."
  ];

  const randomIndex = Math.floor(Math.random() * facts.length);
  const randomFact = facts[randomIndex];

  document.getElementById("factTitle").innerText = "Solar System Fact";
  document.getElementById("factDescription").innerText = randomFact;
  document.getElementById("factModal").style.display = "flex";
}

function closeFactModal() {
  document.getElementById("factModal").style.display = "none";
}