document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.getElementById('main-nav');

    // Menü Açma/Kapatma İşlevi (Mobil Uyumlu)
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });

        // Menüdeki linklerden birine tıklanınca menüyü kapat
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                }
            });
        });
    }
});
// Mevcut menü kodunun altına ekleyin
document.addEventListener('DOMContentLoaded', function() {
    // ... (Burada mevcut mobil menü kodları var) ...
    
    // SLIDER KODU BAŞLANGICI
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        // Tüm slayt ve noktaların aktifliğini kaldır
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Geçerli slaytı ve noktayı aktif et
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        const newIndex = (currentSlide + 1) % slides.length;
        showSlide(newIndex);
    }

    function startSlider() {
        slideInterval = setInterval(nextSlide, 5000); // 5 saniyede bir otomatik geçiş
    }

    function stopSlider() {
        clearInterval(slideInterval);
    }

    // Olay Dinleyicileri (Butonlar)
    nextBtn.addEventListener('click', () => {
        stopSlider();
        nextSlide();
        startSlider(); // Butona tıklandıktan sonra otomatik geçişi tekrar başlat
    });

    prevBtn.addEventListener('click', () => {
        stopSlider();
        const newIndex = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(newIndex);
        startSlider();
    });

    // Olay Dinleyicileri (Noktalar)
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopSlider();
            showSlide(index);
            startSlider();
        });
    });

    // Slider'ı Başlat
    showSlide(0); // İlk slaytı göster
    startSlider(); // Otomatik geçişi başlat
    // SLIDER KODU BİTİŞİ
});