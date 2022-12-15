<script lang="ts">
	import { dateFormatLong } from '$lib/dates';
	import type { Action } from '$lib/strike';
	import type { PageData } from './$types';

	export let data: PageData;

	$: category = data.data[0];
	$: org = data.data[1];
	$: action = data.data[2];

	function strikeDescriber(action: Action): string {
		if (action.location == 'National') {
			return 'National';
		} else if (action.sev == 9) {
			return 'Minor regional';
		} else if (action.sev == 3) {
			return 'Impactful';
		} else if (action.sev == 1) {
			return 'Massive';
		} else {
			return 'Regional';
		}
	}

	function strikeName(category: string): string {
		if (category == 'Trains') {
			return 'Train';
		} else {
			return category;
		}
	}
</script>

<div class="container">
	<h1>{action.title}</h1>
	<p>
		{strikeDescriber(action)}
		<a href={`/${category.toLowerCase()}`}>{strikeName(category)} Strike</a>
		by {org.title}
	</p>
	{#if action.aboutImage != undefined}
		<img src={action.aboutImage} alt={`Information about the ${action.title}`} />
		<p class="img-credit">Image credit: {action.aboutAuthor}</p>
	{/if}
	<h2>Information</h2>
	<p>
		<a href={action.aboutSource}>{action.aboutAuthor}</a>: {action.about}
		<a href={action.link}>More info.</a>
	</p>
	<h2>
		Action{#if action.times.length != 1}s{/if}
	</h2>
	<ul>
		{#each action.times as time}
			<li>{dateFormatLong(time.start)} to {dateFormatLong(time.end)}</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	.container {
		$margin-h: 17.5vw;
		$margin-v: 50px;

		margin-left: $margin-h;
		margin-right: $margin-h;
		margin-top: $margin-v;
		margin-bottom: $margin-v;
	}

	h1 {
		font-size: 36px;
		font-weight: 600;
	}

	h2 {
		margin-top: 1.5rem;
		font-size: 30px;
		margin-bottom: 0.25rem;
	}

	img {
		margin-top: 30px;
		border-radius: 0.25rem;
		max-height: 10rem;
	}

	.img-credit {
		font-size: small;
	}
</style>
