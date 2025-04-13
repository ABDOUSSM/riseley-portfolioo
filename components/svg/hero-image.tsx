export default function HeroImage() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" fill="none" className="w-full h-full">
      <rect x="150" y="100" width="500" height="350" rx="20" fill="#f1f5f9" stroke="#3b82f6" strokeWidth="2" />
      <rect x="180" y="140" width="440" height="240" rx="4" fill="#ffffff" stroke="#3b82f6" strokeWidth="2" />
      <circle cx="400" cy="480" r="20" fill="#3b82f6" />
      <rect x="350" y="480" width="100" height="6" rx="3" fill="#3b82f6" />

      {/* Header */}
      <rect x="200" y="160" width="400" height="40" rx="4" fill="#e2e8f0" />
      <circle cx="220" cy="180" r="10" fill="#3b82f6" />
      <rect x="240" y="175" width="60" height="10" rx="2" fill="#94a3b8" />
      <rect x="320" y="175" width="60" height="10" rx="2" fill="#94a3b8" />
      <rect x="400" y="175" width="60" height="10" rx="2" fill="#94a3b8" />
      <rect x="480" y="175" width="60" height="10" rx="2" fill="#94a3b8" />

      {/* Hero Section */}
      <rect x="200" y="220" width="180" height="20" rx="2" fill="#1e293b" />
      <rect x="200" y="250" width="150" height="10" rx="2" fill="#64748b" />
      <rect x="200" y="270" width="170" height="10" rx="2" fill="#64748b" />
      <rect x="200" y="290" width="120" height="10" rx="2" fill="#64748b" />
      <rect x="200" y="320" width="80" height="30" rx="4" fill="#3b82f6" />

      {/* Image Placeholder */}
      <rect x="420" y="220" width="160" height="130" rx="4" fill="#e2e8f0" />
      <path d="M460 260 L500 320 L540 280 L580 330" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
      <circle cx="470" cy="240" r="10" fill="#94a3b8" />

      {/* Code Elements Animation */}
      <g className="animate-pulse">
        <rect x="220" y="380" width="360" height="10" rx="2" fill="#e2e8f0" />
        <rect x="220" y="400" width="320" height="10" rx="2" fill="#e2e8f0" />
        <rect x="220" y="420" width="280" height="10" rx="2" fill="#e2e8f0" />
      </g>

      {/* Decorative Elements */}
      <circle cx="700" cy="150" r="30" fill="rgba(59, 130, 246, 0.1)" />
      <circle cx="100" cy="400" r="40" fill="rgba(59, 130, 246, 0.1)" />
      <circle cx="750" cy="450" r="20" fill="rgba(59, 130, 246, 0.1)" />

      {/* Abstract Code Lines */}
      <path d="M50 200 L120 200" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
      <path d="M70 220 L140 220" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
      <path d="M60 240 L100 240" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />

      <path d="M680 300 L750 300" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
      <path d="M700 320 L770 320" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
      <path d="M690 340 L730 340" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
