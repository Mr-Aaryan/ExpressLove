
<script>
    import noPlease from '$lib/images/tears.gif';
    import Box from '$lib/design/box.svelte';
</script>

<Box>
    <div class="">
        <img src="{noPlease}" alt="No, Please" class="mx-auto h-72 sm:h-96 rounded">
    </div>
    <div class="w-10/12 mx-auto mt-5 py-8">
        <p class="no_text text-white text-center">Thanks for being so up front. I’m disappointed of course, but I totally respect your decision.</p>
    </div>
</Box>

<style>
    .no_text{
        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #FFF;
    }
</style>