// Menu/boutons navigation//

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown=>{
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu')
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

select.addEventListener('click',() =>{
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
});

options.forEach(option => {
  option.addEventListener('click',()=>{
    selected.innerText = option.innerText;
    selected.classList.add("text-fade-in");
    setTimeout(()=>{
        selected.classList.remove("text-fade-in");
    },300);

    select.classList.remove('select-clicked');

    caret.classList.remove('caret-rotate');

    menu.classList.remove('menu-open');

    options.forEach(option =>{
        option.classList.remove('active');
    });
    option.classList.add('active');
  });
});

window.addEventListener("click", e =>{
    const size = dropdown.getBoundingClientRect();

    if(
        e.clientX<size.left ||
        e.clientX>size.right ||
        e.clientY<size.top ||
        e.clientY>size.bottom
    ) {
        select.classList.remove('select-clicked');

        caret.classList.remove('caret-rotate');

        menu.classList.remove('menu-open');
    }
});

});

// FIN code Menu/bouton //

// DarkMod //

document.getElementById("toggle").addEventListener("click", 
    function(){
    document.getElementsByTagName('body')[0].classList.toggle("dark-theme");
});

// -------------------------------//

// Script cv //

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//--------------------------------------// 
