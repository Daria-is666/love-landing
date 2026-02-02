const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

/* 😈 КНОПКА "НЕТ" — ПАРАНОИДАЛЬНАЯ */
if (noBtn) {
  const messages = [
    'РЕАЛЬНО? Клянись!',
    'Ты что такое удумал?',
    'Ну мы же оба знаем правду',
    'Ха-ха, лох цветочный',
    'Мимо!',
    'Всё ещё мимо!',
    'Да ладно тебе, сдавайся!', 
    'Хватит баловаться!',
    'Не догонишь, не догонишь',
    'Всё ещё тут?',
    'Ты совершаешь большую ошибку - подумой!'
  ];

  noBtn.addEventListener('mouseenter', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.transition = 'all 0.6s ease-out'; // плавное движение
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    noBtn.textContent = messages[Math.floor(Math.random() * messages.length)];
    noBtn.classList.add('shake');

    setTimeout(() => noBtn.classList.remove('shake'), 300);
  });
}

/* 💥 СЕРДЕЧКИ И "Я ТАК И ЗНАЛ" ПРИ НАЖАТИИ "ДА" */
if (yesBtn) {
  yesBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // Генерация сердечек
    for (let i = 0; i < 40; i++) {
      createHeart();
    }

    // Добавляем надпись "Я так и знал"
    const knownMessage = document.createElement('div');
    knownMessage.className = 'known-message';
    knownMessage.textContent = 'Я так и знала! ❤️';
    document.body.appendChild(knownMessage);

    setTimeout(() => {
      window.location.href = 'yes.html';
    }, 900);
  });
}

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerHTML = '❤️';

  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.bottom = '-20px';
  heart.style.fontSize = 16 + Math.random() * 24 + 'px';
  heart.style.animationDuration = 2 + Math.random() * 2 + 's';

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}
