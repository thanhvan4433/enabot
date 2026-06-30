import specImg from "../assets/enabot.jpg";
function Specifications() {
  return (
    <section id="specs" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Product Image */}
          <div className="flex justify-center">
            <img
              src={specImg}
              alt="Enabot EBO X"
              loading="lazy"
              className="w-full max-w-md object-contain"
            />
          </div>
          {/* Specifications as table */}
          <div className="w-full">
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full table-auto text-sm text-left">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-gray-700 font-medium">
                      Thông số
                    </th>
                    <th className="px-4 py-3 text-gray-700 font-medium">
                      Mô tả
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-4 py-3 font-semibold">📷 Camera AI</td>
                    <td className="px-4 py-3">4K UHD (8MP)</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-4 py-3 font-semibold">🤖 AI Processor</td>
                    <td className="px-4 py-3">5 TOPS</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-4 py-3 font-semibold">🎤 Microphone</td>
                    <td className="px-4 py-3">4-Mic Array</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-4 py-3 font-semibold">🔊 Speaker</td>
                    <td className="px-4 py-3">Harman 8W</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-4 py-3 font-semibold">📡 Kết nối</td>
                    <td className="px-4 py-3">Wi‑Fi 2.4G / 5G</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-4 py-3 font-semibold">🔋 Pin</td>
                    <td className="px-4 py-3">2500mAh</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-4 py-3 font-semibold">🎥 Gimbal</td>
                    <td className="px-4 py-3">1-Axis Stabilization</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-4 py-3 font-semibold">💾 Lưu trữ</td>
                    <td className="px-4 py-3">microSD đến 256GB</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specifications;
