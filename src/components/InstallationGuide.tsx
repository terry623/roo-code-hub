interface InstallationGuideProps {
  type: "modes" | "commands";
}

export default function InstallationGuide({ type }: InstallationGuideProps) {
  const isModes = type === "modes";
  const documentationUrl = isModes
    ? "https://docs.roocode.com/features/custom-modes#importing-a-mode"
    : "https://docs.roocode.com/features/slash-commands#creating-custom-commands";

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 h-fit sticky top-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <svg
          className="w-5 h-5 mr-2 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        安裝指南
      </h3>

      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">
            如何安裝{isModes ? "自訂模式" : "斜線指令"}：
          </h4>

          <div className="bg-gray-50 rounded-lg p-4 space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                1
              </div>
              <p className="text-sm text-gray-700">
                {isModes
                  ? "下載檔案到本地，並開啟 Roo Code"
                  : "下載檔案到本地，並開啟 VSCode"}
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                2
              </div>
              <p className="text-sm text-gray-700">
                {isModes
                  ? "點擊左下角的 Modes 選單，然後按下設定圖示"
                  : "將檔案放置到專案工作區的 .roo/commands 資料夾中"}
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                3
              </div>
              <p className="text-sm text-gray-700">
                {isModes
                  ? "往下滑到匯入模式按鈕後選擇檔案，VSCode 將自動偵測並載入自訂模式"
                  : "VSCode 將自動偵測並載入斜線指令"}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t pt-4">
          <h4 className="font-semibold text-gray-800 mb-2">需要幫助？</h4>
          <p className="text-sm text-gray-600">
            查看{" "}
            <a
              href={documentationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              說明文件
            </a>{" "}
            以獲得詳細指示。
          </p>
        </div>
      </div>
    </div>
  );
}
