<script>
	import ActiveHome from "./ActiveHome.svelte";
	import InActiveCreate from "./InActiveCreate.svelte";
	import InActiveExplore from "./InActiveExplore.svelte";
	import InActiveHelpSupport from "./InActiveHelp&Support.svelte";
	import InActiveMessage from "./InActiveMessage.svelte";
	import Logo from "./logo.svelte";
	// import Menu from "./menu.svelte";
</script>
<div class="w-40 flex-col justify-start items-start gap-1 inline-flex">
    <!-- <div class="flex-col justify-start items-start gap-2.5 flex">{Logo}</div> -->
    <Logo/>
    <div class="text-pink-700 text-sm font-bold font-['League Spartan'] leading-none">MAIN MENU</div>
    <!-- <Menu/> -->
    <div class="relative flex flex-col w-40">
        <ActiveHome/>
        <InActiveExplore/>
        <InActiveCreate/>
        <InActiveMessage/>
        <InActiveHelpSupport/>
    </div>
    
    
  </div>