
(function($) {
  "use strict"; // Start of use strict

  $(document).ready(function() {
    loadData()
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 71)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);


})(jQuery); // End of use strict


function loadData(){
  loadPortfolio()
  loadModal()
}

function loadPortfolio() {
  // Add header to indicate food

  for(a of data) {
    console.log(Object.values(a))
    let pageSection = document.createElement("section");
    pageSection.classList.add("page-section", "portfolio");

    let container = document.createElement("div");
    container.classList.add("container");

    let sectionHeading = document.createElement("h2");
    sectionHeading.classList.add("page-section-heading", "text-center", "text-uppercase", "text-secondary", "mb-0");
    sectionHeading.textContent = Object.keys(a);

    let divider = document.createElement("div");
    divider.classList.add("divider-custom")
    divider.innerHTML = '<div class="divider-custom-line"></div><div class="divider-custom-icon"><i class="fas fa-star"></i></div><div class="divider-custom-line"></div>'

    let grid = document.createElement("div");
    grid.classList.add("row", "justify-content-center")
    for (b of Object.values(a)){
      for (dataElement of Object.values(b)){
        console.log(dataElement)
        loadGrid(grid, dataElement)  
      }
       
    }
    container.appendChild(sectionHeading)
    container.appendChild(divider)
    container.appendChild(grid)
    document.getElementById("portfolio").appendChild(pageSection).appendChild(container)

  }
  
}

function loadGrid(grid, dataElement){
  console.log(dataElement)
  let values = Object.values(dataElement)[0]

  let card = document.createElement("div");
  card.classList.add("card", "col-md-6", "col-lg-4" ,"mb-5", "pt-4");

  let portfolioItem = document.createElement("div");
  portfolioItem.classList.add("portfolio-item", "mx-auto", "rounded-top")
  portfolioItem.setAttribute("data-toggle", "modal");
  portfolioItem.setAttribute("data-target", values[2]);

  let caption = document.createElement("div");
  caption.classList.add("portfolio-item-caption", "d-flex", "align-items-center", "justify-content-center", "h-100", "w-100")

  let captionContent = document.createElement("div");
  captionContent.classList.add("portfolio-item-caption-content", "text-center", "text-white")
  captionContent.innerHTML = '<i class="fas fa-plus fa-3x"></i>'

  let img = document.createElement("img");
  img.classList.add("card-img-top", "rounded-top")
  img.setAttribute("src", values[3])

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body", "rounded-bottom")

  let name = document.createElement("h5");
  name.textContent = Object.keys(dataElement);

  let p1 = document.createElement("p");
  p1.textContent = values[0]

  let p2 = document.createElement("p");
  p2.textContent = values[1]

  
  let btn = document.createElement("a")
  btn.classList.add("btn", "btn-primary")
  btn.setAttribute("data-toggle", "modal");
  btn.setAttribute("data-target", values[2]);
  btn.textContent = "More"

  portfolioItem.appendChild(caption)
  portfolioItem.appendChild(img)
  caption.appendChild(captionContent)

  cardBody.appendChild(name)
  cardBody.appendChild(p1)
  cardBody.appendChild(p2)
  cardBody.appendChild(btn)

  card.appendChild(portfolioItem)
  card.appendChild(cardBody)

  grid.appendChild(card)
}
function loadModal(){

}
