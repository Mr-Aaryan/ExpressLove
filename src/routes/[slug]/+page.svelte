<script>
    import Box from "$lib/design/box.svelte";
    import { enhance } from '$app/forms'
    export let data;
</script>

<svelet:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Gamja+Flower&family=Handlee&family=Loved+by+the+King&display=swap"
    rel="stylesheet"
  />
</svelet:head>

<div class="overflow-none">
  <Box>
    <div class="flex justify-center">
      <h2 class="heading text-[#E30346] text-2xl font-bold bg-white w-fit px-5 py-1 rounded-3xl my-5">
          <span>💕</span>
          To My Special One
          <span>💕</span>
      </h2>
  </div>
  <div class="msg mx-3 my-10 bg-[#E30346] text-white text-xl text-justify rounded-3xl px-8 py-5">
    <p class="block">Dear {data.page_info.receiver_name},</p>
      <p class="block mt-2">
          {data.page_info.message}
      </p>
      {#if data.page_info.sender_name}
      <p class="block text-right mt-2">Yours, {data.page_info.sender_name}</p>
      {/if}
  </div>
  <div class="w-10/12 mx-auto">
      <h2 class="ask font-bold w-fit bg-white px-5 py-2 mx-auto my-5 text-[#E30346] rounded-3xl text-2xl">Will you be my Valentine?</h2>
      <div class="flex justify-between">
          <form action="?/yes_mail" method="POST" use:enhance>
            <input type="text" name="receiver_name" value="{data.page_info.receiver_name}" hidden />
            <input type="email" name="email" value="{data.page_info.email}" hidden />
            <button class="ask border-2 px-6 py-3 bg-[#E30346] text-xl text-white rounded-full hover:cursor-pointer" type="submit" formaction="?/yes_mail">Yes</button>
          </form>
          <form action="?/no_mail" method="POST" use:enhance>
            <input type="text" name="receiver_name" value="{data.page_info.receiver_name}" hidden />
            <input type="email" name="email" value="{data.page_info.email}" hidden />
            <button class="ask border-2 px-6 py-3 bg-[#E30346] text-xl text-white rounded-full hover:cursor-pointer" formaction="?/no_mail">No</button>
          </form>
      </div>
  </div>
  </Box>
</div>


<style>
  .heading {
      font-family: 'Loved by the King', cursive;
  }
  .msg {
      font-family: 'Handlee', cursive;
    }
  .ask {
      font-family: 'Gamja Flower', sans-serif;
      
  }
  </style>