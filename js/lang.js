function loadLanguage(ele){
var langSelect = ele.value;
var fName;
console.log(ele);
var currentFile = location.href.split("/").slice(-1)[0]; 
fName = currentFile;
if (currentFile==''){
    fName='index.html'
}
console.log(fName);
currLang = langSelect;
var isIgbo = location.pathname.includes('/ig/');
if (isIgbo==true && langSelect=='English'){
   // console.log('is Igbo and need to change to English');
    window.location.href ='../'+fName;

}

if (isIgbo==false && langSelect=='Igbo'){
   // console.log('is English and need to change to Igbo');
    var igName = 'ig/'+fName;
    window.location.href =igName;

}

}


//get location and check if we are in igbo or english page
//if we are in igbo and langChange is En, then load the en page of the current file
// do vice versa 