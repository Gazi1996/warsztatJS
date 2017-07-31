alert();

var przycisk=document.getElementById("button");
przycisk.addEventListener("click", ustawTlo);

function ustawTlo()
{
    console.log("działa");
    document.getElementsByTagName('p')[0].style.backgroundColor="red";
    
    document.getElementsByTagName('p')[1].style.backgroundColor="yellow";  
}

