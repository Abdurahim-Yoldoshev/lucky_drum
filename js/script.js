const click = document.getElementById('click');
const drum = document.getElementById('drum');
const finishRow = document.getElementById('finishRow');
const btn = document.getElementById('btn');
const resultText = document.getElementById('resultText');

let totalRotation = 0;
const numSectors = 8;
const sectorSize = 360 / numSectors;
const sectorItems = [
  "Jo‘stik 🎮",
  "Bilyard 🎱",
  "Ajoyib 💎",
  "Daraxt 🌲",
  "Basketbol 🏀",
  "Chipta 🎫",
  "Portlash 💥",
  "Futbol ⚽"
];

click.addEventListener('click', () => {
    click.disabled = true;

    const randomTurn = Math.floor(Math.random() * 360) + 360 * 5; // 5 marta aylanadi
    totalRotation += randomTurn;

    drum.style.transition = 'transform 4s ease-out';
    drum.style.transform = `rotate(${totalRotation}deg)`;
});

drum.addEventListener('transitionend', () => {
    // Baraban to‘xtagan burchak (0–359)
    const finalAngle = totalRotation % 360;

    // E'tibor bering: yuqoridagi ko‘rsatkich 270° ga to‘g‘ri keladi (soat 12)
    // Shuning uchun uni markazga moslashtirish uchun +sectorSize / 2 qo‘shamiz va 360° ni aylanishdan saqlaymiz
    const pointerAngle = (360 - finalAngle + sectorSize / 2) % 360;

    const sectorIndex = Math.floor(pointerAngle / sectorSize);

    const selectedItem = sectorItems[sectorIndex];
    finishRow.style.display = 'flex';
    setTimeout(() => {
        resultText.textContent = `Sizga tushdi: ${selectedItem}`;
    }, 700);
    // Tugmani qayta yoqish
    click.disabled = false;
});

btn.addEventListener('click', ()=>{
  finishRow.style.display = 'none';
  totalRotation = 0;
});