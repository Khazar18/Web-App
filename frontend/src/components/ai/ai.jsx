import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import '../ai/ai.css';
import Robot from '../../assets/robot.svg';
import UserImage from '../../assets/women_avatar.svg';

const API_KEY = import.meta.env.VITE_AI_API_KEY;

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);  

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem('chatMessages'));
    if (storedMessages) {
      setMessages(storedMessages);
    }
  }, []);

  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, messages]);  

  const generateResponse = async (prompt) => {
    setIsLoading(true);
    const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

    let requestBody = {
      contents: [{ parts: [{ text: prompt }] }]
    };

    try {
      const response = await fetch(`${url}?key=${API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error('Failed to generate response');
      }

      const data = await response.json();
      const generatedText = data.candidates[0].content.parts[0].text;
      return generatedText;
    } catch (error) {
      console.error('Error:', error);
      return "I'm sorry, I couldn't generate a response at the moment.";
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    setMessages(prev => {
      const newMessages = [...prev, { text: inputValue, isBot: false }];
      localStorage.setItem('chatMessages', JSON.stringify(newMessages));  
      return newMessages;
    });

    setInputValue('');
    const botResponse = await generateResponse(inputValue + ' (always answer like a professional on universities, Dont Ever Generate Any Kind Of Code)');
    setMessages(prev => {
      const newMessages = [...prev, { text: botResponse, isBot: true }];
      localStorage.setItem('chatMessages', JSON.stringify(newMessages));  history
      return newMessages;
    });
  };

  return (
    <div className="chatbot-container">
      {!isOpen ? (
        <button 
          className="chat-toggle-button"
          onClick={() => setIsOpen(true)}
        >
          <img src={Robot} alt="Chat Bot" className="bot-icon" />
        </button>
      ) : (
        <div className="chat-window">
          <div className={`chat-header ${isLoading ? 'typing' : ''}`}>
            <div className="header-content">
                <img src={Robot} alt="Chat Bot" className="header-icon" />
                <h3>Chat Assistant</h3>
            </div>
            {isLoading && (
                <div className="thinking-cloud">
                <span>Thinking...</span>
                </div>
            )}
            <button 
                className="close-button"
                onClick={() => setIsOpen(false)}
            >
                &times;
            </button>
          </div>

          <div className="messages-container">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`message ${message.isBot ? 'bot' : 'user'}`}
              >
                {message.isBot && (
                  <div className="bot-avatar">
                    <img src={Robot} alt="Bot" />
                  </div>
                )}
                <div className="message-bubble">
                  <ReactMarkdown>{message.text}</ReactMarkdown>
                </div>
                {!message.isBot && (
                  <div className="user-avatar">
                    <img src={UserImage} alt="User" />
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />  
            {isLoading && (
              <div className="message bot">
                <div className="bot-avatar">
                  <img src={Robot} alt="Bot" />
                </div>
                <div className="message-bubble loading">
                  <span>.</span><span>.</span><span>.</span>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="input-form">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="message-input"
            />
            <button type="submit" className="send-button" disabled={isLoading}>
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
