
const startDate = new Date("2025-03-28T00:00:00");
function updateTimer() {
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    document.getElementById("timer").textContent =
        "time of love: " + days + " hari, " + hours + " jam, " + minutes + " menit, " + seconds + " detik";
}
setInterval(updateTimer, 1000);
updateTimer();

document.getElementById('envelope').addEventListener('click', function () {
    const message = document.getElementById('hiddenMessage');
    this.style.transform = "translateY(-100px)";
    setTimeout(() => {
        message.classList.add('show');
    }, 800);
});
