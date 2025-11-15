import Sidebar from '../components/Sidebar';

function JolVsJolco({ onContactClick }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              JOL vs. JOLCO
            </h1>
            <p className="text-xl text-blue-100">
              Understanding the Key Differences Between Japanese Operating Lease Structures
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Comparing JOL and JOLCO Structures
            </h2>

            {/* Overview */}
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Both <strong>JOL (Japanese Operating Lease)</strong> and <strong>JOLCO (Japanese Operating 
                Lease with Call Option)</strong> are tax-driven financing structures used primarily in 
                aircraft financing. While they share similar foundations, there are important distinctions 
                that affect their structure and outcomes.
              </p>
            </div>

            {/* Comparison Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* JOL Card */}
              <div className="bg-blue-50 rounded-xl p-8 border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                  <span className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    1
                  </span>
                  JOL
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Structure</h4>
                    <p className="text-gray-700">
                      Pure operating lease with Japanese equity and non-recourse debt
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Ownership Risk</h4>
                    <p className="text-gray-700">
                      Japanese investor retains full residual value risk throughout the lease term
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">End of Lease</h4>
                    <p className="text-gray-700">
                      Aircraft typically returned to lessor or sold in open market
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Tax Benefits</h4>
                    <p className="text-gray-700">
                      Japanese investor claims depreciation benefits over lease term
                    </p>
                  </div>
                </div>
              </div>

              {/* JOLCO Card */}
              <div className="bg-green-50 rounded-xl p-8 border-2 border-green-200">
                <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center">
                  <span className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    2
                  </span>
                  JOLCO
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Structure</h4>
                    <p className="text-gray-700">
                      Operating lease with call option allowing lessee to purchase asset
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Ownership Risk</h4>
                    <p className="text-gray-700">
                      Risk partially transferred through call option mechanism
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">End of Lease</h4>
                    <p className="text-gray-700">
                      Lessee typically exercises call option to purchase aircraft at predetermined price
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Tax Benefits</h4>
                    <p className="text-gray-700">
                      Similar depreciation benefits with added flexibility for lessee
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Differences */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Key Distinguishing Factors
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Call Option</h4>
                    <p className="text-gray-700">
                      The primary difference is the inclusion of a call option in JOLCO structures, 
                      giving the airline lessee the right to purchase the aircraft at a predetermined price.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Residual Value Risk</h4>
                    <p className="text-gray-700">
                      In JOL, the Japanese investor bears full residual value risk. In JOLCO, this risk 
                      is mitigated by the call option, which typically results in the lessee acquiring the asset.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Flexibility</h4>
                    <p className="text-gray-700">
                      JOLCO provides airlines with greater flexibility and a path to ownership, while 
                      JOL maintains a traditional operating lease structure.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Accounting Treatment</h4>
                    <p className="text-gray-700">
                      Both structures typically qualify as operating leases for accounting purposes, 
                      though JOLCO's call option may affect balance sheet treatment depending on jurisdiction.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits for Airlines */}
            <div className="border-l-4 border-blue-600 pl-6 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Airlines Choose These Structures
              </h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>100% financing with generally competitive rates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Potential off-balance-sheet treatment (depending on accounting standards and jurisdiction)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Long-term financing solutions (typically 10-12 years)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Access to Japanese capital markets at potentially attractive terms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Tax efficiency through Japanese depreciation benefits passed through in pricing</span>
                </li>
              </ul>
            </div>

            {/* Summary */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Summary
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                While both JOL and JOLCO provide tax-efficient aircraft financing solutions leveraging 
                Japanese capital markets, the key distinction lies in the call option feature of JOLCO. 
                This option provides airlines with a path to ownership and reduces residual value risk 
                for Japanese investors, making JOLCO an increasingly popular choice in modern aircraft 
                financing transactions.
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

export default JolVsJolco;

