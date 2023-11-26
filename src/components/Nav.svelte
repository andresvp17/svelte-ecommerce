<script>
	import Menu from './Icons/Menu.svelte';
	import Close from './Icons/Close.svelte';

	let show = false;
	function handleShowMenu() {
		!show ? (show = true) : (show = false);
	}
</script>

<Menu on:click={handleShowMenu} />

<nav class={!show ? 'hide' : 'show'}>
	<span class="closeIcon">
		<Close on:click={handleShowMenu} />
	</span>
	<ul class="nav_main">
		<a class="logo" href="/">AEV</a>
		<a on:click={handleShowMenu} class="nav_link" href="/category">
			<li>Categories</li>
		</a>
	</ul>
</nav>

<style>
	nav {
		display: flex;
		width: 100%;
		height: 100vh;
		padding: 15px;
		background-color: #091b2e;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 5;
		transition: transform 0.3s;
	}

	.closeIcon {
	}

	.hide {
		transform: translateX(-100%);
	}

	.show {
		transform: translateX(0);
	}

	.nav_main {
		margin: 0;
		padding-left: 0;
		list-style: none;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		gap: 10px;
		height: 50%;
	}

	.nav_link {
		text-decoration: none;
		color: #c3c3c3;
		font-weight: 700;
		transition: all 0.3s;
		border-radius: 5px;
		font-size: 20px;
	}

	.nav_link:hover {
		color: #959595;
	}

	.logo {
		text-decoration: none;
		font-weight: 700;
		font-size: 35px;
		letter-spacing: 2px;
		color: #20538b;
	}

	@media screen and (min-width: 768px) {
		nav {
			position: relative;
			display: flex;
			justify-content: center;
			width: 85%;
			margin: 0 auto;
			height: auto;
			padding: 15px;
			background-color: transparent;
			transition: transform 0.3s;
			border-bottom: 2px solid #091b2e;
			margin-bottom: 2rem;
		}

		.closeIcon {
			display: none;
		}

		.nav_main {
			width: 100%;
			margin: 0;
			padding-left: 0;
			list-style: none;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			gap: 20px;
		}

		.logo {
			margin-right: auto;
		}

		.nav_link {
			color: #091b2e;
		}

		.hide {
			transform: none;
		}
	}
</style>
