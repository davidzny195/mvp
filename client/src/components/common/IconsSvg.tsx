export default function SVG({ icon }: any) {
  return (
    <div className="cursor-pointer hover:bg-[#6e6e6e] hover:rounded-md p-1">
      {icon === 'hamburger' && (
        <svg
          viewBox="-0.5 0 25 25"
          fill="none"
          width="30px"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#FFFFFF"
          strokeWidth="1.725"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {' '}
            <path
              d="M2.5 12.5H17.5"
              stroke="#FFFFFF"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{' '}
            <path
              d="M2.5 6.5H21.5"
              stroke="#FFFFFF"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{' '}
            <path
              d="M2.5 18.5H13.5"
              stroke="#FFFFFF"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{' '}
          </g>
        </svg>
      )}
      {icon === 'star' && (
        <div>
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#a39f9f"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              {' '}
              <path
                opacity="0.1"
                d="M20.9244 9.07557L20.8931 9.10687L16.8321 13.1679C16.3185 13.6815 16.1238 14.4331 16.3233 15.1315L17.9462 20.8117C17.9646 20.8761 17.8928 20.9285 17.837 20.8913L17.8186 20.879L13.1094 17.7396C12.4376 17.2917 11.5624 17.2917 10.8906 17.7396L6.17083 20.8861C6.1124 20.9251 6.03711 20.8701 6.0564 20.8026L6.06393 20.7762L7.67671 15.1315C7.87625 14.4331 7.68147 13.6815 7.16787 13.1679L3.13547 9.13547L3.09579 9.09579C3.06044 9.06044 3.08548 9 3.13547 9H8.16667C8.97407 9 9.70228 8.51452 10.0128 7.76923L11.9369 3.15144C11.9603 3.09535 12.0397 3.09535 12.0631 3.15144L13.9872 7.76923C14.2977 8.51452 15.0259 9 15.8333 9H20.8931C20.9326 9 20.9523 9.04768 20.9244 9.07557Z"
                fill="#a9a7a7"
              />{' '}
              <path
                d="M20.9244 9.07557L20.8931 9.10687L16.8321 13.1679C16.3185 13.6815 16.1238 14.4331 16.3233 15.1315L17.9462 20.8117C17.9646 20.8761 17.8928 20.9285 17.837 20.8913L17.8186 20.879L13.1094 17.7396C12.4376 17.2917 11.5624 17.2917 10.8906 17.7396L6.17083 20.8861C6.1124 20.9251 6.03711 20.8701 6.0564 20.8026L6.06393 20.7762L7.67671 15.1315C7.87625 14.4331 7.68147 13.6815 7.16787 13.1679L3.13547 9.13547L3.09579 9.09579C3.06044 9.06044 3.08548 9 3.13547 9H8.16667C8.97407 9 9.70228 8.51452 10.0128 7.76923L11.9369 3.15144C11.9603 3.09535 12.0397 3.09535 12.0631 3.15144L13.9872 7.76923C14.2977 8.51452 15.0259 9 15.8333 9H20.8931C20.9326 9 20.9523 9.04768 20.9244 9.07557Z"
                stroke="#a9a7a7"
                strokeWidth="2"
                strokeLinejoin="round"
              />{' '}
            </g>
          </svg>
        </div>
      )}
      {icon === 'history' && (
        <svg
          width="28px"
          height="28px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#a39f9f"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />

          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            {' '}
            <g clipPath="url(#clip0_429_11075)">
              {' '}
              <path
                d="M5.63606 18.3639C9.15077 21.8786 14.8493 21.8786 18.364 18.3639C21.8787 14.8492 21.8787 9.1507 18.364 5.63598C14.8493 2.12126 9.15077 2.12126 5.63606 5.63598C3.87757 7.39447 2.99889 9.6996 3.00002 12.0044L3 13.9999"
                stroke="#a39999"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />{' '}
              <path
                d="M1 11.9999L3 13.9999L5 11.9999"
                stroke="#a39999"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />{' '}
              <path
                d="M11 7.99994L11 12.9999L16 12.9999"
                stroke="#a39999"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />{' '}
            </g>{' '}
            <defs>
              {' '}
              <clipPath id="clip0_429_11075">
                {' '}
                <rect width="24" height="24" fill="white" />{' '}
              </clipPath>{' '}
            </defs>{' '}
          </g>
        </svg>
      )}
      {icon === 'crown' && (
        <svg
          fill="#a39f9f"
          width="25px"
          height="25px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 70 70"
          enableBackground="new 0 0 70 70"
          stroke="#a39f9f"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {' '}
            <g>
              {' '}
              <g>
                {' '}
                <path d="M60.093,60.583H10.244c-0.999,0-1.844-0.527-1.981-1.518l-4.91-35.291c-0.102-0.73,0.208-1.405,0.804-1.839 c0.596-0.434,1.384-0.479,2.047-0.157l17.292,8.362l9.496-19.995c0.334-0.689,1.033-1.563,1.798-1.563h0.001 c0.765,0,1.463,0.878,1.798,1.566l9.71,20.155l17.825-8.607c0.666-0.323,1.455-0.199,2.052,0.232 c0.599,0.435,0.91,1.19,0.809,1.922l-4.909,35.202C61.937,60.041,61.091,60.583,60.093,60.583z M11.986,56.583h46.365l4.154-29.74 l-16.249,8.05c-0.478,0.232-1.028,0.319-1.529,0.147c-0.502-0.173-0.915-0.512-1.147-0.989l-8.786-18.024l-8.571,17.662 c-0.481,0.993-1.675,1.414-2.669,0.931L7.828,26.82L11.986,56.583z"></path>{' '}
              </g>{' '}
              <g>
                {' '}
                <path d="M30.018,54.583H15.486c-0.495,0-0.916-0.154-0.989-0.643l-1.353-8.896c-0.082-0.546,0.294-1.003,0.84-1.085 c0.538-0.073,1.055,0.111,1.137,0.658l1.225,7.966h13.671c0.552,0,1,0.447,1,1S30.57,54.583,30.018,54.583z"></path>{' '}
              </g>{' '}
              <g>
                {' '}
                <path d="M13.519,41.178c-0.486,0-0.913-0.355-0.987-0.851l-0.604-4c-0.083-0.546,0.293-1.056,0.839-1.139 c0.545-0.072,1.056,0.294,1.138,0.84l0.604,4c0.083,0.546-0.293,1.056-0.839,1.139C13.619,41.174,13.569,41.178,13.519,41.178z"></path>{' '}
              </g>{' '}
              <g>
                {' '}
                <path d="M60.019,66.583h-50c-1.104,0-2-0.896-2-2s0.896-2,2-2h50c1.104,0,2,0.896,2,2S61.123,66.583,60.019,66.583z"></path>{' '}
              </g>{' '}
              <g>
                {' '}
                <path d="M4.998,19.18c-0.52,0-1.04-0.22-1.41-0.59s-0.59-0.89-0.59-1.41c0-0.53,0.22-1.04,0.59-1.42c0.74-0.74,2.08-0.74,2.83,0 c0.37,0.38,0.58,0.89,0.58,1.42c0,0.521-0.21,1.04-0.58,1.41C6.038,18.96,5.528,19.18,4.998,19.18z"></path>{' '}
              </g>{' '}
              <g>
                {' '}
                <path d="M64.998,19.18c-0.52,0-1.04-0.22-1.41-0.59c-0.369-0.37-0.59-0.89-0.59-1.41c0-0.53,0.221-1.04,0.59-1.42 c0.75-0.74,2.08-0.74,2.83,0c0.37,0.38,0.58,0.89,0.58,1.42c0,0.521-0.21,1.04-0.58,1.41C66.038,18.96,65.528,19.18,64.998,19.18z "></path>{' '}
              </g>{' '}
              <g>
                {' '}
                <path d="M34.998,7.18c-0.52,0-1.04-0.22-1.41-0.59s-0.59-0.88-0.59-1.41s0.22-1.05,0.59-1.42c0.74-0.74,2.08-0.74,2.83,0 c0.37,0.37,0.58,0.89,0.58,1.42s-0.21,1.04-0.58,1.41C36.038,6.96,35.528,7.18,34.998,7.18z"></path>{' '}
              </g>{' '}
            </g>{' '}
          </g>
        </svg>
      )}
      {icon === 'spade' && (
        <svg
          fill="#a39f9f"
          height="25px"
          width="25px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 511.868 511.868"
          stroke="#a39f9f"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {' '}
            <g>
              {' '}
              <g>
                {' '}
                <path d="M442.751,177.893L287.006,12.646c-18.087-16.677-44.167-16.677-61.158-1.081l-160.03,167.22 c-46.678,43.264-59.249,111.989-25.44,174.98c24.753,46.092,60.574,72.706,108.093,74.525c18.619,0.715,31.433-1.797,44.081-9.01 c-0.275,7.412-2.019,11.744-8.536,23.139l-14.429,25.272c-11.286,19.655,2.978,44.178,25.652,44.178h122.069 c22.667,0,36.882-24.486,25.657-44.169l-14.454-25.279c-5.909-10.363-7.885-14.883-8.402-21.187 c10.256,5.533,21.941,7.691,37.719,7.055c46.653-1.92,85.51-26.844,110.72-68.645 C507.012,295.915,493.167,224.665,442.751,177.893z M432.015,337.602c-18.088,29.992-44.214,46.75-75.925,48.055 c-11.694,0.472-15.002-0.643-20.083-5.191c-1.884-1.686-10.535-10.37-11.882-11.67c-17.482-16.921-46.837-4.566-46.837,19.851 v28.16c0,17.771,3.628,28.281,14.172,46.771l3.216,5.624h-76.819l3.206-5.614c10.557-18.46,14.199-28.995,14.199-46.78v-27.883 c0-24.379-29.093-36.862-46.831-20.313c-16.319,15.237-21.294,17.698-38.324,17.044c-30.923-1.183-54.025-18.348-72.136-52.072 c-24.492-45.632-15.777-93.278,17.775-124.413L255.69,42.029c-0.317,0.352,0.697,0.352,1.369,0.97l155.662,165.169 C449.957,242.778,459.526,292.022,432.015,337.602z"></path>{' '}
              </g>{' '}
            </g>{' '}
          </g>
        </svg>
      )}
      {icon === 'diamond' && (
        <svg
          viewBox="2 0 24 24"
          width="28px"
          height="28px"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#a39f9f"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {' '}
            <path
              d="M4.8057 5.70615C5.39093 4.87011 5.68354 4.45209 6.11769 4.22604C6.55184 4 7.0621 4 8.08262 4H12H15.9174C16.9379 4 17.4482 4 17.8823 4.22604C18.3165 4.45209 18.6091 4.87011 19.1943 5.70615L19.7915 6.55926C20.6144 7.73493 21.0259 8.32277 21.0064 8.98546C20.9869 9.64815 20.5415 10.2107 19.6507 11.3359L14.375 18V18C13.6417 18.9263 13.275 19.3895 12.8472 19.5895C12.3103 19.8406 11.6897 19.8406 11.1528 19.5895C10.725 19.3895 10.3583 18.9263 9.625 18V18L4.34927 11.3359C3.4585 10.2107 3.01312 9.64815 2.99359 8.98546C2.97407 8.32277 3.38555 7.73493 4.20852 6.55926L4.8057 5.70615Z"
              stroke="#a2a0a0"
              strokeWidth="2"
              strokeLinejoin="round"
            ></path>{' '}
            <path
              d="M9 7.5L8.5 8.25V8.25C8.20344 8.69484 8.23479 9.28176 8.57706 9.69247L10.5 12"
              stroke="#a2a0a0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{' '}
          </g>
        </svg>
      )}
      {icon === 'user' && (
        <svg
          viewBox="0 0 24 24"
          width="25px"
          height="25px"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {' '}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 1C8.96243 1 6.5 3.46243 6.5 6.5C6.5 9.53757 8.96243 12 12 12C15.0376 12 17.5 9.53757 17.5 6.5C17.5 3.46243 15.0376 1 12 1ZM8.5 6.5C8.5 4.567 10.067 3 12 3C13.933 3 15.5 4.567 15.5 6.5C15.5 8.433 13.933 10 12 10C10.067 10 8.5 8.433 8.5 6.5Z"
              fill="#a39f9f"
            ></path>{' '}
            <path
              d="M8 14C4.68629 14 2 16.6863 2 20V22C2 22.5523 2.44772 23 3 23C3.55228 23 4 22.5523 4 22V20C4 17.7909 5.79086 16 8 16H16C18.2091 16 20 17.7909 20 20V22C20 22.5523 20.4477 23 21 23C21.5523 23 22 22.5523 22 22V20C22 16.6863 19.3137 14 16 14H8Z"
              fill="#a39f9f"
            ></path>{' '}
          </g>
        </svg>
      )}
      {icon === 'chat' && (
        <svg
          fill="#a39f9f"
          width="25px"
          height="25px"
          viewBox="0 0 1920 1920"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#a39f9f"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {' '}
            <path
              d="M677.68-.034v338.937h112.942V113.02h1016.47v790.476h-225.995v259.764l-259.651-259.764h-79.172V451.844H.034v1016.47h338.71v418.9l417.996-418.9h485.534v-451.877h32.753l419.125 419.124v-419.124h225.882V-.033H677.68ZM338.825 903.53H903.53V790.59H338.824v112.94Zm0 225.883H677.76v-113.054H338.824v113.054Zm-225.849-564.74h1016.47v790.701H710.435l-258.748 259.652v-259.652h-338.71V564.672Z"
              fillRule="evenodd"
            ></path>{' '}
          </g>
        </svg>
      )}
      {icon === 'transaction' && (
        <svg
          viewBox="0 0 24 24"
          width="25px"
          height="25px"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#a39f9f"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {' '}
            <path
              d="M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51001 10.94 9.51001 10.02C9.51001 9.17999 10.16 8.48999 10.96 8.48999H12.84C13.76 8.48999 14.51 9.26999 14.51 10.24"
              stroke="#a39f9f"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{' '}
            <path
              d="M12 7.5V16.5"
              stroke="#a39f9f"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{' '}
            <path
              d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2"
              stroke="#a39f9f"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{' '}
            <path
              d="M17 3V7H21"
              stroke="#a39f9f"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{' '}
            <path
              d="M22 2L17 7"
              stroke="#a39f9f"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{' '}
          </g>
        </svg>
      )}
    </div>
  );
}
