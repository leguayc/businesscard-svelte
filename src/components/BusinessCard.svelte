<script>
    import { getPlaceHolderInfo } from '../helpers/BusinessCardHelper.js';
	import { cardInfo } from '../stores/cardInfo.js';
	import { card } from '../stores/card.js';
    import BCTemplate0 from './bc-templates/BCTemplate0.svelte';
    import BCTemplate1 from './bc-templates/BCTemplate1.svelte';
    import BCTemplate2 from './bc-templates/BCTemplate2.svelte';

    let cardInfoPreview = $cardInfo;

    /** We are using a second object (cardInfoPreview) so that we are able to get placeholder values without overwriting real data */
    $: {
        cardInfoPreview = getPlaceHolderInfo($cardInfo);
    }

    let templates = [
        BCTemplate0,
        BCTemplate1,
        BCTemplate2
    ];
</script>


<div class="business-card" bind:this={$card}>
    <svelte:component this={templates[$cardInfo.templateId]} cardInfo={cardInfoPreview} />
</div>
