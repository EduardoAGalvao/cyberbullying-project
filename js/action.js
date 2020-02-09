$(document).ready(function() {
  
  // Coletando a navbar
  const navbar = document.getElementById("navbar");
  
  // Coletando a distância da navbar até o topo
  let sticky = navbar.offsetTop;

  // Setando evento para "prender" ou "soltar" a navbar de acordo com a posição da página
  window.onscroll = () => {
    
    return window.pageYOffset >= sticky ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
    
  }
  
  //EFEITO DE ANCORA NA NAVEGAÇÃO EM LANDPAGES
  function filterPath(string) {
      return string
        .replace(/^\//,'')
        .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
        .replace(/\/$/,'');
    }
    $('a[href*=\\#]').each(function() {
        if ( filterPath(location.pathname) == filterPath(this.pathname) && location.hostname == this.hostname && this.hash.replace(/#/,'') ) {
          var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
          var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
           if ($target) {
             var targetOffset = $target.offset().top - 100;
             
             $(this).click(() => {
               if($(this).attr('id') != 'setaCarrosselPrev' && $(this).attr('id') != 'setaCarrosselNext'){
                $('html, body').animate({scrollTop: targetOffset}, 1000);
               return false;  
               }
             });
             
          }
        } 
    });
  
    $(document).on('click', '#toggle_icon', function(){
      $(this).toggleClass("change");
      $('#menu').slideToggle().css('display', 'flex');
    })
  
});
