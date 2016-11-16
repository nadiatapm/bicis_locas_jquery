function validateForm(){
	/*<script type="text/javascript">
	// tengo el mensaje
	var mensaje = "Hola a todos";
	// creo el elemento nuevo, como string
	var elementoNuevo = "<p><span>" + mensaje + "</span></p>";
	// Finalmente lo añado abajo del primer párrafo
	$('#primero').append(elementoNuevo);
	*/
	$("document").ready(function(){
		$("#bRegistro").click(function()){
			var nombre = $("#name").val();
			var apellido = $("#lastname").val();
			var correo = $("#input-email").val();
			var clave = $("#input-password").val();
		}
	});
	function validarNombre(){
		var name = document.getElementById("name").value;	
		if(name == null || name.length == 0 ){
			//se crea elementos contenedores
			var box = document.getElementsByClassName('input-box')[0];
			var estilo = document.createElement('span');
			var Texto = document.createTextNode('Campo obligatorio');	
			//se agregan elementos contenedores
			estilo.appendChild(Texto);
			box.appendChild(estilo);
			return false;
		}else if(!(name[0] == name[0].toUpperCase())){
			var box = document.getElementsByClassName('input-box')[0];
			var estilo = document.createElement('span');
			var Texto = document.createTextNode('Nombre debe comenzar en Mayusculas');	
			//alert('Nombre debe comenzar en Mayusculas');
			estilo.appendChild(Texto);
			box.appendChild(estilo);
		}else if(/[0-9]/.test(name)){
			var box = document.getElementsByClassName('input-box')[0];
			var estilo = document.createElement('span');
			var Texto = document.createTextNode('Nombre solo debe tener letras');
			estilo.appendChild(Texto);
			box.appendChild(estilo);
		}else{
			return true;
		}
	}
	validarNombre();

	function validarApellido(){
		var lastname = document.getElementById("lastname").value;
		if(lastname == null || lastname.length == 0 ){
			var box = document.getElementsByClassName('input-box')[1];
			var estilo = document.createElement('span');
			var Texto = document.createTextNode('Campo obligatorio');
			estilo.appendChild(Texto);
			box.appendChild(estilo);	
			return false;
		}else if(!(lastname[0] == lastname[0].toUpperCase())){
			var box = document.getElementsByClassName('input-box')[1];
			var estilo = document.createElement('span');
			var Texto = document.createTextNode('Nombre debe comenzar con Mayuscula')
			estilo.appendChild(Texto);
			box.appendChild(estilo);
		}else if(/[0-9]/.test(lastname)){
			var box = document.getElementsByClassName('input-box')[1];
			var estilo = document.createElement('span');
			var Texto = document.createTextNode('Nombre solo debe tener letras');
			estilo.appendChild(Texto);
			box.appendChild(estilo);
		}else{
			return true;
		}
	}
	validarApellido();

	//validar campo email tenga formato valido 
	function validarEmail(){
		var caracter =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;  
		var correo = document.getElementById("input-email").value;
		if(correo === null || correo.length === 0){
			var box = document.getElementsByClassName('input-box')[2];
			var estilo = document.createElement('span');
			var Texto = document.createTextNode('Ingresar email');
			estilo.appendChild(Texto);
			box.appendChild(estilo);
			return false;
		}else if(caracter.test(correo)){
			var box = document.getElementsByClassName('input-box')[2];
			var estilo = document.createElement('span');
			var Texto = document.createTextNode('revisé correo');
			estilo.appendChild(Texto);
			box.appendChild(estilo);
			return true;
		}
	}
	validarEmail();	

	//el campo password debe tener al menos 6 caracteres 
	//password no debe ser igual a "password" o "123456" o "0987654"
	function validarClave(){
		var clave = document.getElementById('input-password').value;
		if(clave === null || clave.length === 0){
			var box = document.getElementsByClassName('input-box')[3];
			var estilo = document.createElement('span');
			var Texto = document.createTextNode('Ingrese password');
			estilo.appendChild(Texto);
			box.appendChild(estilo);
		}else if(clave.length<6){
			var box = document.getElementsByClassName('input-box')[3];
			var estilo = document.createElement('span');
			var Texto = document.createTextNode('password debe ser de 6 caracteres');
			estilo.appendChild(Texto);
			box.appendChild(estilo);
		}else if(clave === '123456' || clave === '098765' || clave === 'password'){
			var box = document.getElementsByClassName('input-box')[3];
			var estilo = document.createElement('span');
			var Texto = document.createTextNode('password invalida');
			estilo.appendChild(Texto);
			box.appendChild(estilo);
		}else{
			return true;
		}	
	}	
	validarClave();	

	//el valor seleccionado bicis debe ser una opcion presentada
	function seleccionBici(){
		var elige = document.getElementsByTagName('select')[0];
		for(var i = 0; i < elige.length; ++i){
			if(elige[i].value === "0"){
				var box = document.getElementsByClassName('input-box')[4];
				var estilo = document.createElement('span');
				var Texto = document.createTextNode('Seleciona tu bici!!!!');
				estilo.appendChild(Texto);
				box.appendChild(estilo);
				return false;
			}
		}
		return true;
	}
	seleccionBici();
}
/*function validateForm(){
	
	function validarNombre(){
		var name = document.getElementById("name").value;	
		if(name == null || name.length == 0 ){
			//se crea elementos contenedores
			var box = document.getElementsByClassName('input-box')[0];
			var estilo = document.createElement('span');
			var Texto = document.createTextNode('Campo obligatorio');	
			//se agregan elementos contenedores
			estilo.appendChild(Texto);
			box.appendChild(estilo);
			return false;
		}else if(!(name[0] == name[0].toUpperCase())){
			var box = document.getElementsByClassName('input-box')[0];
			var estilo = document.createElement('span');
			var Texto = document.createTextNode('Nombre debe comenzar en Mayusculas');	
			//alert('Nombre debe comenzar en Mayusculas');
			estilo.appendChild(Texto);
			box.appendChild(estilo);
		}else if(/[0-9]/.test(name)){
			var box = document.getElementsByClassName('input-box')[0];
			var estilo = document.createElement('span');
			var Texto = document.createTextNode('Nombre solo debe tener letras');
			estilo.appendChild(Texto);
			box.appendChild(estilo);
		}else{
			return true;
		}
	}
	validarNombre();

	function validarApellido(){
		var lastname = document.getElementById("lastname").value;
		if(lastname == null || lastname.length == 0 ){
			var box = document.getElementsByClassName('input-box')[1];
			var estilo = document.createElement('span');
			var Texto = document.createTextNode('Campo obligatorio');
			estilo.appendChild(Texto);
			box.appendChild(estilo);	
			return false;
		}else if(!(lastname[0] == lastname[0].toUpperCase())){
			var box = document.getElementsByClassName('input-box')[1];
			var estilo = document.createElement('span');
			var Texto = document.createTextNode('Nombre debe comenzar con Mayuscula')
			estilo.appendChild(Texto);
			box.appendChild(estilo);
		}else if(/[0-9]/.test(lastname)){
			var box = document.getElementsByClassName('input-box')[1];
			var estilo = document.createElement('span');
			var Texto = document.createTextNode('Nombre solo debe tener letras');
			estilo.appendChild(Texto);
			box.appendChild(estilo);
		}else{
			return true;
		}
	}
	validarApellido();

	//validar campo email tenga formato valido 
	function validarEmail(){
		var caracter =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;  
		var correo = document.getElementById("input-email").value;
		if(correo === null || correo.length === 0){
			var box = document.getElementsByClassName('input-box')[2];
			var estilo = document.createElement('span');
			var Texto = document.createTextNode('Ingresar email');
			estilo.appendChild(Texto);
			box.appendChild(estilo);
			return false;
		}else if(caracter.test(correo)){
			var box = document.getElementsByClassName('input-box')[2];
			var estilo = document.createElement('span');
			var Texto = document.createTextNode('revisé correo');
			estilo.appendChild(Texto);
			box.appendChild(estilo);
			return true;
		}
	}
	validarEmail();	

	//el campo password debe tener al menos 6 caracteres 
	//password no debe ser igual a "password" o "123456" o "0987654"
	function validarClave(){
		var clave = document.getElementById('input-password').value;
		if(clave === null || clave.length === 0){
			var box = document.getElementsByClassName('input-box')[3];
			var estilo = document.createElement('span');
			var Texto = document.createTextNode('Ingrese password');
			estilo.appendChild(Texto);
			box.appendChild(estilo);
		}else if(clave.length<6){
			var box = document.getElementsByClassName('input-box')[3];
			var estilo = document.createElement('span');
			var Texto = document.createTextNode('password debe ser de 6 caracteres');
			estilo.appendChild(Texto);
			box.appendChild(estilo);
		}else if(clave === '123456' || clave === '098765' || clave === 'password'){
			var box = document.getElementsByClassName('input-box')[3];
			var estilo = document.createElement('span');
			var Texto = document.createTextNode('password invalida');
			estilo.appendChild(Texto);
			box.appendChild(estilo);
		}else{
			return true;
		}	
	}	
	validarClave();	

	//el valor seleccionado bicis debe ser una opcion presentada
	function seleccionBici(){
		var elige = document.getElementsByTagName('select')[0];
		for(var i = 0; i < elige.length; ++i){
			if(elige[i].value === "0"){
				var box = document.getElementsByClassName('input-box')[4];
				var estilo = document.createElement('span');
				var Texto = document.createTextNode('Seleciona tu bici!!!!');
				estilo.appendChild(Texto);
				box.appendChild(estilo);
				return false;
			}
		}
		return true;
	}
	seleccionBici();
}*/


