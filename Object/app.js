// Bir nesne oluşturalım
const person = {
    name: "Veysi",
    surname: "Adalar",
    age: 23,
    job: "Mühendis",
    
    // Bir metot eklemek
    sayHello: function() {
        console.log("Merhaba, ben " + this.name + " " + this.surname + "!");
    }
};

// Nesnenin özelliklerine erişmek
console.log("Ad: " + person.name);
console.log("Soyad: " + person.surname);
console.log("Yaş: " + person.age);
console.log("Meslek: " + person.job);

// Nesnenin özelliklerini güncellemek
person.age = 35;
person.job = "Yazılım Geliştirici";
console.log("Güncellenmiş Yaş: " + person.age);
console.log("Güncellenmiş Meslek: " + person.job);

// Nesnenin metotlarını çağırmak
person.sayHello(); // "Merhaba, ben John Doe!" çıktısını verir
