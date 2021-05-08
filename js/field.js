function fieldSearch() {
    
    rewardMessage = document.getElementById('rewardMessage')

    rewardMessage.innerHTML = ''

    let roll = Math.random()

    console.log(roll)

    if (roll < 0.1) {
        let money = Math.floor(Math.random() * 10) + 1;
        rewardMessage.style.color = 'yellow'
        rewardMessage.innerHTML = 'You found $' + money +"!"
        db.doc('users/' + auth.currentUser.uid).update({
            money: firebase.firestore.FieldValue.increment(+[money])
        })
    } else if (roll > 0.95){

        alert('You encountered a slime! Click to fight!')

        rewardMessage.style.color='green'

        rewardMessage.innerHTML='A slime wants to fight!'

        let slimePic = document.createElement('img')
        slimePic.id = 'slimePic'

        slimePic.src='assets/slime.png'

        slimePic.display='block'
        slimePic.margin='auto'

        let fightButton = document.createElement('button')
        fightButton.id ='fightButton'
        fightButton.innerHTML='Fight!'
        fightButton.onclick=window.location.replace('battle.html')

        let br = document.createElement('br')

        

        rewardMessage.appendChild(br)
        rewardMessage.appendChild(br)
        rewardMessage.appendChild(br)
        rewardMessage.appendChild(slimePic)
        rewardMessage.appendChild(br)
        document.getElementById('display').appendChild(fightButton)

    }
}