// src/components/Disclaimer.tsx
import React from "react";

const Disclaimer: React.FC = () => (
  <div className="text-sm text-gray-600">
    <h3 className="font-medium mb-2">Disclaimer</h3>
    <p>
      The average patent value provided in this database is an estimate calculated using a variety
      of quantitative measures. This value is intended to serve as an indicative figure only and
      may not accurately reflect the true market value of the patent. Variations can occur due to
      factors not considered in the calculation, such as current market conditions, potential for
      innovation, legal issues, and other unforeseen factors. Users are advised to conduct their
      own thorough due diligence and seek professional advice before making any financial
      decisions based on this data. The patent value information provided is provided "as is"
      without any representation or warranty of any kind. Patsnap expressly disclaims all
      representations and warranties, whether express, implied, statutory, including any warranty
      of merchantability, fitness for a particular purpose, or non-infringement, and those
      warranties arising from course of dealing or usage of trade.
    </p>
  </div>
);

export default Disclaimer;
