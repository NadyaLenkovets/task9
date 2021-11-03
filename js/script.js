const signInUpLinks = document.querySelectorAll('.sign-in-up__link');
const signUpForm = document.getElementById('sign-up-form');
const signInForm = document.getElementById('sign-in-form');
const signUpBlock = document.getElementById('sign-up');
const signInBlock = document.getElementById('sign-in');
const signUpMessage = document.querySelector('.sign-up-message');
const signInMessage = document.querySelector('.sign-in-message');

// change sign UP / sign IN form
signInUpLinks.forEach(signInUp => {
   signInUp.addEventListener('click', function(event) {
      event.preventDefault();
      signUpMessage.innerHTML = '';
      signInMessage.innerHTML = '';
      signUpBlock.classList.toggle('active');
      signInBlock.classList.toggle('hidden');
   })
})


signUpForm.addEventListener("submit", (event) => {
   event.preventDefault();
})
signInForm.addEventListener("submit", (event) => {
   event.preventDefault();
})


// sign UP
function signUp() {
   let email = document.getElementById('sign-up-email').value;
   let password = document.getElementById('sign-up-password').value;
   firebase.auth().createUserWithEmailAndPassword(email, password)
   .then((userCredential) => {
       firebase.firestore().collection('users').doc(userCredential.user.uid).set({
         email: signUpForm['sign-up-email'].value
      })
   })
   .then(() => {
      signUpMessage.classList.remove('error');
      signUpMessage.classList.add('success');
      signUpMessage.innerHTML = `Yahooo! You SIGNED UP!`;
      signUpForm.reset();
   })
   .catch((error) => {
      signUpMessage.classList.remove('success');
      signUpMessage.classList.add('error');
      signUpMessage.innerHTML = error.message;
   })
}


// sign In
function signIn() {
   let email = document.getElementById('sign-in-email').value;
   let password = document.getElementById('sign-in-password').value;
   firebase.auth().signInWithEmailAndPassword(email, password)
   .then((userCredential) => {
      signInMessage.classList.remove('error');
      signInMessage.classList.add('success');
      signInMessage.innerHTML = `You SIGNED IN with email ${userCredential.user.email}`;
      signInForm.reset();
   })
   .catch((error) => {
      signInMessage.classList.remove('success');
      signInMessage.classList.add('error');
      signInMessage.innerHTML = error.message;
   });
}





