
//Vamos mapear a lista pizzaJson, fazer uma copia do modelo de lista de pizza(pizza-item) e preencher esses dados e jogar na tela

let modalQt = 1;

const c = (el)=>document.querySelector(el); //arrow function, tiramos o {} para que dispensar o uso do return

const cs = (el)=>document.querySelectorAll(el);

//o paramentro item foi criado para receber cada item do array pizzaJson, já o paramentro index foi criado para receber os índices do array

pizzaJson.map((item, index) => {
    
    let pizzaItem = c('.models .pizza-item').cloneNode(true); //Clonar o item e duplicá-lo
    //preencher as informações em pizzaitem

    pizzaItem.setAttribute('data-key', index);
    //Após clonar os modelos estruturas, vamos colocar as informações neles
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

    pizzaItem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();
        let key = e.target.closest('.pizza-item').getAttribute('data-key'); //Target: referência ao objeto que enviou o evento*a*
        //Closest irá procurar o elemento com a classes .pizza-item mais próximo do elemento a.

        modalQt = 1; //resetar o modalQt toda vez que o pizza window for aberto.

        c('.pizzaBig img').src = pizzaJson[key].img;
        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        c('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;
        c('.pizzaInfo--size.selected').classList.remove('selected');
        document.querySelectorAll('.pizzaInfo--size').forEach((size, sizeIndex) => {
            if(sizeIndex == 2) {
                size.classList.add('selected');
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        })

        c('.pizzaInfo--qt').innerHTML = modalQt;

        c('.pizzaWindowArea').style.display = 'flex';
        c('.pizzaWindowArea').style.opacity = '0';
        setTimeout( () => {
            c('.pizzaWindowArea').style.opacity = '1';
        }, 200)
    })


    c('.pizza-area').append( pizzaItem );//Botar o item na tela//Poderia ser possível colocar document.querySelector, contudo armazenamos esse comando em uma const com um nome curto chamada de c, por isso colocamos elas.
    
});


//Eventos do MODAL 
function closeModal() {
    c('.pizzaWindowArea').style.opacity = "0";
    
    setTimeout(() => {
        c('.pizzaWindowArea').style.display = 'none';
    }, 500)
}

    cs('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item)=> { item.addEventListener('click', closeModal) 
    });
