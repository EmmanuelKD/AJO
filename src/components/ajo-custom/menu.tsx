<script>
	import ActiveBrand from './ActiveBrand.svelte';
	import ActiveCreate from './ActiveCreate.svelte';
	import ActiveExplore from './ActiveExplore.svelte';
	import ActiveHelpSuppport from './ActiveHelp&Suppport.svelte';
	import ActiveHome from './ActiveHome.svelte';
	import ActiveMessage from './ActiveMessage.svelte';
	import ActiveProfile from './ActiveProfile.svelte';
	import InActiveCreate from './InActiveCreate.svelte';
	import InActiveExplore from './InActiveExplore.svelte';
	import InActiveHelpSupport from './InActiveHelp&Support.svelte';
	import InActiveHome from './InActiveHome.svelte';
	import InActiveMessage from './InActiveMessage.svelte';
	import InActiveProfile from './InActiveProfile.svelte';
	import InActiveBrand from './InActiveBrand.svelte';
</script>

<div class="w-52 flex-col justify-start items-start inline-flex">
	<div class="w-52 relative flex flex-col left-[20px] top-[20px]">
		<ActiveHome />
		<InActiveHome />
		<ActiveMessage />
		<InActiveMessage />
		<ActiveProfile />
		<InActiveProfile />
		<ActiveHelpSuppport />
		<InActiveHelpSupport />
		<ActiveExplore />
		<InActiveExplore />
		<ActiveCreate />
		<InActiveCreate />
		<ActiveBrand />
		<InActiveBrand />
	</div>
</div>
