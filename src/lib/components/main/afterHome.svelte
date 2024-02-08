
<script>
    import {createEventDispatcher} from 'svelte';

    import hearts from '$lib/images/hearts.png';
    import yesPlease from '$lib/images/yesPlease.gif';
    
    let box, alertBox;

    const dispatch = createEventDispatcher();

    function handleYesClick(){
        dispatch('yesClick');
    }

    function handleNoClick(){
        dispatch('noClick');
    }

</script>

    <div class="left-0 right-0 ml-auto mr-auto absolute w-[36rem] mx-auto mt-16 shadow-md shadow-[#f3616d3b] bg-[#f3616d3b] mix-blend-lighten rounded-tl-3xl rounded-br-3xl">
        <div class="mt-5">
            <img src="{yesPlease}" alt="Yes, Please" class="mx-auto h-96 ">
        </div>
        <div class="border border-[#ffffff66] w-10/12 mx-auto my-7">
            <div class="w-fit bg-white px-3 py-2 mx-auto my-5 text-[#E30346] rounded-3xl text-2xl font-medium">Will you go on a date with me?</div>
            <div class="flex justify-between w-10/12 mx-auto my-7">
                <div class="border-2 px-6 py-3 bg-[#E30346] text-xl text-white rounded-full hover:cursor-pointer" on:click={handleYesClick} >Yes</div>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div class="border-2 px-6 py-3 bg-[#E30346] text-xl text-white rounded-full hover:cursor-pointer" on:click={handleNoClick}>No</div>
            </div>
        </div>
    </div>

