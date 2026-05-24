import { createServerFn } from "@tanstack/react-start";
import { getEvent } from "vinxi/http";
import { z } from "zod";

interface CloudflareEnv {
  WAITLIST_KV: {
    get(key: string): Promise<string | null>;
    put(key: string, value: string): Promise<void>;
  };
}

const schema = z.object({
  email: z.string().trim().email("Enter a valid email").max(255),
  source: z.enum(["hero", "cta"]).optional(),
});

export const joinWaitlist = createServerFn({ method: "POST" })
  .inputValidator(schema)
  .handler(async ({ data }) => {
    const { email, source } = data;
    const event = getEvent();
    const env = (
      event.context as { cloudflare?: { env?: CloudflareEnv } }
    ).cloudflare?.env;

    if (!env?.WAITLIST_KV) {
      console.error("[waitlist] WAITLIST_KV binding not configured");
      throw new Error("Service unavailable — please try again later.");
    }

    const key = `email:${email.toLowerCase()}`;
    const existing = await env.WAITLIST_KV.get(key);
    if (existing) {
      return { ok: true, message: "You're already on the list!" };
    }

    await env.WAITLIST_KV.put(
      key,
      JSON.stringify({
        email,
        source: source ?? "unknown",
        createdAt: new Date().toISOString(),
      }),
    );

    return { ok: true, message: "You're on the list. We'll be in touch." };
  });
