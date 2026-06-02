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

function renderInlineMarkdown(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

function renderText(text: string): React.ReactNode {
  return text.split("\n").map((line, i, arr) => (
    <span key={i}>
      {renderInlineMarkdown(line)}
      {i < arr.length - 1 && <br />}
    </span>
  ));
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
        className={`max-w-[80%] min-w-0 px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed break-words overflow-hidden ${
          isUser
            ? "bg-primary text-white rounded-tr-sm"
            : "bg-white/80 dark:bg-[#300b40]/60 text-dark-text dark:text-[#FAF9E0]/90 border border-[#9668C0]/20 dark:border-[#9668C0]/35 rounded-tl-sm"
        }`}
      >
        {renderText(text)}
      </div>
    </div>
  );
}
