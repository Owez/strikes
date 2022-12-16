<script lang="ts">
	import { page } from '$app/stores';

	$: url = $page.url.toString();

	let copied = false;
	let switchover = false;

	function copyLink(_: any) {
		navigator.clipboard.writeText(url);
		copied = true;
		setTimeout(function () {
			switchover = true;
		}, 1500);
	}
</script>

{#if switchover}
	<button class="permalink" on:click={copyLink}>📋</button>
{:else}
	<div class="permalink card">
		{#if copied}
			Copied!
		{:else}
			Copy link
		{/if}
		<button on:click={copyLink}>📋</button>
	</div>
{/if}

<style lang="scss">
	.card {
		padding: 10px;
	}

	.permalink {
		$away: 0.5rem;

		position: absolute;
		top: 1rem;
		right: 1rem;
	}

	@media only screen and (max-width: 800px) {
		.permalink {
			border:0;
            padding: 0;
            box-shadow: unset;
            color: white;
		}
	}

	button {
		$size: 2rem;

		width: $size;
		height: $size;
		margin-left: 0.3rem;
		background: none;
		border: 1px solid rgb(235, 235, 235) !important;
		border-radius: 5px;

		&:hover {
			background-color: rgb(245, 245, 245);
		}
	}
</style>
