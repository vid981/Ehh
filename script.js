const openingCard = document.getElementById("openingCard");
const page1Text = document.getElementById("page1Text");
const pages = document.querySelectorAll(".page");
let currentPage = 1;

// Page 1: Text reveal sequence
openingCard.addEventListener("click", () => {
  const messages = [
    "Happy birthday Madamji !!!",
    "It’s your special day",
    "So..........!!",
    "I want to make something special for you"
  ];
  let index = 0;
  page1Text.style.opacity = 0;

  const showNext = () => {
    if (index < messages.length) {
      page1Text.textContent = messages[index];
      page1Text.style.opacity = 1;
      setTimeout(() => {
        page1Text.style.opacity = 0;
        index++;
        setTimeout(showNext, 600);
      }, 2000);
    } else {
      setTimeout(() => {
        openingCard.style.opacity = 0;
        setTimeout(() => {
          goToPage(2);
        }, 800);
      }, 500);
    }
  };

  showNext();
});

// Page navigation
function goToPage(n) {
  pages.forEach(p => p.classList.remove("active"));
  document.getElementById(`page${n}`).classList.add("active");
  currentPage = n;
}

// Page 2: Show button after audio ends
const audio = document.getElementById("voiceNote");
const toPage3Btn = document.getElementById("toPage3");
audio.addEventListener("ended", () => {
  toPage3Btn.classList.remove("hidden");
});
toPage3Btn.addEventListener("click", () => goToPage(3));

// Page 3: Flip card logic
let flippedCount = 0;
const cards = document.querySelectorAll(".flip-card");
const toPage4Btn = document.getElementById("toPage4");

cards.forEach(card => {
  const inner = card.querySelector(".flip-inner");

  let isFlipped = false;
  let hasFlippedOnce = false;

  card.addEventListener("click", () => {
    isFlipped = !isFlipped;
    inner.classList.toggle("flipped", isFlipped);

    if (!hasFlippedOnce) {
      flippedCount++;
      hasFlippedOnce = true;
      if (flippedCount === cards.length) {
        toPage4Btn.classList.remove("hidden");
      }
    }
  });
});

toPage4Btn.addEventListener("click", () => goToPage(4));