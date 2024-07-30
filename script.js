document.addEventListener('DOMContentLoaded', function() {
    var loginModal = document.getElementById('loginModal');
    var authModal = document.getElementById('authModal');
    var openLoginModal = document.getElementById('openLoginModal');
    var openSignupModal = document.getElementById('openSignupModal');
    var openSignupModal = document.getElementById('menuIcon');

    var closeModal = document.querySelector('.close');
    var closeAuthModal = document.querySelector('.close-auth');
    var loginButton = document.getElementById('loginButton');
    var signupButton = document.getElementById('signupButton');
    var authTitle = document.getElementById('authTitle');

    // Show main modal
    openLoginModal.onclick = function() {
        loginModal.style.display = 'block';
    };

    openSignupModal.onclick = function() {
        loginModal.style.display = 'block';
    };
    menuIcon.onclick = function() {
        loginModal.style.display = 'block';
    };
    // Show auth modal for Login
    loginButton.onclick = function() {
        authTitle.innerHTML = '<strong>Login</strong>';
        authModal.style.display = 'block';
        loginModal.style.display = 'none';
    };

    // Show auth modal for SignUp
    signupButton.onclick = function() {
        authTitle.innerHTML = '<strong>SignUp</strong>';
        authModal.style.display = 'block';
        loginModal.style.display = 'none';
    };

    // Close modals
    closeModal.onclick = function() {
        loginModal.style.display = 'none';
    };

    closeAuthModal.onclick = function() {
        authModal.style.display = 'none';
    };

    // Close modals when clicking outside of the modal
    window.onclick = function(event) {
        if (event.target == loginModal) {
            loginModal.style.display = 'none';
        }
        if (event.target == authModal) {
            authModal.style.display = 'none';
        }
    };
});
