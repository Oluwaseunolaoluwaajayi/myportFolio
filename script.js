const chatToggle = document.querySelector(".chat-box-toggle");
const chatBox = document.getElementById("chatBox");
const chatClose = document.querySelector(".chat-close");
const sendMessageBtn = document.getElementById("sendMessage");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");

chatToggle.addEventListener("click", () => {
  chatBox.classList.toggle("active");
});

chatClose.addEventListener("click", () => {
  chatBox.classList.remove("active");
});

sendMessageBtn.addEventListener("click", () => {
  const message = chatInput.value.trim();
  if (message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", "sent");
    messageElement.innerHTML = `<p>${message}</p>`;
    chatMessages.appendChild(messageElement);
    chatInput.value = "";

    // Simulate a response
    setTimeout(() => {
      const responseElement = document.createElement("div");
      responseElement.classList.add("message", "received");
      responseElement.innerHTML = `<p>Thanks for your message! I'll get back to you soon.</p>`;
      chatMessages.appendChild(responseElement);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
  }
});

chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && chatInput.value.trim()) {
    sendMessageBtn.click();
  }
});