<script>
	import { cartItems, addProducts, removeProduct } from '../store/cartStore';
	import { get } from 'svelte/store';

	let promisedProducts = [];
	let productsInCart = get(cartItems);
	let subtotal = 0;
	let productQuantity = (id) => productsInCart.find((product) => product.id === id);

	const endpoint = 'https://dummyjson.com/products';

	cartItems.subscribe(async (newValue) => {
		await Promise.all(
			newValue.map(async (product) => {
				return fetch(`${endpoint}/${product.id}`)
					.then((response) => response.json())
					.then((response) => response);
			})
		).then((response) => (promisedProducts = response));
		productQuantity = (id) => newValue.find((product) => product.id === id);

		subtotal = newValue.reduce((prev, next) => {
			return prev + next.price * next.quantity;
		}, 0);
	});
</script>

{#if promisedProducts.length === 0}
	<h2 style="color: #fff;">Cart Is Empty!</h2>
{:else}
	<p style="color: aliceblue; font-size: 25px; font-weight: 700; padding: 0px 15px;">
		Subtotal: ${subtotal}
	</p>
	<section class="cartProduct_main">
		{#each promisedProducts as product}
			<article class="cartProduct">
				<img class="cartProduct_img" src={product.thumbnail} alt={product.title} />
				<div class="cartProduct_info">
					<p>{product.title}</p>
					<p>${product.price}</p>
				</div>
				<div class="product_cta">
					<button on:click={() => addProducts(product.id)}>+</button>
					<button>{productQuantity(product.id)?.quantity}</button>
					<button on:click={() => removeProduct(product.id)}>-</button>
				</div>
			</article>
		{/each}
	</section>
{/if}

<style>
	.cartProduct_main {
		width: 80%;
		max-width: 300px;
		margin: 5rem auto;
		display: flex;
		flex-direction: column;
		gap: 15px;
	}

	.cartProduct {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #182a3e;
		padding: 1rem;
		border-radius: 8px;
	}

	.cartProduct_img {
		width: 100%;
		max-width: 300px;
		aspect-ratio: 1 / 1;
		object-fit: cover;
		border-radius: 8px;
	}

	.cartProduct_info {
		width: 100%;
		display: flex;
		justify-content: space-between;
		color: aliceblue;
	}

	.product_cta {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.product_cta > button {
		outline: none;
		border: none;
		color: #fff;
		background-color: #091b2e;
		border-radius: 15px;
		padding: 0.25rem 1rem;
		cursor: pointer;
		font-size: 16px;
	}

	.product_cta > :nth-child(2n) {
		font-weight: 700;
	}
</style>
