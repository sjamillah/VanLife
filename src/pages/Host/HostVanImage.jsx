import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanImage = () => {
  const { currentVan } = useOutletContext();

  return (
    <div className="p-4">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Photos</h3>
      <img
        src={currentVan.imageUrl}
        alt={`${currentVan.name} van`}
        className="w-full max-w-md object-cover rounded-lg"
      />
    </div>
  );
};

export default HostVanImage;