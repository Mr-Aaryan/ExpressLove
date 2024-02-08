
<script>
    import {createEventDispatcher} from 'svelte';
    import hearts from '$lib/images/hearts.png';
    
    //click dispatcher
    const dispatch = createEventDispatcher();

    function handleYesClick(){
        dispatch('yesClick');
    }
    function handleNoClick(){
        dispatch('noClick');
    }
</script>
<div class="md:p-5 h-screen">
    <div class="max-w-[36rem] mx-auto mt-16 bg-[#f3616d3b] mix-blend-lighten rounded-lg p-5">
        <div class="flex justify-center">
            <h2 class="heading text-[#E30346] text-2xl font-bold bg-white w-fit px-5 py-1 rounded-3xl  my-5">
                <span>💕</span>
                To My Special One
                <span>💕</span>
            </h2>
        </div>
        <div class="mt-10">
            <p class="msg mx-3 my-10 bg-[#E30346] text-white text-xl text-justify rounded-3xl flex justify-center px-8 py-5">
                Dear [Valentine's Name], as the day of love approaches, I find myself filled with anticipation and excitement. There's something I've been wanting to share with you, something that has been on my mind and in my heart for quite some time now. Would you do me the honor of being my Valentine this year? Let's make memories together and celebrate the beauty of our connection.
            </p>
        </div>
        <div class="w-10/12 mx-auto">
            <h2 class="ask font-bold w-fit bg-white px-5 py-2 mx-auto my-5 text-[#E30346] rounded-3xl text-2xl">Will you be my Valentine?</h2>
            <div class="flex justify-between">
                <button class="ask border-2 px-6 py-3 bg-[#E30346] text-xl text-white rounded-full hover:cursor-pointer" on:click={handleYesClick}>Yes</button>
                <button class="ask border-2 px-6 py-3 bg-[#E30346] text-xl text-white rounded-full hover:cursor-pointer" on:click={handleNoClick}>No</button>
            </div>
        </div>
    </div>
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