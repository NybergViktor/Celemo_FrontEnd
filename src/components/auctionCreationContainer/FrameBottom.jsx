import "../auctionCreationContainer/"

const FrameBottom = () => {
  return (
    <div className="svg">
      <svg
        width="374"
        height="872"
        viewBox="0 0 374 872"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_151_74)">
          <path
            d="M369.467 851.272C369.466 862.356 360.451 871.325 349.367 871.27L24.1904 869.644C13.1636 869.588 4.26188 860.619 4.29049 849.592L6.41895 29.7593C6.44748 18.776 15.3277 9.87086 26.3109 9.81152L185.354 8.95272C189.029 8.93282 192.639 9.92598 195.786 11.823L359.872 110.718C365.877 114.337 369.548 120.837 369.548 127.849L369.467 851.272Z"
            fill="#363636"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_151_74"
            x="0.291016"
            y="0.952637"
            width="373.256"
            height="870.317"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_151_74"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_151_74"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default FrameBottom;
