
import React, { useState, useEffect } from 'react';
import firebase from './firebase';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    const chatRef = firebase.database().ref('chat');
    chatRef.on('value', snapshot => {
      const chat = snapshot.val();
      if (chat) {
        setMessages(Object.values(chat));
      }
    });
    return () => chatRef.off('value');
  }, []);

  const handleSendMessage = () => {
    if (text.trim() !== '') {
      firebase.database().ref('chat').push({
        text,
        timestamp: Date.now()
      });
      setText('');
    }
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            <p>{message.text}</p>
            <p>{new Date(message.timestamp).toLocaleString()}</p>
          </div>
        ))}
      </div>
      <div>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;

   