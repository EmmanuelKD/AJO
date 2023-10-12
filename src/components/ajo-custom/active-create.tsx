export default function ActiveCreate() {
  return (
    <a href="">
      <div className="py-2.5 bg-pink-700 bg-opacity-10 rounded-lg justify-center items-center gap-2.5 inline-flex">
        <div className="w-6 h-6 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 2.00171C6.486 2.00171 2 6.48771 2 12.0017C2 17.5157 6.486 22.0017 12 22.0017C17.514 22.0017 22 17.5157 22 12.0017C22 6.48771 17.514 2.00171 12 2.00171ZM16.25 12.7517H12.75V16.2517C12.75 16.6662 12.414 17.0017 12 17.0017C11.586 17.0017 11.25 16.6662 11.25 16.2517V12.7517H7.75C7.336 12.7517 7 12.4162 7 12.0017C7 11.5872 7.336 11.2517 7.75 11.2517H11.25V7.75171C11.25 7.33721 11.586 7.00171 12 7.00171C12.414 7.00171 12.75 7.33721 12.75 7.75171V11.2517H16.25C16.664 11.2517 17 11.5872 17 12.0017C17 12.4162 16.664 12.7517 16.25 12.7517Z"
              fill="#191C1D"
            />
          </svg>
        </div>
        <div className="text-zinc-900 text-xl font-medium font-['League Spartan'] leading-normal">
          Create
        </div>
      </div>
    </a>
  );
}
