function Features() {
  const features = [
    {
      icon: "📷",
      title: "Camera AI thông minh",
      description:
        "Camera độ phân giải cao kết hợp AI giúp theo dõi không gian trong thời gian thực, mang đến hình ảnh rõ nét cả ngày lẫn đêm.",
    },
    {
      icon: "🚗",
      title: "Di chuyển linh hoạt",
      description:
        "Hệ thống bánh xe thông minh cho phép Enabot EBO di chuyển mượt mà trong nhà, quan sát những khu vực mà camera cố định không thể tiếp cận.",
    },
    {
      icon: "🎯",
      title: "Theo dõi chuyển động AI",
      description:
        "Công nghệ AI nhận diện và theo dõi người hoặc thú cưng tự động, giúp bạn luôn nắm bắt mọi hoạt động quan trọng.",
    },
    {
      icon: "🎤",
      title: "Giao tiếp hai chiều",
      description:
        "Tích hợp micro và loa chất lượng cao, cho phép gọi video và trò chuyện trực tiếp với gia đình hoặc thú cưng từ bất kỳ đâu.",
    },
    {
      icon: "🛡️",
      title: "Tuần tra thông minh",
      description:
        "Thiết lập lộ trình và lịch trình tuần tra tự động để kiểm tra các khu vực trong nhà ngay cả khi bạn không có mặt.",
    },
    {
      icon: "🔋",
      title: "Tự động quay về sạc",
      description:
        "Khi pin yếu, Enabot EBO sẽ tự động tìm và quay về đế sạc, đảm bảo luôn sẵn sàng cho những nhiệm vụ tiếp theo.",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Khám phá những tính năng nổi bật của Enabot EBO
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Robot camera AI thông minh giúp bạn quan sát, kết nối và chăm sóc
            gia đình từ bất kỳ đâu.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-5">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;