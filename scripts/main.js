const adviceCard = document.querySelector(".advice-card");
const spanId = document.querySelector(".advice-card h6 span");
const adviceMessage = document.querySelector(".advice-card p");
const dice = document.querySelector(".advice-card .dice-container");

async function fetchAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    const adviceText = data.slip.advice;
    const adviceId = data.slip.id;
    adviceMessage.textContent = `${adviceText}`;
    spanId.textContent = `#${adviceId}`;
  } catch (error) {
    console.log("Couldn't fetch advice", error);
  }
}

dice.addEventListener("click", fetchAdvice);

// fetch when page loads initially
fetchAdvice();
