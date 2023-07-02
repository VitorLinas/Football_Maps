

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





function criar() {
    window.alert("Faça o login ou cadastre-se!")
    window.location.href = "/telaLogin/tlogin.html";

}

