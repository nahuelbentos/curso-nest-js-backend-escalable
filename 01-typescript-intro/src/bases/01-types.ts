export let name = 'Nahuel';
export const age: number = 26;
export const isValid: boolean = true;

name = 'Rita';

export const templateStrig = ` Esto es un string
multilinea
que puede tener
" doble
' simple
inyectar valores ${name}
expresiones ${1 + 1}
numeros: ${age}
booleanos: ${isValid}`;


console.log(templateStrig);
