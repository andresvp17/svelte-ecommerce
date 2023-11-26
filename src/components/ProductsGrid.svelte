<script>
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { cartItems } from '../store/cartStore';
	import Product from '../components/Product.svelte';

	let cart = get(cartItems);
	let products = [];
	let limit = 12;
	let skip = 0;
	let endpoint = `https://dummyjson.com/products?limit=${limit}&skip=${skip * limit}`;

	onMount(async function () {
		const response = await fetch(endpoint);
		const data = await response.json();
		products = data.products;
	});

	async function handleLoad() {
		skip = skip + 1;
		const response = await fetch(
			`https://dummyjson.com/products?limit=${limit}&skip=${skip * limit}`
		);
		const data = await response.json();
		products = products.concat(data.products);
	}
</script>

<section class="products_grid">
	{#each products as product (product.id)}
		<Product
			id={product.id}
			brand={product.brand}
			thumbnail={product.thumbnail}
			description={product.description}
			title={product.title}
			price={product.price}
			stock={product.stock}
		/>
	{/each}
</section>
<div class="button-container">
	<button class="loadButton" on:click={handleLoad}>Load More</button>
</div>

<style>
	.products_grid {
		width: 90%;
		place-content: center;
		padding: 1rem;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		gap: 20px;
	}

	.button-container {
		display: flex;
		justify-content: center;
		padding: 1rem;
	}

	.loadButton {
		outline: none;
		background-color: transparent;
		font-weight: 600;
		border: 3px solid #abf;
		padding: 0.45rem 2rem;
		border-radius: 20px;
		cursor: pointer;
		transition: background-color 0.4s, color 0.2s;
	}

	@media screen and (min-width: 640px) {
		.products_grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media screen and (min-width: 768px) {
		.products_grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}

		.loadButton:hover {
			background-color: #abf;
			color: #fff;
		}
	}

	@media screen and (min-width: 1024px) {
		.products_grid {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
	}
</style>
