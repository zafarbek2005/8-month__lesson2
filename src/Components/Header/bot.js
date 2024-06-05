document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
  
    const telegramToken = "6714877771:AAHjhYSI1QCXr74V76owsIhEJN-FA_pjvhE";
    const telegramChatId = "1976708153";
    const telegramApiUrl = `https://api.telegram.org/bot${telegramToken}/sendMessage`;
  
    const data = {
      chat_id: telegramChatId,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };
  
    fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      if(data.ok) {
        alert('Message sent successfully!');
        e.target.reset();
      } else {
        alert('Error sending message');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error sending message');
    });
  });
  