interface InstallationGuideProps {
  type: 'modes' | 'commands'
}

export default function InstallationGuide({ type }: InstallationGuideProps) {
  const isModes = type === 'modes'
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 h-fit sticky top-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Installation Guide
      </h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">
            How to install {isModes ? 'Custom Modes' : 'Slash Commands'}:
          </h4>
          
          <div className="bg-gray-50 rounded-lg p-4 space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                1
              </div>
              <p className="text-sm text-gray-700">
                {isModes ? 
                  'Open Claude Code and navigate to Settings → Custom Modes' :
                  'Open Claude Code and navigate to Settings → Slash Commands'
                }
              </p>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                2
              </div>
              <p className="text-sm text-gray-700">
                {isModes ? 
                  'Click "Add Custom Mode" and paste the mode configuration' :
                  'Click "Add Slash Command" and paste the command configuration'
                }
              </p>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                3
              </div>
              <p className="text-sm text-gray-700">
                Save and start using your new {isModes ? 'custom mode' : 'slash command'}!
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-4">
          <h4 className="font-semibold text-gray-800 mb-2">Need help?</h4>
          <p className="text-sm text-gray-600">
            Check out the <a href="https://github.com/anthropics/claude-code" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">documentation</a> for detailed instructions.
          </p>
        </div>
      </div>
    </div>
  )
}