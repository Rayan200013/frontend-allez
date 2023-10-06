import React, { useState, useEffect } from "react";
import ChatMessage from "../components/ChatMessage";
import "../css/ChatApp.css";
import ChatInterface from "../components/ChatInterface";
import ChatIcon from "../components/ChatIcon";

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false); // Define isChatOpen state

  useEffect(() => {
    fetch("/messages.json")
      .then((response) => response.json())
      .then((data) => setMessages(data));
  }, []);

  function processUserInput(userMessage) {
    let botResponse = "";
    const lowerCaseMessage = userMessage.toLowerCase();
    if (lowerCaseMessage.includes("language")) {
      botResponse =
        "The official language in Lebanon is Arabic. However, many people in Chouf, especially in the tourism industry, also speak English.";
    } else if (
      lowerCaseMessage.includes("hello") ||
      lowerCaseMessage.includes("hi")
    ) {
      botResponse =
        "Hello! How can I assist you with your trip to the beautiful Chouf region in Lebanon today?";
    } else if (lowerCaseMessage.includes("attractions")) {
      botResponse =
        "Chouf has many attractions, including Beiteddine Palace, Chouf Cedars Reserve, and Deir el-Qamar.";
    } else if (lowerCaseMessage.includes("weather")) {
      botResponse =
        "I recommend checking a reliable weather website or app for up-to-date weather information.";
    } else if (
      lowerCaseMessage.includes("cuisine") ||
      lowerCaseMessage.includes("food")
    ) {
      botResponse =
        "Lebanese cuisine in Chouf is a delight! Try dishes like kebbeh nayyeh, fattoush, and sfiha.";
    } else if (
      lowerCaseMessage.includes("transportation") ||
      lowerCaseMessage.includes("get around")
    ) {
      botResponse =
        "Getting around Chouf is easy. You can use taxis, ride-sharing services like Uber, or rent a car.";
    } else if (
      lowerCaseMessage.includes("etiquette") ||
      lowerCaseMessage.includes("customs")
    ) {
      botResponse =
        "Respect local customs by dressing modestly and asking for permission before taking photos of locals.";
    } else if (
      lowerCaseMessage.includes("events") ||
      lowerCaseMessage.includes("festivals")
    ) {
      botResponse =
        "While I don't have access to current event information, Chouf hosts various festivals, especially during the summer.";
    } else {
      botResponse = "I'm sorry, I don't have information on that topic.";
    }

    return botResponse;
  }

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputMessage.trim() !== "") {
      const userMessage = inputMessage.trim();
      const botResponse = processUserInput(userMessage);
      setMessages([
        ...messages,
        { role: "Tourism App", message: userMessage },
        { role: "AI", message: botResponse },
      ]);

      setInputMessage("");
    }
  };

  const toggleChat = () => {
    setIsChatOpen((prevIsChatOpen) => !prevIsChatOpen); // Toggle the value of isChatOpen
  };

  return (
    <>
      <div className="chat-container">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              role={message.role}
              message={message.message}
            />
          ))}
        </div>
        <form onSubmit={handleSubmit} className="chat-input">
          <input
            type="text"
            placeholder="Type a message..."
            value={inputMessage}
            onChange={handleInputChange}
          />
          <button type="submit">Send</button>
        </form>
      </div>

      <div>
        {/* Your other components/content */}
        {isChatOpen && <ChatInterface />}{" "}
        {/* Display chat if isChatOpen is true */}
        <ChatIcon onClick={toggleChat} />{" "}
        {/* Pass toggleChat function to the ChatIcon */}
      </div>
    </>
  );
};

export default ChatApp;
