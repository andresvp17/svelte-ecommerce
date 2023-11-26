<script>
	import Spinner from '../../../components/Spinner.svelte';
	import Product from '../../../components/Product.svelte';

	export let data;
	const productsCategory = async () => {
		const endpoint = await fetch(`https://dummyjson.com/products/category/${data.category}`);
		const json = endpoint.json();
		return json;
	};
	let promisedCategory = productsCategory();
</script>

<h1 class="category_title">{data.category}</h1>
<section class="category_main">
	{#await promisedCategory}
		<Spinner />
	{:then categories}
		{#each categories.products as category (category.id)}
			<Product
				id={category.id}
				brand={category.brand}
				thumbnail={category.thumbnail}
				description={category.description}
				title={category.title}
				price={category.price}
				stock={category.stock}
			/>
		{/each}
	{/await}
</section>

<style>
	.category_main {
		width: 90%;
		place-content: center;
		padding: 1rem;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		gap: 20px;
	}

	.category_title {
		width: 85%;
		margin: 0 auto;
		font-size: 30px;
		text-transform: capitalize;
		color: #091b2e;
	}

	@media screen and (min-width: 640px) {
		.category_main {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media screen and (min-width: 768px) {
		.category_main {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	@media screen and (min-width: 1024px) {
		.category_main {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
	}
</style>
