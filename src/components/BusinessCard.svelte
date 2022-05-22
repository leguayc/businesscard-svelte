<script>
    import * as BCH from '../helpers/BusinessCardHelper.js';
	import { cardInfo } from '../stores/cardInfo.js';

	export let className = '';
    let cardInfoPreview = cardInfo;

    /** We are using a second object (cardInfoPreview) so that we are able to get placeholder values without overwriting real data */
    $: {
        cardInfoPreview = {
            firstname : BCH.initValue($cardInfo.firstname, "firstname"), 
            lastname : BCH.initValue($cardInfo.lastname, "lastname"),
            phoneNumber : BCH.initValue($cardInfo.phoneNumber, "phoneNumber"),
            email : BCH.initValue($cardInfo.email, "email"),
            job : BCH.initValue($cardInfo.job, "job"),
            title : $cardInfo.title,
            address : BCH.initValue($cardInfo.address, "address"),
            cp : BCH.initValue($cardInfo.cp, "cp"),
            city : BCH.initValue($cardInfo.city, "city")
        }
    }

    className = 'businessCard ' + className;
</script>

<div class={className}>
    <p>{cardInfoPreview.title}. {cardInfoPreview.firstname} {cardInfoPreview.lastname}</p>
    <p>{cardInfoPreview.job}</p>
    <p>{cardInfoPreview.address}, {cardInfoPreview.cp} {cardInfoPreview.city}</p>
    <p>{cardInfoPreview.phoneNumber}</p>
    <p>{cardInfoPreview.email}</p>
</div>

<style>
    .businessCard {
        background-color: red;
    }
</style>