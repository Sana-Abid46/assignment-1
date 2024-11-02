
import Link from "next/link";
export default function NotFoundPage() {
    return (
      <div className="flex flex-col items-center justify-center pt-4">
        <h1 className="text-xl text-red-600">Oops! Page Not Found</h1>
        <div className="pt-4">
          <button className="bg-black text-white border-black px-3 hover:bg-yellow-100 hover:text-black transition duration-300 ease-in-out text-[6px] font-light py-1 outline-double">
            <Link href='/'> Go To Home Page</Link>
           
          </button>
        </div>
      </div>
    );
  }
  