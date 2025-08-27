import InstallationGuide from "../components/InstallationGuide";
import { SLASH_COMMANDS } from "../constants";
import { downloadFile } from "../utils/download";

export default function SlashCommands() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex gap-8">
        <div className="flex-1">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Slash Commands
            </h1>
            <p className="text-gray-600">
              探索將 Roo Code 轉化為開發利器的強大指令。
            </p>
            <p className="text-sm mt-2">
              <a
                href="https://docs.roocode.com/features/slash-commands"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                查看官方文件 →
              </a>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SLASH_COMMANDS.map((command, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-blue-300 transition-all"
              >
                <div className="mb-4">
                  <code className="text-lg font-mono font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-md">
                    {command.name}
                  </code>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {command.description}
                </p>
                <div className="flex justify-end">
                  <button
                    onClick={() =>
                      downloadFile(command.filename, "slash-commands")
                    }
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
          <InstallationGuide type="commands" />
        </div>
      </div>
    </div>
  );
}
