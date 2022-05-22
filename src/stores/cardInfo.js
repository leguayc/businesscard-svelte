import { writable } from 'svelte/store'

export const cardInfo = writable({
    firstname : "", 
    lastname : "",
    phoneNumber : "",
    email : "",
    job : "",
    title : "Mr",
    address : "",
    cp : "",
    city : "",
    templateId : 0
});