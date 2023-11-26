<script>
	import { get } from 'svelte/store';
	import { addProducts, removeProduct, cartItems } from '../../../store/cartStore.js';
	export let data;
	export let image;

	async function singleProduct() {
		const productFetch = await fetch(`https://dummyjson.com/products/${data.productId}`);
		const json = await productFetch.json();
		return json;
	}

	let promise = singleProduct();
	let productsInCart = get(cartItems);

	let productQuantity =
		productsInCart.find((product) => {
			return product.id === Number(data.productId);
		}) ?? 0;

	function handleImage(event) {
		image = event.target.dataset.image;
	}

	cartItems.subscribe((newValue) => {
		productQuantity =
			newValue.find((product) => {
				return product.id === Number(data.productId);
			}) ?? 0;
	});
</script>

{#await promise}
	<h1>Loading...</h1>
{:then product}
	<section class="product_main">
		<header class="product_img-container">
			<img class="product_img" src={image ?? product.thumbnail} alt="Product Thumbnail" />
			<div class="balls_container">
				{#each product.images as productImage}
					<span
						data-image={productImage}
						on:click={handleImage}
						class={`ball ${productImage === image ? 'active' : ''}`}
					/>
				{/each}
			</div>
		</header>
		<article class="product_info">
			<div class="product_text_header">
				<h2 class="product_title">{product.title}</h2>
				<p class="product_description">{product.description}</p>
				<p class="product_price">${product.price}</p>
			</div>
			<div class="product_text_footer">
				<div class="product_cta">
					<button on:click={() => removeProduct(product.id)}>-</button>
					<span>{productQuantity.quantity ?? 0}</span>
					<button on:click={() => addProducts(product.id, product.price)}>+</button>
				</div>
				<button on:click={() => addProducts(product.id, product.price)} class="add-button"
					>Add To Cart</button
				>
			</div>
		</article>
	</section>
{/await}

<style>
	.product_main {
		width: 90%;
		margin: 1rem auto;
	}

	.balls_container {
		padding: 1rem 0;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
	}

	.product_img-container {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.product_img {
		width: 100%;
		max-height: 300px;
		max-width: 320px;
		object-fit: cover;
		aspect-ratio: 1 / 1;
	}

	.ball {
		width: 12px;
		height: 12px;
		border: 2px solid #abf;
		border-radius: 50%;
		cursor: pointer;
		transition: transform 0.3s;
	}

	.active {
		background-color: #abf;
		transform: scale(1.35);
		animation: enterBackground forwards ease-in-out 0.15s;
	}

	.product_text_header {
		border-bottom: 1px solid #adadad;
		margin-bottom: 16px;
	}

	.product_price {
		font-size: 20px;
		font-weight: 700;
	}

	.product_description {
		line-height: 1.05;
	}

	.add-button {
		outline: none;
		background-color: transparent;
		font-weight: 600;
		border: 3px solid #abf;
		padding: 0.45rem 2rem;
		border-radius: 20px;
		cursor: pointer;
		transition: background-color 0.4s, color 0.2s;
	}

	.product_cta {
		display: flex;
		width: fit-content;
		align-items: center;
		margin-bottom: 20px;
		padding: 0.2rem;
		font-weight: 600;
		border-radius: 20px;
		background-color: #abf;
		gap: 20px;
	}

	.product_cta > button {
		border: none;
		outline: none;
		background: transparent;
		font-size: 20px;
		cursor: pointer;
	}

	@media screen and (min-width: 768px) {
		.product_main {
			display: flex;
			justify-content: space-around;
		}

		.product_img-container {
			width: auto;
		}

		.add-button:hover {
			background-color: #abf;
			color: #fff;
		}
	}

	@keyframes enterBackground {
		from {
			background-color: transparent;
		}
		to {
			background-color: #abf;
		}
	}
</style>
