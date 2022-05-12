<script>
	export let className = '';
    export let title = 'Mr'; // Mr, Mme, Mlle, Dr, ...
    export let firstname = '';
    export let lastname = '';
    export let adress = '';
    export let cp = '';
    export let city = '';
    export let phoneNumber = '';
    export let email = '';
    export let job = '';

    className = 'businessCard ' + className;
</script>

<div class={className}>
    <p>{title}. {firstname} {lastname}</p>
    <p>{job}</p>
    <p>{adress}, {cp} {city}</p>
    <p>{phoneNumber}</p>
    <p>{email}</p>
</div>

<style>
    .businessCard {
        background-color: #B8B5FF;
    }
</style>