// Attendez que le document soit entièrement chargé
document.addEventListener("DOMContentLoaded", function() {
    // Récupérez la référence du bouton
    var button = document.getElementById("myButton");
  
    // Ajoutez un gestionnaire d'événement au clic sur le bouton
    button.addEventListener("click", function() {
      // Ajoutez la classe "rotate" au bouton
      button.classList.add("rotate");
  
      // Supprimez la classe "rotate" après 1 seconde
      setTimeout(function() {
        button.classList.remove("rotate");
      }, 1000);
    });
  });