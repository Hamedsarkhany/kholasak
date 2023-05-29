const menuBtn = document.querySelector('.search-btn');
const menu = document.querySelector('.showsearch');
        
let showMenu = false;
        
menuBtn.addEventListener('click', toggleMenu);
        
function toggleMenu() {
  if (!showMenu) {
      const newLocal = 'show-search';
    menu.classList.add(newLocal);
    showMenu = true;
  } 
  else {
    menu.classList.remove('show-search');
    showMenu = false;
  }
}

// show more code 

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "مشاهده بیشتر"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "مشاهده کمتر"; 
    moreText.style.display = "contents";
  }
}

///
const the_animation = document.querySelectorAll('.animation')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation')
        }
            else {
                entry.target.classList.remove('scroll-animation')
            }
        
    })
},
   { threshold: 0.5
   });
//
  for (let i = 0; i < the_animation.length; i++) {
   const elements = the_animation[i];

    observer.observe(elements);
  } 

