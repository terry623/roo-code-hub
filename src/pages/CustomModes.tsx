import InstallationGuide from "../components/InstallationGuide";
import { CUSTOM_MODES } from "../constants";
import { downloadFile } from "../utils/download";

export default function CustomModes() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex gap-8">
        <div className="flex-1">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Custom Modes
            </h1>
            <p className="text-gray-600">
              探索將 Roo Code 轉化為專業助手的自訂 AI 模式。
            </p>
            <p className="text-sm mt-2">
              <a
                href="https://docs.roocode.com/features/custom-modes"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                查看官方文件 →
              </a>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CUSTOM_MODES.map((mode, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-blue-300 transition-all"
              >
                <div className="mb-4">
                  <h3 className="text-lg font-mono font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-md mb-2 inline-block">
                    {mode.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {mode.description}
                </p>
                <div className="flex justify-end">
                  <button
                    onClick={() => downloadFile(mode.filename, "custom-modes")}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors cursor-pointer"
                  >
                    下載
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-80">
          <InstallationGuide type="modes" />
        </div>
      </div>
    </div>
  );
}
