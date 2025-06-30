import { useParams } from "react-router";
import axios from "axios";
import { chefs } from "./chef.constant";
import toast from "react-hot-toast";

const Checkout = () => {
  const { id } = useParams();
  const chef = chefs.find((c) => c.id === parseInt(id));

  if (!chef) {
    return <div className="p-6">Chef not found.</div>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement booking logic here
    toast.success(`🎉 Booking confirmed for ${chef.name}!`, {
      duration: 3000,
    });
    const { data: response } = await axios.post(
      "https://worldwide-recipe-chefs-sharing-serv.vercel.app/create-ssl-payment",
      {
        total_amount: 100,
        currency: "BDT",
        shipping_method: "Courier",
        product_name: "Computer.",
        product_category: "Electronic",
        product_profile: "general",
        cus_name: "Customer Name",
        cus_email: "customer@example.com",
        cus_add1: "Dhaka",
        cus_add2: "Dhaka",
        cus_city: "Dhaka",
        cus_state: "Dhaka",
        cus_postcode: "1000",
        cus_country: "Bangladesh",
        cus_phone: "01711111111",
        cus_fax: "01711111111",
      },
    );
    console.log(response, "ChefChekout.jsx", 21);
    if (response.gatewayUrl) {
      window.location.replace(response.gatewayUrl);
    }
  };

  return (
    <div className=" p-6  bg-white rounded-lg shadow-md mt-10 border">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="mb-4">
        <p className="text-lg font-semibold">{chef.name}</p>
        <p>{chef.specialty}</p>
        <p>Price per Hour: ${chef.pricePerHour}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1">Your Name</label>
          <input
            type="text"
            className="w-full   border px-3 py-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            className="w-full   border px-3 py-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Booking Date</label>
          <input
            type="date"
            className="w-full   border px-3 py-2 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default Checkout;
