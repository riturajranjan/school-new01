"use client";

type EnquirySuccessProps = {
  onClose: () => void;
};

export default function EnquirySuccess({ onClose }: EnquirySuccessProps) {
  return (
    <div className="enquiry-success" role="status" aria-live="polite">
      <div className="success-mark" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d="M5 12.5 9.4 17 19 7" />
        </svg>
      </div>
      <span>DEMO UI SUBMISSION</span>
      <h3>ENQUIRY RECEIVED</h3>
      <p>
        Thank you for reaching out. Our admissions team will contact you regarding the next steps.
      </p>
      <div className="success-actions">
        <a href="#admissions" onClick={onClose}>BOOK CAMPUS VISIT</a>
        <button type="button" onClick={onClose}>CLOSE</button>
      </div>
    </div>
  );
}
