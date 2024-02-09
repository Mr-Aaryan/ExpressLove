<script>
    import Layout from "./layout.svelte";
</script>

<Layout>
    <div class="md:p-5 overflow-auto h-screen">
        <div class="max-w-[36rem] mx-auto md:mt-16 bg-[#f3616d3b] rounded-lg p-5">
            <slot />
        </div>
    </div>
</Layout>