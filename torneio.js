form.addEventListener("submit", (e) => {
  e.preventDefault();
});

var bot = document.querySelector(".botao");

bot.addEventListener("click", () => {
  const nome = document.querySelector(".inputNome");
  const idade = document.querySelector(".inputIdade");

  const junior = document.querySelector(".listJunior");
  const master = document.querySelector(".listMaster");
  const senior = document.querySelector(".listSenior");

  const list = document.createElement("li");

  list.textContent = `${nome.value}, ${idade.value}`;

  if (nome.value != "" && idade.value != "") {
    if (idade.value < 18) {
      junior.appendChild(list);
    } else if (idade.value > 40) {
      senior.appendChild(list);
    } else if (idade.value >= 10 && idade.value <= 40) {
      master.appendChild(list);
    }
  }

  nome.value = "";
  idade.value = "";
  nome.focus();
});
