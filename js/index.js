// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector(`.quantity input`).value
  const subTotal = price * quantity
  product.querySelector(`.subtotal span`).innerHTML = subTotal
  return subTotal
}

  // ITERATION 2-3
function calculateAll() {
 const products = document.getElementsByClassName('product')
 let total = 0
for (let i = 0; i < products.length; i++){
updateSubtotal(products[i])
 total += Number((products[i].querySelector(`.subtotal span`).textContent))
}
document.querySelector('h2 span').innerHTML = total
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
