<script lang="ts">
	import Calender from '$lib/Calender.svelte';
	import { filterMonth } from '$lib/strike';
	import { medical } from '$lib/data';
</script>

<Calender data={filterMonth(medical)} />
