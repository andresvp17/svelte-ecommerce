<script>
	import IoMdMenu from 'svelte-icons/io/IoMdMenu.svelte';
</script>

<div on:click>
	<IoMdMenu />
</div>

<style>
	div {
		position: relative;
		left: 10px;
		top: 10px;
		width: 30px;
		height: 30px;
		color: black;
		cursor: pointer;
	}

	@media screen and (min-width: 768px) {
		div {
			display: none;
		}
	}
</style>
