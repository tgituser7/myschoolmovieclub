import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ReelIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="2.1" />
      <circle cx="12" cy="6.3" r="1.6" />
      <circle cx="16.8" cy="9.6" r="1.6" />
      <circle cx="15" cy="15.5" r="1.6" />
      <circle cx="9" cy="15.5" r="1.6" />
      <circle cx="7.2" cy="9.6" r="1.6" />
    </Base>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3.5l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 15.9l-4.8 2.5.9-5.4-3.9-3.8 5.4-.8L12 3.5z" />
    </Base>
  );
}

export function QuillIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M19 4c-4.5.3-9.8 2.8-12.5 7.5C4.8 15 4 19 4 19s4-.8 7.5-2.5C16.2 13.8 18.7 8.5 19 4z" />
      <path d="M11 13L5.5 18.5" />
    </Base>
  );
}

export function CameraIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="7" width="12.5" height="10" rx="1.5" />
      <path d="M15.5 10.2l5-2.7v9l-5-2.7" />
    </Base>
  );
}

export function SparkleIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3.5c.5 3 2 4.5 5 5-3 .5-4.5 2-5 5-.5-3-2-4.5-5-5 3-.5 4.5-2 5-5z" />
      <path d="M19 15c.25 1.4.9 2.1 2.3 2.4-1.4.3-2.05 1-2.3 2.4-.25-1.4-.9-2.1-2.3-2.4 1.4-.3 2.05-1 2.3-2.4z" />
    </Base>
  );
}

export function FilmFrameIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="4" y="4" width="16" height="16" rx="1.5" />
      <path d="M4 8.3h2.4M4 15.7h2.4M17.6 8.3H20M17.6 15.7H20M8.3 4v2M15.7 4v2M8.3 18v2M15.7 18v2" />
    </Base>
  );
}

export function BookIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 5.5c2.3-1.2 5-1.2 7 0v13c-2-1.2-4.7-1.2-7 0v-13z" />
      <path d="M18.5 5.5c-2.3-1.2-5-1.2-7 0v13c2-1.2 4.7-1.2 7 0v-13z" />
    </Base>
  );
}

export function HandsIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 20s-6.5-4.1-9-8.2C1.3 8.6 3 5.5 6 5.5c2 0 3 1.3 3 1.3" />
      <path d="M12 20s6.5-4.1 9-8.2c1.7-3.2 0-6.3-3-6.3-2 0-3 1.3-3 1.3" />
      <path d="M9 6.8c0-1.8 1.4-3.3 3-3.3s3 1.5 3 3.3" />
    </Base>
  );
}

export function MasksIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 6c3 0 3.5 2 6 2s3-2 6-2c1.5 3 1.5 8-2 11-1.5 1.3-4.5 1.3-6 0C4.5 14 4.5 9 4 6z" />
      <path d="M9 12.2c.5.4 1.1.6 1.5 0M13.5 12.2c.5.4 1.1.6 1.5 0" />
    </Base>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3.2 2" />
    </Base>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3.5" y="5" width="17" height="15" rx="1.5" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
    </Base>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2.2M12 18.8V21M4.2 12H6.5M17.5 12h2.3M6.3 6.3l1.6 1.6M16.1 16.1l1.6 1.6M6.3 17.7l1.6-1.6M16.1 7.9l1.6-1.6" />
    </Base>
  );
}

export function SunburstIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 2.5l1.2 4.6 3.7-3 -1 4.6 4.6-1 -3 3.7 4.6 1.2-4.6 1.2 3 3.7-4.6-1 1 4.6-3.7-3-1.2 4.6-1.2-4.6-3.7 3 1-4.6-4.6 1 3-3.7-4.6-1.2 4.6-1.2-3-3.7 4.6 1-1-4.6 3.7 3z" />
    </Base>
  );
}

export function SuitcaseIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3.5" y="8" width="17" height="11" rx="1.5" />
      <path d="M8.5 8V6a1.5 1.5 0 011.5-1.5h4A1.5 1.5 0 0115.5 6v2" />
      <path d="M3.5 12.5h17" />
    </Base>
  );
}

export function PencilIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M15.2 4.8l4 4L8.5 19.5l-4.8 1 1-4.8 10.5-10.9z" />
      <path d="M13.2 6.8l4 4" />
    </Base>
  );
}

export function FlagIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M5 3.5v17" />
      <path d="M5 4.5c3-1.4 5 1.4 8 0v8c-3 1.4-5-1.4-8 0v-8z" />
    </Base>
  );
}

export function PinboardIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3.5" y="3.5" width="17" height="15" rx="1" />
      <path d="M8 8.5h5M8 12h8M8 15h6" />
    </Base>
  );
}

export function ScrollIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M6 4.5h11a2 2 0 012 2V17a2 2 0 01-2 2H8" />
      <path d="M6 4.5a2 2 0 00-2 2v11a2 2 0 002 2" />
      <path d="M9 9h6M9 12.5h6" />
    </Base>
  );
}

export function SignpostIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3v18" />
      <path d="M12 6h6l-1.5 2L18 10h-6" />
      <path d="M9 20h6" />
    </Base>
  );
}

export function StandeeIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 4l6.5 12h-13L12 4z" />
      <path d="M9.3 13.5h5.4" />
      <path d="M8.5 20l1.7-3.5M15.5 20l-1.7-3.5" />
    </Base>
  );
}

export function BullhornIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M3.5 10v4h2.7L13 17.5v-11L6.2 10H3.5z" />
      <path d="M16 9.3a3.2 3.2 0 010 5.4M18.3 7.3a6.3 6.3 0 010 9.4" />
    </Base>
  );
}

export function LeafletIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="5" y="3.5" width="14" height="17" rx="1.2" />
      <path d="M8.3 8h7.4M8.3 11.3h7.4M8.3 14.6h4.5" />
    </Base>
  );
}

export function TrophyIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M8 4.5h8v4a4 4 0 01-8 0v-4z" />
      <path d="M8 5.5H5.5a2.5 2.5 0 002.5 3.7M16 5.5h2.5a2.5 2.5 0 01-2.5 3.7" />
      <path d="M12 12.5v3M9 19.5h6M10 19.5l.5-3.5h3l.5 3.5" />
    </Base>
  );
}

export function LayersIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3.5l8 4.3-8 4.3-8-4.3 8-4.3z" />
      <path d="M4 12.1l8 4.3 8-4.3M4 16.1l8 4.3 8-4.3" />
    </Base>
  );
}

export function ClapperIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 10.5h16V18a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 014 18v-7.5z" />
      <path d="M4 10.5l1.3-4.8 14.7 3-1.2 3.6M8 5.9l3 3.4M13 4.9l3 3.4" />
    </Base>
  );
}

export function TicketIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 8a2 2 0 012-2h12a2 2 0 012 2v1.2a1.7 1.7 0 000 5.6V16a2 2 0 01-2 2H6a2 2 0 01-2-2v-1.2a1.7 1.7 0 000-5.6V8z" />
      <path d="M14.5 6.5v11" strokeDasharray="1.6 2.4" />
    </Base>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4.5 12h15M13.5 6l6 6-6 6" />
    </Base>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3.5l7 3v5c0 5-3 8.3-7 9.5-4-1.2-7-4.5-7-9.5v-5l7-3z" />
      <path d="M9 12l2 2 4-4.5" />
    </Base>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="9" cy="8.5" r="3.2" />
      <path d="M2.7 19c0-3.3 2.8-5.5 6.3-5.5s6.3 2.2 6.3 5.5" />
      <circle cx="17" cy="9" r="2.6" />
      <path d="M15.5 13.6c2.6.3 4.5 2.1 4.8 5.4" />
    </Base>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </Base>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M6 3.5h3l1.5 4-2 1.5a11 11 0 005 5l1.5-2 4 1.5v3a2 2 0 01-2.2 2C10.5 18.7 5.3 13.5 4 7.7A2 2 0 016 3.5z" />
    </Base>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 21s7-6.6 7-11.5A7 7 0 105 9.5C5 14.4 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </Base>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17" />
    </Base>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M5.5 5.5l13 13M18.5 5.5l-13 13" />
    </Base>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M20 20l-4.3-4.3" />
    </Base>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M9 5l7 7-7 7" />
    </Base>
  );
}

export function PlayFilledIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M8 5.5l12 6.5-12 6.5v-13z" fill="currentColor" />
    </svg>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 20s-7-4.4-9.3-9C1.2 7.3 3 4 6.4 4 8.6 4 10.6 5.3 12 7c1.4-1.7 3.4-3 5.6-3 3.4 0 5.2 3.3 3.7 7-2.3 4.6-9.3 9-9.3 9z" fill="currentColor" stroke="none" />
    </Base>
  );
}

export function LeafIcon(props: IconProps) {
  return (
    <Base {...props} fill="currentColor" stroke="none">
      <path d="M5 19c-1.5-6 2-13 14-14 1 8-3.5 13.5-11 14-1.2.1-2.2.1-3 0z" />
    </Base>
  );
}

export function AtomIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="1.9" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" />
    </Base>
  );
}

export function BankIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 10l8-5.5L20 10" />
      <path d="M5 10.5v8M9.3 10.5v8M14.7 10.5v8M19 10.5v8" />
      <path d="M3.5 20.5h17" />
    </Base>
  );
}

export function PersonIcon(props: IconProps) {
  return (
    <Base {...props} fill="currentColor" stroke="none">
      <circle cx="12" cy="7.5" r="4" />
      <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7v.5H4V20z" />
    </Base>
  );
}

export function HeartPulseIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 19.5s-6.8-4.2-9-8.6C1.4 7.2 3.3 4 6.7 4c1.9 0 3.5 1 4.3 2.3M12 19.5s6.8-4.2 9-8.6C22.6 7.2 20.7 4 17.3 4c-1.9 0-3.5 1-4.3 2.3" />
      <path d="M3 12.5h3.2l1.6-2.8 2 5 1.6-2.2h2.2" />
    </Base>
  );
}

export function StarFilledIcon(props: IconProps) {
  return (
    <Base {...props} fill="currentColor" stroke="none">
      <path d="M12 3.5l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 15.9l-4.8 2.5.9-5.4-3.9-3.8 5.4-.8L12 3.5z" />
    </Base>
  );
}

export function GraduationCapIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M2 9l10-4.5L22 9l-10 4.5L2 9z" />
      <path d="M6.5 11.2V16c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-4.8" />
      <path d="M21 9v5.5" />
    </Base>
  );
}

export function SunDoodleIcon(props: IconProps) {
  return (
    <Base {...props} strokeWidth={1.8}>
      <circle cx="12" cy="12" r="3.4" />
      <path d="M12 3.5v2.3M12 18.2v2.3M4.3 12h2.3M17.4 12h2.3M6.5 6.5l1.6 1.6M15.9 15.9l1.6 1.6M6.5 17.5l1.6-1.6M15.9 8.1l1.6-1.6" />
    </Base>
  );
}

export function ClapperDoodleIcon(props: IconProps) {
  return (
    <Base {...props} strokeWidth={1.8}>
      <rect x="3.5" y="10" width="17" height="10" rx="1.5" />
      <path d="M3.5 10l1.3-4.8 15.7 3.2-1 4.6M8 5.7l3 3.6M13 4.8l3 3.6" />
    </Base>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M10.3 8.5l6 3.5-6 3.5v-7z" fill="currentColor" stroke="none" />
    </Base>
  );
}
