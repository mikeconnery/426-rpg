function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  $('#button1').hide()
  $('#button3').hide()

jQuery(function() {
    $('.searchbutton').on("click", function() {
        let bshift = getRandomInt(11)

        if (bshift == 10) {
            let bchoice = getRandomInt(3)
            if (bchoice == 0) {
                console.log("shift to 1")
                $('#button1').hide()
                $('#button2').hide()
                $('#button3').hide()
                $('#button1').show()
            }
            if (bchoice == 1) {
                console.log("shift to 2")
                $('#button1').hide()
                $('#button2').hide()
                $('#button3').hide()
                $('#button2').show()
            }
            if (bchoice == 2) {
                console.log("shift to 3")
                $('#button1').hide()
                $('#button2').hide()
                $('#button3').hide()
                $('#button3').show()
            }
        }
    });
});

