<script lang="ts">
	import { dateFormatShort } from './dates';
	import type { CalenderDay, StrikeData } from './strike';

	export let day: CalenderDay;

	type StrikeDay = Strike[];

	interface Strike {
		id: string;
		orgTitle: string;
		title: string;
		location: string;
		link: string;
		sev: number;
	}

	function isWeekend(date: Date): boolean {
		return [0, 6].includes(date.getDay());
	}

	function isToday(date: Date): boolean {
		const current = new Date();
		return current.getDate() == date.getDate() && current.getMonth() == date.getMonth();
	}

	function isTomorrow(date: Date): boolean {
		let tomorrow = new Date();
		tomorrow.setDate(tomorrow.getDate() + 1);
		return tomorrow.getDate() == date.getDate() && tomorrow.getMonth() == date.getMonth();
	}

	function strikeList(data: StrikeData): StrikeDay {
		// Make output bucket
		let strikeDay: StrikeDay = [];

		// Go over orgs and add strikes from actions
		for (let index = 0; index < data.length; index++) {
			const org = data[index];
			for (let index = 0; index < org.action.length; index++) {
				const action = org.action[index];
				strikeDay.push({
					id: action.id,
					orgTitle: org.title,
					title: action.title,
					location: action.location,
					link: action.link,
					sev: action.sev
				});
			}
		}

		// Sort by severity
		strikeDay.sort(function (a, b) {
			return a.sev - b.sev;
		});

		// Return
		return strikeDay;
	}
</script>

<div class="card">
	{#if isToday(day.date)}
		<div class="date today">Today</div>
	{:else if isTomorrow(day.date)}
		<div class="date">Tomorrow</div>
	{:else}
		<div class="date" class:weekend-margin={isWeekend(day.date)}>
			{#if isWeekend(day.date)}<div class="weekend-dot" />{/if}{dateFormatShort(day.date)}
		</div>
	{/if}
	{#each strikeList(day.data) as strike}
		<a
			href={`/strike/${strike.id}`}
			class="strike"
			class:sev-lesser={strike.sev >= 9}
			class:sev-low={strike.sev == 7}
			class:sev-normal={strike.sev == 5}
			class:sev-high={strike.sev == 3}
			class:sev-massive={strike.sev == 1}
		>
			{strike.orgTitle} – {strike.location}
		</a>
	{/each}
</div>

<style lang="scss">
	.strike {
		$margin-v: 0.1rem;
		$margin-h: 0.5rem;
		$padding-v: 0.1rem;
		$padding-h: 0.35rem;

		color: white;
		text-decoration: none;
		border-radius: 5px;
		font-size: small;
		padding-top: $padding-v;
		padding-bottom: $padding-v;
		padding-left: $padding-h;
		padding-right: $padding-h;
		margin-top: $margin-v;
		margin-bottom: $margin-v;
		margin-left: $margin-h;
		margin-right: $margin-h;

		&.sev-lesser {
			color: black;
			background-color: rgb(236, 238, 225);
		}

		&.sev-low {
			color: black;
			background-color: rgb(236, 238, 199);
		}

		&.sev-normal {
			color: black;
			background-color: rgb(242, 217, 185);
		}

		&.sev-high {
			background-color: rgb(223, 147, 147);
		}

		&.sev-massive {
			background-color: rgb(237, 99, 99);
		}
	}

	.card {
		width: 10rem;
		height: 7.5rem;
		margin: 0.25rem;
		display: flex;
		flex-direction: column;
		overflow-y: auto;
	}

	@media only screen and (max-width: 425px) {
		.card {
			width: 80vw;
		}
	}

	.date {
		$dot-size: 5px;
		$dot-space: 6px;

		font-size: small;
		color: rgb(58, 58, 58);
		margin-top: 0.5rem;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 0.25rem;

		&.today {
			font-weight: 600;
		}

		&.weekend-margin {
			margin-right: $dot-size + $dot-space;
		}

		.weekend-dot {
			width: $dot-size;
			height: $dot-size;
			border-radius: 50%;
			background-color: rgb(99, 164, 217);
			margin-right: $dot-space;
		}
	}
</style>
