<script>
  import copy from "clipboard-copy";

  import Footer from "$lib/components/footer.svelte";
  import Navbar from "$lib/components/navbar.svelte";
  import Box from "$lib/components/box.svelte";

  export let data;

  let linkToCopy = "https://expresslove.xyz/" + data.link;

  let btn_text = "Copy";
  let btn;

  const copyToClipboard = async () => {
    try {
      await copy(linkToCopy);
      btn_text = "Copied";
      console.log("Text copied to clipboard!");

      setTimeout(function () {
        btn_text = "Copy";
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text to clipboard:", err);
    }
  };
</script>

<Navbar />
<Box>
  <div class="max-w-xl mx-auto pt-10 pb-5 rounded">
    <div class="border rounded px-3 py-2 max-w-[24rem] mx-auto text-center">
      {linkToCopy}
    </div>
    <div class="mt-5 w-56 mx-auto flex justify-between">
      <button class="button" on:click={copyToClipboard} bind:this={btn}
        >{btn_text}</button
      >
      <a
        href="/preview/{data.link}"
        class="inline-block w-24 text-center py-2 bg-sky-600 hover:bg-sky-500 text-white rounded"
        >Preview</a
      >
    </div>
  </div>
</Box>
<Footer />

<style>
  .button {
    width: 96px;
    display: inline-block;
    padding: 0 8px;
    text-align: center;
    cursor: pointer;
    outline: none;
    color: #fff;
    background-color: rgb(2 132 199);
    border: none;
    border-radius: 4px;
    box-shadow: 0 1px #afadad81;
    overflow-x: scroll;
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
