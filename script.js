let messageIndex = 0;

const messages = [
  "Are you sure? 😢",
  "Think again 💔",
  "Don't break my heart 🥺",
  "Pleaseeee 😭",
  "Last chance 😶"
];

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");

  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  const currentSize = parseFloat(
    window.getComputedStyle(yesButton).fontSize
  );

  yesButton.style.fontSize = `${currentSize * 1.4}px`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}
