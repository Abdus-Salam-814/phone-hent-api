fetch('https://openapi.programming-hero.com/api/phones?search=iphone')

.then(res => res.json())
.then(json => carosolData(json))

function carosolData(data) {

    // Get the element
    var element = document.getElementById("carousel-container");
    
    // Set the inner HTML
    element.innerHTML = `
    <div id="carouselExampleDark" class=" w-2/5 mx-auto carousel carousel-dark slide  " data-bs-ride="carousel">
    <div  class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <img src="${data.data[0].image}" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5 class="poppins-extrabold font-extrabold text-3xl" >${data.data[0].phone_name
          }</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src="${data.data[2].image}" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
        <h5 class="poppins-extrabold font-extrabold text-3xl" >${data.data[2].phone_name
        }</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="${data.data[3].image}" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
        <h5 class="poppins-extrabold font-extrabold text-3xl" >${data.data[3].phone_name
        }</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
    
    `;
}

// Call the function to set inner HTML
carosolData();