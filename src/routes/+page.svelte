<script>
	import Box from "$lib/components/box.svelte";
    import Footer from "$lib/components/footer.svelte";
    import Navbar from "$lib/components/navbar.svelte";
    import PickupLine from "$lib/components/PickupLine.svelte";

    export let data;
</script>
<Navbar />

<Box>
    <div class="text-center">
        <h1 class="text-4xl font-bold leading-relaxed">Express Feelings <br> To <span class="text-red-600">Loved 🥰</span> Ones</h1>
        <p class="mt-3">Let the loved ones know about your feeling. Create custom porpose page.</p>
        <a href="/cards" class="block w-24 mx-auto text-center mt-3 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded">Create</a>
    </div>
</Box>

<Box>
    <a href="/pickup-lines" class="text-center text-sky-600 hover:underline">
        <h2 class="text-3xl font-bold">Pickup Lines</h2>
    </a>
    <div class="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {#if data.pickup_lines.total === 0}
        <p>No pickup lines found</p>
        {/if}

        {#each data.pickup_lines.documents as pickup_line}
        <PickupLine textToCopy = {pickup_line.content}>{ pickup_line.content }</PickupLine>
        {/each}
    </div>
    <div>
        <a href="/pickup-lines" class="block mx-auto w-24 mt-5 py-2 rounded text-center text-white bg-sky-600 hover:bg-sky-500">See More</a>
    </div>
</Box>

<Footer />