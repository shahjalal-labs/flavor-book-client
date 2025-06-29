import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Loader2, AlertTriangle } from "lucide-react";
import Myorder from "./Myorder";
import LottieAnimation from "../../animation/Walking";
import { cartLottie } from "../../animation";
import NoOrdersCard from "./NoOrdersCard";

const fetchOrders = async () => {
  const { data } = await axios.get(
    "http://localhost:5000/api/v1/orders?email=customer@example.com",
  );
  console.log(data, "Myorders.jsx", 10);
  return data?.data;
};

export default function MyOrders() {
  const {
    data: orders,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["myOrders"],
    queryFn: fetchOrders,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="animate-spin h-8 w-8 text-blue-500" />
        <span className="ml-2 text-lg font-medium">Loading your orders...</span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center text-red-600 py-10">
        <AlertTriangle className="w-10 h-10" />
        <p className="mt-2 font-semibold">Failed to load orders</p>
        <p className="text-sm">{error.message}</p>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-8">
      <div className="flex justify-center items-center gap-4 sm:gap-28 bg-gray-50 rounded-2xl p-4 shadow mt-5 sm:mb-16">
        <div className="w-[100px] mb-[-20px]">
          <LottieAnimation animation={cartLottie} />
        </div>

        <div className="w-11/12 mx-auto text-center">
          <h1 className="text-2xl font-bold mb-2 text-sky-300">My Orders</h1>
          <p className="text-gray-400 sm:text-lg font-medium">
            Here you can find a detailed overview of all your past orders.
            <span className="max-sm:hidden">
              {" "}
              Each card below contains information about the product, payment,
              and shipping details. You can use this section to track your
              purchases and keep a record for future reference.
            </span>
          </p>
        </div>
      </div>

      {orders?.length == 0 ? (
        <div className="flex justify-center items-center mt-10">
          <NoOrdersCard />
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {orders?.map((order) => (
            <Myorder key={order._id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
}
