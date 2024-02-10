
<script>
    import noPlease from '$lib/images/tears.gif';
    import Box from '$lib/design/box.svelte';
</script>

<svelte:head>
    <link rel="preload" type="image" href={noPlease}>
</svelte:head>

<Box>
    <div class="">
        <img src="{noPlease}" alt="No, Please" class="mx-auto h-72 sm:h-96 rounded">
    </div>
    <div class="mx-auto mt-4">
        <p class="text-[white] sm:text-xl px-5 py-4 rounded-xl">Thanks for being so up front. I’m disappointed of course, but I totally respect your decision.</p>
    </div>
</Box>
