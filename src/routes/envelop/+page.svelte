<script>
    export let receiver_name;
    export let message;

    let letter, heart;
    let isFlapOpen = false;
    let isScale = false;

    function toggleFlap() {
        isFlapOpen = !isFlapOpen;
        isScale = !isScale;

        if(isScale == true){
        setTimeout(function(){
            increaseLetterZIndex();
        }, 1000)

        setTimeout(function(){
            removeHeart();
        }, 1000)
        }else{
            setTimeout(function(){
                letter.style.zIndex= '0';
            }, 500)
            setTimeout(function(){
                heart.style.opacity = '1';
            }, 1200)
        }
    }

    function increaseLetterZIndex(){
        letter.style.zIndex = '3';
    }

    function removeHeart(){
        // heart.style.rotate= 'rotate(90deg)';
        heart.style.opacity= '0';
    }


</script>

<div class="cont">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="envelope-wrapper {isFlapOpen ? 'flap' : ''}" on:click={toggleFlap}>
        <div class="envelope">
            <div class="letter {isScale ? 'scl' : ''}" bind:this={letter} >
                <div class="text">
                    <strong>Dear {receiver_name},</strong>
                    <p>
                        {message}
                    </p>
                </div>
            </div>
        </div>
        <div class="heart" bind:this={heart} ></div>
    </div>
</div>

<style>
.cont {
  height: 100vh;
  display: grid;
  place-items: center;
}
.cont > .envelope-wrapper {
  background: #fae6b6;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
}
.envelope-wrapper > .envelope {
  position: relative;
  width: 300px;
  height: 230px;
}
.envelope-wrapper > .envelope::before {
  content: "";
  position: absolute;
  top: 0;
  z-index: 2;
  border-top: 130px solid #ecdeb8;
  border-right: 150px solid transparent;
  border-left: 150px solid transparent;
  transform-origin: top;
  transition: all 0.5s ease-in-out 0.7s;
}
.envelope-wrapper > .envelope::after {
  content: "";
  position: absolute;
  z-index: 2;
  width: 0px;
  height: 0px;
  border-top: 130px solid transparent;
  border-right: 150px solid #e6cfa7;
  border-bottom: 100px solid #e6cfa7;
  border-left: 150px solid #e6cfa7;
}
.envelope > .letter {
  position: absolute;
  right: 23%;
  bottom: 0;
  width: 54%;
  height: 80%;
  background: #fff;
  text-align: center;
  transition: all 1s ease-in-out;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  padding: 20px 10px;
}

.envelope > .letter > .text {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: var(--txt-color);
  text-align: left;
  font-size: 10px;
}
.heart {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 15px;
  height: 15px;
  background: #f64c5f;
  z-index: 4;
  transform: translate(-50%, -20%) rotate(45deg);
  transition: transform 0.5s ease-in-out 1s;
  box-shadow: 0 1px 6px var(--shadow-color);
  cursor: pointer;
}
.heart:before, 
.heart:after {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: #f64c5f;
  border-radius: 50%;
}
.heart:before {
  top: -7.5px;
}
.heart:after {
  right: 7.5px;
}
.flap > .envelope:before {
  transform: rotateX(180deg);
  z-index: 0;
}
.flap > .envelope > .letter {
  bottom: 100px;
  /* transform: scale(3); */
  transition-delay: 1s;
}
.flap > .envelope > .scl {
    transform: scale(3);
  /* transition-delay: 1s; */
}
.flap > .heart {
  transform: rotate(90deg);
  transition-delay: 0.4s;
}
</style>