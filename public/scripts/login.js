document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    // Check if user is logged in
    console.log('Checking login status...');
    if (sessionStorage.getItem('loggedIn')) {
        console.log('User is logged in.');
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'block';
    } else {
        console.log('User is not logged in.');
        loginBtn.style.display = 'block';
        logoutBtn.style.display = 'none';
    }

    // Log In button click event on the main page
    loginBtn.addEventListener('click', () => {
        console.log('Login button clicked.');
        window.location.href = '/signin'; // Redirect to login page
    });

    // Log Out button click event
    logoutBtn.addEventListener('click', () => {
        console.log('Logout button clicked.');
        sessionStorage.removeItem('loggedIn'); // Clear login status
        loginBtn.style.display = 'block';
        logoutBtn.style.display = 'none';
    });

    // Handle login form submission on the login page
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent form submission

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Perform login logic here (e.g., verify credentials)

            // On successful login:
            sessionStorage.setItem('loggedIn', true);
            console.log('User logged in.');
            window.location.href = '/'; // Redirect to main page
        });
    }
});
