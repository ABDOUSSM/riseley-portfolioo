export default function AboutImage() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" fill="none" className="w-full h-full">
      <circle cx="400" cy="300" r="200" fill="rgba(59, 130, 246, 0.05)" />
      <circle cx="400" cy="300" r="150" fill="rgba(59, 130, 246, 0.1)" />

      {/* Central Device */}
      <rect x="320" y="200" width="160" height="200" rx="10" fill="#f8fafc" stroke="#3b82f6" strokeWidth="2" />
      <rect x="330" y="220" width="140" height="140" rx="4" fill="#e2e8f0" />
      <rect x="380" y="410" width="40" height="4" rx="2" fill="#94a3b8" />

      {/* Screen Content */}
      <rect x="350" y="240" width="100" height="10" rx="2" fill="#1e293b" />
      <rect x="350" y="260" width="80" height="6" rx="2" fill="#64748b" />
      <rect x="350" y="276" width="90" height="6" rx="2" fill="#64748b" />
      <rect x="350" y="292" width="70" height="6" rx="2" fill="#64748b" />

      <rect x="350" y="320" width="40" height="20" rx="4" fill="#3b82f6" />
      <rect x="400" y="320" width="40" height="20" rx="4" fill="#f1f5f9" stroke="#3b82f6" strokeWidth="1" />

      {/* Orbiting Elements */}
      <g className="animate-pulse">
        <circle cx="550" cy="200" r="30" fill="#f1f5f9" stroke="#3b82f6" strokeWidth="2" />
        <text x="550" y="205" textAnchor="middle" fill="#3b82f6" fontSize="20" fontWeight="bold">
          UI
        </text>
      </g>

      <g className="animate-pulse animation-delay-300">
        <circle cx="250" cy="200" r="30" fill="#f1f5f9" stroke="#3b82f6" strokeWidth="2" />
        <text x="250" y="205" textAnchor="middle" fill="#3b82f6" fontSize="20" fontWeight="bold">
          UX
        </text>
      </g>

      <g className="animate-pulse animation-delay-600">
        <circle cx="550" cy="400" r="30" fill="#f1f5f9" stroke="#3b82f6" strokeWidth="2" />
        <text x="550" y="405" textAnchor="middle" fill="#3b82f6" fontSize="16" fontWeight="bold">
          API
        </text>
      </g>

      <g className="animate-pulse animation-delay-900">
        <circle cx="250" cy="400" r="30" fill="#f1f5f9" stroke="#3b82f6" strokeWidth="2" />
        <text x="250" y="405" textAnchor="middle" fill="#3b82f6" fontSize="16" fontWeight="bold">
          SEO
        </text>
      </g>

      {/* Connecting Lines */}
      <line x1="400" y1="300" x2="520" y2="200" stroke="#3b82f6" strokeWidth="1" strokeDasharray="5 5" />
      <line x1="400" y1="300" x2="280" y2="200" stroke="#3b82f6" strokeWidth="1" strokeDasharray="5 5" />
      <line x1="400" y1="300" x2="520" y2="400" stroke="#3b82f6" strokeWidth="1" strokeDasharray="5 5" />
      <line x1="400" y1="300" x2="280" y2="400" stroke="#3b82f6" strokeWidth="1" strokeDasharray="5 5" />

      {/* Decorative Code Elements */}
      <rect x="150" y="150" width="80" height="10" rx="2" fill="rgba(59, 130, 246, 0.2)" />
      <rect x="170" y="170" width="60" height="10" rx="2" fill="rgba(59, 130, 246, 0.2)" />
      <rect x="190" y="190" width="40" height="10" rx="2" fill="rgba(59, 130, 246, 0.2)" />

      <rect x="570" y="450" width="80" height="10" rx="2" fill="rgba(59, 130, 246, 0.2)" />
      <rect x="550" y="470" width="60" height="10" rx="2" fill="rgba(59, 130, 246, 0.2)" />
      <rect x="530" y="490" width="40" height="10" rx="2" fill="rgba(59, 130, 246, 0.2)" />
    </svg>
  )
}
