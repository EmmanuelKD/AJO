import { Menu } from "@headlessui/react";
import React from "react";
import SAvater from "./SAvater";

const HeaderAvater = () => {
  let isAuthorized=true;

  return (
    <div>
      <div className="w-32 h-10 pr-1.5 rounded-2xl justify-start items-center gap-1 inline-flex">
        <SAvater />
        <div className="justify-center items-center gap-1 flex ">
          <MyDropdown />
          <div className="w-3 h-3 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
            >
              <g clip-path="url(#clip0_245_11819)">
                <path
                  d="M7.26994 9.0435C7.07469 9.23875 6.75819 9.23875 6.56294 9.0435L1.81294 4.2935C1.61769 4.09825 1.61769 3.78175 1.81294 3.5865C2.00819 3.39125 2.32469 3.39125 2.51994 3.5865L6.91644 7.983L11.3129 3.5865C11.4107 3.48875 11.5384 3.44 11.6664 3.44C11.7944 3.44 11.9222 3.48875 12.0199 3.5865C12.2152 3.78175 12.2152 4.09825 12.0199 4.2935L7.26994 9.0435Z"
                  fill="#191C1D"
                />
              </g>
              <defs>
                <clipPath id="clip0_245_11819">
                  <rect
                    width="12"
                    height="12"
                    fill="white"
                    transform="translate(0.666504 0.439941)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderAvater;

function MyDropdown() {
  return (
    <div className="relative">
      <Menu>
        <Menu.Button
          className={
            "text-black text-base font-bold font-['League Spartan'] leading-tight"
          }
        >
          {" "}
          ZΞNO.sol
        </Menu.Button>
        <Menu.Items>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active && "bg-blue-500"}`}
                href="/account-settings"
              >
                Account settings
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active && "bg-blue-500"}`}
                href="/account-settings"
              >
                Documentation
              </a>
            )}
          </Menu.Item>
          <Menu.Item disabled>
            <span className="opacity-75">Invite a friend (coming soon!)</span>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
}
