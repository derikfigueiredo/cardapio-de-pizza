let cart = [];
let modalKey;
let modalQt = 1;
let sizePizza;

const c = (el)=>document.querySelector(el); //arrow function, tiramos o {} para que dispensar o uso do return

const cs = (el)=>document.querySelectorAll(el);


//Vamos mapear a lista pizzaJson, fazer uma copia do modelo de lista de pizza(pizza-item) e preencher esses dados e jogar na tela
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

        modalKey = key;
        modalQt = 1; //resetar o modalQt toda vez que o pizza window for aberto.

        c('.pizzaBig img').src = pizzaJson[key].img;
        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        c('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;
        c('.pizzaInfo--size.selected').classList.remove('selected');
        cs('.pizzaInfo--size').forEach((size, sizeIndex) => {
            if(sizeIndex == 2) {
                size.classList.add('selected');
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        });

        c('.pizzaInfo--qt').innerHTML = modalQt;

        c('.pizzaWindowArea').style.display = 'flex';
        c('.pizzaWindowArea').style.opacity = '0';
        setTimeout( () => {
            c('.pizzaWindowArea').style.opacity = '1';
        }, 200)
    })


    c('.pizza-area').append( pizzaItem );//Botar o item na tela//Poderia ser possível colocar document.querySelector, contudo armazenamos esse comando em uma const com um nome curto chamada de c, por isso colocamos elas.
    
});


///////////////ADD AÇÃO DE CLICK PARA FECHAR MODAL///////////////////
function closeModal() {
    c('.pizzaWindowArea').style.opacity = "0";
    
    setTimeout(() => {
        c('.pizzaWindowArea').style.display = 'none';
    }, 500)
}

    cs('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item)=> { item.addEventListener('click', closeModal) 
    });
////////////////////////////////////////////////////////////


/////ADD AÇÃO DE CLICK NOS BOTÕES DE + E DE - ////////
c('.pizzaInfo--qtmenos').addEventListener('click', ()=> {
    if (modalQt > 1) {
        modalQt--;}
        c('.pizzaInfo--qt').innerHTML = modalQt;
});

c('.pizzaInfo--qtmais').addEventListener('click', ()=> {
    modalQt++;
    c('.pizzaInfo--qt').innerHTML = modalQt;
});
//////////////////////////////////////////////////////////


///////////ADD AÇÃO DE CLICK NOS BOTÕES PEQUENA, MÉDIA E GRANDE ///////////////////
cs('.pizzaInfo--size').forEach((size, sizeIndex) => {
    size.addEventListener('click', () => {
        c('.pizzaInfo--size.selected').classList.remove('selected');
        size.classList.add('selected')
    })
});
//Por que se eu tivesse colocado size  e.target.classList.add('selected') teria dado errado? Se o usuário clicar bem no span, a classe selected é passada para ele também porque o argumento e é tanto o .pizzaInfo--size quanto o span(span fica dentro do .pizzaInfo--size).
////////////////////////////////////////////////////////////


/////////////////CARRINHO////////////////////////////
c('.pizzaInfo--addButton').addEventListener('click', ()=>{

    sizePizza = parseInt(c('.pizzaInfo--size.selected').getAttribute('data-key'));

    let identifier = `${pizzaJson[modalKey].id}@${sizePizza}`;

    key = cart.findIndex((item)=>item.identifier == identifier);

    if (key > -1) {
        cart[key].qt += modalQt;
    } else {
    cart.push({
        identifier,
        id:pizzaJson[modalKey].id,
        sizePizza,
        qt:modalQt
    })};

    closeModal();
});
