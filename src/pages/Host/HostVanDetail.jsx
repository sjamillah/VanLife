import React, { useEffect, useState } from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";

const HostVanDetail = () => {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(`Fetching van for ID: ${id}`);
    fetch(`/api/host/vans/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch van: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log("Server response:", data);
        if (data.error) throw new Error(data.error);
        setCurrentVan(data.vans || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err.message);
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-lg text-gray-600">Loading van details...</div>;
  if (error) return <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-red-600 text-lg">Error: {error}</div>;
  if (!currentVan) return <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-lg text-gray-600">Van not found. Please check the van ID.</div>;

  function navHostStyle({ isActive }) {
    return isActive
      ? "text-blue-600 underline font-semibold"
      : "text-gray-600 hover:text-blue-600 hover:underline font-semibold";
  }

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-4xl">
      <Link
        to="/host/vans"
        className="text-blue-600 hover:text-blue-800 text-base sm:text-lg mb-6 inline-block"
      >
        &larr; Back to all vans
      </Link>

      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
          <img
            src={currentVan.imageUrl}
            alt={`${currentVan.name} van`}
            className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-lg"
          />
          <div className="flex-1">
            <span
              className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold capitalize mb-3
                ${currentVan.type === "simple" ? "bg-orange-100 text-orange-800" : ""}
                ${currentVan.type === "rugged" ? "bg-green-100 text-green-800" : ""}
                ${currentVan.type === "luxury" ? "bg-gray-800 text-white" : ""}`}
            >
              {currentVan.type}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">{currentVan.name}</h3>
            <p className="text-lg sm:text-xl text-gray-600">
              <span className="font-semibold">${currentVan.price}</span>
              <span className="text-sm text-gray-500">/day</span>
            </p>
          </div>
        </div>

        <nav className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-base sm:text-lg font-semibold text-gray-600 border-b border-gray-200 pb-4 mb-6">
          <NavLink to="." end className={navHostStyle}>
            Details
          </NavLink>
          <NavLink to="pricing" className={navHostStyle}>
            Pricing
          </NavLink>
          <NavLink to="photos" className={navHostStyle}>
            Photos
          </NavLink>
        </nav>

        <Outlet context={{ currentVan }} />
      </div>
    </section>
  );
};

export default HostVanDetail;