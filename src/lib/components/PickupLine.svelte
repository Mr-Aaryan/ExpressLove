<script>
    import copy from 'clipboard-copy';
    export let textToCopy = 'Default text';

    const copyToClipboard = async () => {
        try {
            await copy(textToCopy);
            console.log('Text copied to clipboard!');
        } catch (err) {
            console.error('Failed to copy text to clipboard:', err);
        }
    }
</script>
<a class="p-3 border rounded" href="#pickupline">
    <p id="pickup" class="pb-2"><slot /></p>
    <button class="bg-sky-600 hover:bg-sky-500 px-2 py-1 rounded text-white float-right" on:click={copyToClipboard}>Copy</button>
</a>