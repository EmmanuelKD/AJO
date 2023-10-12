<script>
	import NotBookmark from "./NotBookmark.svelte";
import Unliked from "./Unliked.svelte";
	import BookMark from "./bookMark.svelte";
import Comment from "./comment.svelte";
import Love from "./liked.svelte";
	import Share from "./share.svelte";

</script>
<div class="w-80 h-8 py-1 justify-start items-center gap-7 flex flex-row">
   <Unliked/>
    <Love/>
    <Comment/>
    <Share/>    
    <BookMark/>
    <NotBookmark/>
  </div>