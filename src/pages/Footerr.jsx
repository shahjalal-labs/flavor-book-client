// import { Facebook, Instagram, Mail, Twitter, Youtube } from "lucide-react";
// import { Link } from "react-router-dom";
// import Brand from "../components/Brand";
// import { AuthContext } from "../provider/AuthProvider";
// import { useContext } from "react";
// import Swal from "sweetalert2";
//
// const handleSubscribe = (e) => {
//   e.preventDefault();
//
//   const email = e.target?.email.value;
//   if (!email) {
//     Swal.fire({
//       title: "Oops...",
//       text: "Please enter your email address!",
//       icon: "error",
//       timer: 3500,
//     });
//     return;
//   }
//   Swal.fire({
//     title: "Subscribed FlavorBook",
//     text: "Thank you for subscribing to our newsletter!",
//     icon: "success",
//     timer: 2000,
//   });
// };
//
// const Footerr = () => {
//   const { user } = useContext(AuthContext);
//   return (
//     <footer className="bg-gradient-to-bl from-purple-300/50 to-teal-100 text-gray-800 mt-16 pt-10 pb-6 px-6 md:px-5">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 xl:grid-cols-4">
//         {/* Brand Section */}
//         <div className="space-y-4">
//           {/* <h2 className="text-3xl font-bold text-purple-600">🍴 FlavorBook</h2> */}
//           <Brand />
//           <p className="text-gray-700">
//             Discover, cook, and share your favorite recipes from around the
//             globe. A delicious journey awaits. 🌍✨
//           </p>
//           <div className="flex gap-4 mt-4">
//             <Facebook className="hover:text-orange-600 cursor-pointer transition" />
//             <Instagram className="hover:text-orange-600 cursor-pointer transition" />
//             <Twitter className="hover:text-orange-600 cursor-pointer transition" />
//             <Youtube className="hover:text-orange-600 cursor-pointer transition" />
//             <Mail className="hover:text-orange-600 cursor-pointer transition" />
//           </div>
//         </div>
//
//         {/* Quick Links */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4 text-purple-500">
//             Quick Links
//           </h3>
//           <ul className="space-y-2 text-gray-500 font-medium">
//             <li>
//               <Link to="/" className="hover:text-orange-600">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/recipes" className="hover:text-orange-600">
//                 All Recipes
//               </Link>
//             </li>
//             <li>
//               <Link to="/add-recipe" className="hover:text-orange-600">
//                 Add Recipe
//               </Link>
//             </li>
//             <li>
//               <Link to="/about" className="hover:text-orange-600">
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link to="/blogs" className="hover:text-orange-600">
//                 Blogs
//               </Link>
//             </li>
//             <li>
//               <Link to="/faq" className="hover:text-orange-600">
//                 FAQ
//               </Link>
//             </li>
//           </ul>
//         </div>
//
//         {/* Legal */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4 text-purple-500">Legal</h3>
//           <ul className="space-y-2 text-gray-700 font-medium">
//             <li>
//               <Link to="/terms" className="hover:text-orange-600">
//                 Terms & Conditions
//               </Link>
//             </li>
//             <li>
//               <Link to="/privacy-policy" className="hover:text-orange-600">
//                 Privacy Policy
//               </Link>
//             </li>
//             <li>
//               <Link to="/contact" className="hover:text-orange-600">
//                 Contact Us
//               </Link>
//             </li>
//             <li>
//               <Link to="/blogs" className="hover:text-orange-600">
//                 Blogs
//               </Link>
//             </li>
//           </ul>
//         </div>
//
//         {/* Newsletter */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4 text-purple-500">
//             🍋 Stay Updated
//           </h3>
//           <p className="text-gray-700 mb-3">
//             Subscribe to get the latest recipes and cooking inspiration!
//           </p>
//           <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="px-4 py-2 border  border-sky-300 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400"
//               name="email"
//               defaultValue={user?.email}
//               required
//             />
//             <button
//               type="submit"
//               className="bg-purple-500 hover:bg-purple-600 transition text-white py-2 px-4 rounded-full font-semibold"
//             >
//               Subscribe 🍊
//             </button>
//           </form>
//         </div>
//       </div>
//
//       {/* Footer Bottom */}
//       <div className="mt-10 border-t border-purple-500 pt-4 text-center text-gray-500 text-sm">
//         © {new Date().getFullYear()} FlavorBook. All rights reserved.
//       </div>
//     </footer>
//   );
// };
//
// export default Footerr;
//
//
import { Facebook, Instagram, Mail, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import Brand from "../components/Brand";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const handleSubscribe = (e) => {
  e.preventDefault();

  const email = e.target?.email.value;
  if (!email) {
    Swal.fire({
      title: "Oops...",
      text: "Please enter your email address!",
      icon: "error",
      timer: 3500,
    });
    return;
  }
  Swal.fire({
    title: "Subscribed FlavorBook",
    text: "Thank you for subscribing to our newsletter!",
    icon: "success",
    timer: 2000,
  });
};

const Footerr = () => {
  const { user } = useContext(AuthContext);
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-950 to-black text-slate-300 mt-16 pt-12 pb-8 px-6 md:px-8 border-t border-indigo-700/30 shadow-inner shadow-indigo-900/40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 xl:grid-cols-4">
        {/* Brand Section */}
        <div className="space-y-4">
          <Brand />
          <p className="text-slate-400 leading-relaxed">
            Discover, cook, and share your favorite recipes from around the
            globe. A delicious journey awaits. 🌍✨
          </p>
          <div className="flex gap-5 mt-4 text-slate-400">
            <Facebook className="hover:text-indigo-400 hover:scale-110 transition duration-300 cursor-pointer" />
            <Instagram className="hover:text-indigo-400 hover:scale-110 transition duration-300 cursor-pointer" />
            <Twitter className="hover:text-indigo-400 hover:scale-110 transition duration-300 cursor-pointer" />
            <Youtube className="hover:text-indigo-400 hover:scale-110 transition duration-300 cursor-pointer" />
            <Mail className="hover:text-indigo-400 hover:scale-110 transition duration-300 cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-indigo-400">
            Quick Links
          </h3>
          <ul className="space-y-2 text-slate-400 font-medium">
            <li>
              <Link
                to="/"
                className="hover:text-indigo-300 hover:translate-x-1 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/recipes"
                className="hover:text-indigo-300 hover:translate-x-1 transition"
              >
                All Recipes
              </Link>
            </li>
            <li>
              <Link
                to="/add-recipe"
                className="hover:text-indigo-300 hover:translate-x-1 transition"
              >
                Add Recipe
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-indigo-300 hover:translate-x-1 transition"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                className="hover:text-indigo-300 hover:translate-x-1 transition"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="hover:text-indigo-300 hover:translate-x-1 transition"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-indigo-400">Legal</h3>
          <ul className="space-y-2 text-slate-400 font-medium">
            <li>
              <Link
                to="/terms"
                className="hover:text-indigo-300 hover:translate-x-1 transition"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-indigo-300 hover:translate-x-1 transition"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-indigo-300 hover:translate-x-1 transition"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                className="hover:text-indigo-300 hover:translate-x-1 transition"
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-indigo-400">
            📬 Stay Updated
          </h3>
          <p className="text-slate-400 mb-3">
            Subscribe to get the latest recipes and cooking inspiration!
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 border border-indigo-500/40 rounded-full bg-slate-800/60 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              name="email"
              defaultValue={user?.email}
              required
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 transition duration-300 text-white py-2 px-4 rounded-full font-semibold shadow-lg hover:shadow-indigo-500/30"
            >
              Subscribe ✨
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-slate-700 pt-4 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-indigo-400">FlavorBook</span>. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footerr;
