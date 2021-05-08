function printCovid() {

fetch("https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats").then(
    response => response.json()
).then(responseData => {
    
    let words = document.createElement('p')
    
    words.innerHTML+= 'Total Cases: ' + responseData.data.total_cases + '<br>' + 'Total Current Cases: ' + responseData.data.currently_infected + '<br>' + 'Recovered: ' + responseData.data.recovery_cases
   
    let goal = document.getElementById('apidiv')

    goal.appendChild(words)
    

   
})


    
}

function pokedex() {
    
    let button = document.getElementById('pokebutton')
    let field = document.getElementById('pokemon')

    fetch('https://pokeapi.co/api/v2/pokemon/' + field.value).then(
        response => response.json()).then(responseData => {
            
            console.log(responseData)

            let words = document.createElement('p')

            words.innerHTML += 'Type: ' + responseData.types[0].type.name + '<br>' + 'Speed: '+ responseData.stats[5].base_stat +'<br>'+ 'Attack: ' + responseData.stats[1].base_stat +'<br>'+ 'Defense: ' + responseData.stats[2].base_stat
 
            let dex = document.getElementById('pokedex')

            dex.appendChild(words)
        })

}


/*
let covidlist = document.createElement('ul')
covidlist.id = 'covidlist'
let total = document.createElement('li')
total.innerHTML= 'Total Cases:' + responseData.total_cases
let current = document.createElement('li')
current.innerHTML = 'Current Cases:' + responseData.currently_infected
let recovered = document.createElement('li')
recovered.innerHTML = 'Recovered:' + responseData.recovery_cases

covidlist.appendChild(total)
covidlist.appendChild(current)
covidlist.appendChild(recovered)

let para = document.getElementById('apip')

para.appendChild(covidlist)
*/