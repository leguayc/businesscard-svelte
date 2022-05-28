<script>
import { gsap } from "gsap";
import gsapCore from "gsap/gsap-core";

let count = 1

const nextButton  = document.getElementById('nextImage')

const prevButton = document.getElementById('prevButton')

const sliderContainer = document.querySelector('.box-container')

const NbItemSlider =  document.querySelectorAll('.box').length

function nextSlide(){
    if (count == 3){
    gsap.to(".box-container", {
        duration : 0.3,
        x :  0
    })
    count = 1
    console.log(count);
}else{
   
    gsap.to(".box-container", {
        duration : 0.3,
        x :  -100* count+ "vw"
    })
    count++
    console.log(count);
}
}

function prevSlide(){
    if (count == 1){
    count = 3,
    gsap.to(".box-container", {
        duration : 0.3,
        x :  -100* (count-1)+ "vw"
    })
    console.log(count)
    }else if (count==3){
    count = count-2
    gsap.to(".box-container", {
        duration : 0.3,
        x :  -100* (count)+ "vw"
    })
    count++
    console.log(count)

    }else{
        gsap.to(".box-container", {
        duration : 0.3,
        x :  0
    })
    count = 1
    }
}

</script>

	<article class="slider slides-container">
		<div class="box-container slides-innner">
            <div class="box box1"></div>
            <div class="box box2"></div>
            <div class="box box3"></div>
        </div>
        
        <div class="controls">
            <button id="prevButton" on:click={prevSlide}>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <polyline points="15 6 9 12 15 18" />
                </svg>
            </button>
            <button class="nextImage" id="nextButton" on:click={nextSlide}>
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

.box{
    width: 100vw;
    height: 100vh;
}

.box-container{
    display: flex;
    flex-wrap: nowrap;
    position: relative;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
}


.box1{
    background-color: red;
}
.box2{
    background-color: green;
}
.box3{
    background-color: blue;
}



</style>