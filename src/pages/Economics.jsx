import Sidebar from '../components/Sidebar';

function Economics({ onContactClick }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Economics
            </h1>
            <p className="text-xl text-blue-100">
              Understanding the Financial Mechanics and Value Proposition
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Container with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Content Section */}
          <article className="flex-1">
        {/* Overview */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            The Economic Foundation
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The economics of Japanese Operating Leases are driven by the interplay between Japanese tax 
            benefits, competitive financing costs, and the needs of airlines for long-term aircraft 
            financing. Understanding these economics is essential for all parties considering participation 
            in JOL transactions.
          </p>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Core Economic Drivers
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🇯🇵</div>
                <h4 className="font-bold text-gray-900 mb-2">Japanese Tax Benefits</h4>
                <p className="text-sm text-gray-700">
                  Depreciation deductions create value for investors
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">💰</div>
                <h4 className="font-bold text-gray-900 mb-2">Competitive Rates</h4>
                <p className="text-sm text-gray-700">
                  Airlines access attractive lease pricing
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">⚖️</div>
                <h4 className="font-bold text-gray-900 mb-2">Risk/Return Balance</h4>
                <p className="text-sm text-gray-700">
                  Structured to align interests of all parties
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tax Economics */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Japanese Tax Economics
          </h2>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              The cornerstone of JOL economics is the ability of Japanese equity investors to claim 
              depreciation deductions on aircraft owned through qualifying lease structures.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Depreciation Benefits
              </h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3 mt-1">→</span>
                  <span>
                    <strong>Depreciation Schedule:</strong> Aircraft can be depreciated over a relatively 
                    short period under Japanese tax law, creating significant tax deductions in early years
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3 mt-1">→</span>
                  <span>
                    <strong>Tax Rate:</strong> Japanese corporate tax rate (approximately 29.74% effective 
                    rate as of 2024) applies to depreciation deductions
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3 mt-1">→</span>
                  <span>
                    <strong>Value Creation:</strong> Tax savings can represent a significant portion of aircraft cost 
                    over the lease term, making JOL structures economically attractive
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Tax Compliance Requirements
              </h3>
              <p className="text-gray-700 mb-4">
                To qualify for tax benefits, the structure must meet specific NTA requirements:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span>Japanese entity must be true owner with genuine risks and rewards of ownership</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span>Investor must demonstrate leasing expertise and knowledge</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span>Sufficient equity investment (generally 20-30% minimum, subject to NTA requirements)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span>Real residual value exposure at lease end</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Financing Structure */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Financing Structure Economics
          </h2>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Typical Capital Structure
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-300">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3 text-sm">
                    20-30%
                  </span>
                  Equity
                </h4>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Source:</strong> Japanese investors</p>
                  <p><strong>Returns:</strong> Tax benefits + residual value upside + lease spread</p>
                  <p><strong>Risk:</strong> Residual value and credit risk</p>
                  <p><strong>Target Return:</strong> Typically 8-12% IRR range (including tax benefits, actual returns vary)</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-purple-300">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3 text-sm">
                    70-80%
                  </span>
                  Senior Debt
                </h4>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Source:</strong> Japanese banks</p>
                  <p><strong>Returns:</strong> Interest rate margin over funding cost</p>
                  <p><strong>Security:</strong> Non-recourse, secured by aircraft and lease</p>
                  <p><strong>Pricing:</strong> TONA + margin (typically 150-250 bps)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 rounded-xl p-6 border-l-4 border-indigo-600">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Leverage Benefits
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The high leverage ratio (70-80% debt) allows Japanese investors to claim depreciation 
              on the full aircraft value while only investing 20-30% equity. This leverage amplifies 
              the effective return on equity investment when combined with tax benefits.
            </p>
          </div>
        </div>

        {/* Airline Economics */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Economics for Airlines
          </h2>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Airlines benefit from JOL structures through competitive economics and flexible financing 
              terms that support their fleet and business strategies.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Financial Benefits</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span>
                      <strong>Competitive Rates:</strong> Lease rates can be more competitive than 
                      traditional financing due to Japanese tax benefits (pricing varies by transaction)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span>
                      <strong>100% Financing:</strong> No upfront capital required from airline
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span>
                      <strong>Fixed Payments:</strong> Predictable lease payments over long term (10-12 years)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span>
                      <strong>Off-Balance Sheet:</strong> Potential operating lease treatment (depending on 
                      accounting standards and jurisdiction as of 2024)
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Operational Benefits</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2 mt-1">✓</span>
                    <span>
                      <strong>Fleet Flexibility:</strong> Options at lease end (return, renew, purchase)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2 mt-1">✓</span>
                    <span>
                      <strong>Technology Access:</strong> Finance latest generation fuel-efficient aircraft
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2 mt-1">✓</span>
                    <span>
                      <strong>Risk Management:</strong> Residual value risk stays with lessor (in pure JOL)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2 mt-1">✓</span>
                    <span>
                      <strong>Credit Enhancement:</strong> Potential off-balance sheet treatment may preserve debt capacity
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Cost Comparison */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Comparative Economics
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-4 text-gray-900 font-bold">Financing Type</th>
                  <th className="px-6 py-4 text-gray-900 font-bold">Effective Cost*</th>
                  <th className="px-6 py-4 text-gray-900 font-bold">Term</th>
                  <th className="px-6 py-4 text-gray-900 font-bold">Key Feature</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-blue-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">JOL/JOLCO</td>
                  <td className="px-6 py-4 text-gray-700">TONA/SOFR + 150-250 bps</td>
                  <td className="px-6 py-4 text-gray-700">10-12 years</td>
                  <td className="px-6 py-4 text-gray-700">Tax-driven competitive rates</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">Traditional Operating Lease</td>
                  <td className="px-6 py-4 text-gray-700">SOFR + 250-350 bps</td>
                  <td className="px-6 py-4 text-gray-700">7-12 years</td>
                  <td className="px-6 py-4 text-gray-700">Market-driven pricing</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">Secured Bank Loan</td>
                  <td className="px-6 py-4 text-gray-700">SOFR + 200-300 bps</td>
                  <td className="px-6 py-4 text-gray-700">10-12 years</td>
                  <td className="px-6 py-4 text-gray-700">On-balance sheet debt</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">ECA Financing</td>
                  <td className="px-6 py-4 text-gray-700">SOFR + 150-200 bps</td>
                  <td className="px-6 py-4 text-gray-700">10-12 years</td>
                  <td className="px-6 py-4 text-gray-700">Government-backed, on-balance sheet</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 mt-4 italic">
            * Indicative rates for creditworthy airlines on new generation wide-body aircraft. 
            Actual rates vary based on airline credit quality, aircraft type, and market conditions.
            Note: Interest rate benchmarks updated to reflect post-LIBOR transition (SOFR for USD, TONA for JPY).
          </p>
        </div>

        {/* Risk and Return */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Risk and Return Profile
          </h2>

          <div className="space-y-6">
            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Risk Factors</h3>
              <div className="space-y-3 text-gray-700">
                <div>
                  <h4 className="font-semibold mb-1">Credit Risk</h4>
                  <p className="text-sm">
                    Risk of airline default or bankruptcy affecting lease payments and asset recovery
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Residual Value Risk</h4>
                  <p className="text-sm">
                    Risk that aircraft value at lease end is lower than projected, impacting investor returns
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Remarketing Risk</h4>
                  <p className="text-sm">
                    Risk of difficulty finding new lessee or buyer at lease end if aircraft is returned
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Tax Risk</h4>
                  <p className="text-sm">
                    Risk of changes to Japanese tax law or NTA interpretations affecting depreciation benefits
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Currency Risk</h4>
                  <p className="text-sm">
                    Exposure to JPY/USD exchange rate fluctuations (often hedged)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Risk Mitigation</h3>
              <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                <div className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">→</span>
                  <span className="text-sm">
                    <strong>Credit Selection:</strong> Focus on investment grade or strong credit airlines
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">→</span>
                  <span className="text-sm">
                    <strong>Asset Selection:</strong> New technology aircraft with strong market demand
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">→</span>
                  <span className="text-green-600 mr-2 mt-1">→</span>
                  <span className="text-sm">
                    <strong>Diversification:</strong> Portfolio approach across multiple airlines and aircraft types
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">→</span>
                  <span className="text-sm">
                    <strong>Insurance:</strong> Comprehensive aviation insurance coverage
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">→</span>
                  <span className="text-sm">
                    <strong>Documentation:</strong> Robust legal protections and security interests
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">→</span>
                  <span className="text-sm">
                    <strong>Monitoring:</strong> Active oversight of airline and asset performance
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl shadow-lg p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-6">
            Economic Value Proposition
          </h2>
          <p className="text-lg text-blue-100 leading-relaxed mb-6">
            The enduring success of Japanese Operating Leases stems from creating genuine economic 
            value for all parties:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
              <h3 className="font-bold text-white mb-3">For Airlines</h3>
              <p className="text-sm text-blue-100">
                Access to competitively-priced, 100% financing for modern aircraft with operational flexibility
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
              <h3 className="font-bold text-white mb-3">For Japanese Investors</h3>
              <p className="text-sm text-blue-100">
                Attractive risk-adjusted returns combining tax benefits, lease income, and residual value upside
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
              <h3 className="font-bold text-white mb-3">For Lenders</h3>
              <p className="text-sm text-blue-100">
                Secured lending opportunity with experienced equity partners and quality aviation assets
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 bg-gray-100 rounded-xl p-6 border-l-4 border-gray-400">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>Disclaimer:</strong> The information provided on this page is for general educational purposes only 
            and should not be construed as financial, tax, or legal advice. All figures, rates, and statistics are 
            indicative and based on general market observations. Actual transaction terms, pricing, and economics vary 
            significantly based on specific circumstances, airline creditworthiness, aircraft type, market conditions, 
            and transaction structure. Tax laws and regulations are subject to change. Consult qualified financial, 
            tax, and legal advisors for specific guidance regarding Japanese Operating Lease transactions.
          </p>
        </div>
          </article>

          {/* Sidebar */}
          <Sidebar onContactClick={onContactClick} />
        </div>
      </div>
    </div>
  );
}

export default Economics;

