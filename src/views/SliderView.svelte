<script>
import { gsap } from "gsap";

let count = 0;
const elements = ['.box1', '.box2', '.box3', '.box4']
gsap.config({ nullTargetWarn: false, trialWarn: false, });


// Prev button
function slidePrev() {
    gsap.fromTo(elements[count], { xPercent: 0, zIndex: 0 }, { delay: 0.2, duration: 1.2, xPercent: 0, zIndex: -10 });
    count = count > elements.length - 1 ? count : --count;
    gsap.fromTo(elements[count], { xPercent: 100, zIndex: -10 }, { duration: 1.2, xPercent: 0, zIndex: 10 });
}

// Next button
function slideNext() {
    gsap.fromTo(elements[count], { xPercent: 0, zIndex: 0 }, { delay: 0.2, duration: 1.2, xPercent: 0, zIndex: -10 });
    count = count < elements.length - 1 ? ++count : 0;
    gsap.fromTo(elements[count], { xPercent: 100, zIndex: -10 }, { duration: 1.2, xPercent: 0, zIndex: 10 });
    console.log(count)
}


</script>

	<article class="slider slides-container">
		<div class="box-container slides-innner">
            <div class="box box1"></div>
            <div class="box box2"></div>
            <div class="box box3"></div>
            <div class="box box4"></div>
        </div>
        
        <div class="controls">
            <button id="prevButton" on:click={() => slidePrev()}>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <polyline points="15 6 9 12 15 18" />
                </svg>
            </button>
            <button class="nextImage" id="nextButton" on:click={() => slideNext()}>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <polyline points="9 6 15 12 9 18" />
                </svg>
            </button>
        </div>
	</article>
<style>
.controls {
    padding: 0px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    position: absolute;
    top: 50%;
    vertical-align:center;
}

.controls button {
    margin: 0 30px 0 30px;
    padding: 12px 24px;
    z-index: 999999;
    background: transparent;
    border: none;
    cursor: pointer;
  
}
.box-container {
    position: relative;
    overflow: hidden;
    /*border: .2rem solid black;*/
    position: fixed; 
    top: 0; 
    left: 0; 
    /* Préserve le ratio de l'image */
    min-width: 100%;
    min-height: 100%;
}
.box {
    position: absolute;
    width: 100%; 
    height: 100%;
    display: grid;
    place-items: center;
    /* z-index: 0; */
}

.box1 {
    background-color: rgb(255, 255, 255);
    left: 0%;
}
.box2 {
    background-color: rgb(0, 68, 255);
}
.box3 {
    background-color: rgb(255, 0, 0);
}
.box4 {
    background-color: rgb(21, 255, 0);
}
</style>