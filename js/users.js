window.addEventListener('load', showUsers);

function showUsers() {
      firebase.firestore().collection("users").get()
      .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
            let registeredUser = document.createElement('p');
            registeredUser.classList.add('users-content__item')
            registeredUser.innerHTML = doc.data().email;  
            document.querySelector('.users-content').appendChild(registeredUser);
      });
   });
};