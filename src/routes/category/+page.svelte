<script>
	const CATEGORIES = [
		'smartphones',
		'laptops',
		'fragrances',
		'skincare',
		'groceries',
		'home-decoration',
		'furniture',
		'tops',
		'womens-dresses',
		'womens-shoes',
		'mens-shirts',
		'mens-shoes',
		'mens-watches',
		'womens-watches',
		'womens-bags',
		'womens-jewellery',
		'sunglasses',
		'automotive',
		'motorcycle',
		'lighting'
	];
</script>

<h1 class="categories_title">Product Categories</h1>
<ul class="categories_main">
	{#each CATEGORIES as category}
		<li>
			<a class="category_link" href={`/category/${category}`}>{category}</a>
		</li>
	{/each}
</ul>

<style>
	.categories_title {
		text-align: center;
		font-size: 45px;
	}
	.categories_main {
		list-style: none;
		padding-left: 0;
		width: 85%;
		margin: 1rem auto;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		place-content: center;
		gap: 10px;
	}

	.category_link {
		font-size: 18px;
		text-decoration: none;
		text-transform: capitalize;
		font-weight: 600;
		color: #091b2e;
	}

	@media screen and (min-width: 768px) {
		.categories_main {
			flex-direction: row;
			flex-wrap: wrap;
		}

		.category_link:hover {
			transition: color 0.3s;
			color: #959595;
		}
	}
</style>
