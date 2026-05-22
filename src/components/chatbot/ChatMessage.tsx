import type { UIMessage } from "ai";
import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  message: UIMessage;
}

function getTextContent(message: UIMessage): string {
  return message.parts
    .filter((p) => p.type === "text")
    .map((p) => (p as { type: "text"; text: string }).text)
    .join("");
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";
  const text = getTextContent(message);

  return (
    <div className={`flex gap-3 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
      {/* Avatar */}
      <div
        className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${
          isUser
            ? "bg-primary text-white"
            : "bg-secondary/20 dark:bg-secondary/30 text-secondary dark:text-light-header"
        }`}
        aria-hidden="true"
      >
        {isUser ? <User size={14} /> : <Bot size={14} />}
      </div>

      {/* Bubble */}
      <div
        className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
          isUser
            ? "bg-primary text-white rounded-tr-sm"
            : "bg-white/80 dark:bg-[#300b40]/60 text-dark-text dark:text-[#FAF9E0]/90 border border-[#9668C0]/20 dark:border-[#9668C0]/35 rounded-tl-sm"
        }`}
      >
        {text}
      </div>
    </div>
  );
}
