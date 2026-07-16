import { useEffect, useState } from "react";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 500);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-30 flex flex-col gap-3 transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <a
        href="https://wa.me/"
        aria-label="WhatsApp us"
        className="grid h-12 w-12 place-items-center rounded-full bg-ink text-bone shadow-lg transition hover:bg-bronze"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M20.5 3.5A11 11 0 0 0 3.4 17.7L2 22l4.4-1.4A11 11 0 1 0 20.5 3.5Zm-8.4 17a8.9 8.9 0 0 1-4.6-1.3l-.3-.2-2.6.8.8-2.5-.2-.3a9 9 0 1 1 6.9 3.5Zm5-6.8c-.3-.1-1.6-.8-1.8-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1-.2.2-.3.2-.6.1a7 7 0 0 1-3.5-3c-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5 0-.2-.6-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.9.4c-.3.3-1.1 1.1-1.1 2.7s1.1 3.1 1.3 3.3c.2.3 2.2 3.4 5.3 4.7 2 .8 2.7.9 3.7.7.6-.1 1.7-.7 2-1.4.2-.6.2-1.2.2-1.4l-.6-.2Z" />
        </svg>
      </a>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className="grid h-12 w-12 place-items-center rounded-full border border-line bg-bone text-ink transition hover:border-bronze hover:text-bronze"
      >
        <span aria-hidden>↑</span>
      </button>
    </div>
  );
}

export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
      setP(Math.min(1, Math.max(0, scrolled)));
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-50 h-[2px] bg-transparent">
      <div
        className="h-full bg-bronze transition-transform"
        style={{ transform: `scaleX(${p})`, transformOrigin: "left" }}
      />
    </div>
  );
}
