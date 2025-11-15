import Sidebar from '../components/Sidebar';

function RecentTrends({ onContactClick }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Recent Trends
            </h1>
            <p className="text-xl text-blue-100">
              Current Developments in the Japanese Operating Lease Market
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Container with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Content Section */}
          <article className="flex-1">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                The Japanese Operating Lease market continues to evolve in response to global economic 
                conditions, regulatory changes, and shifts in the aviation industry. Understanding these 
                trends is crucial for airlines, investors, and financial institutions participating in 
                this market.
              </p>
            </div>

            {/* Market Growth */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Market Growth and Volume
              </h2>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 mb-6">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-700 mb-2">Significant</div>
                    <p className="text-sm text-gray-700">Annual Transaction Volume</p>
                    <p className="text-xs text-gray-600 mt-1 italic">Multi-billion dollar market</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-700 mb-2">Hundreds</div>
                    <p className="text-sm text-gray-700">Aircraft Financed Annually</p>
                    <p className="text-xs text-gray-600 mt-1 italic">Estimated industry-wide</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-700 mb-2">Material</div>
                    <p className="text-sm text-gray-700">Market Share of Aviation Leasing</p>
                    <p className="text-xs text-gray-600 mt-1 italic">Substantial market presence</p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Japanese Operating Leases have become an increasingly important source of aircraft 
                financing, particularly for wide-body aircraft and new technology aircraft types. 
                The market has shown resilience even during economic downturns, supported by Japan's 
                stable tax regime and strong domestic investor base.
              </p>
            </div>

            {/* Key Trends */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Key Market Trends
              </h2>

              <div className="space-y-8">
                {/* Trend 1 */}
                <div className="border-l-4 border-blue-600 pl-6 bg-blue-50 py-4 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    1. Shift Toward JOLCO Structures
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    There has been a notable shift from pure JOL structures to JOLCO (Japanese Operating 
                    Lease with Call Option) arrangements. This trend reflects airlines' preference for 
                    structures that provide a path to ownership and greater flexibility at lease end.
                  </p>
                  <div className="bg-white rounded-lg p-4 mt-4">
                    <p className="text-sm text-gray-700">
                      <strong>Impact:</strong> JOLCO has become the dominant structure for new JOL 
                      transactions, representing a significant majority of deals compared to a decade ago.
                    </p>
                  </div>
                </div>

                {/* Trend 2 */}
                <div className="border-l-4 border-green-600 pl-6 bg-green-50 py-4 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    2. New Technology Aircraft Focus
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Japanese investors are increasingly focused on financing new generation aircraft such 
                    as the Boeing 787, Airbus A350, and Boeing 737 MAX. These fuel-efficient aircraft 
                    types are perceived as having stronger residual values and better long-term prospects.
                  </p>
                  <div className="bg-white rounded-lg p-4 mt-4">
                    <p className="text-sm text-gray-700">
                      <strong>Popular Aircraft Types:</strong> A350-900, A350-1000, 787-8, 787-9, 787-10, 
                      737 MAX family
                    </p>
                  </div>
                </div>

                {/* Trend 3 */}
                <div className="border-l-4 border-purple-600 pl-6 bg-purple-50 py-4 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    3. Geographic Diversification
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    While traditionally focused on Asian and European carriers, JOL transactions are 
                    increasingly being executed with airlines from diverse geographic regions, including 
                    North America, the Middle East, and Latin America.
                  </p>
                  <div className="bg-white rounded-lg p-4 mt-4">
                    <p className="text-sm text-gray-700">
                      <strong>Driver:</strong> Japanese investors seek portfolio diversification and 
                      access to creditworthy airlines globally.
                    </p>
                  </div>
                </div>

                {/* Trend 4 */}
                <div className="border-l-4 border-orange-600 pl-6 bg-orange-50 py-4 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    4. Regulatory and Tax Evolution
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    The Japanese tax authorities (NTA) continue to refine rules surrounding JOL structures, 
                    requiring greater demonstration of genuine leasing activity and asset risk. Transactions 
                    must show substantial equity investment and credible residual value exposure.
                  </p>
                  <div className="bg-white rounded-lg p-4 mt-4">
                    <p className="text-sm text-gray-700">
                      <strong>Compliance Focus:</strong> Enhanced documentation requirements and stricter 
                      interpretations of ownership substance.
                    </p>
                  </div>
                </div>

                {/* Trend 5 */}
                <div className="border-l-4 border-red-600 pl-6 bg-red-50 py-4 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    5. ESG Considerations
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Environmental, Social, and Governance (ESG) factors are becoming increasingly important 
                    in JOL transactions. Japanese investors are showing preference for financing fuel-efficient 
                    aircraft and supporting airlines with strong sustainability commitments.
                  </p>
                  <div className="bg-white rounded-lg p-4 mt-4">
                    <p className="text-sm text-gray-700">
                      <strong>Focus Areas:</strong> Carbon emissions reduction, sustainable aviation fuel 
                      compatibility, and airline ESG ratings.
                    </p>
                  </div>
                </div>

                {/* Trend 6 */}
                <div className="border-l-4 border-teal-600 pl-6 bg-teal-50 py-4 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    6. Competitive Pricing Pressure
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Increased competition among Japanese financial institutions and trading companies 
                    has led to more competitive lease rates for airlines. This trend has made JOL 
                    structures even more attractive compared to traditional financing alternatives.
                  </p>
                  <div className="bg-white rounded-lg p-4 mt-4">
                    <p className="text-sm text-gray-700">
                      <strong>Market Dynamic:</strong> Multiple Japanese lessors competing for quality 
                      transactions with creditworthy airlines.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* COVID-19 Impact */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Post-Pandemic Recovery
              </h2>
              
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The COVID-19 pandemic significantly impacted the aviation industry and JOL market. 
                  However, the market has demonstrated remarkable resilience and is experiencing strong 
                  recovery:
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-green-600 text-xl mr-3 mt-1">✓</span>
                    <p className="text-gray-700">
                      <strong>Transaction Volume Recovery:</strong> Near pre-pandemic levels with strong 
                      pipeline for new transactions
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 text-xl mr-3 mt-1">✓</span>
                    <p className="text-gray-700">
                      <strong>Credit Quality Focus:</strong> Greater emphasis on airline creditworthiness 
                      and financial stability
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 text-xl mr-3 mt-1">✓</span>
                    <p className="text-gray-700">
                      <strong>Fleet Modernization:</strong> Airlines using JOL to finance fleet renewals 
                      with more efficient aircraft
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 text-xl mr-3 mt-1">✓</span>
                    <p className="text-gray-700">
                      <strong>Investor Confidence:</strong> Continued strong appetite from Japanese 
                      investors for aviation assets
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Future Outlook */}
            <div className="bg-gray-900 text-white rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-6">
                Looking Ahead
              </h2>
              <p className="text-lg text-gray-200 leading-relaxed mb-6">
                The Japanese Operating Lease market is expected to continue its growth trajectory, 
                supported by:
              </p>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">→</span>
                  <span>Stable Japanese tax regime and strong domestic investor base</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">→</span>
                  <span>Ongoing global aviation industry recovery and fleet expansion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">→</span>
                  <span>Increasing demand for fuel-efficient aircraft financing solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">→</span>
                  <span>Competitive advantage of JOL structures in global aircraft financing market</span>
                </li>
              </ul>
            </div>

            {/* Disclaimer */}
            <div className="mt-8 bg-gray-100 rounded-xl p-6 border-l-4 border-gray-400">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>Note:</strong> The trends and market observations presented on this page represent general 
                industry developments and should not be relied upon as definitive market data. Market conditions, 
                transaction volumes, and industry dynamics are subject to change. Information is current as of 2024 
                and may not reflect the most recent developments. For current market data and transaction-specific 
                information, consult aviation finance industry publications and qualified advisors.
              </p>
            </div>
          </div>
        </div>
          </article>

          {/* Sidebar */}
          <Sidebar onContactClick={onContactClick} />
        </div>
      </div>
    </div>
  );
}

export default RecentTrends;

