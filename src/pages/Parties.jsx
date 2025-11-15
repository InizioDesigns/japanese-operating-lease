import Sidebar from '../components/Sidebar';

function Parties({ onContactClick }) {
  const parties = [
    {
      name: 'Special Purpose Company (SPC)',
      icon: '🏢',
      role: 'Owner and Lessor',
      description: 'A Japanese special purpose entity (typically a tokumei kumiai or TK structure) established specifically for the transaction. The SPC is the legal owner of the aircraft and the lessor under the lease agreement.',
      responsibilities: [
        'Legal owner of the aircraft',
        'Lessor under the operating lease',
        'Vehicle for combining equity and debt financing',
        'Entity claiming tax depreciation benefits'
      ],
      color: 'blue'
    },
    {
      name: 'Japanese Equity Investors',
      icon: '💼',
      role: 'Risk Capital Provider',
      description: 'Japanese trading companies, financial institutions, or leasing companies that provide equity investment to the SPC. These investors seek tax benefits through depreciation deductions.',
      responsibilities: [
        'Provide 20-30% equity financing',
        'Bear residual value risk',
        'Demonstrate leasing expertise to tax authorities',
        'Claim depreciation tax benefits in Japan',
        'Participate in end-of-lease decisions'
      ],
      color: 'green'
    },
    {
      name: 'Senior Lenders',
      icon: '🏦',
      role: 'Debt Financing Provider',
      description: 'Japanese banks providing non-recourse senior debt to finance 70-80% of the aircraft purchase price. The debt is secured by the aircraft and lease receivables.',
      responsibilities: [
        'Provide 70-80% senior debt financing',
        'Non-recourse lending secured by aircraft',
        'Monitor lease performance and covenant compliance',
        'Manage security interests and collateral'
      ],
      color: 'purple'
    },
    {
      name: 'Airline Lessee',
      icon: '✈️',
      role: 'Aircraft Operator',
      description: 'The airline that leases and operates the aircraft. The lessee makes periodic lease payments and is responsible for aircraft maintenance, insurance, and operations.',
      responsibilities: [
        'Make timely lease rental payments',
        'Operate and maintain aircraft per lease terms',
        'Maintain required insurance coverage',
        'Comply with return conditions or exercise options at lease end',
        'Bear operational and regulatory compliance responsibilities'
      ],
      color: 'indigo'
    },
    {
      name: 'Aircraft Manufacturer',
      icon: '🏭',
      role: 'Asset Supplier',
      description: 'Boeing, Airbus, or other OEM providing the aircraft. For new aircraft deliveries, the manufacturer works closely with all parties to ensure smooth delivery.',
      responsibilities: [
        'Manufacture and deliver aircraft to specification',
        'Provide warranties and technical support',
        'Coordinate delivery timing and logistics',
        'Support financing documentation'
      ],
      color: 'orange'
    },
    {
      name: 'Legal Advisors',
      icon: '⚖️',
      role: 'Transaction Counsel',
      description: 'Law firms advising various parties on transaction structure, documentation, and regulatory compliance. Typically includes both Japanese and international firms.',
      responsibilities: [
        'Structure transaction to meet legal and tax requirements',
        'Draft and negotiate transaction documents',
        'Conduct legal due diligence',
        'Advise on cross-border regulatory matters',
        'Ensure compliance with aviation regulations'
      ],
      color: 'red'
    },
    {
      name: 'Tax Advisors',
      icon: '📊',
      role: 'Tax Structuring Counsel',
      description: 'Tax professionals ensuring the transaction qualifies for Japanese tax benefits and complies with applicable tax laws in all relevant jurisdictions.',
      responsibilities: [
        'Confirm qualification for Japanese tax depreciation',
        'Structure to meet NTA requirements',
        'Advise on cross-border tax implications',
        'Provide tax opinions and comfort letters'
      ],
      color: 'teal'
    },
    {
      name: 'Technical Advisors',
      icon: '🔧',
      role: 'Aviation Consultants',
      description: 'Aviation consultants providing technical and commercial advice on aircraft values, maintenance, and market conditions.',
      responsibilities: [
        'Provide aircraft valuation and appraisal services',
        'Conduct technical inspections and reviews',
        'Advise on maintenance reserves and return conditions',
        'Assess residual value risk',
        'Monitor aircraft and engine market trends'
      ],
      color: 'yellow'
    },
    {
      name: 'Insurance Providers',
      icon: '🛡️',
      role: 'Risk Mitigation',
      description: 'Insurance companies and brokers providing coverage for hull, liability, and other aviation risks.',
      responsibilities: [
        'Provide comprehensive aviation insurance',
        'Name lessor and lenders as additional insureds',
        'Issue certificates of insurance',
        'Manage claims and renewals'
      ],
      color: 'pink'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'from-blue-50 to-blue-100 border-blue-600',
      green: 'from-green-50 to-green-100 border-green-600',
      purple: 'from-purple-50 to-purple-100 border-purple-600',
      indigo: 'from-indigo-50 to-indigo-100 border-indigo-600',
      orange: 'from-orange-50 to-orange-100 border-orange-600',
      red: 'from-red-50 to-red-100 border-red-600',
      teal: 'from-teal-50 to-teal-100 border-teal-600',
      yellow: 'from-yellow-50 to-yellow-100 border-yellow-600',
      pink: 'from-pink-50 to-pink-100 border-pink-600'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transaction Parties
            </h1>
            <p className="text-xl text-blue-100">
              Roles and Responsibilities in Japanese Operating Lease Transactions
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Understanding the Ecosystem
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            A Japanese Operating Lease transaction involves multiple sophisticated parties, each with 
            specific roles and responsibilities. The complexity of these structures requires careful 
            coordination among all participants to ensure successful execution and ongoing performance.
          </p>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Transaction Complexity
            </h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-700 mb-2">9+</div>
                <p className="text-sm text-gray-700">Key Party Types</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-700 mb-2">Many</div>
                <p className="text-sm text-gray-700">Documents</p>
                <p className="text-xs text-gray-600 mt-1">Dozens typically required</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-700 mb-2">3-6</div>
                <p className="text-sm text-gray-700">Months to Close</p>
                <p className="text-xs text-gray-600 mt-1">Typical timeframe</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-700 mb-2">Multiple</div>
                <p className="text-sm text-gray-700">Jurisdictions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Parties Detail Cards */}
        <div className="space-y-8">
          {parties.map((party, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${getColorClasses(party.color)} rounded-2xl shadow-lg border-l-4 p-8 md:p-10 hover:shadow-xl transition-shadow`}
            >
              <div className="flex items-start mb-6">
                <div className="text-5xl mr-6">
                  {party.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-0">
                      {party.name}
                    </h2>
                    <span className="inline-block bg-white px-4 py-2 rounded-full text-sm font-semibold text-gray-700 shadow-sm">
                      {party.role}
                    </span>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {party.description}
                  </p>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Key Responsibilities:
                    </h3>
                    <ul className="space-y-2">
                      {party.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <span className="text-blue-600 mr-3 mt-1 flex-shrink-0">✓</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Relationships Diagram */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Party Relationships and Interactions
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Primary Relationships
              </h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">→</span>
                  <span><strong>SPC ↔ Equity Investors:</strong> Ownership and capital contribution</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">→</span>
                  <span><strong>SPC ↔ Senior Lenders:</strong> Loan and security agreements</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">→</span>
                  <span><strong>SPC ↔ Airline:</strong> Aircraft lease agreement</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">→</span>
                  <span><strong>Airline ↔ Manufacturer:</strong> Purchase and delivery</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Advisory Relationships
              </h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">→</span>
                  <span><strong>Legal Advisors:</strong> Advise all parties on documentation</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">→</span>
                  <span><strong>Tax Advisors:</strong> Ensure tax compliance and benefits</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">→</span>
                  <span><strong>Technical Advisors:</strong> Provide aviation expertise</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">→</span>
                  <span><strong>Insurance Providers:</strong> Risk protection for all parties</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Coordination Requirements
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Successful JOL transactions require seamless coordination among all parties. This includes:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <span className="text-blue-600 text-xl mr-3 mt-1">•</span>
                <span className="text-gray-700">Synchronized document negotiation and execution</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 text-xl mr-3 mt-1">•</span>
                <span className="text-gray-700">Coordinated funding and aircraft delivery</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 text-xl mr-3 mt-1">•</span>
                <span className="text-gray-700">Alignment of closing conditions across agreements</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 text-xl mr-3 mt-1">•</span>
                <span className="text-gray-700">Regular communication during lease term</span>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-12 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl shadow-lg p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-6">
            The Importance of Experienced Parties
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed mb-6">
            The complexity of JOL transactions demands experienced and sophisticated parties in each role. 
            Successful transactions are built on:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <span className="text-blue-400 text-xl mr-3 mt-1">✓</span>
              <span className="text-gray-200">Deep understanding of aviation and tax-driven structures</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-400 text-xl mr-3 mt-1">✓</span>
              <span className="text-gray-200">Strong relationships and trust among parties</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-400 text-xl mr-3 mt-1">✓</span>
              <span className="text-gray-200">Professional execution and attention to detail</span>
            </div>
            <div className="flex items-start">
              <span className="text-blue-400 text-xl mr-3 mt-1">✓</span>
              <span className="text-gray-200">Commitment to long-term relationship throughout lease term</span>
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

export default Parties;

