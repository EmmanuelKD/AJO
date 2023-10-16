import React from 'react'

function Content() {
  return (
    <div className="self-stretch h-40 px-2 py-2.5 bg-pink-700 bg-opacity-5 rounded-lg flex-col justify-between items-center flex relative">
      {/* <img src="" /> */}
      <img className=" rounded-lg left-0 top-0 absolute w-full h-40 bg-cover" src={"/asset/img/Content.png"} />

      <div className="self-stretch grow shrink basis-0 p-2.5 justify-between items-center inline-flex">
        <a href="">
          <div className="w-5 h-5 relative" >
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
              <path d="M9.36267 0.244278C9.20036 0.249008 9.04625 0.316721 8.93299 0.43308L0.807985 8.55808C0.690819 8.67529 0.625 8.83424 0.625 8.99997C0.625 9.16571 0.690819 9.32465 0.807985 9.44187L8.93299 17.5669C8.99058 17.6269 9.05956 17.6747 9.13589 17.7077C9.21222 17.7407 9.29436 17.7581 9.37751 17.759C9.46066 17.7598 9.54314 17.7441 9.62013 17.7127C9.69711 17.6812 9.76705 17.6347 9.82585 17.5759C9.88465 17.5171 9.93113 17.4472 9.96256 17.3702C9.99399 17.2932 10.0097 17.2108 10.0089 17.1276C10.0081 17.0445 9.99062 16.9623 9.95763 16.886C9.92464 16.8097 9.87676 16.7407 9.81678 16.6831L2.13367 8.99997L9.81678 1.31687C9.90694 1.22905 9.9685 1.11606 9.99339 0.992687C10.0183 0.86931 10.0053 0.741293 9.95627 0.625389C9.9072 0.509486 9.82428 0.411096 9.71837 0.343096C9.61246 0.275096 9.48848 0.240654 9.36267 0.244278Z" fill="#B21575" />
            </svg>
          </div>
        </a>
        <a href="">
          <div className="w-5 h-5 relative rotate-180">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
              <path d="M9.36267 0.244278C9.20036 0.249008 9.04625 0.316721 8.93299 0.43308L0.807985 8.55808C0.690819 8.67529 0.625 8.83424 0.625 8.99997C0.625 9.16571 0.690819 9.32465 0.807985 9.44187L8.93299 17.5669C8.99058 17.6269 9.05956 17.6747 9.13589 17.7077C9.21222 17.7407 9.29436 17.7581 9.37751 17.759C9.46066 17.7598 9.54314 17.7441 9.62013 17.7127C9.69711 17.6812 9.76705 17.6347 9.82585 17.5759C9.88465 17.5171 9.93113 17.4472 9.96256 17.3702C9.99399 17.2932 10.0097 17.2108 10.0089 17.1276C10.0081 17.0445 9.99062 16.9623 9.95763 16.886C9.92464 16.8097 9.87676 16.7407 9.81678 16.6831L2.13367 8.99997L9.81678 1.31687C9.90694 1.22905 9.9685 1.11606 9.99339 0.992687C10.0183 0.86931 10.0053 0.741293 9.95627 0.625389C9.9072 0.509486 9.82428 0.411096 9.71837 0.343096C9.61246 0.275096 9.48848 0.240654 9.36267 0.244278Z" fill="#B21575" />
            </svg>
          </div>
        </a>
      </div>
      <div className="justify-start items-center gap-1 inline-flex">
      <div className="w-3 h-3 opacity-60 bg-pink-700 rounded-full shadow" />
        <div className="w-3 h-3 opacity-60 bg-pink-200 rounded-full shadow" />
        <div className="w-3 h-3 opacity-60 bg-pink-200 rounded-full shadow" />
        <div className="w-3 h-3 opacity-60 bg-pink-200 rounded-full shadow" />

      </div>
    </div>
  )
}

export default Content