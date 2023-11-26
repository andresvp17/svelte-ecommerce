<script>
	import { get } from 'svelte/store';
	import { cartItems } from '../store/cartStore';
	import CartProduct from './CartProduct.svelte';
	import Cart from './Icons/Cart.svelte';
	import Close from './Icons/Close.svelte';
	let show = false;

	let productsInCart = get(cartItems);
	function handleShowCart() {
		return show ? (show = false) : (show = true);
	}

	cartItems.subscribe((newValue) => {
		productsInCart = newValue;
	});
</script>

<section class={`cart_main ${show ? 'show' : 'hide'}`}>
	<Close on:click={handleShowCart} />
	<CartProduct />
</section>

<Cart on:click={handleShowCart} />

<style>
	.cart_main {
		overflow-y: auto;
		position: fixed;
		top: 0;
		right: 0;
		width: 100%;
		height: 100vh;
		padding: 0.5rem;
		z-index: 20;
		background-color: #091b2e;
		transition: transform 0.5s;
	}

	.show {
		transform: translateX(0);
	}

	.hide {
		transform: translateX(100%);
	}

	@media screen and (min-width: 1024px) {
		.cart_main {
			width: 30%;
		}
	}

	@media screen and (min-width: 768px) {
		.cart_main {
			width: 30%;
		}
	}
</style>
