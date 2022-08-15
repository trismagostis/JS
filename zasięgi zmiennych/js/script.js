
/* var zasieg funkcyjny - deklarowane wewnątrz pętli czy if są globalne.
Lokalna jest tylko zdeklarowana wewnątrz funkcji.Można jej używać przed deklaracją. 
let-zasięg blokowy. Nie można używać przed deklaracją
Lokalne są ważniejsze od globalnych (używane gdy jest taka sama globalna i lokalna) */
function display (){
  let imie="bob1";
  console.log(imie);

  
}
let imie;
imie = "bob";
display();