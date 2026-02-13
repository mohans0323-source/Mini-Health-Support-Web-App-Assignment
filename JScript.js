function toggleChatbot() {
  let bot = document.getElementById("chatbot");
  bot.style.display = bot.style.display === "block" ? "none" : "block";
}

function sendMessage() {
  let input = document.getElementById("userInput");
  let msg = input.value.trim().toLowerCase();
  if (!msg) return;

  let chatbox = document.getElementById("chatbox");

  let userDiv = document.createElement("div");
  userDiv.className = "user";
  userDiv.innerText = "You: " + msg;
  chatbox.appendChild(userDiv);

  let reply = "Our support team will contact you soon.";

  if (msg.includes("blood")) reply = "You can donate blood by filling the form above.";
  else if (msg.includes("help")) reply = "Please explain your issue. We’re here to help.";
  else if (msg.includes("contact")) reply = "You can email support@healthcareplus.com.";

  let botDiv = document.createElement("div");
  botDiv.className = "bot";
  botDiv.innerText = "Bot: " + reply;
  chatbox.appendChild(botDiv);

  chatbox.scrollTop = chatbox.scrollHeight;
  input.value = "";
}

function submitDonation() {
  let name = document.getElementById("donorName").value;
  let bg = document.getElementById("bloodGroup").value;
  let loc = document.getElementById("location").value;
  let msg = document.getElementById("donationMsg");

  if (!name || !bg || !loc) {
    msg.style.color = "red";
    msg.innerText = "Please fill all fields!";
    return;
  }

  if (bg === "O-") {
    msg.style.color = "red";
    msg.innerText = "🚨 Urgent donor – NGO team notified!";
  } else {
    msg.style.color = "green";
    msg.innerText = "Thank you! We have saved your details.";
  }
}