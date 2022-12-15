<script lang="ts">
	import Calender from '$lib/Calender.svelte';
	import { postal } from '$lib/data';
	import { filterMonth } from '$lib/strike';
</script>

<Calender data={filterMonth(postal)} />
