
//Vamos mapear a lista pizzaJson, fazer uma copia do modelo de lista de pizza(pizza-item) e preencher esses dados e jogar na tela

const c = (el)=>document.querySelector(el); //arrow function, tiramos o {} para que dispensar o uso do return

const cs = (el)=>document.querySelector(el);

pizzaJson.map((item, index) => {
    
    let pizzaItem = c('.models .pizza-item').cloneNode(true); //Clonar o item
    //preencher as informações em pizzaitem

    //Após clonar os modelos estruturas, vamos colocar as informações neles
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    //pizzaItem.querySelector('').innerHTML = item.


    c('.pizza-area').append( pizzaItem );//Botar o item na tela//Poderia ser possível colocar document.querySelector, contudo armazenamos esse comando em uma const com um nome curto chamada de c, por isso colocamos elas.

    
});


