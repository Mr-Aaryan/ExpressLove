<script>
    import Navbar from '$lib/components/navbar.svelte'
    import Footer from '$lib/components/footer.svelte'
    import Box from '$lib/components/box.svelte'


    import { enhance } from '$app/forms'
</script>

<Navbar />
<Box>
    <div class="">
        <form method="POST" action="?/create_page" use:enhance>
            <div>
                <label for="receiver"></label>
                <input id="receiver" type="text" name="receiver_name" placeholder="Valentine Name" class="border rounded px-4 py-3" required>
            </div>
            <div class="mt-5 max-w-xl">
                <label for="message"></label>
                <textarea id="message" type="text" name="message" placeholder="Your Message" class="border rounded w-full px-4 py-3" rows="6" required></textarea>
            </div>
            <div class="mt-5 max-w-md">
                <label for="email"></label>
                <input id="email" type="email" name="email" placeholder="Email" class="border rounded w-full px-4 py-3" required>
                <p class="text-xs">To send you email if your proposal is accepted or not.</p>
            </div>
            <div class="mt-5">
                <label for="sender"></label>
                <input id="sender" type="text" name="sender_name" placeholder="Your Name (optional)" class="border rounded px-4 py-3">
            </div>
            <div class="mt-5">
                <button type="submit" formaction="?/create_page" class="w-24 mt-5 py-2 rounded text-center text-white bg-sky-600 hover:bg-sky-500">Create</button>
            </div>
        </form>
    </div>
</Box>
<Footer />