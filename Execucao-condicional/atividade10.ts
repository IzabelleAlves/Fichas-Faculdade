/*Computar o IMC e classificar o resultado entre magreza (inferior a 18.5), 
saudável (entre 18.5 e 25), sobrepeso (acima de 25);*/

let peso: number = 53;
let altura: number = 1.69;
let imc: number = peso / altura ** 2;

if (imc >= 18.5 && imc <= 25) {
  console.log("Saúdavel");
} else if (imc > 25) {
  console.log("Sobrepeso");
} else {
  console.log("Magreza");
}
