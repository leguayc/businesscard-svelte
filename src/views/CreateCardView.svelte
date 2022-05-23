<script>
    import * as BCH from '../helpers/BusinessCardHelper.js';
    import BusinessCard from '../components/BusinessCard.svelte';
    import FieldArea from '../components/FieldArea.svelte';
	import { cardInfo } from '../stores/cardInfo.js';
    import { gsap, Power1 } from "gsap";

    let forceValidation = false;

    let save = () => {
        forceValidation = true;
        if (BCH.validateAll(firstname, lastname, phoneNumber, email, job, address, cp, city)) {
            // TODO : Save to pdf, navigate to other view, ...
            console.log("Validation success !");
        }
    }

    let templates = [
		{ id: 0, className: 'template-box template-1 active' },
		{ id: 1, className: 'template-box template-2' },
		{ id: 2, className: 'template-box template-3' }
	];

    let setTemplateActive = (id) => {
        // templates[$cardInfo.templateId].className = 'template-box';
        // templates[id].className = 'template-box  active';
        $cardInfo.templateId = id;
    }

    const cards = ['.template-1', '.template-2', '.template-3']
    const totalCards = 3;

    let currentCard = 1;
    let nextCard = currentCard + 1;
    let lastCard =  nextCard + 1;

    function filterActiveImages(template1, template2) {
        const filteredResult = cards.filter((element) => element !== template1 && element !== template2)
        return filteredResult;
    }

    function slideImage(currentCard,nextCard, lastCard ) {
        let tl = gsap.timeline({defaults: {duration: 0.8, ease: Power1.easeInOut}});
        tl.to(`.template-${currentCard}`, {rotation: -10, xPercent: -100})
        .to(`.template-${currentCard}`, {rotation: 0, xPercent: 0})
        .to(`.template-${nextCard}`, {zIndex: 2 }, "-=1.6")
        .to(`.template-${currentCard}`, {zIndex: -1}, "-=1.6")
        .to(`.template-${lastCard}`, {zIndex: 1}, "-=1.6")
        .to(filterActiveImages(`.template-${nextCard}`,`.template-${currentCard}`), {zIndex:0}, "-=2.4")
        tl.timeScale(2);
        return tl;
    }

    function nextAnimation () {
        slideImage(currentCard, nextCard, lastCard);
        
        currentCard = nextCard;
        nextCard = currentCard - 1;

        $cardInfo.templateId = currentCard;
        
        setTemplateActive(currentCard -1)
        
        if (currentCard === 1) {
            nextCard = totalCards
        }  
            
        if (nextCard === 1) {
            lastCard = totalCards
        }  else {
            lastCard = nextCard - 1;
        }
    }
</script>

    <article class="container">
    <div class="form-preview-card">
        <section class="card-preview">
            <BusinessCard />
        </section>
        <section class="form">
            <h1>Créer ta carte de visite</h1>
            <h2>Informations</h2>
            <form>
                <div class="form-row">
                    <div class="form-item">
                    <div id="selectTitle" class="form-select">
                        <label for="title">Title*</label>
                        <select name="title" bind:value={$cardInfo.title}>
                            <option value="Mr">Mister</option>
                            <option value="M">Miss</option>
                            <option value="Dr">Doctor</option>
                            <option value="Pr">Professor</option>
                        </select>
                    </div>
                    </div>
                </div>
                
                <aside class="form-row">
                    <div class="form-item">
                        <FieldArea bind:value={$cardInfo.firstname} displayName="First Name" fieldName="firstname" forceValidation={forceValidation} requireUpperFirstChar />
                    </div>

                    <div class="form-item">
                        <FieldArea bind:value={$cardInfo.lastname} displayName="Last Name" fieldName="lastname" forceValidation={forceValidation} requireUpperFirstChar />
                    </div>
                </aside>

                <aside class="form-row">
                    <div class="form-item">
                        <FieldArea bind:value={$cardInfo.phoneNumber} displayName="Phone Number" fieldName="phoneNumber" forceValidation={forceValidation} />

                    </div>
                    <div class="form-item">
                        <FieldArea bind:value={$cardInfo.email} displayName="Email" fieldName="email" forceValidation={forceValidation} />
                    </div>
                </aside>
        
                <aside class="form-row">
                    <div class="form-item">
                        <FieldArea bind:value={$cardInfo.job} displayName="Job" fieldName="job" forceValidation={forceValidation} requireUpperFirstChar />

                    </div>
                    <div class="form-item">
                        <FieldArea bind:value={$cardInfo.address} displayName="Address" fieldName="address" forceValidation={forceValidation} />
                    </div>
                </aside>
                
                <aside class="form-row">
                    <div class="form-item">
                        <FieldArea bind:value={$cardInfo.cp} displayName="Postal Code" fieldName="cp" forceValidation={forceValidation} />

                    </div>
                    <div class="form-item">
                        <FieldArea bind:value={$cardInfo.city} displayName="City" fieldName="city" forceValidation={forceValidation} requireUpperFirstChar />
                    </div>
                </aside>
            </form>
            <h2>Choisis ton template</h2>
            <aside class="all-templates">
                <!-- toggle class active -->
                <div class="containerCard">
                    {#each templates as template}
                        <!-- <div class={template.className} on:click={() => setTemplateActive(template.id)}></div> -->
                        <div class={template.className}></div>
                    {/each}
                </div>
                
                <button class="button button-next" on:click={() => nextAnimation()}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <polyline points="9 6 15 12 9 18" />
                    </svg>
                </button>
            </aside>
            <button class="button-custom button-blue" on:click={save}>Suivant</button>
        </section>
    </div>
</article>


<style>
.template-2 {
  background-color: blue;
}

.template-3 {
  background-color: black;

}

.template-1 {
  background-color: red;
}
</style>