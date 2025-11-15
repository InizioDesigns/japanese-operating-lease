import Sidebar from '../components/Sidebar';

function HowItWorks({ onContactClick }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How It Works
            </h1>
            <p className="text-xl text-blue-100">
              The Structure and Mechanics of Japanese Operating Leases
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
          {/* Diagram Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Transaction Structure
            </h2>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 mb-8">
              <img 
                src="/works1.png" 
                alt="Japanese Operating Lease transaction structure diagram showing relationships between equity investor, lender, special purpose company, and airline lessee" 
                className="w-full max-w-4xl mx-auto rounded-lg shadow-md"
              />
              <p className="text-sm text-gray-600 text-center mt-4 italic">
                Typical JOL transaction structure showing the flow of funds and relationships between parties
              </p>
            </div>
          </div>

          {/* Step-by-Step Process */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Transaction Process
            </h2>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6 mt-1">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Special Purpose Company Formation
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    A Special Purpose Company (SPC) is established in Japan to serve as the owner and 
                    lessor of the aircraft. This entity is typically a <em>tokumei kumiai</em> (TK) or 
                    similar structure under Japanese law, designed specifically for the transaction.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6 mt-1">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Funding Structure
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-6 mb-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Equity Investment</h4>
                        <p className="text-gray-700">
                          Japanese investors typically provide equity capital representing 
                          approximately 20-30% of the aircraft's purchase price.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Senior Debt</h4>
                        <p className="text-gray-700">
                          Japanese banks typically provide non-recourse senior debt financing for 
                          approximately 70-80% of the purchase price.
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    This combination provides the airline with 100% financing of the aircraft acquisition.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6 mt-1">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Aircraft Acquisition
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The SPC purchases the aircraft directly from the manufacturer (e.g., Boeing, Airbus) 
                    or from the secondary market. The SPC becomes the legal owner and registers the 
                    aircraft accordingly.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6 mt-1">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Lease Agreement
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    The SPC enters into an operating lease agreement with the airline. Key features typically include:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      <span>Lease term typically 10-12 years</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      <span>Generally fixed lease rental payments throughout the term</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      <span>Operating lease classification for accounting purposes (subject to applicable standards)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      <span>Maintenance and operational responsibilities typically assigned to the lessee</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6 mt-1">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Cash Flow Management
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The airline makes periodic lease payments to the SPC. These payments service the 
                    senior debt and provide returns to the equity investors. The rental rates are 
                    structured to be attractive to the airline while covering all financing costs.
                  </p>
                </div>
              </div>

              {/* Step 6 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6 mt-1">
                  6
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Tax Benefits Realization
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    The Japanese equity investors claim depreciation deductions on the aircraft over 
                    the lease term according to Japanese tax law. This tax benefit is the key economic 
                    driver that enables competitive lease rates for airlines.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                    <p className="text-gray-800 font-medium">
                      Important: To qualify for these tax benefits, the Japanese investor must demonstrate 
                      genuine ownership risk and leasing expertise.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 7 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6 mt-1">
                  7
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    End of Lease
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    At the conclusion of the lease term, several options are typically available:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Return</h4>
                      <p className="text-sm text-gray-700">
                        Aircraft returned to lessor for remarketing or sale
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Renewal</h4>
                      <p className="text-sm text-gray-700">
                        Lease term extended with new rental terms
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Purchase</h4>
                      <p className="text-sm text-gray-700">
                        Airline purchases aircraft at fair market value (or via call option in JOLCO)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Participants */}
          <div className="border-t-2 border-gray-200 pt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Key Participants
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                <div className="text-3xl mb-3">🏢</div>
                <h3 className="font-bold text-gray-900 mb-2">Japanese Equity Investors</h3>
                <p className="text-sm text-gray-700">
                  Trading companies, financial institutions seeking tax benefits
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                <div className="text-3xl mb-3">🏦</div>
                <h3 className="font-bold text-gray-900 mb-2">Japanese Banks</h3>
                <p className="text-sm text-gray-700">
                  Provide non-recourse senior debt financing
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                <div className="text-3xl mb-3">✈️</div>
                <h3 className="font-bold text-gray-900 mb-2">Airlines</h3>
                <p className="text-sm text-gray-700">
                  Lessees operating the aircraft under lease agreement
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
                <div className="text-3xl mb-3">⚖️</div>
                <h3 className="font-bold text-gray-900 mb-2">Advisors</h3>
                <p className="text-sm text-gray-700">
                  Legal, tax, and financial advisors structuring the transaction
                </p>
              </div>
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

export default HowItWorks;

