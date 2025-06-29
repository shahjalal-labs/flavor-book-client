const Myorder = ({ order }) => {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg  hover:scale-101  transition duration-300 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-200">
      <div className="card-body space-y-2">
        <h2 className="card-title text-blue-600">{order.product_name}</h2>
        <p>
          <span className="font-semibold">Amount:</span> {order.total_amount}{" "}
          {order.currency}
        </p>
        <p>
          <span className="font-semibold">Category:</span>{" "}
          {order.product_category}
        </p>
        <p>
          <span className="font-semibold">Shipping:</span>{" "}
          {order.shipping_method}
        </p>
        <p>
          <span className="font-semibold">Transaction ID:</span> {order.tran_id}
        </p>
        <p>
          <span className="font-semibold">Name:</span> {order.cus_name}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {order.cus_email}
        </p>
        <p>
          <span className="font-semibold">Phone:</span> {order.cus_phone}
        </p>
        <p className="text-sm text-gray-500">
          {order.cus_city}, {order.cus_country}
        </p>
      </div>
    </div>
  );
};

export default Myorder;
