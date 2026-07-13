/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef, FormEvent } from "react";
import { MessageSquare, X, Send, Sparkles, Phone, MapPin, Calendar, Clock, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ChatMessage {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: Date;
}

const QUICK_REPLIES = [
  { text: "Bridal Packages", label: "Bridal Packages 👑" },
  { text: "6-Step Hydrafacial price", label: "Hydrafacial ✨" },
  { text: "Branches & Timings", label: "Branches 📍" },
  { text: "How do I book?", label: "Book Appointment 📅" },
];

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasNewMessageBadge, setHasNewMessageBadge] = useState<boolean>(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Initialize with a welcome message if empty
  useEffect(() => {
    const saved = localStorage.getItem("zari_salon_chat_history");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Map timestamps back to Date objects
        const formatted = parsed.map((m: any) => ({
          ...m,
          timestamp: new Date(m.timestamp),
        }));
        setMessages(formatted);
        return;
      } catch (e) {
        console.error("Failed to parse saved chat history", e);
      }
    }

    // Default welcome message
    const welcomeMessage: ChatMessage = {
      id: "welcome",
      role: "model",
      text: "Assalam-o-Alaikum sister! 🌸 Welcome to Zari Beauty Salon & Bridal Studio.\n\nI am **Zari**, your AI Concierge. I can help you with anything you need—from selecting our famous **Janssen facials** and **Royal Majestic Bridal packages** to finding our branches in DHA Bukhari or Gulshan-e-Iqbal, Karachi. \n\nHow may I pamper you today? ✨",
      timestamp: new Date(),
    };
    setMessages([welcomeMessage]);
    setHasNewMessageBadge(true);
  }, []);

  // Save history to localStorage
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("zari_salon_chat_history", JSON.stringify(messages));
    }
  }, [messages]);

  // Scroll to bottom
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isLoading]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      role: "user",
      text: textToSend,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsLoading(true);

    try {
      // Prepare history in expected format for the endpoint
      // We only send text and role
      const historyToSend = messages.map((m) => ({
        role: m.role,
        text: m.text,
      }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: textToSend,
          history: historyToSend,
        }),
      });

      if (!response.ok) {
        let errMsg = "Failed to communicate with AI server";
        try {
          const errData = await response.json();
          if (errData && errData.error) {
            errMsg = errData.error;
          }
        } catch (_) {}
        throw new Error(errMsg);
      }

      const data = await response.json();
      const aiMsg: ChatMessage = {
        id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        role: "model",
        text: data.reply,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (error: any) {
      console.error("Chat error:", error);
      const errorMsg: ChatMessage = {
        id: `msg-error-${Date.now()}`,
        role: "model",
        text: `I am sorry, sister, I had a little trouble processing your message. 🌸\n\n**Reason:** ${error.message || "Network error"}\n\nFeel free to try again, or reach our front desk directly at **+92 321 8274799**. 💕`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputText);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  // Simple markdown renderer for bold words and linebreaks
  const renderMessageContent = (text: string) => {
    // Replace **bold** with <strong>
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={index} className="font-semibold text-rose-950">{part.slice(2, -2)}</strong>;
      }
      return part;
    }).join("");
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end" id="ai-chatbot-root">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 30 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="mb-4 w-[360px] sm:w-[400px] h-[550px] bg-white rounded-2xl shadow-2xl border border-stone-100 flex flex-col overflow-hidden"
              id="ai-chatbot-window"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-rose-800 to-amber-900 text-white px-4 py-4 flex items-center justify-between shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 shadow-inner">
                    <Sparkles className="w-5 h-5 text-rose-200" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium tracking-wide">Zari AI Concierge</h3>
                    <div className="flex items-center gap-1.5 text-xs text-rose-200">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>Online Salon Advisor</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      if (window.confirm("Would you like to clear our chat history, sister?")) {
                        localStorage.removeItem("zari_salon_chat_history");
                        const welcome: ChatMessage = {
                          id: "welcome",
                          role: "model",
                          text: "Assalam-o-Alaikum sister! 🌸 Welcome back. How can I help you today? ✨",
                          timestamp: new Date(),
                        };
                        setMessages([welcome]);
                      }
                    }}
                    className="text-xs text-rose-200 hover:text-white hover:underline transition-colors mr-1 cursor-pointer"
                    title="Reset conversation"
                  >
                    Clear History
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white/80 hover:text-white p-1 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Message List */}
              <div
                ref={chatContainerRef}
                className="flex-grow overflow-y-auto p-4 bg-stone-50/50 space-y-4 scrollbar-hide"
              >
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl p-3.5 shadow-sm text-sm leading-relaxed whitespace-pre-line ${
                        msg.role === "user"
                          ? "bg-rose-800 text-white rounded-br-none"
                          : "bg-white text-stone-800 border border-stone-100 rounded-bl-none"
                      }`}
                    >
                      {msg.role === "model" ? (
                        // Basic markdown parsing for rendering
                        <span
                          dangerouslySetInnerHTML={{
                            __html: msg.text
                              .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-rose-950">$1</strong>')
                              .replace(/\*(.*?)\*/g, "<em>$1</em>"),
                          }}
                        />
                      ) : (
                        msg.text
                      )}
                      <div
                        className={`text-[10px] mt-1.5 flex items-center ${
                          msg.role === "user" ? "text-rose-200 justify-end" : "text-stone-400 justify-start"
                        }`}
                      >
                        {formatTime(msg.timestamp)}
                      </div>
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-stone-100 rounded-2xl rounded-bl-none p-4 shadow-sm flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-rose-500 animate-bounce" style={{ animationDelay: "0ms" }}></span>
                      <span className="w-2 h-2 rounded-full bg-rose-500 animate-bounce" style={{ animationDelay: "150ms" }}></span>
                      <span className="w-2 h-2 rounded-full bg-rose-500 animate-bounce" style={{ animationDelay: "300ms" }}></span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Suggestion Quick Chips */}
              <div className="bg-white border-t border-stone-100 px-3 py-2 overflow-x-auto flex gap-1.5 scrollbar-hide shrink-0">
                {QUICK_REPLIES.map((reply, i) => (
                  <button
                    key={i}
                    onClick={() => handleSendMessage(reply.text)}
                    disabled={isLoading}
                    className="text-xs shrink-0 px-3 py-1.5 rounded-full border border-rose-100 bg-rose-50/50 text-rose-900 hover:bg-rose-100/70 hover:border-rose-200 transition-all duration-200 cursor-pointer disabled:opacity-50"
                  >
                    {reply.label}
                  </button>
                ))}
              </div>

              {/* Input Form */}
              <form
                onSubmit={handleFormSubmit}
                className="p-3 bg-white border-t border-stone-100 flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type your question, sister..."
                  disabled={isLoading}
                  className="flex-grow text-sm border border-stone-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400 disabled:opacity-75"
                />
                <button
                  type="submit"
                  disabled={!inputText.trim() || isLoading}
                  className="bg-rose-800 hover:bg-rose-900 text-white p-2.5 rounded-xl transition-all duration-200 flex items-center justify-center disabled:bg-stone-100 disabled:text-stone-400 cursor-pointer"
                >
                  <Send className="w-4.5 h-4.5" />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Floating Button */}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setHasNewMessageBadge(false);
          }}
          className="flex items-center justify-center bg-gradient-to-r from-rose-700 to-amber-800 hover:from-rose-800 hover:to-amber-900 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 relative cursor-pointer"
          id="floating-ai-chatbot-btn"
          title="Talk with Zari AI Concierge"
        >
          {/* Pulsing rings when closed to attract attention */}
          {!isOpen && (
            <span className="absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-70 animate-ping -z-10"></span>
          )}

          {/* New message notification badge */}
          {!isOpen && hasNewMessageBadge && (
            <span className="absolute -top-1.5 -right-1 w-5 h-5 bg-rose-500 text-white font-sans font-bold text-[10px] flex items-center justify-center rounded-full border border-white">
              1
            </span>
          )}

          <div className="flex items-center gap-2">
            <Sparkles className={`w-6 h-6 transition-transform duration-500 ${isOpen ? "rotate-90 text-rose-200" : ""}`} />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out font-medium text-sm whitespace-nowrap">
              {isOpen ? "Close Zari AI" : "Chat with Zari AI"}
            </span>
          </div>
        </button>
      </div>
    </>
  );
}
