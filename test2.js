
document.getElementById('equipment').onchange = function() {
    const value = document.getElementById('equipment').value
    
    const equipments = ['Базовая','Средняя','Максимум','Акционная']
    
    let values=[]
    document.getElementById("container").innerHTML=''

    if(value==0){
        return
    }
    
    else if(value==3){
        values = [...equipments]
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