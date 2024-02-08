<script>
    import copy from 'clipboard-copy';

    import Footer from "$lib/components/footer.svelte";
    import Navbar from "$lib/components/navbar.svelte";
    import Box from "$lib/components/box.svelte";

    export let data;

    let linkToCopy = "https://expresslove.xyz/" + data.link;

    const copyToClipboard = async () => {
        try {
            await copy(linkToCopy);
            console.log('Text copied to clipboard!');
        } catch (err) {
            console.error('Failed to copy text to clipboard:', err);
        }
    }
</script>

<Navbar />
<Box>
<div class="max-w-xl mx-auto pt-10 pb-5 rounded">
    <div class="border rounded px-3 py-2 max-w-[24rem] mx-auto text-center">{linkToCopy}</div>
    <div class="mt-5 w-56 mx-auto flex justify-between">
        <button class="inline-block w-24 text-center py-2 bg-sky-600 hover:bg-sky-500 text-white rounded" on:click={copyToClipboard}>Copy</button>
        <a href="/preview/{data.link}" class="inline-block w-24 text-center py-2 bg-sky-600 hover:bg-sky-500 text-white rounded">Preview</a>
    </div>
</div>
</Box>
<Footer />