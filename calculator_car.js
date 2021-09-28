
document.getElementById('brend').onchange = function() {
    const value = document.getElementById('brend').value
    
    const brends = ['Audi','BMW','Ford','Honda','Lada (ВАЗ)']
    /*const year = ['1970','1990','2005','2010','2020','2022']
    const equipment = ['Базовая','Средняя','Максимум','Акционная']
    const mileage = ['меньше 20 тыс. км','20-30 тыс. км','30-50 тыс. км','50-100 тыс. км','больше 100 тыс. км']*/
    
    let values=[]
    document.getElementById("container").innerHTML=''

    if(value==0){
        return
    }
    else if(value==1){
        values = [...brends];
    }
    /*else if(value==2){
        values = [...year]
    }
    else if(value==3){
        values = [...equipment]
    }
    else if(value==4){
        values = [...mileage]
    }
    */
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