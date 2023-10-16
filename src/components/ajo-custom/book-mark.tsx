import React from "react";

const Bookmark = () => {
  return (
    <div>
      <a href="">
        <div className="h-6 justify-between items-center flex">
          <div className="px-px py-px flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="w-6 h-6 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M18.3799 22.1943C18.2254 22.1943 18.0719 22.1468 17.9419 22.0528L12.1299 17.8683L6.31788 22.0528C6.08888 22.2173 5.78788 22.2403 5.53738 22.1118C5.28738 21.9838 5.12988 21.7258 5.12988 21.4443V6.44434C5.12988 4.65234 6.58788 3.19434 8.37988 3.19434H15.8799C17.6719 3.19434 19.1299 4.65234 19.1299 6.44434V21.4443C19.1299 21.7258 18.9724 21.9838 18.7219 22.1118C18.6139 22.1668 18.4969 22.1943 18.3799 22.1943Z"
                  fill="#86AAFC"
                />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Bookmark;
