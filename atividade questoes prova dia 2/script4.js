function add() {

  var areaCards = document.getElementById("Cards");

  var novoCard = document.createElement("div");

  novoCard.className = "card";
  novoCard.style.width = "22rem";
  novoCard.style.margin = "10px";

  novoCard.innerHTML = `
    <img src="Lucas_Paqueta.webp" class="card-img-top">

    <div class="card-body">
      <h5 class="card-title">
        <span>Lucas Tolentino Coelho de Lima</span>
        <span class="badge text-bg-secondary">8,8</span>
      </h5>

      <p class="card-text">
        <span><strong>Nascimento:</strong> 27/08/1997 (28 anos)</span><br>
        <span><strong>Altura:</strong> 1,80 m</span><br>
        <span><strong>Posição:</strong> Meio-campista</span>
      </p>
    </div>
  `;

  areaCards.appendChild(novoCard);
}