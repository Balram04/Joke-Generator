const btn = document.getElementById("generateBtn");
const jokeDiv = document.getElementById("joke");

btn.addEventListener("click", async () => {
  jokeDiv.textContent = "Loading joke... 😂";

  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json"
      }
    });
    const data = await response.json();
    jokeDiv.textContent = data.joke;
  } catch (error) {
    jokeDiv.textContent = "Oops! Failed to fetch a joke 😢";
  }
});
