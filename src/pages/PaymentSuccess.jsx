import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export default function PaymentSuccess() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-tr from-green-100 via-white to-green-50 p-4 mt-7 rounded-xl">
      <div className="bg-white shadow-2xl rounded-2xl max-w-lg w-full p-8 text-center border border-green-200">
        <div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, ease: "backOut" }}
          className="flex justify-center mb-4"
        >
          <CheckCircle className="text-green-500 w-16 h-16" />
        </div>

        <h1 className="text-3xl font-bold text-green-700 mb-2">
          Payment Successful 🎉
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you! Your payment was completed successfully. You will receive a
          confirmation email shortly.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="btn btn-success btn-outline hover:scale-105 transition-transform duration-300"
          >
            Go to Home
          </Link>
          <Link
            to="/orders"
            className="btn bg-green-500 text-white hover:bg-green-600 hover:scale-105 transition-transform duration-300"
          >
            View My Orders
          </Link>
        </div>

        <div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-sm text-gray-400"
        >
          &copy; {new Date().getFullYear()} Coffee Store. All rights reserved.
        </div>
      </div>
    </div>
  );
}
