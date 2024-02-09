<script>
    import Layout from "./layout.svelte";
</script>

<Layout>
    <div class="sm:p-5 h-screen overflow-auto scroll-smooth">
        <div class="max-w-[36rem] mx-auto sm:mt-16 bg-[#f3616d3b] rounded-lg p-5 h-screen sm:h-auto overflow-scroll absolute top-0 left-0 right-0 sm:relative scroll-smooth">
            <slot />
        </div>
    </div>
</Layout>
<style>
    
</style>