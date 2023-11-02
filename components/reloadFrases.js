const containerTitle = document.querySelector("[data-subtitle]");
const text = document.querySelector("[data-text]");
const frases = [
  {
    frase:
      "Today I do what others won't, so tomorrow I can accomplish what others can't",
  },
  {
    frase: "Dream more, be more, learn more",
  },
  {
    frase: "if you want something good, get it from yourself",
  },
  {
    frase: "Don't explain your philosophy. Embody it",
  },
  {
    frase:
      "Never let people who choose the path of least resistance steer you away from your chosen path of most resistance.",
  },
  {
    frase:
      "When you think that you are done, you’re only 40% into what your body’s capable of doing. That’s just the limits that we put on ourselves",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  frase();
});

function frase() {
  text.innerHTML = frases[randomNumber()].frase;
}

let randomNumber = () => {
  return Math.floor(Math.random() * frases.length);
};
