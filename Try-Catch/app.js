try {
    // Hata durumunu simule edelim
    throw new Error("Bu bir hata mesajıdır.");
} catch (error) {
    // Hata yakalandığında bu blok çalışır
    console.error("Hata Yakalandı:", error.message);
}
