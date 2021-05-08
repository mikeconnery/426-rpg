function showShop() {db.collection('equipment/').where('defense', '>', 0).get().then((snapshot) => {
    
    let i = 0
    
    let list = document.getElementById('itemlist')
    
    list.innerHTML = ''
    
    snapshot.docs.forEach(doc => {

    
    
    let li = document.createElement('li');
        li.className = "storageItem"
        li.id = doc.id

        
        
        let desc = document.createElement('div');

        desc.className = "storageDesc"
        
        let name = document.createElement('p');
        let stats = document.createElement('p');
        let image = document.createElement('img')
        let buy = document.createElement('button')
        

        buy.className = "equipButton"
        buy.innerHTML = "Buy"
        buy.addEventListener('click', (e) =>{
            buyItem(buy.parentNode.id)
        })

        let price = document.createElement('div')
       
        price.innerHTML = '$' + doc.data().price

        image.src = "assets/" + doc.data().name + ".png"

        image.className = "storageImage"
        stats.className = "storageStats"
        name.className = "storageName"

        name.textContent = doc.data().name
        
        if (doc.data().damage > 0) {
            stats.textContent = "+" + doc.data().damage + " damage"
        } else if (doc.data().defense > 0) {
            stats.textContent = "+" + doc.data().defense + " defense"
        }
        
        
        
        desc.appendChild(name)
        desc.appendChild(document.createElement('br'))
        desc.appendChild(document.createElement('br'))
        desc.appendChild(stats)
        li.appendChild(image)
        
        buy.appendChild(price)

        li.appendChild(buy)
        



        li.appendChild(desc)
        document.getElementById('itemlist').appendChild(li)

        i++;

    })
})

}

function buyItem(id) {
    db.doc('equipment/' + id).get().then((snapshot) => {

        let itemDamage = snapshot.data().damage
        let itemDefense = snapshot.data().defense
        let itemSlot = snapshot.data().slot
        let itemName = snapshot.data().name

        
        
        let itemPrice = snapshot.data().price
        
        db.doc('/users/' + auth.currentUser.uid).get().then((snapshot) => {
            myMoney = snapshot.data().money

            if ( myMoney < itemPrice) {
                alert("You don't have enough money!")
                return
            } else {
                db.doc('users/' + auth.currentUser.uid).update({
                    money: firebase.firestore.FieldValue.increment(-[itemPrice])
                })
            }


        })
          
            

            db.collection('users/' + auth.currentUser.uid + '/inventory/').add({
                damage: itemDamage,
                defense: itemDefense,
                name: itemName,
                slot: itemSlot
            })

        })
    }


