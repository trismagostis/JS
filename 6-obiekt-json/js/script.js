let jsonPracownicy={
    "pracownicy":[
        {"firstName": "Krystian", "lastName": "Dziopa"}, 
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
}
// console.log(jsonPracownicy);
// let index =1;
// for(let element of jsonPracownicy.pracownicy) {
//     console.log(`${index} ${element.firstName} ${element.lastName}`);
//     index++;   
// } 
jsonPracownicy.pracownicy.forEach((element,index)=>console.log(`${index+1} ${element.firstName} ${element.lastName}`))

  
