<script>
	import HiredByBrand from "./HiredByBrand.svelte";
import SAvater from "./SAvater.svelte";
	import VerifiedIcon from "./Verified_Icon.svelte";

</script>
<div class="w-56 h-10 px-2.5 justify-between items-center inline-flex">
    <div class="grow shrink basis-0 self-stretch justify-start items-center gap-2 flex">
      <SAvater/>
      <div class="flex-col justify-start items-start inline-flex">
        <div class="justify-start items-start gap-1.5 inline-flex">
          <div class="text-zinc-900 text-base font-semibold font-['League Spartan'] leading-normal whitespace-nowrap">Marcus Aurelius</div>
          <div class="w-4 h-4 relative"><VerifiedIcon/></div>
          <div class="w-4 h-4 p-px flex-col justify-start items-start inline-flex">
            <HiredByBrand/>
          </div>
        </div>
        <div class="text-zinc-900 text-xs font-normal font-['Montserrat'] leading-none">@marka.sol</div>
      </div>
    </div>
  </div>