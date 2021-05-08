function updateWithItems() {
    console.log('updating...')
    db.doc('users/' + auth.currentUser.uid).get().then((snapshot) => {
        
        console.log(snapshot.data().weapslot)

        if (snapshot.data().weapslot !== null) {
            console.log("hello")
            db.doc('users/' + auth.currentUser.uid).update({
                damage: 4
            })
        } else if (snapshot.data().ringslot !== null) {
            db.doc('users/' + auth.currentUser.uid).update({
                damage: 11
            })
        } else {
            db.doc('users/' + auth.currentUser.uid).update({
                damage: 1
            })
        }
        if (snapshot.data().headslot !== null) {
            db.doc('users/' + auth.currentUser.uid).update({
                defense: 3
            })
        }
        if (snapshot.data().bodyslot !== null) {
            db.doc('users/' + auth.currentUser.uid).update({
                defense: 3
            })
        }
        if (snapshot.data().legslot !== null) {
            db.doc('users/' + auth.currentUser.uid).update({
                defense: 3
            })
        }
        if (snapshot.data().gloveslot !== null) {
            db.doc('users/' + auth.currentUser.uid).update({
                defense: 3
            })
        }
        if (snapshot.data().bootslot !== null) {
            db.doc('users/' + auth.currentUser.uid).update({
                defense: 3
            })
        }
        if ((snapshot.data().ringslot !== null) && (snapshot.data().weapslot !== null))  {
            db.doc('users/' + auth.currentUser.uid).update({
                damage: 14
            })
        }
    })
}

function profileUpdate(player, boolin) {
    
    updateWithItems()


    let username = document.getElementById('profile-username')
    let level = document.getElementById('profile-level')
    let money = document.getElementById('profile-money')
    let hp = document.getElementById('profile-hp')
    let damage = document.getElementById('profile-damage')
    let defense = document.getElementById('profile-defense')

    if (boolin) {
    db.doc('users/' + player).get().then((snapshot) => {
        username.innerHTML += snapshot.data().username
        level.innerHTML += snapshot.data().level
        money.innerHTML += snapshot.data().money
        hp.innerHTML += snapshot.data().hp
        damage.innerHTML += snapshot.data().damage
        defense.innerHTML += snapshot.data().defense
    })
}

}

function why(player) {
    
    let boolin = false
    
    profileUpdate(player, boolin)
    let lolbutton = document.getElementById('pUdButton')
    lolbutton.style.display="none"
    boolin = true
    profileUpdate(player, boolin)
}