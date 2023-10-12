<script>
	import ActiveBrand from "./ActiveBrand.svelte";
	import AddBrand from "./AddBrand.svelte";
	import InActiveBrand from "./InActiveBrand.svelte";

</script>

<div class="w-44 h-52 flex-col justify-start items-start gap-1 inline-flex">
    <div class="pl-2 justify-start items-start inline-flex">
      <div class="text-pink-700 text-sm font-bold font-['League Spartan'] leading-none">BRANDS</div>
    </div>
    <ActiveBrand/>
    <InActiveBrand/>
    <InActiveBrand/>
    <!-- <InActiveBrand/> -->
    <AddBrand/>

    
  </div>