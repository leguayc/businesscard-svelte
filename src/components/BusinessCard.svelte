<script>
    import * as BCH from '../helpers/BusinessCardHelper.js';

	export let className = '';
    export let title = 'Mr'; // Mr, Mme, Mlle, Dr, ...
    export let firstname = '';
    export let lastname = '';
    export let address = '';
    export let cp = '';
    export let city = '';
    export let phoneNumber = '';
    export let email = '';
    export let job = '';

    $: { 
        firstname = BCH.initValue(firstname, "firstname");
    }

    $: { 
        lastname = BCH.initValue(lastname, "lastname");
    }

    $: { 
        address = BCH.initValue(address, "address");
    }

    $: { 
        cp = BCH.initValue(cp, "cp");
    }

    $: { 
        city = BCH.initValue(city, "city");
    }

    $: { 
        phoneNumber = BCH.initValue(phoneNumber, "phoneNumber");
    }

    $: { 
        email = BCH.initValue(email, "email");
    }

    $: { 
        job = BCH.initValue(job, "job");
    }

    className = 'businessCard ' + className;
</script>

<div class={className}>
    <p>{title}. {firstname} {lastname}</p>
    <p>{job}</p>
    <p>{address}, {cp} {city}</p>
    <p>{phoneNumber}</p>
    <p>{email}</p>
</div>

<style>
    .businessCard {
        background-color: #B8B5FF;
    }
</style>