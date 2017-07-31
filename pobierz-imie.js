alert();

function pobierzImie(event)
{
    event.preventDefault();
    var imie=document.getElementsByTagName("input")[1].value;
    var nazwisko=document.getElementsByTagName("input")[2].value;
    
    document.getElementById("name").innerHTML="Twoje imie to: "+imie+", twoje nazwisko to: "+nazwisko;
    
    var test = document.getElementById("name").children;
    console.log(test);
    test[1].value=imie;
}



