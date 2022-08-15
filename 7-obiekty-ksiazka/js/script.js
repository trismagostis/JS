class Book {
    constructor(title,autor,red) {
        this.title=title;
        this.autor=autor;
        this.red=red;
    }
    describeBook() {
        if(this.red==true){
        console.log(`ksiązka ma tytuł ${this.title} autorem jest ${this.autor} i została przeczytana}`)
    }
    else {
        console.log(`ksiązka ma tytuł ${this.title} autorem jest ${this.autor} i nie została przeczytana}`) 
    }
}
}
let ksiazka1=new Book("Wiedzmak","Andrzej Sapkowki",true);
let ksiazka2=new Book("Mistrz i Małgorzata","Michail Bulhakow",true);
let ksiazka3=new Book("Nauki Don Juana","Carlos Castaneda",false);

// ksiazka3.describeBook();
let ksiazki=new Array(ksiazka1,ksiazka2,ksiazka3);
// console.log(ksiazki);
function numberRed(tab)  {
    let red=0; 
    tab.forEach(element =>
         {element.describeBook();if (element.red=true) {red++};});
    return red; 
}; 
console.log(numberRed(ksiazki));



