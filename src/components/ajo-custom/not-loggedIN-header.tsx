import React from "react";
import AllreadNotification from "./allread-notification";
import HeaderAvater from "./header-avater";
// import Avater from "../icons/Avater.png"

const notLoggedIn = () => {
  return (
    <div>
      <div className="w-full flex-col justify-start items-center inline-flex">
        <div className="self-stretch justify-end items-center gap-24 inline-flex">
          <div className="grow shrink basis-0 h-10 justify-center items-center gap-4 flex ">
            <div className="relative w-4/5">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    d="M8.3999 0.841797C3.9911 0.841797 0.399902 4.43299 0.399902 8.8418C0.399902 13.2506 3.9911 16.8418 8.3999 16.8418C10.3171 16.8418 12.0778 16.161 13.4577 15.0309L18.2343 19.8074C18.308 19.8842 18.3963 19.9455 18.494 19.9877C18.5917 20.03 18.6968 20.0523 18.8033 20.0534C18.9097 20.0544 19.0153 20.0343 19.1138 19.994C19.2124 19.9538 19.3019 19.8943 19.3772 19.8191C19.4524 19.7438 19.5119 19.6543 19.5521 19.5557C19.5924 19.4572 19.6125 19.3516 19.6115 19.2452C19.6104 19.1387 19.5881 19.0336 19.5458 18.9359C19.5036 18.8382 19.4423 18.7499 19.3655 18.6762L14.589 13.8996C15.7191 12.5197 16.3999 10.759 16.3999 8.8418C16.3999 4.43299 12.8087 0.841797 8.3999 0.841797ZM8.3999 2.4418C11.944 2.4418 14.7999 5.2977 14.7999 8.8418C14.7999 12.3859 11.944 15.2418 8.3999 15.2418C4.8558 15.2418 1.9999 12.3859 1.9999 8.8418C1.9999 5.2977 4.8558 2.4418 8.3999 2.4418Z"
                    fill="#191C1D"
                  />
                </svg>
              </span>
              <input
                className="rounded-lg bg-pink-700 bg-opacity-10 text-zinc-900 text-base font-normal font-['League Spartan'] leading-normal w-full py-2 pl-10 pr-4"
                type="text"
                placeholder="Search..."
              />
            </div>
            <div className="w-8 h-8 relative">
              <AllreadNotification />
            </div>
            <div className="pr-1.5 rounded-2xl justify-start items-center gap-1 flex">
              <HeaderAvater />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default notLoggedIn;
