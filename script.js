// 1. கவுண்டவுன் டைமர் செட்டிங்ஸ்
const launchDate = new Date("December 31, 2026 00:00:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = launchDate - now;

    // நாட்களைக் கணக்கிடுதல்
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // HTML-இல் எண்களைக் காட்டுதல்
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // நேரம் முடிந்தால் டைமரை நிறுத்த
    if (distance < 0) {
        clearInterval(timer);
        document.querySelector(".countdown").innerHTML = "WE ARE LIVE!";
    }
}, 1000);

// 2. கூகுள் ஷீட் இணைப்பு (Google Sheet Integration)
const scriptURL = 'https://script.google.com/macros/s/AKfycbwLzHCpGMV8_58saB8XLG9_v-SDxSTmv1pfgMVeSiuBoXoSwx1QfmbkLpy7JuCGFWpx/exec';
const form = document.getElementById('notifyForm');
const btn = document.getElementById('submitBtn');

