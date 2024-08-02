'use strict';
const productList = document.querySelector('.product-list');

const localJSON = async function () {
	try {
		const res = await fetch('data.json');
		const data = await res.json();
		// console.log(data);
		// const str = data[1].name.toLowerCase();
		// console.log(data[1].name.toLowerCase());

		data.forEach((mov, i) => {
			let price, priceStr, realPrice;
			// console.log(mov, i);
			// console.log(mov.name);
			price = mov.price;
			priceStr = price.toString();
			// realPrice = priceStr.padEnd(3, 0);

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
		<div class="products product-${i + 1}">
			<img src="${
				mov.image.mobile
			}" alt="${mov.name.toLowerCase()}" class="product-image" />
			
			<button class="add-to-cart">
				<span class="un-selected">
					<img src="./assets/images/icon-add-to-cart.svg" alt="empty cart" />
					<p>Add to cart</p>
				</span>

				<span class="selected hidden">
					<img src="./assets/images/icon-decrement-quantity.svg" alt="the dash symbol" class="symbol decrement" />

				<span class="quantity">1</span>
					<img src="./assets/images/icon-increment-quantity.svg" alt="the addition symbol"
					class="symbol increment" />
				</span>
			</button>
			
			<div class="product-details">
				<h5 class="product__sub-name">${mov.category}</h5>
				<h2 class="product__name">${mov.name}</h2>
				<p class="product__price">$${realPrice}</p>
			</div>

		</div>`;

			productList.insertAdjacentHTML('beforeend', html);

			const btnAddToCart = document.querySelector('.add-to-cart');
			const selectedCart = document.querySelector('.selected');
			const unSelectedCart = document.querySelector('.un-selected');
			const cartImage = document.querySelector('.product-image');

			console.log(btnAddToCart);
			btnAddToCart.addEventListener('click', function () {
				btnAddToCart.classList.add('background-color');
				btnAddToCart.style.border = 'none';
				unSelectedCart.classList.add('hidden');
				selectedCart.classList.remove('hidden');
				cartImage.style.border = '2px solid hsl(14, 86%, 42%)';
			});
		});
	} catch (err) {
		console.error(err);
	}
};

localJSON();
