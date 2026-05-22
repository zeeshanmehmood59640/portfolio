"use client";

import { useState, useEffect, useRef } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { motion } from "framer-motion";
import { X, Send, Loader2, Bot } from "lucide-react";
import { ChatMessage } from "./ChatMessage";
import { chatbotStarterQuestions } from "@/lib/content";

interface ChatWindowProps {
  onClose: () => void;
}

const transport = new DefaultChatTransport({ api: "/api/chat" });

export function ChatWindow({ onClose }: ChatWindowProps) {
  const { messages, sendMessage, status } = useChat({ transport });
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const isLoading = status === "streaming" || status === "submitted";

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || isLoading) return;
    setInput("");
    void sendMessage({ text });
  }

  function handleStarterClick(question: string) {
    void sendMessage({ text: question });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="fixed bottom-24 right-5 z-50 w-[min(380px,calc(100vw-40px))] flex flex-col rounded-2xl border border-[#9668C0]/25 dark:border-[#9668C0]/35 bg-white/95 dark:bg-[#0e0315]/95 backdrop-blur-md shadow-2xl overflow-hidden"
      style={{ maxHeight: "min(560px, calc(100dvh - 120px))" }}
      role="dialog"
      aria-label="AI Portfolio Assistant"
    >
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-[#9668C0]/15 dark:border-[#9668C0]/20 bg-primary/5 dark:bg-primary/10">
        <div className="w-8 h-8 rounded-full bg-primary/15 dark:bg-secondary/20 flex items-center justify-center">
          <Bot size={16} className="text-primary dark:text-secondary" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-heading font-bold text-dark-text dark:text-[#FAF9E0] text-sm">Portfolio Assistant</p>
          <p className="text-xs text-dark-header/50 dark:text-[#FAF9E0]/60">Ask me about Zeeshan</p>
        </div>
        <button
          onClick={onClose}
          aria-label="Close chat"
          className="p-1.5 rounded-full text-dark-header/50 dark:text-[#FAF9E0]/60 hover:text-primary dark:hover:text-secondary hover:bg-primary/10 transition-colors"
        >
          <X size={16} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
        {messages.length === 0 && (
          <div className="space-y-3">
            <p className="text-sm text-dark-header/60 dark:text-[#FAF9E0]/70 text-center">
              Hi! Ask me anything about Zeeshan&apos;s background, skills, or projects.
            </p>
            <div className="space-y-2">
              {chatbotStarterQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => handleStarterClick(q)}
                  className="w-full text-left text-xs px-3 py-2 rounded-lg border border-primary/20 dark:border-[#FAF9E0]/20 text-primary dark:text-[#FAF9E0]/85 hover:bg-primary/8 dark:hover:bg-[#FAF9E0]/8 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}

        {isLoading && (
          <div className="flex gap-3">
            <div className="w-7 h-7 rounded-full bg-secondary/20 dark:bg-secondary/30 flex items-center justify-center" aria-hidden="true">
              <Bot size={14} className="text-secondary dark:text-light-header" />
            </div>
            <div className="px-3.5 py-2.5 rounded-2xl rounded-tl-sm bg-white/80 dark:bg-[#300b40]/60 border border-[#9668C0]/20">
              <Loader2 size={14} className="animate-spin text-secondary" />
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="flex gap-2 p-3 border-t border-[#9668C0]/15 dark:border-[#9668C0]/20"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about skills, projects…"
          disabled={isLoading}
          aria-label="Chat message"
          className="flex-1 px-3.5 py-2 rounded-xl border border-[#9668C0]/25 dark:border-[#9668C0]/35 bg-white/80 dark:bg-[#300b40]/30 text-dark-text dark:text-[#FAF9E0] placeholder-dark-header/40 dark:placeholder-[#FAF9E0]/40 focus:outline-none focus:border-primary dark:focus:border-secondary text-sm disabled:opacity-50 transition-colors"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          aria-label="Send message"
          className="w-9 h-9 rounded-xl bg-primary text-white flex items-center justify-center hover:bg-dark-header disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <Send size={14} />
        </button>
      </form>
    </motion.div>
  );
}
