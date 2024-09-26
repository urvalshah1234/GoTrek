import React, { useState } from 'react';
import { FaMountainSun } from "react-icons/fa6";
import { FaPaperPlane } from 'react-icons/fa';

import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../styles/Chatbot.css";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('Is Trekking adventurous?');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (input.trim()) {
      const newMessages = [...messages, { text: input, user: true }];
      setMessages(newMessages);
      setInput('');

      try {
        setLoading(true);
        const response = await axios.post(
          'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBB4Zwp4cDM_pnM3mu0urwPshTNlmknVMM',
          {
            "contents": [
              {
                "parts": [
                  {
                    "text": input
                  }
                ]
              }
            ]
          }
        );
        console.log(response);
        const botResponse = response.data.candidates[0].content.parts[0].text;
        setLoading(false);
        setMessages([...newMessages, { text: botResponse, user: false }]);
      } catch (error) {
        console.error('Error sending message:', error);
        setLoading(false);
        setMessages([...newMessages, { text: 'Error: Could not get response from AI', user: false }]);
      }
    }
  };

  return (
    <>
    <Navbar/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="chatbot-container">
      <h1 className="chatbot-header">GoTrek AI <FaMountainSun/></h1>
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.user ? 'chatbot-message-user' : 'chatbot-message-bot'}>
            <div className={msg.user ? 'chatbot-message-content user' : 'chatbot-message-content bot'}>
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            </div>
          </div>
        ))}
        {loading && (
          <div className="loader-wrapper">
            <div className="loader"></div> <FaMountainSun/>
          </div>
        )}
      </div>
      <div className="chatbot-input-container">
        <input
          type="text"
          className="chatbot-input-field"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button className="chatbot-send-button" onClick={handleSendMessage}>
          <FaPaperPlane />
        </button>
      </div>
    </div>
    <br/>
    <Footer/>
    </>
  );
}

export default Chatbot;
