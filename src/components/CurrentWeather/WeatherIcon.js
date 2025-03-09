export default function WeatherIcon({ condition }) {
  const conditionLower = condition.toLowerCase();

  if (conditionLower.includes("sunny")) {
    return (
      <svg
        width="90"
        height="64"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="32"
          cy="32"
          r="14"
          fill="#FFD700"
          stroke="#FFA500"
          strokeWidth="3"
        ></circle>
        <g stroke="#FFA500" strokeWidth="3" strokeLinecap="round">
          <line x1="32" y1="4" x2="32" y2="12" />
          <line x1="32" y1="52" x2="32" y2="60" />
          <line x1="4" y1="32" x2="12" y2="32" />
          <line x1="52" y1="32" x2="60" y2="32" />
          <line x1="10" y1="10" x2="16" y2="16" />
          <line x1="48" y1="48" x2="54" y2="54" />
          <line x1="10" y1="54" x2="16" y2="48" />
          <line x1="48" y1="16" x2="54" y2="10" />
        </g>
      </svg>
    );
  } else if (conditionLower.includes("mild rain")) {
    return (
      <svg
        fill="#000000"
        preserveAspectRatio="xMidYMid meet"
        className="iconify iconify--emojione"
        role="img"
        aria-hidden="true"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
      >
        <g fill="#75d6ff">
          <path d="M10.8 42.9c-.5 1.5-.1 3 1 3.4c1.1.4 2.4-.5 3-2c.6-1.8.7-4.1.2-6.9c-2.1 1.9-3.6 3.8-4.2 5.5"></path>
          <path d="M13.2 57.4c.6-1.8.7-4.1.2-6.9c-2.1 1.8-3.6 3.7-4.2 5.5c-.5 1.5-.1 3 1 3.4c1.1.4 2.5-.5 3-2"></path>
        </g>
        <path
          d="M24.5 31.9l-4.9 16.2h12.5L27.9 62l16.5-20.2H32.5l2.9-9.9z"
          fill="#ffce31"
        ></path>
        <path
          fill="#ffffff"
          d="M18.2 32.5c-.8 0-1.6-.1-2.4-.4c-3.1-1-5.3-3.9-5.3-7.2c0-2.2 1-4.3 2.6-5.7c.4-.4.9-.7 1.4-1l.5-1.8c1.3-4.4 5.4-7.5 10-7.5c.5 0 .9 0 1.5.1c.4.1.8.1 1.2.3l.2-.4c1.9-3.3 5.4-5.4 9.2-5.4C43 3.5 47.7 8.2 47.7 14v1c.4.2.9.4 1.3.6c2.8 1.6 4.5 4.6 4.5 7.8c0 4.2-2.9 7.8-7 8.8c-.7.2-1.4.2-2 .2H18.2z"
        ></path>
      </svg>
    );
  } else {
    return <p>🌎 Weather Unavailable</p>;
  }
}
