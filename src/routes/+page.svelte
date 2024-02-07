<script>
	import Box from "$lib/components/box.svelte";
    import Footer from "$lib/components/footer.svelte";
    import Navbar from "$lib/components/navbar.svelte";
</script>
<Navbar />

<Box>
    <div class="text-center">
        <h1 class="text-4xl font-bold">Express Feelings <br> To <span class="text-red-600">Loved 🥰</span> Ones</h1>
        <p class="mt-3">Let the loved ones know about your feeling. Create custom porpose page.</p>
        <a href="/cards" class="block w-24 mx-auto text-center mt-3 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded">Create</a>
    </div>
</Box>

<Box>
    <a href="/pickuplines" class="text-sky-600 hover:underline">
        <h2 class="text-3xl font-bold">Pickup Lines</h2>
    </a>
    <span>( Click to Copy )</span>
    <div class="mt-5 grid grid-rows-2 grid-flow-col gap-2">
        <a class="p-3 border rounded" href="#pickup">
            <p>I hope you know CPR, because you just took my breath away!</p>
        </a>
        <a class="p-3 border rounded" href="#pickup">
            <p>I hope you know CPR, because you just took my breath away!</p>
        </a>
        <a class="p-3 border rounded" href="#pickup">
            <p>I hope you know CPR, because you just took my breath away!</p>
        </a>
        <a class="p-3 border rounded" href="#pickup">
            <p>I hope you know CPR, because you just took my breath away!</p>
        </a>
    </div>
    <div>
        <a href="/pickup" class="block mx-auto w-24 mt-5 py-2 rounded text-center text-white bg-sky-600 hover:bg-sky-500">See More</a>
    </div>
</Box>

<Footer />