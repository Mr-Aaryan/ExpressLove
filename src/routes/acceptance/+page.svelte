<script>
    import yesPlease from '$lib/images/starlord.gif';
    import Box from '$lib/design/box.svelte';
</script>

<svelte:head>
    <link rel="preload" type="image" href={yesPlease}>
</svelte:head>

<Box>
    <div class="">
        <img src="{yesPlease}" alt="Yes, Please" class="mx-auto h-72 sm:h-96 rounded">
    </div>
    <div class=" mx-auto mt-4">
        <p class="text-[white] sm:text-xl px-5 py-4 rounded-xl">I love you, and I promise to make every day with you special.</p>
    </div>
</Box>
