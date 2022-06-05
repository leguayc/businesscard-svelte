<script>
    import * as BCH from '../helpers/BusinessCardHelper.js';
    import BusinessCard from '../components/BusinessCard.svelte';
    import FieldArea from '../components/FieldArea.svelte';
	import { cardInfo } from '../stores/cardInfo.js';
	import { card } from '../stores/card.js';
    import { gsap, Power1 } from "gsap";
    import { jsPDF } from "jspdf";
    import html2canvas from "html2canvas";
    import { Link } from "svelte-navigator";


    let forceValidation = false;

    let save = () => {
        forceValidation = true;
        if (BCH.validateAll($cardInfo)) {
            html2canvas($card, {scale: 3}).then(function(canvas) {
                let img = new Image();
                img.src = canvas.toDataURL("image/jpg");
                img.onload = function () {
                    let pdf = new jsPDF('landscape', 'px', [558, 310]);
                    pdf.addImage(img, 0, 0, pdf.internal.pageSize.width, pdf.internal.pageSize.height);
                    pdf.save('BusinessCard.pdf');
                };
            });
        }
    }

    let templates = [
		{ id: 0, className: 'template-box template-1 active' },
		{ id: 1, className: 'template-box template-2' },
		{ id: 2, className: 'template-box template-3' }
	];

    let setTemplateActive = (id) => {
        templates[$cardInfo.templateId].className = 'template-box';
        templates[id].className = 'template-box  active';
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

    let setLogo = (e) => {
        let imgFiles = e.target.files;

        if (imgFiles && imgFiles[0]) {
            $cardInfo.logo = URL.createObjectURL(imgFiles[0]); // set src to blob url
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
                    <div class="form-item">
                        <div class="fieldArea">
                            <label for="logo">Logo</label>
                            <input type="file" name="logo" accept="image/jpeg, image/png, image/jpg" on:change={setLogo} />
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
                        <div id="template{template.id}" class={template.className} on:click={() => setTemplateActive(template.id)}></div>
                    {/each}
                </div>
                
                <div class="buttons-create-card">
                
                <button class="button-custom button-blue" on:click={save}>Suivant</button>
                <Link class="button-custom button-black" to="/slider">Exemples</Link> 
                </div>
             

            </aside>
        </section>
    </div>
</article>


