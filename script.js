document.addEventListener('DOMContentLoaded', () => {
  
  // --- Typing Animation ---
  const titleElement = document.getElementById('typing-title');
  const textToType = "Envious";
  const typingSpeedMs = 150;
  
  setTimeout(() => {
    let i = 0;
    function type() {
      if (i < textToType.length) {
        titleElement.textContent += textToType.charAt(i++);
        setTimeout(type, typingSpeedMs);
      }
    }
    type();
  }, 500);

  // --- IP Copy Logic ---
  const ipWidget = document.getElementById('ip-widget');
  const ipTextElement = document.getElementById('server-ip');
  const originalIP = ipTextElement.innerText;
  let isCopying = false;

  ipWidget.addEventListener('click', () => {
    if (isCopying) return;

    navigator.clipboard.writeText(originalIP).then(() => {
      isCopying = true;
      ipTextElement.innerText = 'Copied!';
      ipTextElement.style.color = 'var(--muted)';
      
      setTimeout(() => {
        ipTextElement.innerText = originalIP;
        ipTextElement.style.color = 'var(--text)';
        isCopying = false;
      }, 1500);
    });
  });

  // --- Hidden Footer Text ---
  const footer = document.getElementById('footer');
  const hiddenText = document.getElementById('hiddenText');
  
  footer.addEventListener('mousemove', (e) => {
    const rect = footer.getBoundingClientRect();
    if (e.clientY - rect.top > rect.height * 0.6) {
      hiddenText.classList.add('visible');
    } else {
      hiddenText.classList.remove('visible');
    }
  });
  
  footer.addEventListener('mouseleave', () => {
    hiddenText.classList.remove('visible');
  });
});