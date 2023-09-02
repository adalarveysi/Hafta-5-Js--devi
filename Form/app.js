document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Formun varsayılan gönderimini engeller

    // Input alanlarından değerleri al
    var ad = document.getElementById("isim").value;
    var mesaj = document.getElementById("mesaj").value;
    var email = document.getElementById("email").value;

    // Değerleri kullanabiliriz, örneğin ekrana yazdıralım
    console.log("Ad: " + ad);
    console.log("Mesaj: " + mesaj);
    console.log("E-posta: " + email);

    // Başka bir işlem yapmak için bu değerleri kullanabilirsiniz

    // Örnek olarak, bir API'ye POST isteği göndermek için fetch kullanabilirsiniz:
    /*
    fetch("https://api.example.com", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ ad, soyad, email })
    })
    .then(response => response.json())
    .then(data => {
        console.log("API yanıtı:", data);
    })
    .catch(error => {
        console.error("Hata:", error);
    });
    */

});