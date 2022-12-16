<script lang="ts">
	import { page } from '$app/stores';

	export let icon: string;
	export let alt: string;
	export let href: string;

	function hrefCalc(isSelected: boolean, current:string,want:string):string {
		if(isSelected && current == want) {
			return "/"
		}
		return want
	}

	$: isSelected = $page.url.pathname == href;
	$: linkTo = hrefCalc(isSelected, $page.url.pathname, href)
</script>

<a href={linkTo} class:selected={isSelected}><img src={icon} {alt} class:selected={isSelected} /></a>

<style lang="scss">
	a {
		$size: 40px;
		$h-space: 35px;

		width: $size;
		height: $size;
		border-radius: 50%;
		box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25), inset 0px 0px 5px rgba(0, 0, 0, 0.17);
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: calc($h-space / 2);
		margin-right: calc($h-space / 2);
		transition: transform 0.125s;
		flex-shrink: 0;

		&:hover {
			transform: scale(1.023);
		}
	}

	.selected {
		transition: all 0.035s ease-in-out;
		scale: 1.2;
	}

	img {
		$size: 18px;

		width: $size;
		height: $size;
		opacity: 0.3;

		&.selected {
			opacity: 1;
		}
	}
</style>
