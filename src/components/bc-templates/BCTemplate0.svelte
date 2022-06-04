<script>
    export let cardInfo = {};
</script>


<aside class="template-card-0">
    <div class="logo-card">
        <img src={cardInfo.logo ? cardInfo.logo : "./img/uber.svg"} alt="logo" />
    </div>
    <div class="infos-card">

        <div class="header-card">
            <p>{cardInfo.title}. {cardInfo.firstname} {cardInfo.lastname}</p>
            <p>{cardInfo.job}</p>
        </div>
        <p class="email item-card">{cardInfo.email}</p>
        <p class="phone item-card">{cardInfo.phoneNumber}</p>
        <div class="address item-card">
            <p>{cardInfo.address},</p>
            <p >{cardInfo.cp}, {cardInfo.city}</p>
        </div>

    </div>
</aside>