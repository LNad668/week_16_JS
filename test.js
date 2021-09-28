
document.getElementById('year').onchange = function() {
    const value = document.getElementById('year').value
    
    const years = ['1970','1990','2005','2010','2020','2022']
    
    let values=[]
    document.getElementById("container").innerHTML=''

    if(value==0){
        return
    }
    
    else if(value==2){
        values = [...years]
    }
    
    
    let select = document.createElement("select");
    select.name = "pets";
    select.id = "pets"

    for (const val of values)
    {
        let option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        select.appendChild(option);
    }

    document.getElementById("container").appendChild(select);
}