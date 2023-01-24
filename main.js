var input=document.getElementById("search").value
var button=document.getElementById("btn").value
var output=document.getElementById("meaning")
var output2=document.getElementById("syn")
var output1=document.querySelector('.input')
var output3=document.getElementById("syn1")


function fetchh(){
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+output1.value).then(
    function (params) {
        params.json().then(function(actualData){
            //console.log(actualData.meanings)
           
            console.log(actualData)
            create(actualData)
        }).catch(function(err){
            console.log(err)
        })
        
    }
).catch(function(err){
    console.log('error')
    output2.innerHTML='something went wrong'
})
}
function create(main){
    
    output.innerHTML="meaning :-"+main[0].meanings[0].definitions[0].definition
    output2.innerHTML="synonym :-"+main[0].meanings[0].definitions[0].synonyms
    let audio=new Audio(main[0].phonetics[1].audio)
    audio.play()

}

    

    

