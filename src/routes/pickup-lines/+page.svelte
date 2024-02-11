<script>
	import Box from "$lib/components/box.svelte";
    import Footer from "$lib/components/footer.svelte";
    import Navbar from "$lib/components/navbar.svelte";
    import PickupLine from "$lib/components/PickupLine.svelte";

    export let data;
</script>

<svelte:head>
    <title>Pickup Lines</title>
</svelte:head>

<Navbar />
<Box>
    <h1 class="text-3xl font-bold text-sky-600 text-center">Pickup Lines</h1>
    <div class="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {#if data.pickup_lines.total === 0}
        <p>No pickup lines found</p>
        {/if}

        {#each data.pickup_lines.documents as pickup_line}
        <PickupLine textToCopy = {pickup_line.content}> { pickup_line.content } </PickupLine>
        {/each}
    </div>
</Box>
<Footer />