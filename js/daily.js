function openChest() {
    
    db.doc('users/' + auth.currentUser.uid).get().then((snapshot) => {

        if (snapshot.data().dailydone) {
            let chest = document.getElementById('dailychest')
            chest.src="assets/chestflipped.png"
            let message = document.getElementById('dailymessage')
            message.innerHTML = 'Hey! I saw that! Only once a day!'
            let button = document.getElementById('dailybutton')
            button.disabled = true;
            return
        }
    
        
        let chest = document.getElementById('dailychest')
        chest.src="assets/chestopen.png"
    
        let message = document.getElementById('dailymessage')
        message.innerHTML = 'You got (1x) damagering, it has been added to your inventory. Come back tomorrow!'
    
        let button = document.getElementById('dailybutton')
        button.disabled = true;

        db.collection('users/' + auth.currentUser.uid + '/inventory/').add({
            name: "damagering",
            damage: 10,
            defense: 0,
            slot: "ringslot"
        })

        db.doc('users/' + auth.currentUser.uid).update({
            dailydone: true
        })

    })
    
    

}