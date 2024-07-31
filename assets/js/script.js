'use strict';
const productList = document.querySelector('.product-list');
const localJSON = async function () {
	const res = await fetch('data.json');
	const data = await res.json();
	console.log(data);
	// const str = data[1].name.toLowerCase();
	// console.log(data[1].name.toLowerCase());

	data.forEach((mov, i) => {
		// console.log(mov, i);
		// console.log(mov.name);
		const price = mov.price;
		const priceStr = price.toString();
		const realPrice = priceStr.padEnd(3, 0);
		console.log(realPrice);
		// const realPrice = price.padEnd(2, 0);
		// console.log(realPrice);
		const html = `
		<div class="products product-one">
			<img src="${
				mov.image.mobile
			}" alt="${mov.name.toLowerCase()}" class="product-image" />
			
			<button class="add-to-cart"> <img src="./assets/images/icon-add-to-cart.svg" alt="empty cart" /> Add to cart </button>
			
			<div class="product-details">
				<h5 class="product__sub-name">${mov.category}</h5>
				<h2 class="product__name">${mov.name}</h2>
				<p class="product__price">$</p>
			</div>

		</div>`;

		productList.insertAdjacentHTML('beforeend', html);
	});
};

localJSON();

let now = new Date();
const date = String(now);
console.log(typeof now);
// const day = `${now.getDate()}`.padEnd(4, 1);
// const day = now.padEnd(4, 1);
const dd = now.getDate().toString();
const ee = dd.padEnd(4, 1);
console.log(ee);

// let number = 10;
// const str = String(number);
// console.log(typeof str);
