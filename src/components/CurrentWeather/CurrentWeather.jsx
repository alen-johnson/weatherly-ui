import styles from './CurrentWeather.module.scss';

export default function CurrentWeather() {
  return (
    <div className={styles.card}>
      <svg
        fill="none"
        viewBox="0 0 342 175"
        height="175"
        width="342"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.background}
      >
        <path
          fill="url(#paint0_linear_103_640)"
          d="M0 66.4396C0 31.6455 0 14.2484 11.326 5.24044C22.6519 -3.76754 39.6026 0.147978 73.5041 7.97901L307.903 62.1238C324.259 65.9018 332.436 67.7909 337.218 73.8031C342 79.8154 342 88.2086 342 104.995V131C342 151.742 342 162.113 335.556 168.556C329.113 175 318.742 175 298 175H44C23.2582 175 12.8873 175 6.44365 168.556C0 162.113 0 151.742 0 131V66.4396Z"
        ></path>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            y2="128"
            x2="354.142"
            y1="128"
            x1="0"
            id="paint0_linear_103_640"
          >
            <stop stopColor="#5936B4"></stop>
            <stop stopColor="#362A84" offset="1"></stop>
          </linearGradient>
        </defs>
      </svg>
      <div className={styles.cloud}>
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
      </div>
      <p className={styles.mainText}>24°</p>
      <div className={styles.info}>
        <div className={styles.infoLeft}>
          <p>Today</p>
          <p className={styles.textGray}>H:32° L: 16°</p>
          <p>Kathmandu, Nepal</p>
        </div>
        <p className={styles.infoRight}>Mid Rain</p>
      </div>
    </div>
  );
}
