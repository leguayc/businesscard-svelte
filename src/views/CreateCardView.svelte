<script>
    import * as BCH from '../helpers/BusinessCardHelper.js';
    import BusinessCard from '../components/BusinessCard.svelte';
    import FieldArea from '../components/FieldArea.svelte';

    let firstname = "";
    let lastname = "";
    let phoneNumber = "";
    let email = "";
    let job = "";
    let title = "Mr";
    let address = "";
    let cp = "";
    let city = "";

    let forceValidation = false;

    let save = () => {
        forceValidation = true;
        if (BCH.validateAll(firstname, lastname, phoneNumber, email, job, address, cp, city)) {
            // TODO : Save to pdf, navigate to other view, ...
            console.log("Validation success !");
        }
    }
</script>

<div class="main">
    <section class="cardpreview">
        <BusinessCard title={title} firstname={firstname} lastname={lastname} address={address} cp={cp} city={city} phoneNumber={phoneNumber} email={email} job={job} />
    </section>
    
    <section class="form">
        <h1>Start editing your card</h1>
    
        <h2>Informations</h2>
        <form>
            <div class="fieldRow">
                <div id="selectTitle">
                    <label for="cars">Title</label>
                    <select name="title" bind:value={title}>
                        <option value="Mr">Mister</option>
                        <option value="M">Miss</option>
                        <option value="Dr">Doctor</option>
                        <option value="Pr">Professor</option>
                    </select>
                </div>
            </div>

            <div class="fieldRow">
                <FieldArea bind:value={firstname} displayName="First Name" fieldName="firstname" forceValidation={forceValidation} requireUpperFirstChar />
                <FieldArea bind:value={lastname} displayName="Last Name" fieldName="lastname" forceValidation={forceValidation} requireUpperFirstChar />
            </div>
    
            <div class="fieldRow">
                <FieldArea bind:value={phoneNumber} displayName="Phone Number" fieldName="phoneNumber" forceValidation={forceValidation} />
                <FieldArea bind:value={email} displayName="Email" fieldName="email" forceValidation={forceValidation} />
            </div>
    
            <div class="fieldRow">
                <FieldArea bind:value={job} displayName="Job" fieldName="job" forceValidation={forceValidation} requireUpperFirstChar />
                <FieldArea bind:value={address} displayName="Address" fieldName="address" forceValidation={forceValidation} />
            </div>
            
            <div class="fieldRow">
                <FieldArea bind:value={cp} displayName="Postal Code" fieldName="cp" forceValidation={forceValidation} />
                <FieldArea bind:value={city} displayName="City" fieldName="city" forceValidation={forceValidation} requireUpperFirstChar />
            </div>
        </form>
    
        <h2>Select your template</h2>

        <button on:click={save}>Save</button>
    </section>
</div>

<style>
    .main {
        display: flex;
    }

    section {
        flex: 1;
    }

    section.cardpreview {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    section.form h1 {
        font-size: 2rem;
    }

    h2 {
        color: #7868E6;
    }
    
    .fieldRow {
        display: flex;
        margin-bottom: 0.5rem;
    }
    
    #selectTitle {
        margin-bottom: 1rem;
    }
</style>