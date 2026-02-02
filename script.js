const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

/* 😈 КНОПКА "НЕТ" — ПАРАНОИДАЛЬНАЯ */
if (noBtn) {
  const messages = [
    'Не сегодня 😜',
    'Почти поймал!',
    'Ха-ха, нет 😈',
    'Мимо!',
    'Да ладно тебе ❤️'
  ];

  noBtn.addEventListener('mouseenter', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    noBtn.textContent = messages[Math.floor(Math.random() * messages.length)];
    noBtn.classList.add('shake');

    setTimeout(() => noBtn.classList.remove('shake'), 300);
  });
}

/* 💥 СЕРДЕЧКИ ПРИ НАЖАТИИ "ДА" */
if (yesBtn) {
  yesBtn.addEventListener('click', (e) => {
    e.preventDefault();

    for (let i = 0; i < 40; i++) {
      createHeart();
    }

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
