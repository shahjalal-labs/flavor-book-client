// NoOrdersCard.jsx
import React from "react";
import { Link } from "react-router";

const NoOrdersCard = () => {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="bg-base-100 shadow-md rounded-lg p-6 text-center max-w-md w-full">
        <div className="text-5xl mb-4 text-gray-400">📦</div>
        <h2 className="text-xl font-semibold mb-2">No Orders Found</h2>
        <p className="text-gray-600">
          You haven’t placed any orders yet. Once you do, your order history
          will appear here.
        </p>
        <Link to="/recipe-market">
          <button className="btn btn-primary mt-4">Browse Products</button>
        </Link>
      </div>
    </div>
  );
};

export default NoOrdersCard;
