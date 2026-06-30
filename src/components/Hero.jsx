import heroImg from "../assets/hero.jpg";
function Hero() {
  return (
    <section class="bg-gradient-to-b from-gray-50 to-white pt-12 pb-20 md:pt-20 md:pb-32">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Enabot EBO: <span class="text-blue-500">Robot Camera AI</span>{" "}
              thông minh cho không gian sống hiện đại
            </h1>
            <p class="text-gray-600 text-lg mb-8 leading-relaxed">
              Enabot EBO là robot camera AI di động, giúp bạn giám sát ngôi nhà,
              theo dõi thú cưng và kết nối gia đình mọi lúc mọi nơi thông qua
              ứng dụng điện thoại.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <button class="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition">
                Mua ngay
              </button>
              <button class="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-3 rounded-lg font-medium transition">
                Xem demo EBO
              </button>
            </div>
          </div>
          <div class="flex justify-center md:justify-end">
            <div class="relative w-full max-w-md">
              <img src={heroImg} alt="Hero" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
