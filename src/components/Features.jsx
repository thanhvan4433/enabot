function Features() {
 const features = [
  {
    icon: "🗺️",
    title: "Lập bản đồ thông minh",
    description:
      "EBO X tự động ghi nhớ bố cục ngôi nhà, giúp di chuyển chính xác và tuần tra hiệu quả theo từng khu vực.",
  },
  {
    icon: "🚨",
    title: "Cảnh báo té ngã & tiếng khóc",
    description:
      "AI phát hiện người bị té ngã hoặc trẻ nhỏ khóc và gửi thông báo ngay đến điện thoại của bạn.",
  },
  {
    icon: "📸",
    title: "Chụp ảnh & quay video",
    description:
      "Lưu lại hình ảnh và video chất lượng cao để theo dõi ngôi nhà hoặc ghi lại những khoảnh khắc đáng nhớ.",
  },
  {
    icon: "🔋",
    title: "Tự động quay về sạc",
    description:
      "Khi pin yếu, robot tự tìm đến đế sạc và tiếp tục hoạt động sau khi sạc đầy mà không cần can thiệp.",
  },
  {
    icon: "🛡️",
    title: "Bảo vệ ngôi nhà",
    description:
      "Tuần tra tự động, phát hiện chuyển động bất thường và hỗ trợ giám sát an ninh 24/7.",
  },
  {
    icon: "🎙️",
    title: "Đàm thoại hai chiều",
    description:
      "Micro và loa tích hợp giúp bạn trò chuyện với người thân hoặc thú cưng từ bất kỳ đâu thông qua ứng dụng.",
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