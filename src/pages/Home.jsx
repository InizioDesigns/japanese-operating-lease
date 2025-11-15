import Sidebar from '../components/Sidebar';

function Home({ onContactClick }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Japanese Operating Lease
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Financing Aviation Through Japanese Tax-Advantaged Structures
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Container with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Article Content */}
          <article className="flex-1">
            <section className="prose prose-lg max-w-none">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What is a Japanese Operating Lease?
                </h2>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  A <strong>Japanese Operating Lease (JOL)</strong> is an operating lease funded by an equity 
                  investment from a Japanese entity and non-recourse senior debt provided on-shore in Japan. 
                  This structure is used in the aviation industry to provide airlines with 100% financing of 
                  aircraft at attractive rates and over long terms.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
                  <p className="text-lg text-gray-800 leading-relaxed">
                    The JOL is appealing to airlines as it offers competitive lease rates and off balance 
                    sheet financing. This is achievable because the owner of the aircraft (i.e., the Japanese 
                    equity investor) is entitled to claim depreciation tax benefits in Japan.
                  </p>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  In order to receive the tax benefits associated with owning the aircraft, the Japanese 
                  equity investor must accept residual value exposure as well as demonstrate knowledge and 
                  expertise of leasing.
                </p>

                {/* History Section */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Historical Background
                  </h3>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    The JOL structure originated in <strong>1999</strong> as a result of the Japanese 
                    Tax Authority's (NTA) change in the basis upon which investors in a Japanese Leveraged 
                    Lease (JLL) could claim depreciation on cross-border or double dip leases.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-3 text-lg">
                        Previous Tax Scheme
                      </h4>
                      <p className="text-gray-700">
                        Under the previous system, the equity investor in a JLL assumed no asset risk 
                        on the investment.
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-3 text-lg">
                        New Tax System
                      </h4>
                      <p className="text-gray-700">
                        Japanese equity investors are now required to take a portion of asset risk in 
                        order to claim depreciation benefits.
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 italic">
                    <strong>Note:</strong> The only exception is for leases to Japanese domestic airlines.
                  </p>
                </div>
              </div>
            </section>

            {/* Disclaimer */}
            <section className="mt-8">
              <div className="bg-gray-100 rounded-xl p-6 border-l-4 border-gray-400">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>Disclaimer:</strong> The information provided on this website is for general educational 
                  purposes only and should not be construed as financial, tax, or legal advice. Japanese Operating 
                  Lease structures are complex financial transactions that require careful analysis and professional 
                  guidance. Consult qualified financial, tax, and legal advisors for specific guidance regarding 
                  JOL transactions.
                </p>
              </div>
            </section>
          </article>

          {/* Sidebar */}
          <Sidebar onContactClick={onContactClick} />
        </div>
      </div>
    </div>
  );
}

export default Home;

