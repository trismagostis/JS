let tab=[1, 2, 3, 4, 5, 6];

const oblicz = tab1 =>{
    let suma=0;
    tab1.forEach(element => {suma+=element});
    console.log(suma);
    let iloczyn=1;
    tab1.forEach(element => {iloczyn*=element});
    console.log(iloczyn)};

oblicz(tab);
/* let tab=[1, 2, 3, 4, 5, 6];
let suma=0;
tab.forEach(element => {suma=suma+element});
console.log(suma); */
