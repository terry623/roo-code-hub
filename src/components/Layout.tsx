import { Link, useLocation } from 'react-router-dom'

const WIKI_URL = 'https://github.com/anthropics/claude-code'
const SURVEY_URL = 'https://surveycake.com/example'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation()
  
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-8">
              <Link 
                to="/" 
                className="text-2xl font-bold text-gray-900 hover:text-indigo-600 transition-colors"
              >
                Roo Code Hub
              </Link>
              
              <div className="flex space-x-6">
                <Link 
                  to="/modes" 
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === '/modes' 
                      ? 'bg-indigo-100 text-indigo-700' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Custom Modes
                </Link>
                <Link 
                  to="/commands" 
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === '/commands' 
                      ? 'bg-indigo-100 text-indigo-700' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Slash Commands
                </Link>
                <a 
                  href={WIKI_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Wiki
                </a>
              </div>
            </div>
            
            <a 
              href={SURVEY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Submit
            </a>
          </div>
        </div>
      </nav>
      
      {children}
    </div>
  )
}