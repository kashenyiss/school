fetch("https://openrouter.ai/api/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": "Bearer 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",
    "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
    "X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    "model": "deepseek/deepseek-r1:free",
    "messages": [
      {
        "role": "user",
        "content": "What is the meaning of life?"
      }
    ]
  })
});

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("chatbot-form");
  const input = document.getElementById("chatbot-input");
  const messages = document.getElementById("chatbot-messages");

  let isResponding = false;

  function addMessage(content, sender) {
    const msg = document.createElement("div");
    msg.className = `chatbot-message ${sender}`;
    msg.textContent = content;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  }

  function typeMessage(content, sender) {
    const msg = document.createElement("div");
    msg.className = `chatbot-message ${sender}`;
    messages.appendChild(msg);
    let i = 0;
    function typeChar() {
      if (i < content.length) {
        msg.textContent += content.charAt(i);
        i++;
        messages.scrollTop = messages.scrollHeight;
        setTimeout(typeChar, 18); // typing speed
      } else {
        isResponding = false;
      }
    }
    typeChar();
  }

  async function sendMessage(userMessage) {
    if (isResponding) return;
    isResponding = true;
    addMessage(userMessage, "user");
    const loadingMsg = document.createElement("div");
    loadingMsg.className = "chatbot-message bot";
    loadingMsg.textContent = "...";
    messages.appendChild(loadingMsg);
    messages.scrollTop = messages.scrollHeight;
    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer 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",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-r1:free",
          messages: [
            { role: "user", content: userMessage }
          ]
        })
      });
      const data = await response.json();
      messages.removeChild(loadingMsg);
      if (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) {
        typeMessage(data.choices[0].message.content, "bot");
      } else {
        typeMessage("Sorry, I couldn't get a response.", "bot");
      }
    } catch (err) {
      messages.removeChild(loadingMsg);
      typeMessage("Error: " + err.message, "bot");
    }
  }

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const userMessage = input.value.trim();
    if (userMessage && !isResponding) {
      sendMessage(userMessage);
      input.value = "";
    }
  });
});