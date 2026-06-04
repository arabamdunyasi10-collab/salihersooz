// Artık döngülere veya dizilere ihtiyacımız yok.
// Sadece butona tıklandığında çalışan basit, mermi gibi bir fonksiyonumuz var.

function likeAt(id) {
    // Tıkladığın videonun beğeni sayısını tutan span etiketini (HTML'den) yakalıyoruz
    const spanElementi = document.getElementById(`like-count-${id}`);
    
    // İçindeki yazıyı (mesela "42") alıp gerçek bir sayıya çeviriyoruz
    let mevcutBegeni = parseInt(spanElementi.innerText);
    
    // Sayıyı 1 artırıp tekrar HTML'in içine yazıyoruz
    spanElementi.innerText = mevcutBegeni + 1;
}
// Videoyu bulup oynatan veya durduran fonksiyon
// Videoyu oynatan ve DİĞERLERİNİ durduran jilet fonksiyon
function oynat(id) {
    // Tıklanan videoyu bul
    const tiklananVideo = document.getElementById(`video-${id}`);
    
    // Sayfadaki BÜTÜN <video> etiketlerini topla
    const butunVideolar = document.querySelectorAll('video');
    
    // Bütün videoları tek tek gez
    butunVideolar.forEach(video => {
        // Eğer o an döngüdeki video, senin tıkladığın video DEĞİLSE onu zorla durdur
        if (video.id !== `video-${id}`) {
            video.pause();
        }
    });

    // Diğerleri sustuğuna göre, şimdi kendi videomuza odaklanabiliriz
    if (tiklananVideo.paused) {
        tiklananVideo.play();
    } else {
        tiklananVideo.pause();
    }
}

// Tam ekran fonksiyonun aynen kalıyor, ona dokunma:
function tamEkran(id) {
    const video = document.getElementById(`video-${id}`);
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) { 
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { 
        video.msRequestFullscreen();
    }
}
    
    // Tarayıcı destekliyorsa tam ekran yap
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } 
    // Safari (Apple) için özel kod
    else if (video.webkitRequestFullscreen) { 
        video.webkitRequestFullscreen();
    } 
    // Eski sistemler için
    else if (video.msRequestFullscreen) { 
        video.msRequestFullscreen();
    }
