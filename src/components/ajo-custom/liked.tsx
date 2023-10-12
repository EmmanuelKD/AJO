import React from "react";

const Liked = () => {
  return (
    <div>
      <a href="">
        <div className="h-7 justify-center items-center gap-2 flex">
          <div className="px-0.5 py-0.5 flex-col justify-start items-start gap-2.5 inline-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="22"
              viewBox="0 0 25 22"
              fill="none"
            >
              <path
                d="M7.4335 0.439941C3.79896 0.439941 0.833496 3.40541 0.833496 7.03995C0.833496 9.49764 2.68608 11.8117 4.94443 14.1849C7.20279 16.5581 9.98252 18.9616 12.1972 21.1763C12.366 21.345 12.5948 21.4398 12.8335 21.4398C13.0722 21.4398 13.301 21.345 13.4698 21.1763C15.6845 18.9616 18.4642 16.5581 20.7226 14.1849C22.9809 11.8117 24.8335 9.49764 24.8335 7.03995C24.8335 3.40541 21.868 0.439941 18.2335 0.439941C16.1476 0.439941 14.3316 1.55984 12.8335 3.46221C11.3354 1.55984 9.51936 0.439941 7.4335 0.439941Z"
                fill="#A83F39"
              />
            </svg>
          </div>
          <div className="text-black text-sm font-normal font-['Montserrat'] leading-tight">
            23.5k
          </div>
        </div>
      </a>
    </div>
  );
};

export default Liked;
