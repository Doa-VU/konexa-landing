import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/store-links";

type StoreBadgesProps = {
  /** App Store badge alt / aria */
  appStoreLabel: string;
  /** Google Play badge alt / aria */
  playStoreLabel: string;
  className?: string;
};

/**
 * Official-style store badges for the marketing site.
 * Links open in a new tab; SVGs approximate Apple / Google badge layouts.
 */
export function StoreBadges({
  appStoreLabel,
  playStoreLabel,
  className = "",
}: StoreBadgesProps) {
  return (
    <div
      className={`flex flex-wrap items-center gap-3 ${className}`}
      role="group"
      aria-label="Download Konexa"
    >
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep"
        aria-label={appStoreLabel}
      >
        <AppStoreBadge title={appStoreLabel} />
      </a>
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep"
        aria-label={playStoreLabel}
      >
        <GooglePlayBadge title={playStoreLabel} />
      </a>
    </div>
  );
}

function AppStoreBadge({ title }: { title: string }) {
  return (
    <svg
      role="img"
      aria-label={title}
      width="148"
      height="44"
      viewBox="0 0 148 44"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <rect width="148" height="44" rx="6" fill="#000" />
      <rect
        x="0.5"
        y="0.5"
        width="147"
        height="43"
        rx="5.5"
        fill="none"
        stroke="#A6A6A6"
        strokeWidth="1"
      />
      <g fill="#fff">
        <path d="M28.1 21.9c0-2.5 2-3.7 2.1-3.8-1.2-1.7-3-1.9-3.6-1.9-1.5-.2-3 .9-3.8.9-.8 0-2-.9-3.3-.8-1.7.1-3.3 1-4.1 2.5-1.8 3.1-.5 7.6 1.3 10.1.9 1.2 1.9 2.6 3.3 2.5 1.3-.1 1.8-.8 3.4-.8s2 .8 3.4.8c1.4 0 2.3-1.2 3.2-2.4.9-1.4 1.3-2.7 1.3-2.8-.1 0-2.5-1-2.5-3.8zm-2.4-7.1c.7-.9 1.2-2.1 1.1-3.3-1 .1-2.3.7-3 1.6-.7.8-1.2 2-1.1 3.2 1.2.1 2.4-.6 3-1.5z" />
        <text
          x="40"
          y="17"
          fontFamily="system-ui, -apple-system, Helvetica, Arial, sans-serif"
          fontSize="8"
          fontWeight="400"
        >
          Download on the
        </text>
        <text
          x="40"
          y="31"
          fontFamily="system-ui, -apple-system, Helvetica, Arial, sans-serif"
          fontSize="15"
          fontWeight="600"
        >
          App Store
        </text>
      </g>
    </svg>
  );
}

function GooglePlayBadge({ title }: { title: string }) {
  return (
    <svg
      role="img"
      aria-label={title}
      width="148"
      height="44"
      viewBox="0 0 148 44"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <rect width="148" height="44" rx="6" fill="#000" />
      <rect
        x="0.5"
        y="0.5"
        width="147"
        height="43"
        rx="5.5"
        fill="none"
        stroke="#A6A6A6"
        strokeWidth="1"
      />
      <g transform="translate(12, 8)">
        <path
          d="M1.2 1.1c-.2.2-.3.6-.3 1.1v23.6c0 .5.1.9.3 1.1l.1.1 13.2-13.2v-.2L1.3 1z"
          fill="#00F076"
        />
        <path
          d="M19.6 17.8l-5.1-5.1v-.2l5.1-5.1.1.1 6 3.4c1.7 1 1.7 2.5 0 3.5l-6 3.4z"
          fill="#FFD400"
        />
        <path
          d="M19.7 17.7l-5.2-5.2-13.3 13.3c.3.3.8.4 1.3.1l17.2-9.8z"
          fill="#FF3A44"
        />
        <path
          d="M19.7 10.3L2.5.5C2 .2 1.5.3 1.2.6l13.3 13.3 5.2-5.2z"
          fill="#00E3FF"
        />
      </g>
      <g fill="#fff">
        <text
          x="44"
          y="17"
          fontFamily="system-ui, -apple-system, Helvetica, Arial, sans-serif"
          fontSize="8"
          fontWeight="400"
        >
          GET IT ON
        </text>
        <text
          x="44"
          y="31"
          fontFamily="system-ui, -apple-system, Helvetica, Arial, sans-serif"
          fontSize="14"
          fontWeight="600"
        >
          Google Play
        </text>
      </g>
    </svg>
  );
}
