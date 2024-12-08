

/* Menú efecto acordeón, FAQ home */
var col = document.getElementsByClassName("colapsable");
var i;

for (i = 0; i < col.length; i++) {
  col[i].addEventListener("click", function() {
    this.classList.toggle("activo");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

/* Menú de navegación principal, colapsable en pantallas pequeñas.
   Fuente: https://www.w3schools.com/howto/howto_js_responsive_navbar_dropdown.asp.
   Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("cabecera-nav-pral");
  if (x.className === "cabecera-nav") {
    x.className += " responsive";
  } else {
    x.className = "cabecera-nav";
  }
}
