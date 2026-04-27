function proximo() {

  // Grupo A → D
  document.querySelector("#grupo-a h2").textContent = "Grupo D";

  let a = document.querySelectorAll("#grupo-a li");
  a[0].textContent = "Estados Unidos";
  a[1].textContent = "Paraguai";
  a[2].textContent = "Austrália";
  a[3].textContent = "Turquia";

  document.querySelector("#grupo-a p").textContent =
    "Os EUA jogam em casa. Austrália enfrenta sul-americanos com frequência.";

  // Grupo B → E
  document.querySelector("#grupo-b h2").textContent = "Grupo E";

  let b = document.querySelectorAll("#grupo-b li");
  b[0].textContent = "Alemanha";
  b[1].textContent = "Equador";
  b[2].textContent = "Costa do Marfim";
  b[3].textContent = "Curaçao";

  document.querySelector("#grupo-b p").textContent =
    "Alemanha domina grupos. Equador e Costa do Marfim são físicos.";

  // Grupo C → F
  document.querySelector("#grupo-c h2").textContent = "Grupo F";

  let c = document.querySelectorAll("#grupo-c li");
  c[0].textContent = "Holanda";
  c[1].textContent = "Japão";
  c[2].textContent = "Tunísia";
  c[3].textContent = "Suécia";

  document.querySelector("#grupo-c p").textContent =
    "Holanda e Japão já fizeram bons jogos. Suécia tem tradição.";
}