let productData = [
    { title: 'Helicopter Ride', description: 'helicopter ride for 2', price: '$100' },
    { title: 'Make-Up', description: 'full kit of makeup', price: '$123' },
    { title: 'Motorbike Ride', description: 'hour-long bike ride', price: '$140' },
    { title: 'Driver\'s License Lessons', description: '5 classes to help earn driver\'s license', price: '$350' },
    { title: 'Air Balloon Ride', description: 'air ballon ride for 4', price: '$235' },
    { title: 'Massage', description: 'full package massage', price: '$75' },
    { title: 'Cooking Courses', description: 'get 4 courses for the price of 3', price: '$280' },
];

for(let i = 0; i < productData.length; i++) {
    const productName = document.getElementsByClassName('mainPage__product-text')
    const productDescription = document.getElementsByClassName('mainPage__product-text-description')
    const productPrice = document.getElementsByClassName('mainPage__product-price-text')

    productName[i].innerHTML = productData[i].title;
    productDescription[i].innerHTML = productData[i].description;
    productPrice[i].innerHTML = productData[i].price;
}

const searchItem = () => {
    let input = document.getElementById('searchbar').value;
    let filteredSearch = [];

    for(let i = 0; i < productData.length; i++) {
        if(productData[i].title.toLowerCase().includes(input.toLowerCase())) {
            filteredSearch.push(productData[i]);
        }
    }

    for(let i = 0; i < filteredSearch.length; i++) {
        const productName = document.getElementsByClassName('mainPage__product-text')
        const productDescription = document.getElementsByClassName('mainPage__product-text-description')
        const productPrice = document.getElementsByClassName('mainPage__product-price-text')
    
        productName[i].innerHTML = filteredSearch[i].title;
        productDescription[i].innerHTML = filteredSearch[i].description;
        productPrice[i].innerHTML = filteredSearch[i].price;
    }
}