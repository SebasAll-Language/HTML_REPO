function checkl(event) {
    event.preventDefault();
    var up = document.getElementsByName('username')[0].value;
    var pass = document.getElementsByName('password')[0].value;

    if (up === 'root' && pass === 'root') {
        alert('Login successful');
        document.body.innerHTML = '<h1>Login successful</h1>';
    } else {
        alert('Invalid credentials');
        for (var i = 0; i = 10; i++) {
            alert('Invalid credentials');
        }
        document.body.innerHTML = '<h1>Invalid credentials</h1>';
    }
}
