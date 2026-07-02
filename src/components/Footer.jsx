function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div>
                <h3 className="text-white text-xl font-bold">Enabot</h3>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-5">Sản phẩm</h4>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="#features" className="hover:text-white transition">
                  Tính năng
                </a>
              </li>

              <li>
                <a href="#specs" className="hover:text-white transition">
                  Thông số kỹ thuật
                </a>
              </li>

              <li>
                <a href="#benefits" className="hover:text-white transition">
                  Lợi ích
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-5">Hỗ trợ</h4>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="#newsletter" className="hover:text-white transition">
                  Đăng ký nhận tin
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Hướng dẫn sử dụng
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Câu hỏi thường gặp
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5">Liên hệ</h4>

            <ul className="space-y-3 text-sm">
              <li>Email: vanphan44330003@gmail.com</li>
              <li>Hotline: 0868254679</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">© Phan Thành Văn</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
