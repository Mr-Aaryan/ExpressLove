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
        <p class="text-[white] sm:text-xl px-5 py-4 rounded-xl">My love, accepting my proposal means the world to me. Your love and acceptance have filled my heart with indescribable joy. I am grateful for your trust and for believing in our love and the beautiful future, we can create together. I promise to love you unconditionally, support you in all your endeavors, and cherish every moment we share. Thank you for saying yes and embarking on this extraordinary journey of love with me.</p>
    </div>
</Box>
