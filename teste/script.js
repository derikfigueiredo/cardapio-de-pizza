 const c = (el) => document.querySelector(el);
 const cs = (el) => document.querySelectorAll(el);

 
 pizzaJson.map((item, index) => {
    pizzaItem = c('.models .pizza-item').cloneNode(true);

    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

    pizzaItem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();

        c('.pizzaWindowArea').style.display = 'flex';
    })

    c('.pizza-area').append( pizzaItem );
 })








/*
var alunos = [
    '{nome: "maria", notas: {portugues: 19, matematica: 22, geografia: 25}',
    '{nome: "jose", notas: { portugues: 21, matematica: 13, geografia: 25}',
    '{nome: "manoel", notas: { portugues: 21, matematica: 22, geografia: 23 }',
    '{nome: "beth", notas: { portugues: 22, matematica: 11, geografia: 22 }',
    '{nome: "marcia", notas: { portugues: 26, matematica: 10, geografia: 25 }',
    '{nome: "carla", notas: { portugues: 18, matematica: 17, geografia: 18 }',
    '{nome: "carla1", notas: { portugues: 18, matematica: 17, geografia: 18 }',
    '{nome: "carla2", notas: { portugues: 18, matematica: 17, geografia: 18 }',
    '{nome: "carla3", notas: { portugues: 18, matematica: 17, geografia: 18 }',
    '{nome: "carla4", notas: { portugues: 18, matematica: 17, geografia: 18 }',
    '{nome: "carla5", notas: { portugues: 18, matematica: 17, geografia: 18 }'
];


tentativas = 0;
tentativas2 = 0;
tentativas3 = 0;
var grupo1 = [];
var grupo2 = [];
var grupo3 = [];
aleatorio2 = [];



for (i = 0; i < 9; i++) {

    var aleatorio = Math.round((Math.random() * 10));
    alunos[aleatorio]


    var analise = aleatorio2.includes(aleatorio);

    if (analise == true) {
        i--;
        continue;
    }


     if (tentativas < 3) { 
        grupo1.push(alunos[aleatorio]);

        tentativas++
     } else if (tentativas2 < 3) {
        grupo2.push(alunos[aleatorio]);

        tentativas2++
     } else if (tentativas3 < 3) {
        grupo3.push(alunos[aleatorio]);

        tentativas3++ 
    }

    aleatorio2.push(aleatorio)
     
}

console.log(grupo1, grupo2, grupo3);

console.log(aleatorio2);

*/
///////////////////////////////////////////////////////////////////////////////////////////
