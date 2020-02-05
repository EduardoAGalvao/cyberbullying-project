$(document).ready(function() {
  
  // Coletando a navbar
  const navbar = document.getElementById("navbar");
  
  // Coletando a distância da navbar até o topo
  let sticky = navbar.offsetTop;

  // Setando evento para "prender" ou "soltar" a navbar de acordo com a posição da página
  window.onscroll = () => {
    
    return window.pageYOffset >= sticky ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
    
  }
  
});

