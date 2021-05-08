
    var slimeHealth = 20
    var yourHealth = 100



function battleTurn() {



    let slimeHit = Math.floor(Math.random() * 20) + 1;

    let battlebox = document.getElementById('battlemessage')
    battlebox.innerHTML = ''

    
    db.doc('users/' + auth.currentUser.uid).get().then((snapshot) => {
        yourHit = snapshot.data().damage
        
        if (yourHealth <= 0) {
            alert('You lose! Rest up and try again!')
            document.getElementById('attackbutton').onclick=window.location.replace('field.html')
            return
        }
    
        if (slimeHealth <= 0) {
            let reward = (Math.floor(Math.random() * 100) + 1)
            db.doc('users/' + auth.currentUser.uid).update({
                money: firebase.firestore.FieldValue.increment(+[reward])
            })
            alert('You win! The slime dropped $' + reward + '!')
            document.getElementById('attackbutton').onclick=window.location.replace('field.html')
        }
        
        battlebox.innerHTML= 'You dealt ' + yourHit + ' damage to the Slime! <br><br> The Slime hit you for ' + slimeHit + ' damage!'

    })
    
    
    slimeHealth-= yourHit
    yourHealth-= slimeHit

    document.getElementById('playerhealth').innerHTML = 'Your HP: ' + yourHealth + '/100'
    document.getElementById('slimehealth').innerHTML = "Opponent's HP: " + slimeHealth + '/20'

    
}