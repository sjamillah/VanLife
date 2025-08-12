import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const VansDetails = () => {
  const { id } = useParams();
  const [van, setVan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch van: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setVan(data.vans || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-lg text-gray-600">Loading van details...</div>;
  if (error) return <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-red-600 text-lg">Error: {error}</div>;
  if (!van) return <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-lg text-gray-600">Van not found.</div>;

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <Link to="/vans" className="text-blue-600 hover:text-blue-800 text-base sm:text-lg mb-4 inline-block">
        &larr; Back to all vans
      </Link>
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-3xl mx-auto">
        <img
          src={van.imageUrl}
          alt={`${van.name} van`}
          className="w-full h-64 sm:h-80 object-cover rounded-md mb-6"
        />
        <span
          className={`inline-block px-3 py-1 rounded-full text-sm font-medium capitalize mb-4
            ${van.type === "simple" ? "bg-orange-100 text-orange-800" : ""}
            ${van.type === "rugged" ? "bg-green-100 text-green-800" : ""}
            ${van.type === "luxury" ? "bg-gray-800 text-white" : ""}`}
        >
          {van.type}
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">{van.name}</h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-4">
          <span className="font-semibold">${van.price}</span>
          <span className="text-sm">/day</span>
        </p>
        <p className="text-base sm:text-lg text-gray-600 mb-6">{van.description}</p>
        <button className="w-full sm:w-auto bg-orange-500 text-white font-semibold text-base sm:text-lg px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-300">
          Rent this van
        </button>
      </div>
    </section>
  );
};

export default VansDetails;
