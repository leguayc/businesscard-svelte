<script>
    import { validateField, getPlaceHolderOf } from '../helpers/BusinessCardHelper.js';

    export let value = "";
    export let displayName = "Name";
    export let fieldName = "name";
    export let errorMessage = displayName + " is invalid.";
    export let inputType = "text";
    export let isValid = false;
    export let requireUpperFirstChar = false;
    export let forceValidation = false;

    let validate = (val) => {
        isValid = validateField(val, fieldName);
    }

    $: {
        if (requireUpperFirstChar) {
            value = toFirstCharUpperCase(value);
        }

        validate(value);
    }

    let toFirstCharUpperCase = (value) => {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

</script>

<div class="fieldArea">
    <label for={fieldName}>{displayName}*</label>

    <!-- Choose input type -->
    {#if inputType == "text"}
        <input type="text" name={fieldName} required placeholder={getPlaceHolderOf(fieldName)} bind:value={value} />
    {:else if inputType == "email"}
        <input type="email" name={fieldName} required placeholder={getPlaceHolderOf(fieldName)} bind:value={value} />
    {:else if inputType == "tel"}
        <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" name={fieldName} required placeholder={getPlaceHolderOf(fieldName)} bind:value={value} />
    {:else if inputType == "number"}
        <input type="number" name={fieldName} required placeholder={getPlaceHolderOf(fieldName)} bind:value={value} />
    {/if}
    
    <!-- Wrapper to avoid changing height -->
    <div class="error-wrapper">
        <!-- Display error message if needed -->
        {#if (value.length > 0 || forceValidation) && !isValid}
            {#if value != "" }
                <small>{errorMessage}</small>
            {:else}
                <small>{displayName} is required.</small>
            {/if}
        {/if}
    </div>
</div>

<style>
    .fieldArea {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    input {
        width: 80%;
    }

    .error-wrapper {
        padding: 0;
        margin: 0;
        height: 1rem;
        display: flex;
    }

    .error-wrapper small {
        color: red;
        font-size: 0.8rem;
    }
</style>