import { useState, FormEvent } from "react";
import { z } from "zod";
import { joinWaitlist } from "@/functions/waitlist";

const schema = z.object({
  email: z.string().trim().email("Enter a valid email").max(255),
});

export function WaitlistForm({
  variant = "hero",
  showSocialProof = true,
}: {
  variant?: "hero" | "cta";
  showSocialProof?: boolean;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [msg, setMsg] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ email });
    if (!parsed.success) {
      setStatus("error");
      setMsg(parsed.error.issues[0].message);
      return;
    }
    setStatus("loading");
    try {
      const result = await joinWaitlist({ data: { email: parsed.data.email, source: variant } });
      setStatus("ok");
      setMsg(result.message);
      setEmail("");
    } catch {
      setStatus("error");
      setMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-xl">
      <form
        onSubmit={onSubmit}
        className="w-full flex flex-col sm:flex-row gap-2"
        aria-label="Join the waitlist"
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          disabled={status === "loading" || status === "ok"}
          className="flex-1 bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-court-lime focus:bg-white/15 transition disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "ok"}
          className="bg-court-lime text-court-navy font-display font-bold uppercase tracking-wider px-6 py-3 hover:bg-court-lime/90 active:translate-y-px transition whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Joining…" : "Join the Waitlist"}
        </button>
      </form>
      {status !== "idle" && status !== "loading" && (
        <p
          className={`mt-2 text-sm ${status === "ok" ? "text-court-lime" : "text-red-300"}`}
          role="status"
        >
          {msg}
        </p>
      )}
      {showSocialProof && (
        <div className={`mt-4 flex items-center gap-3 ${variant === "cta" ? "justify-center" : ""}`}>
          <div className="flex -space-x-2">
            {["#C8DC00", "#FFFFFF", "#1A3FA8", "#C8DC00", "#FFFFFF"].map((c, i) => (
              <span
                key={i}
                className="w-7 h-7 rounded-full border-2 border-background flex items-center justify-center text-[10px] font-display font-bold"
                style={{ backgroundColor: c, color: c === "#1A3FA8" ? "#fff" : "#0D1F5C" }}
              >
                {["JL", "MR", "AS", "TK", "DH"][i]}
              </span>
            ))}
          </div>
          <p className="text-white/65 text-sm">
            Joining <span className="text-white font-semibold">240+ players</span> already on the list
          </p>
        </div>
      )}
    </div>
  );
}
