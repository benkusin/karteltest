"use client";

import { useEffect, useRef, useState } from "react";

// ── Types ─────────────────────────────────────────────────────────────────────

interface FormState {
  name: string;
  email: string;
  company: string;
  role: string;
  challenge: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  company?: string;
}

// ── Sub-components ────────────────────────────────────────────────────────────

const INPUT_BASE: React.CSSProperties = {
  width: "100%",
  border: "1px solid #E5E7EB",
  borderRadius: "6px",
  padding: "10px 14px",
  fontSize: "15px",
  color: "#1B1F2A",
  fontFamily: "inherit",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.15s ease",
  backgroundColor: "#FFFFFF",
};

function Label({ text, htmlFor }: { text: string; htmlFor: string }) {
  return (
    <label
      htmlFor={htmlFor}
      style={{ display: "block", fontSize: "13px", fontWeight: 500, color: "#1B1F2A", marginBottom: "6px" }}
    >
      {text}
    </label>
  );
}

function Field({ children, error }: { children: React.ReactNode; error?: string }) {
  return (
    <div>
      {children}
      {error && (
        <p style={{ fontSize: "12px", color: "#E5293A", marginTop: "4px" }}>{error}</p>
      )}
    </div>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="22" stroke="#4F5FE6" strokeWidth="2" />
      <path d="M14 24l7 7 13-14" stroke="#4F5FE6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Modal ─────────────────────────────────────────────────────────────────────

interface DemoModalProps {
  open: boolean;
  onClose: () => void;
}

export function DemoModal({ open, onClose }: DemoModalProps) {
  const [form, setForm] = useState<FormState>({ name: "", email: "", company: "", role: "", challenge: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState(false);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Animate in/out
  useEffect(() => {
    if (open) {
      // mount first, then trigger animation frame
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
      document.body.style.overflow = "hidden";
      setTimeout(() => firstInputRef.current?.focus(), 200);
    } else {
      setVisible(false);
      const t = setTimeout(() => {
        document.body.style.overflow = "";
        // reset state after close animation
        setSubmitted(false);
        setForm({ name: "", email: "", company: "", role: "", challenge: "" });
        setErrors({});
      }, 200);
      return () => clearTimeout(t);
    }
  }, [open]);

  // Escape key
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  // Auto-close after success
  useEffect(() => {
    if (submitted) {
      closeTimerRef.current = setTimeout(handleClose, 3000);
      return () => { if (closeTimerRef.current) clearTimeout(closeTimerRef.current); };
    }
  }, [submitted]); // eslint-disable-line react-hooks/exhaustive-deps

  function handleClose() {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    onClose();
  }

  function validate(): boolean {
    const e: FieldErrors = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.email.trim()) e.email = "Work email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (!form.company.trim()) e.company = "Company is required.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    // TODO: wire to HubSpot
    setSubmitted(true);
  }

  function setField(key: keyof FormState, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key as keyof FieldErrors]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function focusStyle(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    (e.currentTarget as HTMLElement).style.borderColor = "#4F5FE6";
  }
  function blurStyle(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    (e.currentTarget as HTMLElement).style.borderColor = "#E5E7EB";
  }

  if (!open && !visible) return null;

  return (
    <div
      onClick={handleClose}
      style={{
        position: "fixed", inset: 0, zIndex: 2000,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "16px",
        backgroundColor: `rgba(0,0,0,${visible ? 0.5 : 0})`,
        transition: "background-color 0.2s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Request a demo"
        style={{
          backgroundColor: "#FFFFFF",
          maxWidth: "520px",
          width: "100%",
          borderRadius: "12px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          padding: "40px",
          position: "relative",
          transform: visible ? "scale(1)" : "scale(0.96)",
          opacity: visible ? 1 : 0,
          transition: "transform 0.2s ease, opacity 0.2s ease",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          aria-label="Close modal"
          style={{
            position: "absolute", top: "16px", right: "16px",
            width: "32px", height: "32px",
            display: "flex", alignItems: "center", justifyContent: "center",
            background: "none", border: "none", cursor: "pointer",
            color: "#5E6370", borderRadius: "4px",
            transition: "color 0.15s ease",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#1B1F2A"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#5E6370"; }}
        >
          <CloseIcon />
        </button>

        {/* ── Success state ── */}
        {submitted ? (
          <div style={{ textAlign: "center", padding: "24px 0" }}>
            <CheckIcon />
            <p style={{ fontSize: "20px", fontWeight: 700, color: "#1B1F2A", marginTop: "20px" }}>
              Thanks — we&apos;ll be in touch within 24 hours.
            </p>
          </div>
        ) : (
          /* ── Form state ── */
          <>
            <h2 style={{ fontSize: "24px", fontWeight: 700, color: "#1B1F2A", margin: 0 }}>
              Request a demo
            </h2>
            <p style={{ fontSize: "15px", color: "#5E6370", marginTop: "8px", marginBottom: "32px", lineHeight: 1.6 }}>
              Tell us about your brand and we&apos;ll show you what a Kartel system looks like for your creative needs.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

                {/* Full name */}
                <Field error={errors.name}>
                  <Label text="Full name *" htmlFor="dm-name" />
                  <input
                    ref={firstInputRef}
                    id="dm-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setField("name", e.target.value)}
                    onFocus={focusStyle}
                    onBlur={blurStyle}
                    style={{ ...INPUT_BASE, borderColor: errors.name ? "#E5293A" : "#E5E7EB" }}
                  />
                </Field>

                {/* Work email */}
                <Field error={errors.email}>
                  <Label text="Work email *" htmlFor="dm-email" />
                  <input
                    id="dm-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setField("email", e.target.value)}
                    onFocus={focusStyle}
                    onBlur={blurStyle}
                    style={{ ...INPUT_BASE, borderColor: errors.email ? "#E5293A" : "#E5E7EB" }}
                  />
                </Field>

                {/* Company */}
                <Field error={errors.company}>
                  <Label text="Company *" htmlFor="dm-company" />
                  <input
                    id="dm-company"
                    type="text"
                    required
                    value={form.company}
                    onChange={(e) => setField("company", e.target.value)}
                    onFocus={focusStyle}
                    onBlur={blurStyle}
                    style={{ ...INPUT_BASE, borderColor: errors.company ? "#E5293A" : "#E5E7EB" }}
                  />
                </Field>

                {/* Role */}
                <div>
                  <Label text="Role" htmlFor="dm-role" />
                  <select
                    id="dm-role"
                    value={form.role}
                    onChange={(e) => setField("role", e.target.value)}
                    onFocus={focusStyle}
                    onBlur={blurStyle}
                    style={{ ...INPUT_BASE, appearance: "auto", cursor: "pointer" }}
                  >
                    <option value="" disabled>Select your role</option>
                    <option value="cmo">CMO / VP Marketing</option>
                    <option value="creative">Head of Creative</option>
                    <option value="exec">CEO / COO</option>
                    <option value="agency">Agency Director</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Challenge */}
                <div>
                  <Label text="What's your biggest creative production challenge?" htmlFor="dm-challenge" />
                  <textarea
                    id="dm-challenge"
                    rows={3}
                    value={form.challenge}
                    onChange={(e) => setField("challenge", e.target.value)}
                    onFocus={focusStyle}
                    onBlur={blurStyle}
                    placeholder="Optional — helps us prepare"
                    style={{
                      ...INPUT_BASE,
                      resize: "vertical",
                      minHeight: "80px",
                      lineHeight: 1.6,
                    }}
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                style={{
                  marginTop: "24px",
                  width: "100%",
                  backgroundColor: "#4F5FE6",
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: "6px",
                  padding: "12px",
                  fontSize: "15px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "background-color 0.2s ease",
                  fontFamily: "inherit",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#3D4BD4"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#4F5FE6"; }}
              >
                Submit request →
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
