<script>
	import Nav from '../components/Nav.svelte';
	import CartComponent from '../components/CartComponent.svelte';
	import '@fontsource-variable/work-sans';
	import '@fontsource/adamina';
</script>

<Nav />
<slot />
<CartComponent />

<style>
	:global(*) {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		box-sizing: border-box;
	}

	:global(body) {
		font-family: 'Work Sans Variable', sans-serif;
	}

	:global(a) {
		font-family: 'Work Sans Variable', sans-serif;
	}

	:global(button) {
		font-family: 'Work Sans Variable', sans-serif;
	}

	:global(p) {
		font-family: 'Work Sans Variable', sans-serif;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		font-family: 'Adamina', sans-serif;
	}

	:global(::-webkit-scrollbar) {
		width: 0px;
	}
</style>
