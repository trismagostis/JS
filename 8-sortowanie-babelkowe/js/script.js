function BubbleSort(tab) {
	let change, temp;
	do {
		change = false;
		for(let i=tab.length; i>0; i--) {
			if (tab[i] < tab[i-1]) {
				temp = tab[i-1];
				tab[i-1] = tab[i];
				tab[i] = temp;
				change = true;
			}
		}
	} while (change);
	return tab;
}
let table = new Array(12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1);
console.log(BubbleSort(table));