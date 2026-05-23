// ============================================================
//  EduCore — Icons.jsx  (Complete Icon Library — 120+ Icons)
//  Admin · Teacher · Student Portals
//
//  Usage:
//    import { DashboardIcon, PlusIcon } from '@/components/common/Icons'
//    <DashboardIcon size={20} color="#7c6fff" />
//    <PlusIcon size={14} color="white" strokeWidth={2.5} />
//
//  Props (all icons accept):
//    size        — number  (default 20)
//    color       — string  (default "currentColor")
//    strokeWidth — number  (default 2)
//    className   — string  (default "")
//
//  SECTIONS:
//    1.  Brand / Logo
//    2.  Navigation — Sidebar
//    3.  Navigation — Topbar / Actions
//    4.  Academics — Students & Teachers
//    5.  Academics — Subjects
//    6.  Attendance & Status
//    7.  Results & Grades
//    8.  Communication & Notices
//    9.  Finance & Fees
//    10. Schedule & Time
//    11. Files & Documents
//    12. Media & UI Controls
//    13. Data & Analytics
//    14. Settings & System
//    15. Auth & Security
//    16. Filled / Special Variants
// ============================================================

// ─────────────────────────────────────────────────────────────
//  SECTION 1 — BRAND / LOGO
// ─────────────────────────────────────────────────────────────

export const EduCenterLogo = ({ size = 45, showText = true }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
    <svg
      width={size}
      height={size}
      viewBox="136 90 182 200"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      <defs>
        <linearGradient id="capGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b85ff" />
          <stop offset="100%" stopColor="#6c63ff" />
        </linearGradient>
      </defs>

      {/* Book 3 — bottom, pink */}
      <g transform="translate(136,248)">
        <rect x="0" y="0" width="128" height="22" rx="3" fill="#ffe6ec" />
        <rect x="0" y="0" width="16" height="22" rx="3" fill="#ff6584" />
        <rect x="112" y="0" width="16" height="22" rx="3" fill="#ff6584" />
      </g>

      {/* Book 2 — middle, teal */}
      <g transform="translate(142,224)">
        <rect x="0" y="0" width="116" height="26" rx="3" fill="#e3faf8" />
        <rect x="0" y="0" width="14" height="26" rx="3" fill="#4ecdc4" />
        <rect x="102" y="0" width="14" height="26" rx="3" fill="#4ecdc4" />
      </g>

      {/* Book 1 — top, purple */}
      <g transform="translate(148,196)">
        <rect x="0" y="0" width="104" height="30" rx="4" fill="#ede9ff" />
        <rect x="0" y="0" width="14" height="30" rx="4" fill="#6c63ff" />
        <rect x="90" y="0" width="14" height="30" rx="4" fill="#6c63ff" />
        <rect
          fill="rgba(108,99,255,0.18)"
          x="22"
          y="8"
          width="60"
          height="3"
          rx="1.5"
        />
        <rect
          fill="rgba(108,99,255,0.12)"
          x="22"
          y="16"
          width="44"
          height="3"
          rx="1.5"
        />
      </g>

      {/* Cap base cylinder */}
      <rect
        x="152"
        y="138"
        width="96"
        height="14"
        rx="7"
        fill="url(#capGrad)"
      />

      {/* Cap top diamond */}
      <polygon points="200,92 256,118 200,136 144,118" fill="url(#capGrad)" />

      {/* Tassel strings */}
      <line
        x1="256"
        y1="118"
        x2="256"
        y2="158"
        stroke="#fdcb6e"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="256"
        y1="158"
        x2="248"
        y2="174"
        stroke="#fdcb6e"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="256"
        y1="158"
        x2="256"
        y2="175"
        stroke="#fdcb6e"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="256"
        y1="158"
        x2="264"
        y2="174"
        stroke="#fdcb6e"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Tassel knot + end balls */}
      <circle cx="256" cy="158" r="5" fill="#fdcb6e" />
      <circle cx="248" cy="177" r="3.5" fill="#fdcb6e" />
      <circle cx="256" cy="178" r="3.5" fill="#fdcb6e" />
      <circle cx="264" cy="177" r="3.5" fill="#fdcb6e" />

      {/* Cap top button */}
      <circle cx="200" cy="118" r="5" fill="#ffffff" />

      {/* Stars */}
      <g transform="translate(118,138) rotate(15)">
        <polygon
          points="0,-9 2.1,-3 8.6,-2.8 3.5,1.1 5.3,7.6 0,4 -5.3,7.6 -3.5,1.1 -8.6,-2.8 -2.1,-3"
          fill="#fdcb6e"
          opacity="0.85"
        />
      </g>
      <g transform="translate(236,84) rotate(-10)">
        <polygon
          points="0,-6 1.4,-2 4.6,-1.9 2.3,0.7 3.5,5.1 0,2.7 -3.5,5.1 -2.3,0.7 -4.6,-1.9 -1.4,-2"
          fill="#fdcb6e"
          opacity="0.70"
        />
      </g>
      <g transform="translate(286,210) rotate(5)">
        <polygon
          points="0,-7 1.6,-2.3 5.4,-2.2 2.7,0.9 4.1,5.9 0,3.2 -4.1,5.9 -2.7,0.9 -5.4,-2.2 -1.6,-2.3"
          fill="#fdcb6e"
          opacity="0.60"
        />
      </g>
    </svg>

    {showText && (
      <div style={{ lineHeight: 1.2 }}>
        <div
          style={{
            fontWeight: 800,
            fontSize: "1.05rem",
            letterSpacing: "-0.02em",
            color: "var(--text)",
          }}
        >
          Edu<span style={{ color: "#6c63ff" }}>-Center</span>
        </div>
        <div
          style={{
            fontSize: "0.6rem",
            letterSpacing: "0.1em",
            color: "#8892a4",
            fontWeight: 600,
            marginTop: 2,
          }}
        >
          EDUCATION MANAGEMENT
        </div>
      </div>
    )}
  </div>
);

// ─────────────────────────────────────────────────────────────
//  SECTION 2 — NAVIGATION (Sidebar)
// ─────────────────────────────────────────────────────────────

export function DashboardIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <rect
        x="3"
        y="3"
        width="7"
        height="7"
        rx="1.5"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <rect
        x="14"
        y="3"
        width="7"
        height="7"
        rx="1.5"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <rect
        x="3"
        y="14"
        width="7"
        height="7"
        rx="1.5"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <rect
        x="14"
        y="14"
        width="7"
        height="7"
        rx="1.5"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export function StudentsIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <circle cx="9" cy="7" r="4" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function TeachersIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <rect
        x="2"
        y="3"
        width="20"
        height="13"
        rx="2"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M8 21h8M12 16v5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M7 8h5M7 11h3"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <circle cx="16" cy="9.5" r="2" stroke={color} strokeWidth={strokeWidth} />
    </svg>
  );
}

export function ClassesIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M4 19.5A2.5 2.5 0 016.5 17H20"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M9 7h7M9 11h5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function AttendanceIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M9 11l3 3L22 4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ResultsIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8L14 2z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 2v6h6M16 13H8M16 17H8M10 9H8"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function TimetableIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <rect
        x="3"
        y="4"
        width="18"
        height="17"
        rx="2"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M3 9h18M8 4v5M16 4v5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M7 13h2v2H7zM11 13h2v2h-2zM15 13h2v2h-2zM7 17h2v2H7zM11 17h2v2h-2z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FeesIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <rect
        x="1"
        y="4"
        width="22"
        height="16"
        rx="2"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path d="M1 10h22" stroke={color} strokeWidth={strokeWidth} />
      <circle cx="12" cy="15" r="2" stroke={color} strokeWidth={strokeWidth} />
    </svg>
  );
}

export function NoticeIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.73 21a2 2 0 01-3.46 0"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ReportsIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M18 20V10M12 20V4M6 20v-6"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ProfileIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <circle cx="12" cy="8" r="4" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M20 21a8 8 0 10-16 0"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SettingsIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <circle cx="12" cy="12" r="3" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export function LogoutIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 17l5-5-5-5M21 12H9"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LibraryIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M4 19.5A2.5 2.5 0 016.5 17H20"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M8 7h8M8 11h5M8 15h3"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function EventsIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <rect
        x="3"
        y="4"
        width="18"
        height="17"
        rx="2"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M3 9h18M8 4v5M16 4v5M8 14l2 2 4-4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AnnouncementIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M3 11l19-9-9 19-2-8-8-2z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ExamIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <rect
        x="9"
        y="3"
        width="6"
        height="4"
        rx="1"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M9 12h6M9 16h4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function AssignmentIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
//  SECTION 3 — TOPBAR / ACTION ICONS
// ─────────────────────────────────────────────────────────────

export function SearchIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <circle cx="11" cy="11" r="8" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M21 21l-4.35-4.35"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BellIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.73 21a2 2 0 01-3.46 0"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MenuIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M3 12h18M3 6h18M3 18h18"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MoonIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SunIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <circle cx="12" cy="12" r="5" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PlusIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M12 5v14M5 12h14"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function EditIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DeleteIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <polyline
        points="3 6 5 6 21 6"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 11v6M14 11v6M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DownloadIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="7 10 12 15 17 10"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="12"
        y1="15"
        x2="12"
        y2="3"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function UploadIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="17 8 12 3 7 8"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="12"
        y1="3"
        x2="12"
        y2="15"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function FilterIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <polygon
        points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SortIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M3 6h18M6 12h12M10 18h4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CloseIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M18 6L6 18M6 6l12 12"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MoreIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <circle cx="12" cy="5" r="1" stroke={color} strokeWidth={strokeWidth} />
      <circle cx="12" cy="12" r="1" stroke={color} strokeWidth={strokeWidth} />
      <circle cx="12" cy="19" r="1" stroke={color} strokeWidth={strokeWidth} />
    </svg>
  );
}

export function MoreHIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <circle cx="5" cy="12" r="1" stroke={color} strokeWidth={strokeWidth} />
      <circle cx="12" cy="12" r="1" stroke={color} strokeWidth={strokeWidth} />
      <circle cx="19" cy="12" r="1" stroke={color} strokeWidth={strokeWidth} />
    </svg>
  );
}

export function RefreshIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <polyline
        points="23 4 23 10 17 10"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="1 20 1 14 7 14"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PrintIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <polyline
        points="6 9 6 2 18 2 18 9"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <rect
        x="6"
        y="14"
        width="12"
        height="8"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ShareIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <circle cx="18" cy="5" r="3" stroke={color} strokeWidth={strokeWidth} />
      <circle cx="6" cy="12" r="3" stroke={color} strokeWidth={strokeWidth} />
      <circle cx="18" cy="19" r="3" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CopyIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <rect
        x="9"
        y="9"
        width="13"
        height="13"
        rx="2"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SaveIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 21v-8H7v8M7 3v5h8"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
//  SECTION 4 — ACADEMICS: Students & Teachers
// ─────────────────────────────────────────────────────────────

export function StudentCapIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M22 10l-10-6L2 10l10 6 10-6z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 12v5c0 1.65 2.69 3 6 3s6-1.35 6-3v-5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M22 10v5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BadgeIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="4"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <circle cx="12" cy="9" r="3" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M6 20c0-3.31 2.69-6 6-6s6 2.69 6 6"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IdCardIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <rect
        x="2"
        y="5"
        width="20"
        height="14"
        rx="2"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <circle cx="8" cy="12" r="2.5" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M13 10h5M13 14h3"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function GradeIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TrophyIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M6 9H4a2 2 0 01-2-2V5h4M18 9h2a2 2 0 002-2V5h-4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 5h12v7a6 6 0 01-12 0V5z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M8 21h8M12 18v3"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MedalIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <circle cx="12" cy="15" r="6" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 2l2.4 4.4H19l-3.6 2.8 1.4 4.8L12 11.5l-4.8 2.5 1.4-4.8L5 6.4h4.6L12 2z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function RankIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M3 3v18h18"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="7"
        y="10"
        width="3"
        height="8"
        rx="1"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <rect
        x="12.5"
        y="6"
        width="3"
        height="12"
        rx="1"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <rect
        x="18"
        y="13"
        width="3"
        height="5"
        rx="1"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export function AdmissionIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8L14 2z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 2v6h6"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M9 15l2 2 4-4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
//  SECTION 5 — ACADEMIC SUBJECTS
// ─────────────────────────────────────────────────────────────

export function MathIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M12 6v12M6 12h12"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M5 4l2 2-2 2M5 16l2 2-2 2"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 7h2M17 17h2"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ScienceIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M9 3h6v7l4 7H5l4-7V3z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 3H6M18 3h-3"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <circle cx="9" cy="15" r="1" fill={color} />
      <circle cx="14" cy="14" r="1" fill={color} />
    </svg>
  );
}

export function EnglishIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M4 7V4h16v3"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 20h6"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M12 4v16"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HistoryIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <polyline
        points="12 8 12 12 14 14"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.05 11a9 9 0 1017.9 0A9 9 0 003.05 11z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <polyline
        points="1 6 3 11 7 9"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GeographyIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export function ArtIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth={strokeWidth} />
      <circle cx="8.5" cy="9.5" r="1.5" fill={color} />
      <circle cx="15.5" cy="9.5" r="1.5" fill={color} />
      <circle cx="12" cy="6" r="1.5" fill={color} />
      <circle
        cx="12"
        cy="15.5"
        r="2.5"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export function MusicIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M9 18V5l12-2v13"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="6" cy="18" r="3" stroke={color} strokeWidth={strokeWidth} />
      <circle cx="18" cy="16" r="3" stroke={color} strokeWidth={strokeWidth} />
    </svg>
  );
}

export function PEIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <circle cx="12" cy="5" r="2" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M12 7v5l-3 5M12 12l3 5M9 10H6M18 10h-3"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ICTIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <rect
        x="2"
        y="3"
        width="20"
        height="14"
        rx="2"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M8 21h8M12 17v4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M8 10l3 3-3 3M13 16h3"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
//  SECTION 6 — ATTENDANCE & STATUS
// ─────────────────────────────────────────────────────────────

export function CheckIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M20 6L9 17l-5-5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckCircleIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M22 11.08V12a10 10 0 11-5.93-9.14"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <polyline
        points="22 4 12 14.01 9 11.01"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function XCircleIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M15 9l-6 6M9 9l6 6"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function AlertIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 9v4M12 17h.01"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function InfoIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M12 8h.01M12 12v4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PresentIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M9 12l2 2 4-4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AbsentIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M9 9l6 6M15 9l-6 6"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LateIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M12 6v6l4 2"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ActiveIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <circle cx="12" cy="12" r="3" fill={color} />
      <circle
        cx="12"
        cy="12"
        r="7"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeOpacity="0.4"
      />
      <circle
        cx="12"
        cy="12"
        r="11"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeOpacity="0.15"
      />
    </svg>
  );
}

export function OfflineIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <circle cx="12" cy="12" r="3" fill={color} strokeOpacity="0.5" />
      <circle
        cx="12"
        cy="12"
        r="8"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeOpacity="0.25"
      />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
//  SECTION 7 — RESULTS & GRADES
// ─────────────────────────────────────────────────────────────

export function ChartBarIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M18 20V10M12 20V4M6 20v-6"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChartLineIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <polyline
        points="22 12 18 12 15 21 9 3 6 12 2 12"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChartPieIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M21.21 15.89A10 10 0 118 2.83"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M22 12A10 10 0 0012 2v10z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TrendUpIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <polyline
        points="23 6 13.5 15.5 8.5 10.5 1 18"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="17 6 23 6 23 12"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TrendDownIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <polyline
        points="23 18 13.5 8.5 8.5 13.5 1 6"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="17 18 23 18 23 12"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ScoreIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PercentIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <line
        x1="19"
        y1="5"
        x2="5"
        y2="19"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <circle
        cx="6.5"
        cy="6.5"
        r="2.5"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <circle
        cx="17.5"
        cy="17.5"
        r="2.5"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export function ProgressIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeOpacity="0.2"
      />
      <path
        d="M12 2a10 10 0 0110 10"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
//  SECTION 8 — COMMUNICATION & NOTICES
// ─────────────────────────────────────────────────────────────

export function MessageIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChatIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M3 6a2 2 0 012-2h14a2 2 0 012 2v9a2 2 0 01-2 2H8l-4 4V6z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 10h8M8 14h5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MailIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <rect
        x="2"
        y="4"
        width="20"
        height="16"
        rx="2"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M2 7l10 7 10-7"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function InboxIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <polyline
        points="22 12 16 12 14 15 10 15 8 12 2 12"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PhoneIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PinIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="3" stroke={color} strokeWidth={strokeWidth} />
    </svg>
  );
}

export function LinkIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
//  SECTION 9 — FINANCE & FEES
// ─────────────────────────────────────────────────────────────

export function WalletIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <rect
        x="1"
        y="6"
        width="22"
        height="15"
        rx="2"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path d="M1 10h22" stroke={color} strokeWidth={strokeWidth} />
      <circle cx="17" cy="15.5" r="1.5" fill={color} />
    </svg>
  );
}

export function CoinIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M12 6v2M12 16v2M8.5 9.5C8.5 8.12 10.07 7 12 7s3.5 1.12 3.5 2.5c0 1.5-1.5 2.5-3.5 2.5S8.5 13 8.5 14.5c0 1.38 1.57 2.5 3.5 2.5s3.5-1.12 3.5-2.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ReceiptIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M4 2v22l3-3 3 3 3-3 3 3 3-3V2H4z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M8 8h8M8 12h8M8 16h4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PaymentDueIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <rect
        x="1"
        y="4"
        width="22"
        height="16"
        rx="2"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path d="M1 10h22" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M16 14h.01M19 14h.01"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M5 14h4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ScholarshipIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M22 10l-10-6L2 10l10 6 10-6z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 12v5c0 1.65 2.69 3 6 3s6-1.35 6-3v-5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <circle cx="19" cy="19" r="3" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M18 19l.9.9L20.7 18"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
//  SECTION 10 — SCHEDULE & TIME
// ─────────────────────────────────────────────────────────────

export function CalendarIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <rect
        x="3"
        y="4"
        width="18"
        height="18"
        rx="2"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M16 2v4M8 2v4M3 10h18"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ClockIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M12 6v6l4 2"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function TimerIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <circle cx="12" cy="13" r="9" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M12 9v4l2.5 2.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M9 2h6M12 2v3"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PeriodIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <rect
        x="3"
        y="4"
        width="18"
        height="16"
        rx="2"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M3 9h18M8 4v5M16 4v5M8 14h2M8 17h5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HolidayIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 22V12h6v10"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
//  SECTION 11 — FILES & DOCUMENTS
// ─────────────────────────────────────────────────────────────

export function FileIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9L13 2z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 2v7h7"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function FilePDFIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8L14 2z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 2v6h6"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M7 15h1.5a1.5 1.5 0 000-3H7v6M14 12h2M14 15h1.5M17.5 12v6"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FolderIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2v11z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AttachmentIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ClipboardIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M9 5H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <rect
        x="9"
        y="3"
        width="6"
        height="4"
        rx="1"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M9 12h6M9 16h4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
//  SECTION 12 — MEDIA & UI CONTROLS
// ─────────────────────────────────────────────────────────────

export function PlayIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <polygon
        points="5 3 19 12 5 21 5 3"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PauseIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <rect
        x="6"
        y="4"
        width="4"
        height="16"
        rx="1"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <rect
        x="14"
        y="4"
        width="4"
        height="16"
        rx="1"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export function ChevronRightIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M9 18l6-6-6-6"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronLeftIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M15 18l-6-6 6-6"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronUpIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M18 15l-6-6-6 6"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronDownIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M6 9l6 6 6-6"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRightIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M5 12h14M12 5l7 7-7 7"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowLeftIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M19 12H5M12 19l-7-7 7-7"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ExternalIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 3h6v6M10 14L21 3"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function EyeIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3" stroke={color} strokeWidth={strokeWidth} />
    </svg>
  );
}

export function EyeOffIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="1"
        y1="1"
        x2="23"
        y2="23"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ZoomInIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <circle cx="11" cy="11" r="8" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M21 21l-4.35-4.35M11 8v6M8 11h6"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function GridIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <rect
        x="3"
        y="3"
        width="7"
        height="7"
        rx="1"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <rect
        x="14"
        y="3"
        width="7"
        height="7"
        rx="1"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <rect
        x="3"
        y="14"
        width="7"
        height="7"
        rx="1"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <rect
        x="14"
        y="14"
        width="7"
        height="7"
        rx="1"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export function ListIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ToggleIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <rect
        x="1"
        y="5"
        width="22"
        height="14"
        rx="7"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <circle cx="16" cy="12" r="4" fill={color} />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
//  SECTION 13 — DATA & ANALYTICS
// ─────────────────────────────────────────────────────────────

export function DatabaseIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <ellipse
        cx="12"
        cy="5"
        rx="9"
        ry="3"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export function AnalyticsIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M3 3v18h18"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 16l4-4 4 4 4-8"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function InsightIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M9 18h6M10 22h4M12 2a7 7 0 017 7c0 2.38-1.19 4.47-3 5.74V17H8v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 017-7z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ComparatorIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M12 3v18M3 8l9-5 9 5M3 16l9 5 9-5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SummaryIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8L14 2z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 2v6h6M7 9h2M7 13h10M7 17h10"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
//  SECTION 14 — SETTINGS & SYSTEM
// ─────────────────────────────────────────────────────────────

export function ShieldIcon({
  size = 12,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LockIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <rect
        x="3"
        y="11"
        width="18"
        height="11"
        rx="2"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M7 11V7a5 5 0 0110 0v4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function UnlockIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <rect
        x="3"
        y="11"
        width="18"
        height="11"
        rx="2"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M7 11V7a5 5 0 019.9-1"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function KeyIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <circle
        cx="7.5"
        cy="15.5"
        r="5.5"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M21 2l-9.6 9.6M15.5 7.5L19 11M17 5l2 2"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PermissionsIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AdminIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <circle cx="12" cy="8" r="4" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M4 20c0-4 3.58-7 8-7"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M18 14l1.5 3 3-4.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WifiIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="20" r="1" fill={color} />
    </svg>
  );
}

export function HelpIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M12 17h.01"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BugIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <circle cx="12" cy="13" r="5" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M12 8V2M4.93 10.93L2 8M19.07 10.93L22 8"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M4 14H2M22 14h-2M7 18.5l-2 2M17 18.5l2 2"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
//  SECTION 15 — AUTH & SECURITY
// ─────────────────────────────────────────────────────────────

export function LoginIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 17l5-5-5-5M15 12H3"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FingerprintIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M18.9 7a8 8 0 011.1 5v1a6 6 0 00.8 3"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 11a4 4 0 018 0v1a10 10 0 002 6"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 11v2a14 14 0 01.3 3"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.07 11a8 8 0 00.1 2.6"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.86 17a14 14 0 001.14-4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 13.5A15.05 15.05 0 002 13a10 10 0 0118.29-5.6"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function UserCheckIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <circle cx="8.5" cy="7" r="4" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M17 11l2 2 4-4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function UserXIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <circle cx="8.5" cy="7" r="4" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M18 8l4 4M22 8l-4 4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ResetPasswordIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
//  SECTION 16 — FILLED / SPECIAL VARIANTS
// ─────────────────────────────────────────────────────────────

export function StarFilledIcon({
  size = 20,
  color = "currentColor",
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={className}
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export function HeartFilledIcon({
  size = 20,
  color = "currentColor",
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={className}
    >
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  );
}

export function BellFilledIcon({
  size = 20,
  color = "currentColor",
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={className}
    >
      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9z" />
      <path
        d="M13.73 21a2 2 0 01-3.46 0"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function BookmarkFilledIcon({
  size = 20,
  color = "currentColor",
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={className}
    >
      <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
    </svg>
  );
}

export function BookmarkIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeartIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StarIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GlobeIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export function CameraIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2v11z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="13" r="4" stroke={color} strokeWidth={strokeWidth} />
    </svg>
  );
}

export function ImageIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <circle cx="8.5" cy="8.5" r="1.5" fill={color} />
      <path
        d="M21 15l-5-5L5 21"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function QRIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <rect
        x="3"
        y="3"
        width="7"
        height="7"
        rx="1"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <rect x="4" y="4" width="5" height="5" fill={color} />
      <rect
        x="14"
        y="3"
        width="7"
        height="7"
        rx="1"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <rect x="15" y="4" width="5" height="5" fill={color} />
      <rect
        x="3"
        y="14"
        width="7"
        height="7"
        rx="1"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <rect x="4" y="15" width="5" height="5" fill={color} />
      <path
        d="M14 14h3v3h-3zM17 17h3v3M17 14h3M14 17v3"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TagIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="7" cy="7" r="1.5" fill={color} />
    </svg>
  );
}

// ============================================================
//  QUICK REFERENCE — All 120 exported icons
// ============================================================
//
//  BRAND:        LogoIcon, LogoMark
//
//  NAVIGATION:   DashboardIcon, StudentsIcon, TeachersIcon, ClassesIcon,
//                AttendanceIcon, ResultsIcon, TimetableIcon, FeesIcon,
//                NoticeIcon, ReportsIcon, ProfileIcon, SettingsIcon,
//                LogoutIcon, LibraryIcon, EventsIcon, AnnouncementIcon,
//                ExamIcon, AssignmentIcon
//
//  TOPBAR:       SearchIcon, BellIcon, MenuIcon, MoonIcon, SunIcon,
//                PlusIcon, EditIcon, DeleteIcon, DownloadIcon, UploadIcon,
//                FilterIcon, SortIcon, CloseIcon, MoreIcon, MoreHIcon,
//                RefreshIcon, PrintIcon, ShareIcon, CopyIcon, SaveIcon
//
//  STUDENTS:     StudentCapIcon, BadgeIcon, IdCardIcon, GradeIcon,
//                TrophyIcon, MedalIcon, RankIcon, AdmissionIcon
//
//  SUBJECTS:     MathIcon, ScienceIcon, EnglishIcon, HistoryIcon,
//                GeographyIcon, ArtIcon, MusicIcon, PEIcon, ICTIcon
//
//  STATUS:       CheckIcon, CheckCircleIcon, XCircleIcon, AlertIcon,
//                InfoIcon, PresentIcon, AbsentIcon, LateIcon,
//                ActiveIcon, OfflineIcon
//
//  RESULTS:      ChartBarIcon, ChartLineIcon, ChartPieIcon,
//                TrendUpIcon, TrendDownIcon, ScoreIcon, PercentIcon,
//                ProgressIcon
//
//  COMMS:        MessageIcon, ChatIcon, MailIcon, InboxIcon,
//                PhoneIcon, PinIcon, LinkIcon
//
//  FINANCE:      WalletIcon, CoinIcon, ReceiptIcon, PaymentDueIcon,
//                ScholarshipIcon
//
//  TIME:         CalendarIcon, ClockIcon, TimerIcon, PeriodIcon,
//                HolidayIcon
//
//  FILES:        FileIcon, FilePDFIcon, FolderIcon, AttachmentIcon,
//                ClipboardIcon
//
//  MEDIA/UI:     PlayIcon, PauseIcon, ChevronRightIcon, ChevronLeftIcon,
//                ChevronUpIcon, ChevronDownIcon, ArrowRightIcon,
//                ArrowLeftIcon, ExternalIcon, EyeIcon, EyeOffIcon,
//                ZoomInIcon, GridIcon, ListIcon, ToggleIcon
//
//  ANALYTICS:    DatabaseIcon, AnalyticsIcon, InsightIcon,
//                ComparatorIcon, SummaryIcon
//
//  SYSTEM:       ShieldIcon, LockIcon, UnlockIcon, KeyIcon,
//                PermissionsIcon, AdminIcon, WifiIcon, HelpIcon, BugIcon
//
//  AUTH:         LoginIcon, FingerprintIcon, UserCheckIcon,
//                UserXIcon, ResetPasswordIcon
//
//  FILLED:       StarFilledIcon, HeartFilledIcon, BellFilledIcon,
//                BookmarkFilledIcon, BookmarkIcon, HeartIcon, StarIcon,
//                GlobeIcon, CameraIcon, ImageIcon, QRIcon, TagIcon
//
//  Total: 120 icons
// ============================================================
