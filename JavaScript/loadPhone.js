const loadPhone = async (searchText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);

    const data = await res.json();
    const phones = data.data;
    // console.log(phones)
    displayPhones(phones)
}

const displayPhones = phones =>{

    // step 1: get container
const phonesCardContainer = document.getElementById('phones-card-container');
// clear carde container 
phonesCardContainer.innerHTML = '';
phones.forEach(phone => {
 console.log(phone)  
 //Step 2: Create a div
const phoneCard = document.createElement('div');

phoneCard.classList = 'card  bg-base-100 shadow-xl rounded-2xl m-4 bg-sky-100';
//=============Step 2: Create a div Ends=================
// Step 3: set iner html
phoneCard.innerHTML = `
        <figure class="bg-sky-300 p-8 rounded-2xl"><img src="${phone.image}" alt="Shoes" /></figure>
                <div class="card-body text-center  ">
                <h2 class=" font-extrabold text-2xl text-center">${phone.phone_name}</h2>
                <p class="font-semibold">Brand: ${phone.brand}</p>
                <p> <span class="font-bold">ID:</span> ${phone.slug}</p>
                <div class="card-actions justify-center">
                <button class="btn btn-primary">Show Details</button>
                </div>
            </div>       
`
// ======================Step 3: Set innerHTML Ends===================
// Step 4: append child
phonesCardContainer.appendChild(phoneCard)
// ======================Step 4: append child Ends===================
 
});
}




// step: 5: Search Fild added

const handelSearch = () =>{
    //  console.log('clecked heare')
    const searchFildElement = document.getElementById('search-fild');
    const searchText = searchFildElement.value;
    loadPhone(searchText);
}