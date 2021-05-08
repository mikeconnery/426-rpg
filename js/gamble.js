function gamble() {
    
    amount = document.getElementById('gambleAmount').value
    
    db.doc('users/' + auth.currentUser.uid).get().then((snapshot) => {
        
        let myMoney = snapshot.data().money
        
        if (amount > snapshot.data().money) {
            alert("That's more money than you have!")
        } else {
            let roll = Math.random()
            console.log(roll)
            if (roll > 0.5) {
                document.getElementById('dailychest').src="assets/gamblersad.png"
                document.getElementById('dailymessage').innerHTML="Aargh... You won, your money has been added to your account. Wanna go again?"
                db.doc('users/' + auth.currentUser.uid).update({
                    money: firebase.firestore.FieldValue.increment(+[amount])
                })
            } else {
                document.getElementById('dailychest').src="assets/gamblerhappy.png"
                document.getElementById('dailymessage').innerHTML="You lose, pay day for me! Wanna go again?"
                db.doc('users/' + auth.currentUser.uid).update({
                    money: firebase.firestore.FieldValue.increment(-[amount])
                })
            }
        }


    })
   
}