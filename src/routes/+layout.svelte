<script lang="ts">
	import './reset.css';
	import './global.css';
	import Logo from '$lib/Logo.svelte';
	import CategoryButton from '$lib/CategoryButton.svelte';
	import type { LayoutData } from './$types';
	import Permalink from '$lib/Permalink.svelte';

	export let data: LayoutData;
</script>

<Permalink />
<Logo />
<div class="categories">
	<CategoryButton icon="/img/Train.svg" alt="Trains" href="/trains" />
	<CategoryButton icon="/img/Postie.svg" alt="Postal" href="/postal" />
	<CategoryButton icon="/img/Medical.svg" alt="Medical" href="/medical" />
	<CategoryButton icon="/img/Education.svg" alt="Education" href="/education" />
</div>
<slot {data} />

<style lang="scss">
	.categories {
		display: flex;
		justify-content: center;
	}
</style>
