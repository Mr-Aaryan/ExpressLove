<script>
  import * as config from "$lib/config";
</script>

<header class="w-full border-b px-5">
  <div class="max-w-4xl mx-auto flex items-center justify-center gap-3 border">
    <p>New Domain:</p>
    <a href="https://expresslove.vercel.app" class="text-sky-600"
      >expresslove.vercel.app</a
    >
  </div>
  <div class="h-16 flex items-center max-w-4xl mx-auto justify-between">
    <a href="/" class="text-2xl text-red-600 font-semibold"
      >{config.siteTitle}</a
    >
    <div class="">
      <a href="/" class="ml-3 hover:text-sky-600">Home</a>
      <a href="/pickup-lines" class="ml-3 hover:text-sky-600">Pickup lines</a>
    </div>
  </div>
</header>
