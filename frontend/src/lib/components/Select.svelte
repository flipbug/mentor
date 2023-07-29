<script lang="ts">
	import Select from 'svelte-select/Select.svelte';

	export let options: { id: string; label: string }[] = [];
</script>

<Select items={options} {...$$restProps} />

<style lang="postcss">
	:global(.select),
	:global(.svelte-select-list) {
		border-color: theme('colors.gray.800') !important;

		background-color: theme('colors.gray.800') !important;

		--multi-item-bg: theme('colors.indigo.500') !important;
		--multi-item-outline: none;
		--item-active-background: theme('colors.gray.600') !important;
		--item-hover-bg: theme('colors.gray.600') !important;
		--list-background: theme('colors.gray.800') !important;
		--multi-item-clear-icon-color: theme('colors.gray.100') !important;
	}
</style>
