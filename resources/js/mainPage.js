let productData = [
    { title: 'Helicopter Ride', description: 'helicopter ride for 2', price: 100 },
    { title: 'Make-Up', description: 'full kit of makeup', price: 123 },
    { title: 'Motorbike Ride', description: 'hour-long bike ride', price: 140 },
    { title: 'Driver\'s License Lessons', description: '5 classes to help earn driver\'s license', price: 350 },
    { title: 'Air Balloon Ride', description: 'air ballon ride for 4', price: 235 },
    { title: 'Massage', description: 'full package massage', price: 75 }
];

for(let i = 0; i < productData.length; i++) {
    const product = document.getElementsByClassName('mainPage__product-text')
    product[i].innerHTML = productData[i].title;
}