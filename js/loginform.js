


  function signUp() {
    
    window.location.replace("signup.html");
    
  }


  function signUp2() {
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    var username = document.getElementById("username")
    var ssw = document.getElementById("startersword")
    var sst = document.getElementById("starterstaff")
    var sb = document.getElementById("starterbow")
    var weapchoice = null

    if (ssw.checked) {
        weapchoice = "startersword"
    }
    if (sst.checked) {
        weapchoice = "starterstaff"
    }
    if (sb.checked) {
        weapchoice = "starterbow"
    }

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value).then(cred => {
      return db.collection('users').doc(cred.user.uid).set({
        username: username.value,
        password: password.value,
        email:email.value,  
        hp: 100,
        money: 100,
        damage: 1,
        defense: 0,
        level: 1,
        headslot: null,
        bodyslot: null,
        legslot: null,
        gloveslot: null,
        bootslot: null,
        ringslot: null,
        weapslot: null,
        dailydone: false
      }).then( cred => {
        
        
        db.collection('users/' + auth.currentUser.uid + '/inventory').add({
           damage: 3,
            slot: "weapslot",
            name: weapchoice,
            defense: 0
        })

        alert("Success.")
        
        window.location.replace("index.html");
      })
      
  })

    promise.catch(e => {
        alert(e.message)
        window.location.replace("signup.html")
    })


}



  function signIn() {
    var email = document.getElementById("email")
    var password = document.getElementById("password")

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);

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
    } else {
        console.log('user logged out')
    }
})