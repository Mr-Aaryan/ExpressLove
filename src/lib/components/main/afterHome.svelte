
<script>
    import {createEventDispatcher} from 'svelte';

    import hearts from '$lib/images/hearts.png';
    import yesPlease from '$lib/images/starlord.gif';
    
    let box, alertBox;

    const dispatch = createEventDispatcher();

    function handleYesClick(){
        dispatch('yesClick');
    }

    function handleNoClick(){
        dispatch('noClick');
    }

</script>
<div class="md:p-5 h-screen">
    <div class="max-w-[36rem] mx-auto mt-16 bg-[#f3616d3b] rounded-lg p-5">
        <div class="">
            <img src="{yesPlease}" alt="Yes, Please" class="mx-auto h-96 ">
        </div>
        <div class="w-10/12 mx-auto mt-5 py-8">
            <h1 class="text-4xl text-center text-white font-bold">Thank youuuuu!!!</h1>
        </div>
    </div>
</div>
