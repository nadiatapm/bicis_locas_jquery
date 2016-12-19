function validateForm(){
	function validarNombre(){
		var nombre = $("#name").val();
		if(nombre == null || nombre.length == 0 ){
			$(".name-container").append("<span>Ingrese Nombre</span>");
			return false;
		}else if(!(nombre[0] == nombre[0].toUpperCase())){
			$(".name-container").append("<span>Nombre en Mayuscula</span>");
			return false;
		}else if(/[0-9]/.test(nombre)){
			$(".name-container").append("<span>formato no valido</span>");
			return false;
		}
	}validarNombre();

	function validarApellido(){
		var apellido = $("#lastname").val();
		if(apellido == null || apellido.length == 0 ){
			$(".lastname-container").append("<span>Completa Campo</span>");
			return false;
		}else if(!(apellido[0] == apellido[0].toUpperCase())){
			$(".lastname-container").append("<span>Apellido en Mayuscula</span>");
			return false;
		}else if(/[0-9]/.test(apellido)){
			$(".lastname-container").append("<span>Formato no valido</span>");
			return false;
		}else{
			return true;
		}
	}
	validarApellido();

	function validarEmail(){
		var correo = $("#input-email").val();
		var caracter =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
		if(correo === null || correo.length === 0){
			$(".email-container").append("<span>Complete Campo</span>");
			return false;
		}else if(caracter.test(correo)){
			$(".email-container").append("<span>Correo No Vallido</span>");
			return false;
		}else{
			return true;
		}
	}
	validarEmail()

	function validarClave(){
		var clave = $("#input-password").val();
		if(clave === null || clave.length === 0){
			$(".form-group").append("<span>Complete campo</span>");
			return false;
		}else if(clave.length<6){
			$(".form-group").append("<span>Maximo 6 digitos</span>");
			return false;
		}else if(clave === '123456' || clave === '098765' || clave === 'password'){
			$(".form-group").append("<span>Password Invalida</span>");
			return false;
		}else{
			return true;
		}	
	}
	validarClave();

	function seleccionBici(){
		var elige = $("select").val();
		if(elige[i].value === "0"){
			$(".form-group").parent().append("<span>Eligi tu Opción</span>");
			return false;
		}else{
			return  true;
		}
	}
	seleccionBici();
}