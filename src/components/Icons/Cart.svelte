<script>
	import FaShoppingCart from 'svelte-icons/fa/FaShoppingCart.svelte';
</script>

<div on:click>
	<FaShoppingCart />
</div>

<style>
	div {
		position: fixed;
		bottom: 25px;
		right: 25px;
		width: 50px;
		height: 50px;
		padding: 10px;
		border-radius: 50%;
		box-shadow: 0px 0px 10px rgb(138, 138, 138);
		transition: all 0.3s;
		cursor: pointer;
		background-color: aliceblue;
	}

	@media scree and (min-width: 768px) {
		div:hover {
			box-shadow: 2px 2px 10px rgb(138, 138, 138);
		}
	}
</style>
