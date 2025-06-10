export default function PatentValuation() {
  return (
  <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 flex flex-col items-center justify-center px-4 py-8">
    <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-3xl transform transition-all duration-300 hover:shadow-3xl">
      <h2 className="text-2xl font-extrabold text-center mb-6 border-b-2 border-blue-200 pb-3 text-gray-800">
        PATENT VALUATION
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
          <p className="text-gray-500 text-sm uppercase tracking-wide">Maximum</p>
          <p className="text-2xl font-bold text-blue-600 mt-2">$820,000</p>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
          <p className="text-gray-500 text-sm uppercase tracking-wide">Minimum</p>
          <p className="text-2xl font-bold text-green-600 mt-2">$245,000</p>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
          <p className="text-gray-500 text-sm uppercase tracking-wide">Average</p>
          <p className="text-2xl font-bold text-purple-600 mt-2">$460,000</p>
        </div>
      </div>
    </div>
  </div>
);
}
