import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanPricing = () => {
  const { currentVan } = useOutletContext();

  return (
    <div className="p-4">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Pricing Details</h3>
      <p className="text-base sm:text-lg text-gray-600">${currentVan.price} per day</p>
    </div>
  );
};

export default HostVanPricing;