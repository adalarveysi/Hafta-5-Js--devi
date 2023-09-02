// Fetch API kullanarak bir API'dan veri çekme örneği
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP Hatası: " + response.status);
        }
        return response.json();
    })
    .then(data => {
        console.log("API'dan alınan veri:", data);
    })
    .catch(error => {
        console.error("Hata:", error.message);
    });
