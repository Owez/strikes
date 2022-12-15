<script lang="ts">
	import './reset.css';
	import './global.css';
	import Logo from '$lib/Logo.svelte';
	import CategoryButton from '$lib/CategoryButton.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<Logo />
<div class="categories">
	<CategoryButton icon="/img/Train.png" alt="Trains" href="/trains" />
	<CategoryButton icon="/img/Postie.png" alt="Postal" href="/postal" />
	<CategoryButton icon="/img/Medical.png" alt="Medical" href="/medical" />
	<CategoryButton icon="/img/Education.png" alt="Education" href="/education" />
</div>
<slot data={data} />

<style lang="scss">
	.categories {
		display: flex;
		justify-content: center;
	}
</style>
