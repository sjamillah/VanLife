import React from "react";
import { Link } from "react-router-dom";

export default function HostVans() {
  const [vans, setVans] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const hostVansEls = vans.map((van) => (
    <Link
      to={van.id}
      key={van.id}
      className="min-w-[400px] bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden flex"
    >
      <img
        src={van.imageUrl}
        alt={`Photo of ${van.name}`}
        className="w-40 h-40 object-cover rounded-l-xl flex-shrink-0"
      />
      <div className="p-4 flex flex-col justify-center">
        <h3 className="text-lg font-semibold text-gray-800">{van.name}</h3>
        <p className="text-gray-600 mt-1">
          <span className="text-gray-900 font-bold">${van.price}</span>/day
        </p>
      </div>
    </Link>
  ));

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Your Listed Vans</h1>
      {vans.length > 0 ? (
        <div className="flex flex-col gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-300">
          {hostVansEls}
        </div>
      ) : (
        <h2 className="text-center text-gray-500">Loading...</h2>
      )}
    </section>
  );
}
