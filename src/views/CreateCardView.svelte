<script>
    import * as BCH from '../helpers/BusinessCardHelper.js';
    import BusinessCard from '../components/BusinessCard.svelte';
    import FieldArea from '../components/FieldArea.svelte';
	import { cardInfo } from '../stores/cardInfo.js';

    let forceValidation = false;

    let save = () => {
        forceValidation = true;
        if (BCH.validateAll(firstname, lastname, phoneNumber, email, job, address, cp, city)) {
            // TODO : Save to pdf, navigate to other view, ...
            console.log("Validation success !");
        }
    }

    let templates = [
		{ id: 0, className: 'template-box active' },
		{ id: 1, className: 'template-box' },
		{ id: 2, className: 'template-box' }
	];

    let setTemplateActive = (id) => {
        templates[$cardInfo.templateId].className = 'template-box';
        templates[id].className = 'template-box active';
        $cardInfo.templateId = id;
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
                {#each templates as template}
                    <div class={template.className} on:click={() => setTemplateActive(template.id)}></div>
                {/each}
            </aside>
            <button class="button-custom button-blue" on:click={save}>Suivant</button>
        </section>
    </div>
</article>