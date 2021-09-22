$(document).ready(function(){

/*
CREA UN OGGETTO CHE DESCRIVA UNO STUDENTE , CON NOME COGNOME ED ETA' STAMPA A SCHERMO TUTTE LE PROPRIETA' 
TRAMITE CICLO FRO IN
*/

var studente = {
    'nome':'sebastiano',
    'cognome':'minotti',
    'eta\' ':39
}

for(var key in studente){

    document.getElementById('studente').innerHTML+='<li>'+(key+': '+studente[key])+'</li>'
    $('#studente').css('list-style','none')
}





//FINE PRIMA PARTE ESERCIZIO 


// CREA UN ARRAY DI OGGETTI STUDENTI CICLA SU TUTTI GLI STUDENTI E PER OGNUNO STAMPA LE PROPRETA NOME E COGNOME

var uno = 'm'
var due = 'f'
var tre = 'notGender'



var studenti = [

{
'nome':'mirko',
'cognome':'canepa',
'eta':40,
'sesso':  uno
},
{
'nome':'elisa',
'cognome':'vercesi',
'eta':32,
'sesso':  due
},
{
'nome':'achille',
'cognome':'lauro',
'eta':35,
'sesso':  tre
},
{
'nome':'matteo',
'cognome':'ferrarotto',
'eta':35,
'sesso':  uno
},
{
'nome':'elisabetta',
'cognome':'azzarito',
'eta':34,
'sesso':  due
},

]


for( var i = 0; i < studenti.length; i++){

    document.getElementById('studenti').innerHTML+='<li>'+studenti[i].nome + " : " + studenti[i].cognome + '</li>'

    console.log(studenti[i].nome + ':' + studenti[i].cognome)

    $('#studenti').css('list-style','none')


}



$('#bottone').one('click', function(){
    //customizzo il form per farlo sparire una volta che lo studente effettua la registrazione
  nuovoStudente = {
      'nome':'',
      'cognome':'',
      'eta': 0
  }

var nome = document.getElementById('nome').value
var cognome =document.getElementById('cognome').value
var eta = document.getElementById('eta').value


  nuovoStudente.nome = nome
  nuovoStudente.cognome = cognome
  nuovoStudente.eta = eta
 
console.log(nuovoStudente);

    $('#bottone').text('Registrato')
    $('.iscrizione > input, .iscrizione h5').hide()
    $('.iscrizione').css({'background-color':'white','border':'none','border-radius':'none','padding':'10px'})


    studenti.push(nuovoStudente)

    document.getElementById('studenti').innerHTML+='<li>'+studenti[i].nome + " : " + studenti[i].cognome + '</li>'


    for(var key in nuovoStudente){

        document.getElementById('Nstudente').innerHTML+='<li>'+(key+': '+nuovoStudente[key])+'</li>'
        $('#Nstudente').css('list-style','none')
    }

     if((nome=='')&&(cognome=='')&&(eta==0)){

    alert('non puoi laciare campi vuoti')
    location.reload()
     }
     else if(nome==''){

       alert('inserisci nome')
       location.reload()
     } 
     else if(cognome==''){

    alert('inserisci cognome')
    location.reload()
     } 
     else if(eta==0){

       alert('inserisci eta')
       location.reload()
     } 
    
      else if( (!isNaN(nome))||(!isNaN(cognome))){

    alert('nel campo nome e cognome iserire lettere e non valori numerici')
    location.reload()
   }




   setTimeout(() => {
    alert('congratulazioni ti sei registrato con successo , vuoi effettuare una nuova registrazione ?')
    var risposta = prompt('')
    if(risposta=='si'){
      location.reload()
    }else {
      window.close()
    }
   
}, 4000);
    
})






    
})