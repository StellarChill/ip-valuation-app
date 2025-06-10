// src/components/ValuationLinks.tsx
import React from "react";

const ValuationLinks: React.FC = () => (
  <div className="mb-6">
    <h2 className="text-lg font-medium mb-2">What is Patent Valuation?</h2>
    <ul className="list-disc list-inside text-blue-600">
      <li>
        <a href="https://www.patsnap.com/glossary/patent-valuation/" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Patent Valuation (Indicator approach)
        </a>
      </li>
      <li>
        <a href="https://www.patsnap.com/resources/blog/patent-valuation-indicator-approach/" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Patent valuation - market value approach
        </a>
      </li>
      <li>
        <a href="https://www.patsnap.com/resources/blog/patent-valuation-income-approach/" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Patent valuation - income approach
        </a>
      </li>
      <li>
        <a href="https://www.patsnap.com/resources/blog/patent-valuation-methodologies-market-value-approach/" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Patent valuation - the cost approach
        </a>
      </li>
    </ul>
  </div>
);

export default ValuationLinks;
