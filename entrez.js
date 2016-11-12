console.log('entrez.js loaded')

// JS client for Entrez utils
// 

entrez={
    url:'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/'
}

entrez.esearch=function(db,term,cb){
    db = db || 'pubmed'
    term = term || 'science[journal]+AND+breast+cancer+AND+2008[pdat]'
    console.log('querying "'+db+'" for "'+term+'"')
    cb = cb || function(x){console.log(x)}
    var url = entrez.url+'esearch.fcgi?db='+db+'&term='+term+'&format=json'
    return $.getJSON(url,cb)
}

entrez.esearch_Pubmed=function(term,cb){
    return entrez.esearch('pubmed',term,cb)
}

entrez.esearch_ClinVar=function(term,cb){
    // https://www.ncbi.nlm.nih.gov/clinvar/docs/maintenance_use/
    var term = term || 'FGFR3[gene]&retmax=500'
    return entrez.esearch('clinvar',term,cb)
}

