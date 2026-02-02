const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');



// Логика для кнопки "Нет" на первой странице (index.html)
if (noBtn) {
  const messages = [
    'Не в мою смену!',
    'Но-но-но, мистер фиш',
    'Ха-ха, нет',
    'Мимо!',
    'Снова мимо!',
    'Не балуйся',
    'Кого ты обманываешь?',
    'Протестую!',
    'Ты что удумал?'
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

// Логика для кнопки "Да" на первой странице (index.html)
if (yesBtn) {
  yesBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // Добавляем надпись "Я так и знал"
    const knownMessage = document.createElement('div');
    knownMessage.className = 'known-message';
    knownMessage.textContent = 'Я так и знала! ❤️';
    document.body.appendChild(knownMessage);

    setTimeout(() => {
      window.location.href = 'yes.html';
    }, 900);
    
    // Проверим, на какой странице мы находимся
if (window.location.pathname.includes("yes.html")) {
  // Если мы на второй странице (yes.html), генерируем сердечки
  for (let i = 0; i < 40; i++) {
    createHeart();
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
}

  });
}

