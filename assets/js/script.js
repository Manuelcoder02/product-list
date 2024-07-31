'use strict';
const productList = document.querySelector('.product-list');
const btnAddToCart = document.querySelector('.add-to-cart');
const selectedCart = document.querySelector('.selected');
const unSelectedCart = document.querySelector('.un-selected');
const localJSON = async function () {
	const res = await fetch('data.json');
	const data = await res.json();
	console.log(data);
	// const str = data[1].name.toLowerCase();
	// console.log(data[1].name.toLowerCase());

	data.forEach((mov, i) => {
		let price, priceStr, realPrice;
		// console.log(mov, i);
		// console.log(mov.name);
		price = mov.price;
		priceStr = price.toString();
		// realPrice = priceStr.padEnd(3, 0);
		console.log(realPrice);

		if (priceStr.includes('.')) {
			realPrice = priceStr.padEnd(4, 0);
			// console.log(priceStr.padEnd(4, 0));
		} else {
			realPrice = priceStr.padEnd(4, '.00');
			// console.log(priceStr.padEnd(3, 0));
		}
		// const realPrice = price.padEnd(2, 0);
		// console.log(realPrice);
		const html = `
		<div class="products product-one">
			<img src="${
				mov.image.mobile
			}" alt="${mov.name.toLowerCase()}" class="product-image" />
			
			<button class="add-to-cart"> <img src="./assets/images/icon-add-to-cart.svg" alt="empty cart" /> Add to cart 
			
			</button>
			
			<div class="product-details">
				<h5 class="product__sub-name">${mov.category}</h5>
				<h2 class="product__name">${mov.name}</h2>
				<p class="product__price">$${realPrice}</p>
			</div>

		</div>`;

		productList.insertAdjacentHTML('beforeend', html);
	});
};

localJSON();

console.log(btnAddToCart);
btnAddToCart.addEventListener('click', function () {
	btnAddToCart.classList.add('background-color');
	btnAddToCart.style.border = 'none';
	unSelectedCart.classList.add('hidden');
	selectedCart.classList.remove('hidden');
});
