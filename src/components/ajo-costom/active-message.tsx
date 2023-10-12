export default function ActiveCreate() {
  return (
    <a href="">
      <div className="py-2.5 bg-pink-700 bg-opacity-10 rounded-lg justify-center items-center gap-2.5 inline-flex">
        {" "}
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6.9 0C5.52 0 4.30772 0.719859 3.61172 1.80586C3.70772 1.79986 3.804 1.8 3.9 1.8H17.7C20.184 1.8 22.2 3.816 22.2 6.3V15.9C22.2 15.996 22.2001 16.0923 22.1941 16.1883C23.2801 15.4923 24 14.28 24 12.9V6.3C24 2.826 21.174 0 17.7 0H6.9ZM3.9 3C1.75684 3 0 4.75684 0 6.9V15.9C0 18.0432 1.75684 19.8 3.9 19.8H4.2V22.5211C4.2 23.6918 5.63563 24.4241 6.58242 23.7352L11.993 19.8H17.1C19.2432 19.8 21 18.0432 21 15.9V6.9C21 4.75684 19.2432 3 17.1 3H3.9Z"
              fill="#191C1D"
            />
          </svg>
        </div>
        <div className="text-zinc-900 text-xl font-medium font-['League Spartan'] leading-normal">
          Messages
        </div>
      </div>
    </a>
  );
}
