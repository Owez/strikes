<script lang="ts">
	import DayCard from './DayCard.svelte';
	import type { Calender } from './strike';

	export let data: Calender;
</script>

<div class="calender">
	{#each data as day}
		<DayCard {day} />
	{/each}
</div>

<style lang="scss">
	.calender {
		$margin-h: 10vw;
		$margin-v: 50px;

		margin-top: $margin-v;
		margin-bottom: $margin-v;
        margin-left: $margin-h;
		margin-right: $margin-h;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>
