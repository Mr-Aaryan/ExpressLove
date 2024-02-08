<script>
    import Envelope from "../../lib/designs/Envelope.svelte";

    export let data;

</script>


<Envelope receiver_name = {data.page_info.receiver_name} message = {data.page_info.message} />