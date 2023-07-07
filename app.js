document.getElementById('formulario').addEventListener('submit', (event)=> {
    event.preventDefault();
    let entradaNombre = document.getElementById('name');
    let errorNombre = document.getElementById('nameError');

    if(entradaNombre.value.trim() === ''){
        errorNombre.textContent = 'Please, enter one name !';
        errorNombre.classList.add('error-message');
    } else {
        errorNombre.textContent = '';
        errorNombre.classList.remove('error-message');
    };

    let emailEntrada = document.getElementById('email');
    let emailError = document.getElementById('emailError');
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(emailEntrada.value)){
        emailError.textContent = 'Please, enter a valid email !';
        emailError.classList.add('error-message');
    } else {
        emailError.textContent = '';
        emailError.classList.remove('error-message');
    };

    let contrasenaEntrada = document.getElementById('password');
    let contrasenaError = document.getElementById('passwordError');

    if(contrasenaEntrada.value.length < 8){
        contrasenaError.textContent = 'Password must be at least 8 characters !';
        contrasenaError.classList.add('error-message');
    } else {
        contrasenaError.textContent = '';
        contrasenaError.classList.remove('error-message');
    };

    if(!errorNombre.textContent && !emailError.textContent && !contrasenaError.textContent){
        alert('The form has been sent successfully ! 🚀');
        document.getElementById('formulario').reset();
    };

});