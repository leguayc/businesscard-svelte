export function getPlaceHolderOf(fieldName) {
    switch (fieldName) {
        case "firstname" :
            return "John";
        case "lastname" :
            return "Doe";
        case "address" :
            return "221B Baker Street";
        case "cp" :
            return 10001;
        case "city" :
            return "New York";
        case "phoneNumber" :
            return "+33 06 23 19 82 74";
        case "email" :
            return "john.doe@gmail.com";
        case "job" :
            return "Developper";
        case "logo" :
            return "./img/uber.svg";
    }
}

export function validateField(value, fieldName) {
    switch (fieldName) {
        case "firstname" :
            return (value && value.length > 1 && value.length < 20);
        case "lastname" :
            return (value && value.length > 1 && value.length < 30);
        case "address" :
            return (value && value.length > 5 && value.length < 80);
        case "cp" :
            return (value && value.length == 5 && !isNaN(value));
        case "city" :
            return (value && value.length > 1 && value.length < 50);
        case "phoneNumber" :
            return (value && value.length > 8 && value.length < 15);
        case "email" :
            return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value));
        case "job" :
            return (value && value.length > 2 && value.length < 50);
        case "logo" :
            return (value && true); // Force bool
    }
}

export function validateAll(firstname, lastname, address, cp, city, phoneNumber, email, job) {
    if (!validateField(firstname, "firstname")) return false;
    if (!validateField(lastname, "lastname")) return false;
    if (!validateField(address, "address")) return false;
    if (!validateField(cp, "cp")) return false;
    if (!validateField(city, "city")) return false;
    if (!validateField(phoneNumber, "phoneNumber")) return false;
    if (!validateField(email, "email")) return false;
    if (!validateField(job, "job")) return false;

    return true;
}

export function initValue(value, fieldName) {
    if (!validateField(value, fieldName)) {
        return getPlaceHolderOf(fieldName)
    } else {
        return value;
    }
}

export function getPlaceHolderInfo(cardInfo) {
    return {
        firstname : initValue(cardInfo.firstname, "firstname"), 
        lastname : initValue(cardInfo.lastname, "lastname"),
        phoneNumber : initValue(cardInfo.phoneNumber, "phoneNumber"),
        email : initValue(cardInfo.email, "email"),
        job : initValue(cardInfo.job, "job"),
        title : cardInfo.title,
        address : initValue(cardInfo.address, "address"),
        cp : initValue(cardInfo.cp, "cp"),
        city : initValue(cardInfo.city, "city"),
        logo : initValue(cardInfo.logo, "logo"),
    };
}