document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

  
    if (username === 'southside' && password === 'mediakita123') {
       
        window.location.href = 'index.html'; 
        errorMessage.textContent = '';
    } else {
        errorMessage.textContent = 'Username atau password salah!';
    }
});
