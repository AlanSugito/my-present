const texts = [
  'Selamat Ulang tahun ke <span class="number">19</span> <br> Semoga tahun ini lebih Baik lagi <br> <span>I hope you\'re gonna be happy everyday</span>',
  "I’m Sorry I Can’t give you anything But wait for my surprise",
  "",
  "Udah itu aja hhee😁",
];

const button = document.querySelector(".btn");
const card = document.querySelector(".card");
const text = card.querySelector("p");
// const nextButton = document.querySelector('.move');
let index = 0;

button.addEventListener("click", () => {
  card.classList.add("visible");
  button.classList.add("move");
  text.innerHTML = texts[index];
  button.textContent = "Next";

  if (button.textContent === "Next") {
    button.addEventListener("click", () => {
      index++;
      text.textContent = texts[index];
      console.log(index);

      if (index === 3) {
        button.textContent = "Close";
        button.addEventListener("click", () => {
            card.classList.add('close')
            card.classList.remove('visible')
            button.remove()
            
          });
      }
    });
  }

});
