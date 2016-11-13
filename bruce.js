console.log('bruce.js loaded')

// style
document.body.style.backgroundColor='black'

bruce={
    entrez:{}
}

// entrez to clinVar
bruce.entrez.esearch=function(){
  // documentation at https://www.ncbi.nlm.nih.gov/books/NBK25500/?report=reader
  var url0='https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?'
  //db=<database>&term=<query>
}

/* more usecases

Look for concept node "increased mortality induced by gama radiation"
== increase likelook of tumor kill

*/


// Load CellCycleRegulatoryNetwork.json
loadGraph = function(cb){
  if(cb){
    return $.getJSON('CellCycleRegulatoryNetwork.json',cb)
  }else{
    return $.getJSON('CellCycleRegulatoryNetwork.json')
  }
}
loadGraph().then(function(g){
  var net ={}
  
  4
})