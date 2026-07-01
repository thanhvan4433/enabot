import { useState } from "react";
import heroImg from "../assets/hero.jpg";

function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <section className="bg-gradient-to-b from-gray-50 to-white pt-12 pb-20 md:pt-20 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Enabot EBO:{" "}
                <span className="text-blue-500">Robot Camera AI</span> thông
                minh cho không gian sống hiện đại
              </h1>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Enabot EBO là robot camera AI di động, giúp bạn giám sát ngôi
                nhà, theo dõi thú cưng và kết nối gia đình mọi lúc mọi nơi thông
                qua ứng dụng điện thoại.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition">
                  Mua ngay
                </button>

                <button
                  onClick={() => setShowVideo(true)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-3 rounded-lg font-medium transition"
                >
                  Xem demo EBO
                </button>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-md">
                <img src={heroImg} alt="Hero" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {showVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-[90%] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Nút đóng */}
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white text-black text-2xl shadow-lg hover:bg-gray-200"
            >
              ×
            </button>

            <video
              controls
              autoPlay
              className="w-full rounded-xl shadow-2xl"
            >
              <source src="/demo.mp4" type="video/mp4" />
              Trình duyệt của bạn không hỗ trợ video.
            </video>
          </div>
        </div>
      )}
    </>
  );
}

export default Hero;