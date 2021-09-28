
document.getElementById('mileage').onchange = function() {
    const value = document.getElementById('mileage').value
    
    const mileages = ['меньше 20 тыс. км','20-30 тыс. км','30-50 тыс. км','50-100 тыс. км','больше 100 тыс. км']
    
    let values=[]
    document.getElementById("container").innerHTML=''

    if(value==0){
        return
    }    
    else if(value==4){
        values = [...mileages]
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