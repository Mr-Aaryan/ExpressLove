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
<div class="p-3 border rounded">
    <p id="pickup" class="pb-2"><slot /></p>
    <!-- <button class="bg-sky-600 hover:bg-sky-500 px-2 py-1 rounded text-white float-right" on:click={copyToClipboard}>Copy</button> -->
    <button class="button on:click={copyToClipboard}">Click Me</button>
</div>
<style>
    .button {
      padding: 4px 8px;
      text-align: center;
      cursor: pointer;
      outline: none;
      color: #fff;
      background-color: rgb(2 132 199);
      border: none;
      border-radius: 4px;
      box-shadow: 0 1px #afadad81;
      float: right;
    }
    
    .button:hover {
        background-color: rgb(14, 150, 212);
    }
    
    .button:active {
      background-color: rgb(14 165 233);
      /* box-shadow: 0 5px #8b8b8b8c; */
      box-shadow: none;
      transform: translateY(1px);
    }
</style>