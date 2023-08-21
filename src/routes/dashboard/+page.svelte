<script lang="ts">
	export let data;
</script>

<div class="flex justify-between">
	<h1 class="text-3xl font-bold">Dashboard</h1>
	<a class="inline-block rounded-full bg-slate-200 px-4 py-1.5" href="/logout"> sign out </a>
</div>

<p class="mt-10">Welcome back, {data.username}!</p>

<pre class="mt-8 rounded bg-slate-100 p-3 text-slate-800">{JSON.stringify(data, null, 4)}</pre>
