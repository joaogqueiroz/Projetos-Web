function valida(){
	var nome = document.getElementById('nome');
	alert(nome.value);
	if(nome.value == ""){
		alert("Campo vazio")

	}
	else{
		alert("Tudo certo")
	}
}