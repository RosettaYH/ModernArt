(function($) {
  "use strict"; // Start of use strict

  $(document).ready(function() {
    loadData()
    loadSlider()

  });
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
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  navbarCollapse();
  $(window).scroll(navbarCollapse);
})(jQuery); 

function loadSlider(){
  let sliderValues = []
  for (i = 0; i < 13; i++) {
    sliderValues.push(1800 + (20*i));
  }
  var slider = new rSlider({
    target: '#slider',
    values: sliderValues,
    range: true,
    tooltip: false,
    scale: true,
    labels: true,
    set: [1800, 2050],
    onChange: function (vals) {
      console.log(vals);
      if (!$("#portfolio").is(":empty")) {
        $("#portfolio").html("");
      }
      let splitVals = []
      splitVals = vals.split(",")
      loadPortfolio(splitVals[0], splitVals[1])

    }
  });
}

function loadData(){
  loadPortfolio(1800, 2050)
  loadModal()
}

function loadPortfolio(startYear, endYear) {
  console.log(startYear)
  console.log(endYear)
  for(a of portfolioData) {
    //console.log(Object.values(a))
    let pageSection = document.createElement("section");
    pageSection.classList.add("page-section", "portfolio");

    let container = document.createElement("div");
    container.classList.add("container");

    let elementStartYear = Object.keys(a)[0].substring(Object.keys(a)[0].indexOf("(")+1, Object.keys(a)[0].indexOf("(")+5)
    let elementEndYear = Object.keys(a)[0].substring(Object.keys(a)[0].lastIndexOf("-")+1, Object.keys(a)[0].lastIndexOf("-")+5)

    if(elementStartYear >= startYear && elementEndYear <= endYear){
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
          //console.log(dataElement)
          loadGrid(grid, dataElement)  
        }
         
      }
      container.appendChild(sectionHeading)
      container.appendChild(divider)
      container.appendChild(grid)
      document.getElementById("portfolio").appendChild(pageSection).appendChild(container)

    }
  }
  ScrollReveal().reveal("#portfolio .card", { delay: 200 });
}

function loadGrid(grid, dataElement){
  //console.log(dataElement)
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
  for(m of modalData){
    let modal = Object.values(m)[0]
    console.log(Object.values(modal))
    let portfolioModal = document.createElement("div");
    portfolioModal.classList.add("portfolio-modal", "modal", "fade");
    portfolioModal.id = Object.keys(m);

    let modalDialog = document.createElement("div");
    modalDialog.classList.add("modal-dialog", "modal-xl");

    let modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    let closeButton = document.createElement("button");
    closeButton.classList.add("close");
    closeButton.setAttribute("type", "button");
    closeButton.setAttribute("data-dismiss", "modal");
    closeButton.innerHTML = "<span aria-hidden='true'><i class='fas fa-times'></i></span>"

    let modalBody = document.createElement("div");
    modalBody.classList.add("modal-body");

    let container = document.createElement("div");
    container.classList.add("container", "row", "justify-content-center");

    let col = document.createElement("div");
    col.classList.add("col-lg-8", "text-center");

    let h2 = document.createElement("h2");
    h2.classList.add("portfolio-modal-title", "text-secondary", "text-uppercase", "mb-0");
    h2.textContent = modal[0]

    let divider = document.createElement("div");
    divider.classList.add("divider-custom");
    divider.innerHTML = "<div class='divider-custom-line'></div><div class='divider-custom-icon'><i class='fas fa-star'></i></div><div class='divider-custom-line'></div>"

    let carouselId = "carousel" + Object.keys(m);
    let carousel = document.createElement("div");
    carousel.setAttribute("class", "carousel slide")
    carousel.setAttribute("data-ride", "carousel")
    carousel.id = carouselId

    let carouselInner = document.createElement("div");
    carouselInner.classList.add("carousel-inner");
    for(imgSrc of modal[1]){
      let carouselItem = document.createElement("div");
       carouselItem.classList.add("carousel-item");
      if(imgSrc == modal[1][0]){
        carouselItem.classList.add("active")
      }
     
      let image = document.createElement("img");
      image.classList.add("img-fluid", "rounded", "mb-5", "d-block", "w-100");
      image.src = imgSrc

      carouselInner.appendChild(carouselItem).appendChild(image)
    }
   
    let carouselControlPrev = document.createElement("div");
    carouselControlPrev.classList.add("carousel-control-prev");
    carouselControlPrev.setAttribute("href", "#" + carouselId)
    carouselControlPrev.setAttribute("role", "button")
    carouselControlPrev.setAttribute("data-slide", "prev")
    carouselControlPrev.innerHTML = "<span class='carousel-control-prev-icon' aria-hidden='true'></span><span class='sr-only'>Previous</span>"

    let carouselControlNext = document.createElement("div");
    carouselControlNext.classList.add("carousel-control-next");
    carouselControlNext.setAttribute("href", "#" + carouselId)
    carouselControlNext.setAttribute("role", "button")
    carouselControlNext.setAttribute("data-slide", "next")
    carouselControlNext.innerHTML = "<span class='carousel-control-next-icon' aria-hidden='true'></span><span class='sr-only'>Previous</span>"
    
    let texts =  document.createElement("div");
    texts.id = "texts"

    for(t of modal[2]){
      let text = document.createElement("p");
      text.classList.add("text-justify");
      text.innerHTML = Object.values(t)[0] + " "

      let url = document.createElement("a")
      url.setAttribute("href", Object.keys(t))
      url.textContent = "More"
      
      let hr = document.createElement("hr")

      texts.appendChild(text).appendChild(url)
      texts.appendChild(hr)
    } 
  

    let button = document.createElement("button");
    button.classList.add("btn", "btn-primary", "mt-4");                  
    button.setAttribute("data-dismiss", "modal")
    button.innerHTML = "<i class='fas fa-times fa-fw'></i>Close Window"

    carousel.appendChild(carouselInner)
    carousel.appendChild(carouselControlPrev)
    carousel.appendChild(carouselControlNext)

    col.appendChild(h2)
    col.appendChild(divider)
    col.appendChild(carousel)
    col.appendChild(texts)
    //col.appendChild(hr)
    col.appendChild(button)


    modalContent.appendChild(closeButton)
    modalContent.appendChild(modalBody).appendChild(container).appendChild(col)

    modalDialog.appendChild(modalContent)
    portfolioModal.appendChild(modalDialog)
    document.getElementById("modal").appendChild(portfolioModal)
  }
}