<script>
	import ActiveNotificatioin from './ActiveNotificatioin.svelte';
	import AllreadNotification from './AllreadNotification.svelte';
	import UnreadNotification from './UnreadNotification.svelte';
</script>

<div
	class="w-48 h-16 p-5 rounded border border-purple-500 justify-start items-start gap-7 inline-flex"
>
	<div class="w-8 h-8 "><AllreadNotification /></div>
	<div class="w-8 h-8 "><ActiveNotificatioin /></div>
	<div class="w-8 h-8 "><UnreadNotification /></div>
</div>
