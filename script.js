function likeAt(id) {
    
    const spanElementi = document.getElementById(`like-count-${id}`);
    
    
    let mevcutBegeni = parseInt(spanElementi.innerText);
    
    
    spanElementi.innerText = mevcutBegeni + 1;
}

function oynat(id) {
    
    const tiklananVideo = document.getElementById(`video-${id}`);
    
    
    const butunVideolar = document.querySelectorAll('video');
    
    
    butunVideolar.forEach(video => {
        
        if (video.id !== `video-${id}`) {
            video.pause();
        }
    });

    
    if (tiklananVideo.paused) {
        tiklananVideo.play();
    } else {
        tiklananVideo.pause();
    }
}


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
    
    
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } 
    
    else if (video.webkitRequestFullscreen) { 
        video.webkitRequestFullscreen();
    } 
    
    else if (video.msRequestFullscreen) { 
        video.msRequestFullscreen();
    }
    
function likeAt(id) {
    const spanElementi = document.getElementById(`like-count-${id}`);
    
    
    if (spanElementi.innerText === "") {
        
        let ilkSayi = parseInt(spanElementi.getAttribute('data-baslangic'));
        
       
        spanElementi.innerText = ilkSayi + 1;
        
        spanElementi.classList.add('sayi-goster');
        spanElementi.classList.remove('sayi-gizli');
    } else {
        let mevcutBegeni = parseInt(spanElementi.innerText);
        spanElementi.innerText = mevcutBegeni + 1;
    }
}
