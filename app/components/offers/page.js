"use client";

import { useState } from "react";
import "./offers.css";

const defaultOffers = [
  {
    id: 1,
    badge: "20%\nOFF",
    badgeClass: "green",
    title: "OSE Training",
    desc: "Expert preparation for OSCE success.",
    link: "https://forms.zohopublic.in/mindtreenursingsolutions/form/ClientDetails1/formperma/76KIBTp9LCYH_lA6B0jGSwAH8FJ4nmjU8ovh7b6l-tQ",
  },
  {
    id: 2,
    badge: "FREE",
    badgeClass: "amber",
    title: "IQN Programme",
    desc: "Guidance for New Zealand nursing registration.",
    link: "https://forms.zohopublic.in/mindtreenursingsolutions/form/ClientDetails1/formperma/76KIBTp9LCYH_lA6B0jGSwAH8FJ4nmjU8ovh7b6l-tQ",
  },
  {
    id: 3,
    badge: "30%\nOFF",
    badgeClass: "pink",
    title: "Mindtree APP",
    desc: "Courses, updates, and support in one app.",
    link: "https://forms.zohopublic.in/mindtreenursingsolutions/form/ClientDetails1/formperma/76KIBTp9LCYH_lA6B0jGSwAH8FJ4nmjU8ovh7b6l-tQ",
  },
];

export default function OffersButton({ offers = defaultOffers }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`offers-panel ${open ? "offers-panel--open" : ""}`}
        aria-hidden={!open}
      >
        <div className="offers-panel__header">
          <span>🎉 Current Offers</span>
          <button
            className="offers-panel__close"
            onClick={() => setOpen(false)}
            aria-label="Close offers"
          >
            ✕
          </button>
        </div>

        {offers.map((o) => (
          
             <a key={o.id} className="offer-item" href={o.link} target="_blank" rel="noopener noreferrer">
            <div className={`offer-badge offer-badge--${o.badgeClass}`}>
              {o.badge.split("\n").map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </div>
            <div className="offer-info">
              <p className="offer-info__title">{o.title}</p>
              <p className="offer-info__desc">{o.desc}</p>
            </div>
            <span className="offer-item__arrow">&#8594;</span>
          </a>
        ))}
      </div>

      <button
        className="offers-fab"
        onClick={() => setOpen((v) => !v)}
        aria-label="View offers"
        aria-expanded={open}
      >
        <span className="offers-fab__ripple" />
        <span className="offers-fab__ripple offers-fab__ripple--2" />
        <svg
          className="offers-fab__icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="24"
          height="24"
        >
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
          <line x1="7" y1="7" x2="7.01" y2="7" />
        </svg>
        {offers.length > 0 && (
          <span className="offers-fab__dot">{offers.length}</span>
        )}
        <span className="offers-fab__tooltip">View offers</span>
      </button>
    </>
  );
}