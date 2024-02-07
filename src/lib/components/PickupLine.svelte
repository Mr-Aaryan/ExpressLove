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
<a class="p-3 border rounded" href="#pickupline" on:click={copyToClipboard}>
    <p id="pickup"><slot /></p>
</a>