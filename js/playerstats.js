function updateWithItems() {
    db.doc('users/' + auth.currentUser.uid).get().then((snapshot) => {
        if (snapshot.data().weapslot != null) {
            snapshot.update({
                damage: 4
            })
        } else if (snapshot.data().ringslot != null) {
            snapshot.update({
                damage: 11
            })
        } 

        if ((snapshot.data().weapslot == null) && (snapshot.data().ringslot == null)) {
            snapshot.update({
                damage: 1
            })
        }

        if (snapshot.data().headslot != null) {
            return
        }
        if (snapshot.data().bodyslot != null) {
            return
        }
        if (snapshot.data().legslot != null) {
            return
        }
        if (snapshot.data().gloveslot != null) {
            return
        }
        if (snapshot.data().bootslot != null) {
            return
        }
        if ((snapshot.data().ringslot != null) && (snapshot.data().weapslot != null))  {
            snapshot.update({
                damage: 14
            })
        }
    })
}

updateWithItems()