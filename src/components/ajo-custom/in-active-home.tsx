import React from "react";

const InActiveHome = () => {
  return (
    <div>
      <a href="">
        <div className="py-2.5 justify-center items-center gap-2.5 inline-flex">
          <div className="w-6 h-6 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
            >
              <path
                d="M8.97559 -3.28786e-06C8.81566 0.00545797 8.66168 0.0619189 8.53613 0.16113L1.42969 5.75976C0.527739 6.47058 0 7.55675 0 8.70507V18.25C0 18.9318 0.568203 19.5 1.25 19.5H6.25C6.9318 19.5 7.5 18.9318 7.5 18.25V13.25C7.5 13.1025 7.60248 13 7.75 13H10.25C10.3975 13 10.5 13.1025 10.5 13.25V18.25C10.5 18.9318 11.0682 19.5 11.75 19.5H16.75C17.4318 19.5 18 18.9318 18 18.25V8.70507C18 7.55675 17.4723 6.47058 16.5703 5.75976L9.46387 0.16113C9.32518 0.0515671 9.15225 -0.00549892 8.97559 -3.28786e-06ZM9 1.70507L15.6426 6.93847C16.1846 7.36566 16.5 8.0154 16.5 8.70507V18H12V13.25C12 12.2925 11.2075 11.5 10.25 11.5H7.75C6.79252 11.5 6 12.2925 6 13.25V18H1.5V8.70507C1.5 8.0154 1.81537 7.36566 2.35742 6.93847L9 1.70507Z"
                fill="#191C1D"
              />
            </svg>
          </div>
          <div className="text-zinc-900 text-xl font-normal font-['League Spartan'] leading-normal">
            Home
          </div>
        </div>
      </a>
    </div>
  );
};

export default InActiveHome;
