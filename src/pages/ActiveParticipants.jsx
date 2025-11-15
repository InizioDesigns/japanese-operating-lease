import Sidebar from '../components/Sidebar';

function ActiveParticipants({ onContactClick }) {
  const participants = [
    {
      category: 'Japanese Trading Companies (Sogo Shosha)',
      description: 'Major general trading companies with extensive experience in aircraft leasing and strong balance sheets.',
      examples: ['Mitsubishi Corporation', 'Mitsui & Co.', 'Sumitomo Corporation', 'Marubeni Corporation', 'ITOCHU Corporation'],
      role: 'Primary equity investors seeking tax benefits and diversification'
    },
    {
      category: 'Japanese Financial Institutions',
      description: 'Banks and financial institutions providing both equity and debt financing for JOL transactions.',
      examples: ['SMBC Aviation Capital', 'Mizuho Financial Group', 'MUFG Bank', 'Development Bank of Japan'],
      role: 'Debt providers and co-equity investors'
    },
    {
      category: 'Japanese Leasing Companies',
      description: 'Specialized leasing companies with deep expertise in aircraft financing and operations.',
      examples: ['ORIX Aviation', 'Tokyo Century Corporation', 'JA Mitsui Leasing'],
      role: 'Structure originators and asset managers'
    },
    {
      category: 'Global Airlines',
      description: 'International carriers utilizing JOL structures for fleet financing across all continents.',
      examples: ['Major Asian Carriers', 'European Flag Carriers', 'North American Airlines', 'Middle Eastern Airlines', 'Latin American Carriers'],
      role: 'Lessees operating aircraft under JOL arrangements'
    },
    {
      category: 'Aircraft Manufacturers',
      description: 'OEMs supporting JOL transactions for new aircraft deliveries.',
      examples: ['Boeing', 'Airbus'],
      role: 'Asset suppliers and transaction facilitators'
    },
    {
      category: 'Legal and Financial Advisors',
      description: 'Professional service firms structuring and documenting JOL transactions.',
      examples: ['International Law Firms', 'Japanese Law Firms', 'Financial Advisors', 'Tax Consultants'],
      role: 'Transaction structuring and advisory services'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Active Participants
            </h1>
            <p className="text-xl text-blue-100">
              Key Players in the Japanese Operating Lease Market
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Container with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Content Section */}
          <article className="flex-1">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The Japanese Operating Lease market comprises a diverse ecosystem of sophisticated financial 
            institutions, trading companies, airlines, and professional advisors. Understanding the key 
            participants and their roles is essential for anyone involved in or considering JOL transactions.
          </p>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Market Characteristics
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-700 mb-2">Dozens</div>
                <p className="text-sm text-gray-700">Active Japanese Investors</p>
                <p className="text-xs text-gray-600 mt-1 italic">Major trading companies & financial institutions</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-700 mb-2">Many</div>
                <p className="text-sm text-gray-700">Airline Participants</p>
                <p className="text-xs text-gray-600 mt-1 italic">Airlines worldwide</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-700 mb-2">Global</div>
                <p className="text-sm text-gray-700">Market Reach</p>
                <p className="text-xs text-gray-600 mt-1 italic">All major aviation markets</p>
              </div>
            </div>
          </div>
        </div>

        {/* Participants Categories */}
        <div className="space-y-8">
          {participants.map((participant, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-10 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {participant.category}
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {participant.description}
                  </p>

                  {/* Role Badge */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 mb-6 border-l-4 border-blue-600">
                    <p className="text-sm font-semibold text-gray-900 mb-1">Primary Role:</p>
                    <p className="text-gray-700">{participant.role}</p>
                  </div>

                  {/* Examples */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                      Key Participants
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {participant.examples.map((example, idx) => (
                        <span 
                          key={idx}
                          className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-medium transition-colors"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Market Dynamics */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Market Dynamics and Relationships
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Competitive Landscape
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The JOL market is characterized by intense but professional competition among Japanese 
                investors. Multiple trading companies and financial institutions compete for quality 
                transactions with creditworthy airlines.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">•</span>
                  <span>Strong relationships with airlines are critical</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">•</span>
                  <span>Track record and reputation matter significantly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">•</span>
                  <span>Speed and execution certainty are key differentiators</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Collaboration Patterns
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                While competitive, market participants often collaborate on large transactions, 
                sharing risks and bringing complementary expertise to complex deals.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>Consortium structures for large aircraft portfolios</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>Risk-sharing among multiple equity investors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>Syndication of senior debt among banks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Entry Requirements */}
        <div className="mt-12 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Requirements for Market Participation
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                For Japanese Investors
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3 mt-1">✓</span>
                  <span>
                    <strong>Financial Strength:</strong> Substantial capital base and creditworthiness 
                    to support equity investments and provide comfort to debt providers
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3 mt-1">✓</span>
                  <span>
                    <strong>Leasing Expertise:</strong> Demonstrated knowledge and experience in aircraft 
                    leasing to satisfy Japanese tax authority requirements
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3 mt-1">✓</span>
                  <span>
                    <strong>Tax Position:</strong> Sufficient taxable income in Japan to utilize 
                    depreciation benefits effectively
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3 mt-1">✓</span>
                  <span>
                    <strong>Risk Management:</strong> Capability to assess and manage aviation asset 
                    risks, including residual value exposure
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                For Airlines
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3 mt-1">✓</span>
                  <span>
                    <strong>Credit Quality:</strong> Investment grade or near-investment grade credit 
                    rating preferred for competitive pricing
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3 mt-1">✓</span>
                  <span>
                    <strong>Operating History:</strong> Established operations with proven track record 
                    in commercial aviation
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3 mt-1">✓</span>
                  <span>
                    <strong>Fleet Strategy:</strong> Clear long-term fleet plan consistent with JOL 
                    lease terms (typically 10-12 years)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3 mt-1">✓</span>
                  <span>
                    <strong>Legal Compliance:</strong> Ability to comply with complex cross-border 
                    documentation and regulatory requirements
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Interested in JOL Transactions?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Connect with experienced market participants to explore opportunities
          </p>
          <button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-4 px-8 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700 shadow-md">
            Get in Touch
          </button>
        </div>
          </article>

          {/* Sidebar */}
          <Sidebar onContactClick={onContactClick} />
        </div>
      </div>
    </div>
  );
}

export default ActiveParticipants;

