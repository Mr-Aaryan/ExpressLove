
<script>
    import {createEventDispatcher} from 'svelte';
    import hearts from '$lib/images/hearts.png';
    
    //click dispatcher
    const dispatch = createEventDispatcher();

    function handleClick(){
        dispatch('click');
    }

    let box, alertBox;    

    //alert
    function myAlert(){
        box.classList.add("blur-md");
        alertBox.classList.remove("hidden");
    }
    function alertRem(){
        box.classList.remove("blur-md");
        alertBox.classList.add("hidden");
    }
</script>
    <div class="left-0 right-0 ml-auto mr-auto absolute w-[36rem] mx-auto mt-16 shadow-md shadow-[#f3616d3b] bg-[#f3616d3b] mix-blend-lighten rounded-tl-3xl rounded-br-3xl" bind:this={box}>
        <div>
            <div >
                <div class="heading flex align-center w-fit mx-auto">
                    <div><img src="{hearts}" alt="Heart logo" class="object-fit h-12 w-12 mt-3"></div>
                    <div class="text-[#E30346] text-2xl font-bold bg-white w-fit px-5 py-1 rounded-3xl  my-5">To My Special One</div>
                    <div ><img src="{hearts}" alt="Heart logo" class="object-fit h-12 w-12 mt-3"></div>
                </div>
                
                <div>
                    <div class="mx-10 my-10 bg-[#E30346] text-white text-justify rounded-3xl flex justify-center px-8 py-5">
                        Dear [Valentine's Name], as the day of love approaches, I find myself filled with anticipation and excitement. There's something I've been wanting to share with you, something that has been on my mind and in my heart for quite some time now. Would you do me the honor of being my Valentine this year? Let's make memories together and celebrate the beauty of our connection.
                    </div>
                </div>
            </div>
        </div>
        <div class="border border-[#ffffff66] w-10/12 mx-auto my-7">
            <div class="w-fit bg-white px-3 py-2 mx-auto my-5 text-[#E30346] rounded-3xl text-2xl font-medium">Will you be my Valentine?</div>
            <div class="flex justify-between w-10/12 mx-auto my-7">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div class="border-2 px-6 py-3 bg-[#E30346] text-xl text-white rounded-full hover:cursor-pointer" on:click={handleClick} >Yes</div>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div class="border-2 px-6 py-3 bg-[#E30346] text-xl text-white rounded-full hover:cursor-pointer" on:click={myAlert}>No</div>
            </div>
        </div>
    </div>
    <div class="hidden absolute bg-[#504b4b] text-2xl text-white w-[32rem] top-1/3 left-52 border shadow-md shadow-black" bind:this={alertBox}>
        <div class="w-fit mx-auto my-2">
            <div>Sorry this option is not available.</div>
            <div>Please try again !!</div>
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="w-fit mx-auto my-6 bg-[#2b2929] py-3 px-5 border cursor-pointer" on:click={alertRem} >
            <button>OK</button>
        </div>
    </div>
<!-- <style>
    .hi{
        color: #ff00003d;
    }
</style> -->