/*
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito22
*/

console.log('hello world');

const firstName = prompt("Digita il tuo nome");
const lastName = prompt("Digita il tuo cognome");
const favoriteColor = prompt("Digita il tuo colore preferito");

const newPassword = firstName + lastName + favoriteColor + '22';

document.getElementById('new-password').innerHTML += newPassword;