const dictionary=(word)=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'eb21bd951dmshaed0488412b34a8p117709jsnf792d21be51a',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com',
        }
};
fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word='+word,options)
.then(response=>response.json())
.then((response)=>{
    console.log(response);
    wordheading.innerHTML="Meaning Of: "+response.word;
    definition.innerHTML=response.definition.replace("2.","<br> 2.").replace("3.","<br>3.").replace("4.","<br>4.");
})
.catch(err=>console.error(err));
}

searchbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    dictionary(searchinput.value)
})