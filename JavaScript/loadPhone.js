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


// Show All buttonn hidden and show
const showAllContainer = document.getElementById('show-all-caontainer');

console.log(phones.length)

if(phones.length > 12){
    showAllContainer.classList.remove('hidden');
}else{
    showAllContainer.classList.add('hidden');

}

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

// display only first 12 phone 
phones = phones.slice(0,12);




phones.forEach(phone => {
 console.log(phone)  
 //Step 2: Create a div
const phoneCard = document.createElement('div');

phoneCard.classList = 'card  bg-base-100 shadow-xl rounded-2xl m-2 bg-sky-100';
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

// hide loading Spiner
toggleLoadingSpinner(false);


}




// step: 5: Search Fild added

const handelSearch = () =>{
    toggleLoadingSpinner(true);
    const searchFildElement = document.getElementById('search-fild');
    const searchText = searchFildElement.value;
    loadPhone(searchText);
    
}

const toggleLoadingSpinner = (isLoading) =>{
    const loadingSpinner = document.getElementById('loading-spinner');
    if(isLoading){
    loadingSpinner.classList.remove('hidden');
        
    }else{
        loadingSpinner.classList.add('hidden');

    }
}


loadPhone("samsung");
