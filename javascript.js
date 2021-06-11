function Receber(){

var nome = document.getElementsByName("nome");

var cartao= document.getElementsByName("cartao");

var cpf= document.getElementsByName("cpf");

var data = document.getElementsByName("data");

var sexo = document.getElementsByName("sexo");

var temperatura = document.getElementsByName("temperatura");

if (form.nome.value ==""){

    alert("Dados incompletos ! ");
    form.nome.focus();
}else if(form.cartao.value ==""){
    alert("Dados incompletos ! ");
}else if (form.cpf.value ==""){
    alert("Dados incompletos !");
}else if (form.data.value ==""){
    alert("Dados incompletos !");
}else if (form.temperatura.value ==""){
    alert("Dados incompletos !");
}else if (form.sexo.selectedIndex == 0) {
    alert("Favor selecionar o sexo !");
    form.sexo.focus();
    return false;
}else if(form.nome.value.length <4){
    alert("Nome deve possuir mais do que 3 caracteres.");
}else if (form.nome.value.length >20){
    alert("Nome deve possuir menos do que 20 caracteres.");
}else if (form.cartao.value.length !==11) {
    alert("Número do cartão inválido.");
} else if(form.cpf.value.length !==14){
    alert("Número de CPF inválido.");
} 
else {
    alert("Dados enviados com sucesso.");
}

}

