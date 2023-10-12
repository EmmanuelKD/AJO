"use client";
import { AuthContext } from "@/context/auth/context";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function EmptyList({ reload }: { reload: () => void }) {
  let router = useRouter();
  const { isUserLoggedIn, user } = useContext(AuthContext);

  return (
    <div className=" w-full h-40 z-50 flex  flex-col  justify-center items-center gap-2">
      {/* <ArchiveBoxXMarkIcon className="text-red-600 w-24 h-24 flex justify-center items-center" /> */}
      <div>Empty Product List</div>
      <button
        onClick={reload}
        type="button"
        className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        Reload
      </button>
    </div>
  );
}
