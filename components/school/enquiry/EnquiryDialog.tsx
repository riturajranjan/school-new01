"use client";

import { KeyboardEvent, useEffect, useRef, useState } from "react";
import EnquiryForm from "./EnquiryForm";
import EnquirySuccess from "./EnquirySuccess";

const focusableSelector =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export default function EnquiryDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const openerRef = useRef<HTMLElement | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const previousBodyOverflow = useRef("");

  const closeDialog = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const openDialog = (event: Event) => {
      const customEvent = event as CustomEvent<{ trigger?: HTMLElement }>;
      openerRef.current = customEvent.detail?.trigger ?? (document.activeElement as HTMLElement | null);
      setIsSubmitted(false);
      setIsOpen(true);
    };

    window.addEventListener("school:open-enquiry", openDialog);
    return () => window.removeEventListener("school:open-enquiry", openDialog);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      openerRef.current?.focus();
      document.body.style.overflow = previousBodyOverflow.current;
      return;
    }

    previousBodyOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTarget = panelRef.current?.querySelector<HTMLElement>(focusableSelector);
    window.setTimeout(() => focusTarget?.focus(), 80);

    return () => {
      document.body.style.overflow = previousBodyOverflow.current;
    };
  }, [isOpen]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      closeDialog();
      return;
    }

    if (event.key !== "Tab" || !panelRef.current) {
      return;
    }

    const focusable = Array.from(panelRef.current.querySelectorAll<HTMLElement>(focusableSelector));
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (!first || !last) {
      return;
    }

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <div className={`enquiry-dialog-root ${isOpen ? "is-open" : ""}`} aria-hidden={!isOpen}>
      <button className="enquiry-backdrop" type="button" tabIndex={isOpen ? 0 : -1} onClick={closeDialog} aria-label="Close enquiry form" />

      <div
        className="enquiry-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-title"
        aria-describedby="enquiry-description"
        ref={panelRef}
        onKeyDown={handleKeyDown}
      >
        <div className="enquiry-visual">
          <img src="/assets/hero-students.png" alt="Indian students on a premium school campus" />
          <div className="enquiry-visual-overlay">
            <span>ADMISSIONS</span>
            <strong>2026–27</strong>
            <h2>
              Let's Find the
              <br />
              Right Learning Path.
            </h2>
            <p id="enquiry-description">
              Tell us a little about your child and our admissions team will help you with the next steps.
            </p>
            <div className="enquiry-trust">
              <span>Classes 0–12</span>
              <span>Campus Visit Available</span>
              <span>Admission Guidance</span>
            </div>
          </div>
          <div className="enquiry-shape" aria-hidden="true">
            <span></span>
            <i></i>
          </div>
        </div>

        <div className="enquiry-panel">
          <div className="enquiry-panel-header">
            <div>
              <span>ADMISSION ENQUIRY</span>
              <h2 id="enquiry-title">It only takes a minute to get started.</h2>
            </div>
            <button className="enquiry-close" type="button" aria-label="Close enquiry form" onClick={closeDialog}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>

          {isSubmitted ? <EnquirySuccess onClose={closeDialog} /> : <EnquiryForm onSuccess={() => setIsSubmitted(true)} />}
        </div>
      </div>
    </div>
  );
}
