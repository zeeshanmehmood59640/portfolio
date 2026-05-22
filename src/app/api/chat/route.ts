import { anthropic } from "@ai-sdk/anthropic";
import { streamText, convertToModelMessages, type UIMessage } from "ai";
import { ratelimit } from "@/lib/ratelimit";
import { chatbotSystemPrompt } from "@/lib/content";
import { headers } from "next/headers";

export const maxDuration = 30;

export async function POST(req: Request) {
  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headersList.get("x-real-ip") ??
    "anonymous";

  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return new Response("Too many requests. Please try again later.", {
      status: 429,
    });
  }

  const { messages } = (await req.json()) as { messages: UIMessage[] };

  const result = streamText({
    model: anthropic("claude-haiku-4-5-20251001"),
    system: chatbotSystemPrompt,
    messages: await convertToModelMessages(messages),
    maxOutputTokens: 512,
    providerOptions: {
      anthropic: { cacheControl: { type: "ephemeral" } },
    },
  });

  return result.toUIMessageStreamResponse();
}
