import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Form } from 'react-bootstrap';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import './ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "¡Hola! Soy el asistente de BookingManager. ¿En qué puedo ayudarte?", sender: 'bot' }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Agregar mensaje del usuario
    const userMsg = { id: Date.now(), text: input, sender: 'user' };
    setMessages([...messages, userMsg]);
    setInput("");

    // Simulación de respuesta (Aquí irá la integración a la DB/AI después)
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        text: "¡Entendido! Pronto estaré conectado a nuestra base de datos para responderte con exactitud.", 
        sender: 'bot' 
      }]);
    }, 1000);
  };

  return (
    <div className="chatbot-wrapper">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="chat-window shadow-lg"
            style={{ position: 'absolute', bottom: 0, right: 0 }}
          >
            <div className="chat-header d-flex justify-content-between align-items-center">
              <span className="fw-bold text-white d-flex align-items-center gap-2">
                <Bot size={20} />
                NexusCode IA
              </span>
              <X size={24} style={{ cursor: 'pointer' }} onClick={() => { setIsOpen(false); setIsHovered(false); }} />
            </div>

            <div className="chat-body">
              {messages.map(msg => (
                <div key={msg.id} className={`message-bubble ${msg.sender}`}>
                  {msg.text}
                </div>
              ))}
            </div>

            <Form onSubmit={handleSend} className="chat-footer d-flex gap-2">
              <Form.Control 
                type="text" 
                placeholder="Escribí un mensaje..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="bg-dark text-white border-secondary"
              />
              <Button type="submit" variant="info" className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', padding: 0 }}>
                <Send size={18} />
              </Button>
            </Form>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isOpen && (
          <motion.button 
            className="chat-trigger-btn shadow-lg d-flex align-items-center justify-content-center border-0"
            onClick={() => { setIsOpen(true); setIsHovered(false); }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              width: isHovered ? 270 : 60,
              padding: isHovered ? "0 24px" : "0"
            }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              height: '60px',
              borderRadius: '30px',
              overflow: 'hidden',
              position: 'absolute',
              bottom: 0,
              right: 0
            }}
          >
            <div className="d-flex align-items-center justify-content-center">
              <MessageCircle size={24} style={{ minWidth: '24px' }} />
              <AnimatePresence>
                {isHovered && (
                  <motion.span
                    initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                    animate={{ width: "auto", opacity: 1, marginLeft: 8 }}
                    exit={{ width: 0, opacity: 0, marginLeft: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="text-nowrap overflow-hidden"
                    style={{ fontSize: '1rem', fontWeight: '600' }}
                  >
                    ¿Tenés alguna consulta?
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;