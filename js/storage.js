function loading() {
    console.log("loading...")
}




function generateItems() {db.doc('users/' + auth.currentUser.uid).get().then((snapshot) => {
    
    console.log(snapshot.id)

    let myweap = snapshot.data().weapslot
    let myring = snapshot.data().ringslot
    let myboots = snapshot.data().bootslot
    let mybody = snapshot.data().bodyslot
    let myhelmet = snapshot.data().headslot
    let mylegs = snapshot.data().legslot
    let mygloves = snapshot.data().gloveslot

    reEquip(myweap)
    reEquip(myring)
    reEquip(myboots)
    reEquip(mybody)
    reEquip(myhelmet)
    reEquip(mylegs)
    reEquip(mygloves)



    })
}


function showStorage() {db.collection('users/' + auth.currentUser.uid + '/inventory').get().then((snapshot) => {
    
    let i = 0;
    
    let ssbutton = document.getElementById("ssbutton")

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
        let equip = document.createElement('button')
        

        equip.className = "equipButton"
        equip.innerHTML = "Equip"
        equip.id = "equipbutton" + i
       
        console.log(equip.id)
        

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
        
        
        li.appendChild(equip)



        li.appendChild(desc)
        document.getElementById('itemlist').appendChild(li)

        i++;
        
    })

    
    for (let j = 0; j < i; j++) {

        console.log(i)
    
        let thisbutton = document.getElementById("equipbutton" + j)
        
                thisbutton.addEventListener('click', (e) =>{
                    equipItem(thisbutton.parentNode.id)
                })
        
            }

})
}


function reEquip(item) {
    db.doc('equipment/' + item).get().then((snapshot) => {
            
        db.collection('users/' + auth.currentUser.uid + '/inventory/').add({
            name: snapshot.data().name,
            damage: snapshot.data().damage,
            defense: snapshot.data().defense,
            slot: snapshot.data().slot
        })

        
        db.collection('users/' + auth.currentUser.uid + '/inventory/').where('name', '==', snapshot.data().name).get().then((snapshot) => {
            snapshot.docs.forEach (doc =>{
                console.log(doc.id)
                equipItem(doc.id)
            })
        })

        })
}


function equipItem(item) {
    console.log("equipped")
    

    
    db.doc('users/' + auth.currentUser.uid + '/inventory/' + item).get().then((snapshot) => {

            console.log('you made it to right before ei2 call')
            equipItem2(snapshot);
  

            db.doc('users/' + auth.currentUser.uid + '/inventory/' + snapshot.id).delete()
            
                


    })
    

    

}

function equipItem2(item) {
    
    console.log(item.data().slot)
    
    if (item.data().slot == "weapslot") {
        console.log(item.id)
        
        db.collection('equipment').where('name', '==', item.data().name).get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                let mainId = doc.id

                db.doc('users/' + auth.currentUser.uid).update({
                    weapslot: mainId
                })
            })
        })


        let thisslot = document.getElementById('weapslot')

        thisslot.innerHTML=''

        let slotlogo = document.createElement('img')
        slotlogo.id = 'weapslotlogo'
        slotlogo.src = 'assets/' + item.data().name + '.png'

        thisslot.appendChild(slotlogo)

        let weaplogo = document.getElementById('weapslotlogo')

        weaplogo.addEventListener('click', (e) => {
            unequipItem("weapslot", item.data().name)
        })

    }
    if (item.data().slot == "headslot") {
        console.log(item.id)
        
        db.collection('equipment').where('name', '==', item.data().name).get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                let mainId = doc.id

                db.doc('users/' + auth.currentUser.uid).update({
                    headslot: mainId
                })
            })
        })


        let thisslot = document.getElementById('headslot')

        thisslot.innerHTML=''

        let slotlogo = document.createElement('img')
        slotlogo.id = 'headslotlogo'
        slotlogo.src = 'assets/' + item.data().name + '.png'

        thisslot.appendChild(slotlogo)

        let headlogo = document.getElementById('headslotlogo')

        headlogo.addEventListener('click', (e) => {
            unequipItem("headslot", item.data().name)
        })

    }
    if (item.data().slot == "bodyslot") {
        console.log(item.id)
        
        db.collection('equipment').where('name', '==', item.data().name).get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                let mainId = doc.id

                db.doc('users/' + auth.currentUser.uid).update({
                    body: mainId
                })
            })
        })


        let thisslot = document.getElementById('bodyslot')

        thisslot.innerHTML=''

        let slotlogo = document.createElement('img')
        slotlogo.id = 'bodyslotlogo'
        slotlogo.src = 'assets/' + item.data().name + '.png'

        thisslot.appendChild(slotlogo)

        let bodylogo = document.getElementById('bodyslotlogo')

        bodylogo.addEventListener('click', (e) => {
            unequipItem("bodyslot", item.data().name)
        })

    }
    if (item.data().slot == "ringslot") {
        console.log(item.id)
        
        db.collection('equipment').where('name', '==', item.data().name).get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                console.log('here I am')
                
                let mainId = doc.id

                db.doc('users/' + auth.currentUser.uid).update({
                    ringslot: mainId
                })
            })
        })


        let thisslot = document.getElementById('ringslot')

        thisslot.innerHTML=''

        let slotlogo = document.createElement('img')
        slotlogo.id = 'ringslotlogo'
        slotlogo.src = 'assets/' + item.data().name + '.png'

        thisslot.appendChild(slotlogo)

        let ringlogo = document.getElementById('ringslotlogo')

        ringlogo.addEventListener('click', (e) => {
            unequipItem("ringslot", item.data().name)
        })

    }
    if (item.data().slot == "gloveslot") {
        console.log(item.id)
        
        db.collection('equipment').where('name', '==', item.data().name).get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                let mainId = doc.id

                db.doc('users/' + auth.currentUser.uid).update({
                    gloveslot: mainId
                })
            })
        })


        let thisslot = document.getElementById('gloveslot')

        thisslot.innerHTML=''

        let slotlogo = document.createElement('img')
        slotlogo.id = 'gloveslotlogo'
        slotlogo.src = 'assets/' + item.data().name + '.png'

        thisslot.appendChild(slotlogo)

        let glovelogo = document.getElementById('gloveslotlogo')

        glovelogo.addEventListener('click', (e) => {
            unequipItem("gloveslot", item.data().name)
        })

    }
    if (item.data().slot == "legslot") {
        console.log(item.id)
        
        db.collection('equipment').where('name', '==', item.data().name).get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                let mainId = doc.id

                db.doc('users/' + auth.currentUser.uid).update({
                    legslot: mainId
                })
            })
        })


        let thisslot = document.getElementById('legslot')

        thisslot.innerHTML=''

        let slotlogo = document.createElement('img')
        slotlogo.id = 'legslotlogo'
        slotlogo.src = 'assets/' + item.data().name + '.png'

        thisslot.appendChild(slotlogo)

        let leglogo = document.getElementById('legslotlogo')

        leglogo.addEventListener('click', (e) => {
            unequipItem("legslot", item.data().name)
        })

    }
    if (item.data().slot == "bootslot") {
        console.log(item.id)
        
        db.collection('equipment').where('name', '==', item.data().name).get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                let mainId = doc.id

                db.doc('users/' + auth.currentUser.uid).update({
                    bootslot: mainId
                })
            })
        })


        let thisslot = document.getElementById('bootslot')

        thisslot.innerHTML=''

        let slotlogo = document.createElement('img')
        slotlogo.id = 'bootslotlogo'
        slotlogo.src = 'assets/' + item.data().name + '.png'

        thisslot.appendChild(slotlogo)

        let bootlogo = document.getElementById('bootslotlogo')

        bootlogo.addEventListener('click', (e) => {
            unequipItem("bootslot", item.data().name)
        })

    }


}

function unequipItem(slot, item) {
    console.log("unequipped")
    document.getElementById(slot + 'logo').remove()
    document.getElementById(slot).innerHTML = slot
    db.doc('users/' + auth.currentUser.uid).update({
        [slot]: null
    })

    db.collection('equipment').where('name', '==', item).get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            db.collection('users/' + auth.currentUser.uid + '/inventory/').add({
                name: doc.data().name,
                damage: doc.data().damage,
                defense: doc.data().defense,
                slot: doc.data().slot
            })

        })
    })
}