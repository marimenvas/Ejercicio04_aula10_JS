function addUsuarios(nome, sobrenome, edade){
    this.nome = nome
    this.sobrenome = sobrenome
    this.edade = edade
}
function addUsuario(){
    let inputNome = document.querySelector('#nome');
    let inputSobrenome = document.querySelector('#sobrenome');
    let inputedade = document.querySelector('#edade');
    let nomeList = document.querySelector('#nomeList');

    let addRegistros=[]

    let nome = inputNome.value;
    inputNome.value='';
    let sobrenome = inputSobrenome.value;
    inputSobrenome.value='';
    let edade = inputedade.value;
    inputedade.value=''; 

    console.log(addRegistros);
    //document.write(nome);

    //Var addUsuarioss = new addRegistros(nome, sobrenome, edade)
    //addUsuarioss.push(addUsuario)
    
    let itemList=document.createElement('li');
    itemList.textContent=addRegistros;
    nomeList.appendChild(itemList);
}
document.querySelector('#btnAddUsuario').addEventListener('click', addUsuario)

