<script>
import { gsap } from "gsap";
import gsapCore from "gsap/gsap-core";
import { Link } from "svelte-navigator";

let count = 1

const nextButton  = document.getElementById('nextImage')

const prevButton = document.getElementById('prevButton')

const sliderContainer = document.querySelector('.box-container')

const NbItemSlider =  document.querySelectorAll('.box').length

function nextSlide(){
    if (count == 3){
    gsap.to(".box-container", {
        duration : 1,
        x :  0,
        ease:"expo.out"
    })
    count = 1
    console.log(count);
}else{
   
    gsap.to(".box-container", {
        duration : 1,
        x :  -100* count+ "vw",
                ease:"expo.out"

    })
    count++
    console.log(count);
}
}

function prevSlide(){
    if (count == 1){
    count = 3,
    gsap.to(".box-container", {
        duration : 1,
        x :  -100* (count-1)+ "vw",
                ease:"expo.out"

    })
    console.log(count)
    }else if (count==3){
    count = count-2
    gsap.to(".box-container", {
        duration : 1,
        x :  -100* (count)+ "vw",
                ease:"expo.out"

    })
    count++
    console.log(count)

    }else{
        gsap.to(".box-container", {
        duration : 1,
        x :  0,
                ease:"expo.out"

    })
    count = 1
    }
}

</script>

<article class="slider slides-container">
	<div class="box-container slides-innner">
        <div class="return">
            <Link class="link-return" to="create">Back to edit</Link>
        </div>
        <div class="box box1"></div>
        <div class="box box2"></div>
        <div class="box box3"></div>
    </div>
    
    <div class="controls">
        <button id="prevButton" on:click={prevSlide}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FDFEFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <polyline points="15 6 9 12 15 18" />
            </svg>
        </button>
        <button class="nextImage" id="nextButton" on:click={nextSlide}>
            <svg style="mix-blend-mode: difference;" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FDFEFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <polyline points="9 6 15 12 9 18" />
            </svg>
        </button>
    </div>
</article>