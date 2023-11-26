<div class="spinner" />

<style>
	.spinner {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		border: 4px solid #aeaaff;
		border-right: none;
		animation: rotate 2s ease-in-out infinite;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
	}

	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
