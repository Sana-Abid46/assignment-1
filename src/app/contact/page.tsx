// pages/contact.tsx
export default function ContactPage() {
  return (
    <div className="bg-blue-200 pt-8 sm:px-10 lg:px-20 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full bg-teal-500 p-8 rounded-lg shadow-md flex items-start">
        
        {/* Contact Information Section */}
        <div className="w-1/2 pr-6">
          <div className="icon w-12 h-1 bg-black mb-2 rounded-lg"></div>
          <h1 className="text-lg font-bold text-black mb-2">Contact</h1>
          <p className="text-black text-[10px] mb-4">
            500 Terry Francine Street<br />
            San Francisco, CA 94158
          </p>
          <p className="text-black text-[10px] mb-4">
            Tel: 123-456-7890<br />
            Fax: 123-456-7890
          </p>
          <p className="text-black text-[10px] mb-4">info@mysite.com</p>
          <div className="icon2 w-12 h-1 bg-black mb-4 rounded-lg"></div>
        </div>

        {/* Form Section */}
        <div className="w-1/2 pl-6">
          <form className="space-y-2">
            <div>
              <label htmlFor="name" className="text-black text-[9px] mb-1 font-bold">Name*</label>
              <input
                type="text"
                id="name"
                className="w-full px-1 border border-black text-black focus:ring-2 focus:ring-gray-500 focus:outline-none bg-transparent text-[10px]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-black text-[9px] mb-1 font-bold">Email*</label>
              <input
                type="email"
                id="email"
                className="w-full px-1 border border-black text-black focus:ring-2 focus:ring-gray-500 focus:outline-none bg-transparent text-[10px]"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-black text-[9px] mb-1 font-bold">Message</label>
              <textarea
                id="message"
                rows={3}
                className="w-full px-1 border border-black text-black focus:ring-2 focus:ring-gray-500 focus:outline-none bg-transparent text-[10px]"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-black text-white border border-black px-3 hover:bg-white hover:text-black transition duration-300 ease-in-out text-[6px] font-light py-1"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
