function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>

              <div>
                <h3 className="text-white text-xl font-bold">Enabot</h3>

                <p className="text-sm text-gray-400">
                  EBO X AI Family Companion Robot
                </p>
              </div>
            </div>

            <p className="text-sm leading-6">
              Robot AI đồng hành cùng gia đình, giúp bạn giám sát ngôi nhà, chăm
              sóc thú cưng và kết nối với người thân mọi lúc, mọi nơi.
            </p>
          </div>

          {/* Product */}
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
              <li>Email: support@enabot.com</li>
              <li>Website: www.enabot.com</li>
              <li>Hotline: +86 xxx xxx xxxx</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © 2026 Enabot. All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0 text-sm">
            <a href="#" className="hover:text-white transition">
              Chính sách bảo mật
            </a>

            <a href="#" className="hover:text-white transition">
              Điều khoản sử dụng
            </a>

            <a href="#" className="hover:text-white transition">
              Cookie
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
