

  function signUp() {
      var email = document.getElementById("email")
      var password = document.getElementById("password")

      const promise = auth.createUserWithEmailAndPassword(email.value, password.value);

    return db.collection('users')
  }

  function signIn() {
    var email = document.getElementById("email")
    var password = document.getElementById("password")

    const promise = auth.signInWithEmailAndPassword(email.value, password.value).then(cred => {
        return db.collection('users').doc(cred.user.uid).set({
            hp: 100
        })
        
    })

    promise.catch(e => alert(e.message))

    alert("Signed in.")
}

function signOut() {
    auth.signOut().then(() => {
        alert("Signed out.")
    })

    

}

auth.onAuthStateChanged(user => {
    if (user) {
        console.log('user logged in')
        var uid = user.uid
    } else {
        console.log('user logged out')
        alert("You're not logged in! Please login to play.")
        window.location.replace("login.html");
    }
})