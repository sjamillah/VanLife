import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Vans = () => {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");
  const filteredVans = typeFilter
   ? vans.filter(van => van.type === typeFilter) 
   : vans;

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch vans: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setVans(data.vans || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleFilterChange = (type) => {
    setSearchParams({ type });
  }
  const clearFilter = () => {
    setSearchParams({});
  }

  if (loading) return <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-lg text-gray-600">Loading vans...</div>;
  if (error) return <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-red-600 text-lg">Error: {error}</div>;
  if (filteredVans.length === 0) return <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-lg text-gray-600">No vans available.</div>;

  const vanElements = filteredVans.map((van) => (
    <Link to={van.id} key={van.id} aria-label={`View details for ${van.name} van, priced at $${van.price} per day`} className="block">
      <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
        <img
          src={van.imageUrl}
          alt={`${van.name} van`}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <div className="flex flex-col justify-between items-start gap-2 mb-2">
          <h3 className="text-lg sm:text-xl font-bold text-black">{van.name}</h3>
          <p className="text-base sm:text-lg text-black">
            ${van.price}
            <span className="text-sm text-gray-700">/day</span>
          </p>
        </div>
        <span
          className={`inline-block px-6 py-2 rounded-lg text-base font-semibold capitalize
            ${van.type === "simple" ? "bg-orange-300 text-orange-800" : ""}
            ${van.type === "rugged" ? "bg-green-300 text-green-800" : ""}
            ${van.type === "luxury" ? "bg-gray-800 text-white" : ""}`}
        >
          {van.type}
        </span>
      </div>
    </Link>
  ));

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 text-start">
        Explore our van options
      </h1>
      <div className="flex flex-wrap gap-4 mb-6">
        <button
          onClick={() => handleFilterChange("simple")}
          className={`px-4 py-2 rounded-lg text-base font-semibold capitalize ${
            typeFilter === "simple"
              ? "bg-orange-300 text-orange-800"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          Simple
        </button>
        <button
          onClick={() => handleFilterChange("rugged")}
          className={`px-4 py-2 rounded-lg text-base font-semibold capitalize ${
            typeFilter === "rugged"
              ? "bg-green-300 text-green-800"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          Rugged
        </button>
        <button
          onClick={() => handleFilterChange("luxury")}
          className={`px-4 py-2 rounded-lg text-base font-semibold capitalize ${
            typeFilter === "luxury"
              ? "bg-gray-800 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          Luxury
        </button>
        {typeFilter && (
          <button
            onClick={clearFilter}
            className="px-4 py-2 rounded-lg text-base font-semibold bg-red-200 text-red-800"
          >
            Clear Filter
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {vanElements}
      </div>
    </section>
  );
};

export default Vans;
