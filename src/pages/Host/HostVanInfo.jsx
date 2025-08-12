import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanInfo = () => {
  const { currentVan } = useOutletContext();

  return (
    <div className="space-y-4 mb-6">
      <div>
        <h4 className="text-lg font-semibold text-gray-800">Name</h4>
        <p className="text-base text-gray-600">{currentVan.name}</p>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-800">Type</h4>
        <p className="text-base text-gray-600 capitalize">{currentVan.type}</p>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-800">Description</h4>
        <p className="text-base text-gray-600">{currentVan.description}</p>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-800">Visibility</h4>
        <p className="text-base text-gray-600 capitalize">{currentVan.visibility || "Not specified"}</p>
      </div>
    </div>
  );
};

export default HostVanInfo;
