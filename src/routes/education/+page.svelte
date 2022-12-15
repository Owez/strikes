<script lang="ts">
	import Calender from '$lib/Calender.svelte';
	import { education } from '$lib/data';
	import { filterMonth } from '$lib/strike';
</script>

<Calender data={filterMonth(education)} />
