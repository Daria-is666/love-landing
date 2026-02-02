const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

/* 😈 КНОПКА "НЕТ" — ПАРАНОИДАЛЬНАЯ */
if (noBtn) {
  const messages = [
    'РЕАЛЬНО?',
    'Ты что такое удумал?',
    'Ну мы же оба знаем правду',
    'Ха-ха, лох цветочный',
    'Мимо!',
    'Всё ещё мимо!',
    'Да ладно тебе, сдавайся!', 
    'Хватит баловаться!',
    'Не догонишь, не догонишь',
    'Всё ещё тут?',
    'Но-но-но, мистер Фиш'
  ];

  noBtn.addEventListener('mouseenter', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.transition = 'all 0.3s ease-out'; // плавное движение
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    noBtn.textContent = messages[Math.floor(Math.random() * messages.length)];
    noBtn.classList.add('shake');

    setTimeout(() => noBtn.classList.remove('shake'), 300);
  });
}

if (yesBtn) {
  yesBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // Добавляем надпись "Я так и знал"
    const knownMessage = document.createElement('div');
    knownMessage.className = 'known-message';
    knownMessage.textContent = 'Я так и знал! ❤️';
    document.body.appendChild(knownMessage);

    setTimeout(() => {
      window.location.href = 'yes.html';
    }, 900);

if (window.location.pathname.includes("yes.html")) {
  // Если мы на второй странице (yes.html), генерируем сердечки
  for (let i = 0; i < 40; i++) {
    createHeart();
   });
}

// Функция для создания сердечек
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerHTML = '❤️';

  // Позиционируем сердечки в верхней части экрана
  const startX = Math.random() * window.innerWidth;
  const startSize = 16 + Math.random() * 24;

  heart.style.left = startX + 'px';
  heart.style.fontSize = startSize + 'px';
  
  // Добавляем плавное падение с верхней части экрана
  heart.style.animationDuration = 3 + Math.random() * 2 + 's';

  document.body.appendChild(heart);

  // Удаляем сердечко через 5 секунд
  setTimeout(() => {
    heart.remove();
  }, 5000);
}
