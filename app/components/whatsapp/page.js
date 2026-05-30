"use client";

import "./whatsapp.css";

export default function WhatsAppButton({ phoneNumber = "1234567890", message = "" }) {
  const url = `https://wa.me/${phoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-btn"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="wa-ripple" />
      <span className="wa-ripple wa-ripple--2" />
      <svg
        className="wa-icon"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 2C8.268 2 2 8.268 2 16c0 2.469.666 4.783 1.826 6.77L2 30l7.43-1.793A13.93 13.93 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2z"
          fill="#fff"
        />
        <path
          d="M21.965 19.516c-.294-.147-1.74-.857-2.01-.954-.27-.098-.467-.147-.663.147-.196.294-.76.954-.932 1.15-.171.196-.343.22-.637.073-.294-.147-1.243-.458-2.368-1.46-.875-.78-1.466-1.743-1.637-2.037-.171-.294-.018-.453.129-.6.132-.13.294-.343.44-.514.148-.171.197-.294.295-.49.099-.196.05-.368-.024-.514-.074-.147-.663-1.6-.908-2.19-.24-.576-.483-.498-.663-.507l-.564-.01c-.196 0-.514.073-.783.368-.27.294-1.03 1.006-1.03 2.453 0 1.448 1.054 2.847 1.2 3.043.147.196 2.074 3.167 5.025 4.44.702.303 1.25.484 1.677.62.705.224 1.347.193 1.854.117.565-.085 1.74-.711 1.985-1.398.245-.686.245-1.274.171-1.397-.073-.123-.27-.196-.563-.343z"
          fill="#25D366"
        />
      </svg>
      <span className="wa-tooltip">Chat with us</span>
    </a>
  );
}
