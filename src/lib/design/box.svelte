<script>
    import Layout from "./layout.svelte";
</script>

<Layout>
    <div class="sm:p-5 overflow-auto h-screen scroll-smooth">
        <div class="max-w-[36rem] mx-auto sm:mt-16 bg-[#f3616d3b] rounded-lg p-5 h-full sm:h-auto overflow-scroll absolute top-0 left-0 right-0 sm:relative scroll-smooth">
            <slot />
        </div>
    </div>
</Layout>
<style>
    
</style>