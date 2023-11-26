<script>
	import { addProducts } from '../store/cartStore';
	export let thumbnail;
	export let title;
	export let description;
	export let price;
	export let brand;
	export let stock;
	export let id;
	export let quantity = 0;
	//export let images;
</script>

<section class="product_main">
	<header class="product_img-container">
		<a style="width: 100%;" href={`/product/${id}`}>
			<img class="product_img" src={thumbnail} alt="Product Thumbnail" />
		</a>
	</header>
	<article class="product_info">
		<div class="product_text_header">
			<p class="product_title">{title}</p>
			<p class="product_price">{price}</p>
		</div>
		<div>
			<p class="product_description">{description}</p>
		</div>
		<div class="product_text_footer">
			<p class="product_stock">In Stock: {stock}</p>
			<p class="product_brand">{brand}</p>
		</div>
		<button on:click={() => addProducts(id, price)} class="add-button">Add To Cart</button>
	</article>
</section>

<style>
	p {
		margin: 0;
	}

	.product_main {
		min-width: 250px;
		padding: 10px;
		display: flex;
		flex-direction: column;
		border-radius: 8px;
		background-color: rgb(235, 235, 235);
	}

	.product_text_header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 15px;
	}

	.product_info {
		padding: 20px;
		display: flex;
		flex-grow: 1;
		flex-direction: column;
		justify-content: space-between;
	}

	.product_title {
		font-weight: 600;
		font-size: 20px;
	}

	.product_price {
		font-weight: 600;
		position: relative;
	}

	.product_description {
		font-size: 14px;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		overflow: hidden;
		line-height: 1.15;
		margin-bottom: 15px;
	}

	.product_price::before {
		content: '$';
		position: absolute;
		left: -7px;
		top: 3px;
		font-size: 11px;
		font-weight: 700;
	}

	.product_price::after {
		content: '.00';
		position: absolute;
		right: -15px;
		top: 2px;
		font-size: 11px;
		font-weight: 700;
	}

	.product_img-container {
		display: flex;
		justify-content: center;
	}

	.product_img {
		width: 100%;
		aspect-ratio: 1 / 1;
		object-fit: cover;
		border-radius: 8px;
	}

	.product_text_footer {
		display: flex;
		justify-content: space-between;
		margin-bottom: 15px;
	}

	.product_stock,
	.product_brand {
		font-weight: 600;
		letter-spacing: -1px;
	}

	.product_button-container {
		width: 90%;
		padding: 0 20px;
	}

	.add-button {
		align-self: flex-start;
		justify-self: flex-end;
		padding: 0.35rem 1.5rem;
		border: none;
		outline: none;
		color: white;
		font-weight: 600;
		background-color: rgb(110, 67, 210);
		border-radius: 3px;
		transition: background-color 0.5s, color 0.3s;
		cursor: pointer;
	}

	@media screen and (min-width: 768px) {
		.add-button:hover {
			background-color: white;
			color: rgb(110, 67, 210);
		}
	}
</style>
