function Sidebar({ onContactClick }) {
  return (
    <aside className="w-full lg:w-80 flex-shrink-0" aria-label="About the Writer">
      <div className="bg-white rounded-2xl shadow-lg p-6 lg:sticky lg:top-24">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          About the Writer
        </h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          The writer of www.japaneseoperatinglease.com is an aviation enthusiast. 
          With over 20 years of international banking and advisory expertise in the 
          aviation industry, I make a point of keeping informed of the various financing 
          structures and active participants available to airlines, investors and OEMs. 
          The aviation finance industry is changing in a positive way – because of the 
          low interest rate environment and continued economic uncertainty, the industry 
          is attracting new, experienced investors looking to place large amounts of capital. 
          Investors such as Sovereign Wealth Funds, Private Equity, Insurance Companies and 
          Pension Funds are investing in aircraft because of the longevity of the asset and 
          the attractive returns.
        </p>

        <div className="pt-4 border-t border-gray-200">
          <p className="text-gray-900 font-semibold mb-3 text-center">
            Have questions? We typically respond the same day.
          </p>
          <button
            onClick={onContactClick}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 shadow-md"
            aria-label="Open contact form"
          >
            Contact Me
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;

