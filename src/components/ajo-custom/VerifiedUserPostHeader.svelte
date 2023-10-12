<script>
	import SAvater from "./SAvater.svelte";
	import TagBrand from "./TagBrand.svelte";
	import VerifiedIcon from "./Verified_Icon.svelte";

</script>
<div class="w-60 h-10 px-2.5 justify-between items-center inline-flex">
    <div class="justify-start items-center gap-2 flex">
      <SAvater/>
      <div class="flex-col justify-start items-start inline-flex">
        <div class="justify-start items-start gap-1.5 inline-flex">
          <div class="text-zinc-900 text-base font-semibold font-['League Spartan'] leading-normal whitespace-nowrap">Marcus Aurelius</div>
          <div class="w-4 h-4 relative"><VerifiedIcon/></div>
        </div>
        <div class="text-zinc-900 text-xs font-normal font-['Montserrat'] leading-none">@marka.sol</div>
      </div>
    </div>
    <div class="w-10 h-10 p-1 flex-col justify-start items-center gap-2.5 inline-flex">
        <TagBrand/>
    </div>
  </div>