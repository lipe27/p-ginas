// Efeito simples de clique. Os cartões continuam sendo links normais.
document.querySelectorAll(".link-card").forEach((card) => {
  card.addEventListener("click", () => {
    card.style.opacity = "0.82";
    setTimeout(() => {
      card.style.opacity = "";
    }, 140);
  });
});
