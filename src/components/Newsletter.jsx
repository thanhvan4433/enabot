function Newsletter() {
  return (
    <section id="newsletter" className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg p-8 shadow-sm ">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-1">
              Đăng ký nhận tin
            </h2>
            <p className="text-sm text-gray-600">
              Nhận thông tin sản phẩm mới, ưu đãi và mẹo sử dụng Enabot.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center"
          >
            <input
              id="name"
              type="text"
              placeholder="Họ và tên"
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-gray-900 focus:ring-2 focus:ring-blue-500"
            />

            <input
              id="email"
              type="email"
              placeholder="Email của bạn"
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-gray-900 focus:ring-2 focus:ring-blue-500"
              required
            />

            <div className="sm:col-span-2 sm:flex sm:justify-end">
              <button
                type="submit"
                className="w-full sm:w-auto bg-blue-600 text-white font-medium py-2 px-6 rounded-md hover:bg-blue-700 transition"
              >
                Đăng ký
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
