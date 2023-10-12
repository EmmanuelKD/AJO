<script>
	import RegisteredBrand from "./RegisteredBrand.svelte";
import UserPostHeader from "./UserPostHeader.svelte";
	import VerifiedHiredPostHeaders from "./VerifiedHiredPostHeaders.svelte";
	import VerifiedUserPostHeader from "./VerifiedUserPostHeader.svelte";

</script>
<div class="w-72 h-80 p-5 rounded border border-purple-500 flex-col justify-start items-start gap-5 inline-flex">
    <UserPostHeader/>
    <VerifiedUserPostHeader/>
    <VerifiedHiredPostHeaders/>
     <RegisteredBrand/>
  </div>