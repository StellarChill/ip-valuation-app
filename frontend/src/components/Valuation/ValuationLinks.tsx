// src/components/ValuationLinks.tsx
import React from "react";

interface ValuationLinkProps {
  href: string;
  children: React.ReactNode;
}

const ValuationLink: React.FC<ValuationLinkProps> = ({ href, children }) => (
  <li>
    <a href={href} target="_blank" rel="noopener noreferrer" className="hover:underline">
      {children}
    </a>
  </li>
);

const ValuationLinks: React.FC = () => (
  <div className="mb-6">
    <h2 className="text-lg font-medium mb-2">What is Patent Valuation?</h2>
    <ul className="list-disc list-inside text-blue-600">
      <ValuationLink href="https://www.patsnap.com/glossary/patent-valuation/">
        Patent Valuation (Indicator approach)
      </ValuationLink>
      <ValuationLink href="https://www.patsnap.com/resources/blog/patent-valuation-indicator-approach/">
        Patent valuation - market value approach
      </ValuationLink>
      <ValuationLink href="https://www.patsnap.com/resources/blog/patent-valuation-income-approach/">
        Patent valuation - income approach
      </ValuationLink>
      <ValuationLink href="https://www.patsnap.com/resources/blog/patent-valuation-methodologies-market-value-approach/">
        Patent valuation - the cost approach
      </ValuationLink>
    </ul>
  </div>
);

export default ValuationLinks;

