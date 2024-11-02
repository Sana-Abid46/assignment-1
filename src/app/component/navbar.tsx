import Link from "next/link";
export default function Navbar() {
  return (
    <header className="bg-white text-black shadow-md h-10">
      <div className="max-w-7xl mx-auto px-6  flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="font-bold text-sm pl-12 pt-3 font-mono">SANA ABID</h1>
          <h6 className="font-light font-sans text-[7px] pl-14 -mt-1">Frontend Developer</h6>
        </div>

       
        <nav className="space-x-4 pr-5">
          <Link href="/" className="hover:text-gray-300 transition-colors text-[8px] ">Home</Link>
          <Link href="/about" className="hover:text-gray-300 transition-colors text-[8px] ">About</Link>
          <Link href="/services" className="hover:text-gray-300 transition-colors text-[8px]  ">Services</Link>
          <Link href="/blog" className="hover:text-gray-300 transition-colors text-[8px] ">Blog</Link>
          <Link href="/contact" className="hover:text-gray-300 transition-colors text-[8px]">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
