import Link from "next/link";

export default function Service() {
    return (
      <div className="min-h-screen bg flex flex-col items-start pl-10 pt-10">
        <div className="items-center mb-6">
          <div className="icon w-8 h-1 bg-black rounded-lg mr-2"></div>
          <h1 className="text-lg font-sans font-bold pt-1">SERVICES</h1>
        </div>
        <div className="w-full flex flex-col items-center space-y-4 -mt-6 pr-10 ">

          <div className="w-20 h-10 container text-center text-white font-normal text-[10px] rounded-md flex items-center justify-center hover:bg-teal-950 transition duration-300 cursor-pointer border border-gray-400 "><Link href="/services/typescript">
           TypeScript
           </Link>
          </div>
          <div className="w-20 h-10 container text-center text-white font-medium rounded-md flex items-center justify-center hover:bg-teal-950 transition duration-300 cursor-pointer border border-gray-400 text-[10px] ">
            Node.JS
          </div>
          <div className="w-20 h-10 container text-center text-white font-medium rounded-md flex items-center justify-center hover:bg-teal-950 transition duration-300 cursor-pointer border border-gray-400 text-[10px] ">
            Next.JS
          </div>
        </div>
      </div>
    );
  }
  