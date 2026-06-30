function Benefits() {
  return (
    <section id="benefits" className="py-20 md:py-32 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tại sao nên chọn Enabot EBO X?
          </h2>

          <p className="text-blue-100 text-lg">
            Không chỉ là một robot camera, EBO X mang đến sự an tâm và kết nối
            cho cả gia đình.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 rounded-2xl p-8 text-white">
            <div className="text-5xl mb-5">❤️</div>

            <h3 className="text-2xl font-bold mb-3">Luôn an tâm dù ở xa</h3>

            <p className="text-blue-100">
              Theo dõi ngôi nhà theo thời gian thực và nhận thông báo khi có sự
              kiện bất thường, giúp bạn yên tâm dù đang đi làm hay đi du lịch.
            </p>
          </div>

          <div className="bg-white/10 rounded-2xl p-8 text-white">
            <div className="text-5xl mb-5">🤝</div>

            <h3 className="text-2xl font-bold mb-3">Kết nối với người thân</h3>

            <p className="text-blue-100">
              Dễ dàng trò chuyện với cha mẹ, con cái hoặc thú cưng mọi lúc, giúp
              khoảng cách không còn là trở ngại.
            </p>
          </div>

          <div className="bg-white/10 rounded-2xl p-8 text-white">
            <div className="text-5xl mb-5">✨</div>

            <h3 className="text-2xl font-bold mb-3">Cuộc sống tiện nghi hơn</h3>

            <p className="text-blue-100">
              Một thiết bị duy nhất hỗ trợ giám sát, giao tiếp và đồng hành cùng
              gia đình, giúp cuộc sống trở nên thông minh và thuận tiện hơn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
