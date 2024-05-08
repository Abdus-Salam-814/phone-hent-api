const loadPhone = async (searchText="12", isShowAll) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);

    const data = await res.json();
    const phones = data.data;
    // console.log(phones)
    displayPhones(phones, isShowAll)
}

const displayPhones = (phones, isShowAll) =>{

    // step 1: get container
const phonesCardContainer = document.getElementById('phones-card-container');
// clear carde container 
phonesCardContainer.innerHTML = '';






// Search phone not Found 

if(phones.length == 0 ){
    const searchFildElement = document.getElementById('search-fild');
    const searchText = searchFildElement.value;
    const warningMess = document.getElementById('warning-massege');
    warningMess.innerText = `You searched by typing.... "${searchText}".
     We're Sorry. We Were not able to find a match.
    
    Try Another Search.`
}else{
    
    
    const warningMess = document.getElementById('warning-massege');
    const searchFildElement = document.getElementById('search-fild');
    const searchText = searchFildElement.value;
    warningMess.innerText = ` Find match Result is ${phones.length}`

}

// Show All buttonn hidden and show
const showAllContainer = document.getElementById('show-all-caontainer');

// console.log(phones.length)

if(phones.length > 14 && !isShowAll){
    showAllContainer.classList.remove('hidden');
}else{
    showAllContainer.classList.add('hidden');

}


// is show All
// console.log('is Show all', isShowAll)
// display only first 12 phone 
if(!isShowAll){
 phones = phones.slice(0,12);

}



phones.forEach(phone => {
//  console.log(phone)  
 //Step 2: Create a div
const phoneCard = document.createElement('div');

phoneCard.classList = 'card  bg-base-100 shadow-xl rounded-2xl m-2 bg-sky-100';
//=============Step 2: Create a div Ends=================
// Step 3: set iner html
phoneCard.innerHTML = `
        <figure class="bg-white p-8 rounded-2xl"><img src="${phone.image}" alt="Shoes" /></figure>
                <div class="card-body text-center  ">
                <h2 class=" font-extrabold text-2xl text-center">${phone.phone_name}</h2>
                <p class="font-semibold">Brand: ${phone.brand}</p>
                <p> There are many variations of
                passages of available, but the
                majority have suffered</p>
                <div class="card-actions justify-center">
                <button onclick="handelShowDetails('${phone.slug}'); show_details_modal.showModal()" class="btn btn-primary">Show Details</button>

                </div>
            </div>       
`
// ======================Step 3: Set innerHTML Ends===================
// Step 4: append child
phonesCardContainer.appendChild(phoneCard)
// ======================Step 4: append child Ends===================
 
});

// hide loading Spiner
toggleLoadingSpinner(false);


}




// step: 5: Search Fild added

const handelSearch = (isShowAll) =>{
    toggleLoadingSpinner(true);
    const searchFildElement = document.getElementById('search-fild');
    const searchText = searchFildElement.value;
    loadPhone(searchText, isShowAll);
    
}

const toggleLoadingSpinner = (isLoading) =>{
    const loadingSpinner = document.getElementById('loading-spinner');
    if(isLoading){
    loadingSpinner.classList.remove('hidden');
        
    }else{
        loadingSpinner.classList.add('hidden');

    }
}

// handle show all
const handelShowAll = () =>{
    handelSearch(true);
}

// Show details
const handelShowDetails = async (id) =>{
//    console.log('show deatls',id )

   // load single data
 const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
 const data = await res.json();
//  console.log(data)
const phone = data;

showPhoneDetails(phone);
}

const showPhoneDetails = (phone) =>{

    // console.log(phone);
const showDetailsModulContainer = document.getElementById('show-details-container');

showDetailsModulContainer.innerHTML = `
<div class="bg-blue-300 rounded-xl" >
  <figure class="px-10 pt-10 flex justify-center content-center bg-white p-4 rounded-xl shadow-lg">
    <img class="rounded-md" src="${phone.data.image}" />
  </figure>
  <div class="card-body items-center text-center ">
    <h2 class="card-title">${phone?.data?.name}</h2>
    <p>It is a long established fact that a reader will be distracted by the readable content
    of a page when looking at its layout. </p>
    <div class="text-start mb-5">
    <h4 > <span class = "font-extrabold">Storage:</span> ${phone?.data?.mainFeatures?.storage } </h4>
    <h4 > <span class = "font-extrabold">DisplaySize:</span> ${phone?.data?.mainFeatures?.displaySize } </h4>
    <h4 > <span class = "font-extrabold">Chip Set:</span> ${phone?.data?.mainFeatures?.chipSet} </h4>
    <h4 > <span class = "font-extrabold">Memory:</span> ${phone?.data?.mainFeatures?.memory} </h4>
    <h4 > <span class = "font-extrabold">Release Date:</span> ${phone?.data?.releaseDate} </h4>
    <h4 > <span class = "font-extrabold">Brand:</span> ${phone?.data?.brand} </h4>
    <h4 > <span class = "font-extrabold">GPS:</span> ${phone?.data?.others?.GPS} </h4>
    </div>
    <div class="card-actions">
      <button class="btn btn-primary btn-wide disabled:opacity-75 ">Buy Now</button>
    </div>
  </div>
</div>
`
console.log(phone);
console.log(phone?.data?.mainFeatures?.storage    );

// show the modal
show_details_modal.showModal()

}



loadPhone();



