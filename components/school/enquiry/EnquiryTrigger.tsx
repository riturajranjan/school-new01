"use client";

import type { ReactNode } from "react";

type EnquiryTriggerProps = {
  className?: string;
  children?: ReactNode;
};

export default function EnquiryTrigger({ className = "enquiry-trigger", children = "ENQUIRE NOW" }: EnquiryTriggerProps) {
  const isTextTrigger = typeof children === "string";

  return (
    <button
      type="button"
      className={className}
      onClick={(event) => {
        window.dispatchEvent(
          new CustomEvent("school:open-enquiry", {
            detail: { trigger: event.currentTarget },
          }),
        );
      }}
    >
      {isTextTrigger ? (
        <>
          <span>{children}</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h14m-6-6 6 6-6 6" />
          </svg>
        </>
      ) : (
        children
      )}
    </button>
  );
}
