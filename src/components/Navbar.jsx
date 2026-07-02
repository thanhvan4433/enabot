import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl  flex items-center justify-center shadow-md overflow-hidden">
              <img
                src="/logo.png"
                alt="Enabot Logo"
                className="w-8 h-8 object-contain"
              />
            </div>

            <div className="leading-tight">
              <h1 className="text-lg font-bold text-gray-900">Enabot</h1>
            </div>
          </a>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#features"
                className="text-gray-600 hover:text-blue-600 transition font-medium"
              >
                Tính năng
              </a>
              <a
                href="#specs"
                className="text-gray-600 hover:text-blue-600 transition font-medium"
              >
                Thông số
              </a>
              <a
                href="#benefits"
                className="text-gray-600 hover:text-blue-600 transition font-medium"
              >
                Lợi ích
              </a>
              <a
                href="#newsletter"
                className="text-gray-600 hover:text-blue-600 transition font-medium"
              >
                Đăng ký
              </a>
            </div>


            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-expanded={isOpen}
              aria-label="Mở menu"
            >
              <span className="sr-only">Mở menu</span>
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <div className="space-y-3">
              <a
                href="#features"
                className="block rounded-xl px-4 py-3 text-gray-700 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Tính năng
              </a>
              <a
                href="#specs"
                className="block rounded-xl px-4 py-3 text-gray-700 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Thông số
              </a>
              <a
                href="#benefits"
                className="block rounded-xl px-4 py-3 text-gray-700 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Lợi ích
              </a>
              <a
                href="#newsletter"
                className="block rounded-xl px-4 py-3 text-gray-700 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Đăng ký
              </a>
              <button
                type="button"
                className="w-full rounded-xl bg-blue-600 px-4 py-3 text-white font-semibold hover:bg-blue-700 transition"
                onClick={() => setIsOpen(false)}
              >
                Mua ngay
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
