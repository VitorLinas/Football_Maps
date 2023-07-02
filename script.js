document.getElementById("botao-enviar").addEventListener("click", function() {
  
  var tituloValue = document.getElementById("tituloValue").value;
  var descricaoValue = document.getElementById("descricaoValue").value;

  
  var card = document.createElement("div");
  card.classList.add("card");

  var content = document.createElement("div");
  content.classList.add("content");

  var unsplashURL = "https://source.unsplash.com/random";
  var image = document.createElement("img");
  image.src = unsplashURL;
  image.width = 300;
  image.height = 200;
  content.appendChild(image);

  
  var title = document.createElement("h1");
  title.textContent = tituloValue;
  var strongTitle = document.createElement("strong");
  strongTitle.appendChild(title);

  
  var description = document.createElement("p");
  description.textContent = descricaoValue;
  var strongDescription = document.createElement("strong");
  strongDescription.appendChild(description);

  
  content.appendChild(strongTitle);
  content.appendChild(strongDescription);

  
  card.appendChild(content);

  
  var cardsContainer = document.getElementById("cards");
  cardsContainer.appendChild(card);

  
  var cardData = {
      titulo: tituloValue,
      descricao: descricaoValue,
      imagem: unsplashURL
  };
  var cardsData = localStorage.getItem("cardsData");
  if (cardsData) {
      var parsedCardsData = JSON.parse(cardsData);
      parsedCardsData.push(cardData);
      localStorage.setItem("cardsData", JSON.stringify(parsedCardsData));
  } else {
      var newCardsData = [cardData];
      localStorage.setItem("cardsData", JSON.stringify(newCardsData));
  }
});



function searchAds() {
    var searchTerm = document.querySelector('.input-group input').value;
    var ads = document.getElementsByClassName('card');

    for (var i = 0; i < ads.length; i++) {
        var title = ads[i].querySelector('.text h1');
        var txtValue = title.textContent || title.innerText;

        if (txtValue.toUpperCase().includes(searchTerm.toUpperCase())) {
            ads[i].style.display = ''; 
        } else {
            ads[i].style.display = 'none'; 
        }
    }

    var footer = document.querySelector('footer');
    if (window.innerWidth > 1000) {
        footer.style.position = 'fixed';
    } else {
        footer.style.position = 'relative';
    }
}


window.addEventListener('resize', function() {
    searchAds();
});


