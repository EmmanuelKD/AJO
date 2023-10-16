export default function ActiveProfile() {
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
              d="M12 2.00171C10.6739 2.00171 9.40215 2.52849 8.46447 3.46617C7.52679 4.40386 7 5.67563 7 7.00171C7 8.32779 7.52679 9.59956 8.46447 10.5372C9.40215 11.4749 10.6739 12.0017 12 12.0017C13.3261 12.0017 14.5979 11.4749 15.5355 10.5372C16.4732 9.59956 17 8.32779 17 7.00171C17 5.67563 16.4732 4.40386 15.5355 3.46617C14.5979 2.52849 13.3261 2.00171 12 2.00171ZM18.0105 14.0017H5.9895C4.8925 14.0017 4 14.8942 4 15.9912V16.7517C4 18.4077 4.9425 19.8397 6.6535 20.7832C8.077 21.5692 9.976 22.0017 12 22.0017C15.853 22.0017 20 20.3587 20 16.7517V15.9912C20 14.8942 19.1075 14.0017 18.0105 14.0017Z"
              fill="#191C1D"
            />
          </svg>
        </div>
        <div className="text-zinc-900 text-xl font-medium font-['League Spartan'] leading-normal">
          Profile
        </div>
      </div>
    </a>
  );
}
