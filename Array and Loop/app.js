// Array Oluşturma

let myArray = [1, 2, 3, 4, 5];


//Eleman Ekleme (push):
myArray.push(6);

//Eleman Çıkarma (pop)--Son Eleman:
myArray.pop();

//Dizinin İlk Elemanını Kaldırma (shift):
myArray.shift();

//Dizinin Başına Eleman Eklemek (unshift):

myArray.unshift(0);

//Belirli Bir İndeksteki Elemanı Silme (splice):

myArray.splice(2, 1); // İndeks 2'den başlayarak bir eleman siler

//Dizi Elemanlarını Sıralama (sort):
myArray.sort(); // Sıralama, dizinin elemanlarını dizin sırasına göre yapar


//Dizi Elemanlarını Tersine Çevirme

myArray.reverse(); // Dizinin elemanlarını tersine çevirir


//Dizi Uzunluğunu Alma:
var length = myArray.length;




//Dizi Elemanlarını Döngüyle Gezme (for döngüsü veya forEach):
for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

myArray.forEach(function (item) {
    console.log(item);
});


// Dizi elemanlarını map ile işlem yaparak yeni bir dizi oluşturmak
var mappedArray = myArray.map(function (item) {
    return item * 2;
});
console.log("map ile Yeni Dizi Oluşturma:");
console.log(mappedArray); // [2, 4, 6, 8, 10, 12]


// Dizi elemanlarını filter ile koşula göre filtrelemek
var filteredArray = myArray.filter(function (item) {
    return item % 2 === 0; // Çift sayıları filtrele
});
console.log("filter ile Filtrelenmiş Dizi:");
console.log(filteredArray); // [2, 4, 6]










console.log(myArray)