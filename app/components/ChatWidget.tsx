"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const WELCOME: ChatMessage = {
  role: "assistant",
  content: "Hi! I'm ENAMIS' AI assistant. Ask me about our electrical, solar, CCTV, access control, or fire alarm services — or get help with a quote!",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = async () => {
    if (!input.trim() || loading) return;
    const userMsg: ChatMessage = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });
      const data = await res.json();
      if (res.ok && data.message) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.message }]);
      } else {
        setMessages((prev) => [...prev, { role: "assistant", content: data.error || "Sorry, I couldn't process that. Please try again or email enamissystems@gmail.com." }]);
      }
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Network error. Please try again or email enamissystems@gmail.com." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-[360px] sm:w-[400px] h-[520px] bg-surface-card border border-border-light rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-border-light bg-gradient-to-r from-brand-blue to-brand-blue-dark">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white text-sm font-bold leading-tight">ENAMIS Assistant</p>
                  <p className="text-white/60 text-[10px] leading-tight">Ask me anything</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors">
                <X className="w-4 h-4 text-white/70" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`flex items-start gap-2 max-w-[85%] ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${msg.role === "user" ? "bg-brand-blue" : "bg-surface-secondary"}`}>
                      {msg.role === "user" ? <User className="w-3.5 h-3.5 text-white" /> : <Bot className="w-3.5 h-3.5 text-brand-blue" />}
                    </div>
                    <div className={`px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user" ? "bg-brand-blue text-white" : "bg-surface-secondary text-content-body"
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="flex items-start gap-2">
                    <div className="w-7 h-7 rounded-lg bg-surface-secondary flex items-center justify-center flex-shrink-0">
                      <Bot className="w-3.5 h-3.5 text-brand-blue" />
                    </div>
                    <div className="px-3.5 py-2.5 rounded-2xl bg-surface-secondary">
                      <Loader2 className="w-4 h-4 animate-spin text-content-muted" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            <div className="border-t border-border-light p-4">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && send()}
                  placeholder="Type your message..."
                  className="flex-1 bg-surface-secondary border border-border-light rounded-xl px-4 py-2.5 text-sm text-content-primary placeholder-content-muted-2 focus:outline-none focus:border-brand-blue/50 transition-colors"
                  disabled={loading}
                />
                <button
                  onClick={send}
                  disabled={!input.trim() || loading}
                  className="w-10 h-10 rounded-xl bg-brand-blue text-white flex items-center justify-center disabled:opacity-40 transition-all hover:bg-brand-blue-dark"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[10px] text-content-muted-2 mt-2 text-center">
                Responses are AI-generated. For urgent matters, call <a href="tel:+2348036227782" className="text-brand-blue hover:underline">+234 08036227782</a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white shadow-xl shadow-brand-blue/30 flex items-center justify-center"
        aria-label={open ? "Close chat" : "Open chat assistant"}
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>
    </div>
  );
}
