import {createAll, cleanConsole} from './data';
const companies = createAll();

cleanConsole(1, companies);

const companiesDef= [...companies];
companiesDef.map((com)=>{
  com.name = capitalize(com.name);
  com.users.map((user)=>{
    user.firstName=capitalize(user.firstName);
    user.lastName=capitalize(user.lastName);
  });
  com.users=com.users.sort((a, b)=>{
    return ('' + a.firstName).localeCompare(b.firstName);
  });
});

function capitalize(string) {
  return string?string.charAt(0).toUpperCase() + string.slice(1):'';
}

companiesDef.sort((a, b)=>{
  return (a.users.length - b.users.length) * -1;
});

console.log('---- EXAMPLE 1 --- ', companiesDef);

module.exports = {
  capitalize,
};
// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando la variable "companies" como parámetro y reemplazando
// todos los valores "undefined" en "usuarios" por un string vacío.
// El nombre de cada "company" debe tener una letra mayúscula al principio, así como
// el apellido y el nombre de cada "user".
// Las "companies" deben ordenarse por su total de "user" (orden decreciente)
// y los "users" de cada "company" deben aparecer en orden alfabético.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the variable "companies" as a parameter and replacing
// all values "undefined" in "users" by an empty string.
// The name of each "company" must have a capital letter at the beginning as well as
// the last name and first name of each "user".
// The "companies" must be sorted by their number of "user" (decreasing order)
// and the "users" of each "company" must be listed in alphabetical order.

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et remplaçant
// toutes les valeurs "undefined" dans les "users" par un string vide.
// Le nom de chaque "company" doit avoir une majuscule au début ainsi que
// le nom et le prénom de chaque "user".
// Les "companies" doivent être triées par leur nombre de "user" (ordre décroissant)
// et les "users" de chaque "company" doivent être classés par ordre alphabétique.
