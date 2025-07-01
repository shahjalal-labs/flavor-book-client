# README Generation Prompt


Generate a modern, professional, and clear `README.md` for this project.


## 📁 File Structure
```bash
.
├── 200.html
├── bun.lock
├── .env
├── eslint.config.js
├── freelance.md
├── .gitignore
├── imageGenerationPrompt.md
├── index.html
├── package.json
├── PKGBUILD
├── public
│   ├── CNAME
│   └── vite.svg
├── README.md
├── requirement.md
├── src
│   ├── animation
│   │   ├── AwesomeReveal.jsx
│   │   ├── cart.json
│   │   ├── cooking.json
│   │   ├── image.png
│   │   ├── index.js
│   │   ├── loginAnimation2.json
│   │   ├── loginAnimation3.json
│   │   ├── loginAnimation.json
│   │   ├── male_cooking.json
│   │   ├── mango_walking.json
│   │   ├── motion
│   │   ├── profileAnimation.json
│   │   └── Walking.jsx
│   ├── App.jsx
│   ├── assets
│   │   ├── flavorBooks
│   │   │   ├── Animation - 1747955888499.json
│   │   │   ├── banner1.jpg
│   │   │   ├── banner2.jpeg
│   │   │   ├── banner3.jpeg
│   │   │   ├── banner_indicator.jpg
│   │   │   ├── logo.jpg
│   │   │   ├── logoRounded.jpg
│   │   │   ├── logoUpdated.jpg
│   │   │   ├── long_banner.jpg
│   │   │   ├── looka_logo_black.svg
│   │   │   └── output.jpg
│   │   ├── index.js
│   │   ├── logo.png
│   │   ├── notfound3.jpg
│   │   └── screenshots
│   │       ├── preview
│   │       └── ss-10-48-41-AM_29-06-25.png
│   ├── bun.lock
│   ├── components
│   │   ├── Brand.jsx
│   │   ├── Button.jsx
│   │   ├── Errorpage.jsx
│   │   ├── FooterLinks.jsx
│   │   ├── Home.jsx
│   │   ├── Input.jsx
│   │   ├── Menu.jsx
│   │   ├── Nav
│   │   │   └── NavContent.jsx
│   │   ├── Nav.jsx
│   │   ├── Newsletter.jsx
│   │   ├── Recipe.jsx
│   │   ├── Recipes.jsx
│   │   ├── slider.constant.js
│   │   ├── Slider.jsx
│   │   └── SliderOverlay.jsx
│   ├── constant.jsx
│   ├── firebase
│   │   └── firebase.config.js
│   ├── hooks
│   │   ├── ThemeSwitcher.jsx
│   │   └── Usefetch.jsx
│   ├── index.css
│   ├── Layout
│   │   ├── AuthLayout.jsx
│   │   ├── BlogsLayout.jsx
│   │   ├── ChefLayout.jsx
│   │   └── Layout.jsx
│   ├── main.jsx
│   ├── modules
│   │   ├── auth
│   │   │   └── authRoutes.jsx
│   │   ├── blogs
│   │   │   ├── blog.constant.js
│   │   │   ├── BlogDetails.jsx
│   │   │   ├── Blog.jsx
│   │   │   ├── blogRoute.jsx
│   │   │   ├── BlogSidebar.jsx
│   │   │   ├── Blogs.jsx
│   │   │   └── CreateBlog.jsx
│   │   ├── chef
│   │   │   ├── ChefChekout.jsx
│   │   │   ├── chef.constant.js
│   │   │   ├── ChefDetails.jsx
│   │   │   ├── chefRoute.jsx
│   │   │   ├── Chefs.jsx
│   │   │   ├── CreateChef.jsx
│   │   │   └── UpdateChef.jsx
│   │   ├── dashboard
│   │   │   ├── components
│   │   │   ├── DashboardConstant.jsx
│   │   │   ├── DashboardLayout.jsx
│   │   │   ├── dashBoardRoute.jsx
│   │   │   └── pages
│   │   ├── Myorder
│   │   │   ├── Myorder.jsx
│   │   │   ├── Myorders.jsx
│   │   │   └── NoOrdersCard.jsx
│   │   ├── recipe
│   │   │   └── recipeRoutes.jsx
│   │   └── RecipieMarket
│   │       ├── CreateRecipeIngredient.jsx
│   │       ├── IngredientCard.jsx
│   │       ├── ingredient.constant.js
│   │       ├── IngredientDetails.jsx
│   │       ├── MarketHome.jsx
│   │       ├── RecipeMarketHeader.jsx
│   │       ├── RecipeMarketLayout.jsx
│   │       └── RecipeMarkteRoutes.jsx
│   ├── package.json
│   ├── pages
│   │   ├── About
│   │   │   └── AboutCard.jsx
│   │   ├── About.jsx
│   │   ├── AddRecipe.jsx
│   │   ├── Contact.jsx
│   │   ├── Faq.jsx
│   │   ├── FeedbackPage.jsx
│   │   ├── Footerr.jsx
│   │   ├── ForgotPassword.jsx
│   │   ├── Login.jsx
│   │   ├── MyProfile
│   │   │   └── ProfileCard.jsx
│   │   ├── MyProfile.jsx
│   │   ├── MyRecipes.jsx
│   │   ├── NoRecipe.jsx
│   │   ├── PaymentSuccess.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   ├── RecipeDetails.jsx
│   │   ├── Register.jsx
│   │   ├── TermsCondintion.jsx
│   │   ├── UpdateProfile.jsx
│   │   └── UpdateRecipe.jsx
│   ├── provider
│   │   └── AuthProvider.jsx
│   ├── Routes
│   │   ├── PrivateRoute.jsx
│   │   └── Router.jsx
│   └── tailwind.config.js
├── structure.md
└── vite.config.js

29 directories, 125 files

```

## 📦 package.json
```json
{
  "name": "ass",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.1.5",
    "@tanstack/react-query": "^5.77.2",
    "aos": "^3.0.0-beta.6",
    "axios": "^1.9.0",
    "daisyui": "^5.0.37",
    "firebase": "^11.6.1",
    "framer-motion": "^12.12.2",
    "lottie-react": "^2.4.1",
    "lucide-react": "^0.511.0",
    "react": "^19.0.0",
    "react-countup": "^6.5.3",
    "react-day-picker": "^9.7.0",
    "react-dom": "^19.0.0",
    "react-helmet-async": "^2.0.5",
    "react-hook-form": "^7.56.4",
    "react-hot-toast": "^2.5.2",
    "react-icons": "^5.5.0",
    "react-responsive": "^10.0.1",
    "react-responsive-carousel": "^3.2.23",
    "react-router": "^7.5.3",
    "react-router-dom": "^7.5.3",
    "react-simple-typewriter": "^5.0.1",
    "swiper": "^11.2.6",
    "tailwindcss": "^4.1.5"
  },
  "devDependencies": {
    "@eslint/js": "^9.22.0",
    "@types/react": "^19.0.10",
    "@types/react-dom": "^19.0.4",
    "@vitejs/plugin-react": "^4.3.4",
    "eslint": "^9.22.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^16.0.0",
    "vite": "^6.3.1"
  }
}

```

## 🗺️ Routes
```js

// File: src/modules/auth/authRoutes.jsx

import AuthLayout from "../../Layout/AuthLayout";
import ForgotPassword from "../../pages/ForgotPassword";
import LoginPage from "../../pages/Login";
import RegisterPage from "../../pages/Register";

export const authRoutes = {
  path: "/auth",
  element: <AuthLayout />,
  children: [
    {
      path: "login",
      Component: LoginPage,
    },
    {
      path: "register",
      Component: RegisterPage,
    },
    {
      path: "forgot-password",
      element: <ForgotPassword />,
    },
  ],
};


// File: src/modules/blogs/blogRoute.jsx

import BlogsLayout from "../../Layout/BlogsLayout";
import PrivateRoute from "../../Routes/PrivateRoute";
import BlogDetails from "./BlogDetails";
import Blogs from "./Blogs";
import CreateBlog from "./CreateBlog";

export const blogRoutes = {
  path: "/blogs",
  Component: BlogsLayout,
  children: [
    {
      index: true,
      element: <Blogs />,
    },
    {
      path: ":id",
      element: <BlogDetails />,
    },
    {
      path: "create",
      element: (
        <PrivateRoute>
          <CreateBlog />
        </PrivateRoute>
      ),
    },
  ],
};


// File: src/modules/chef/chefRoute.jsx

import ChefLayout from "../../Layout/ChefLayout";
import ChefChekout from "./ChefChekout";
import PrivateRoute from "../../Routes/PrivateRoute";
import ChefDetails from "./ChefDetails";
import Chefs from "./Chefs";
import UpdateChef from "./UpdateChef";
import CreateChef from "./CreateChef";

export const chefRooute = {
  path: "/chefs",
  Component: ChefLayout,
  children: [
    {
      index: true,
      element: <Chefs />,
    },
    {
      path: ":id",
      element: (
        <PrivateRoute>
          <ChefDetails />
        </PrivateRoute>
      ),
    },
    {
      path: "update/:id",
      element: (
        <PrivateRoute>
          <UpdateChef />
        </PrivateRoute>
      ),
    },
    {
      path: "register",
      element: (
        <PrivateRoute>
          <CreateChef />
        </PrivateRoute>
      ),
    },
    {
      path: "checkout/:id",
      element: (
        <PrivateRoute>
          <ChefChekout />
        </PrivateRoute>
      ),
    },
  ],
};


// File: src/modules/dashboard/dashBoardRoute.jsx

import DashboardLayout from "./DashboardLayout";
import DashboardAllRecipes from "./pages/DashboardAllRecipes";
import DashboardChefsPage from "./pages/DashboardChefsPage";
import DashboardMyrecipes from "./pages/DashboardMyrecipesPage";
import DashboardRecipeMarket from "./pages/DashboardRecipeMarket";
import Overview from "./pages/Overview";

const dashBoardRoutes = {
  path: "/dashboard",
  element: <DashboardLayout />,
  children: [
    {
      index: true,
      element: <Overview />,
    },
    {
      path: "all-recipes",
      element: <DashboardAllRecipes />,
    },
    {
      path: "recipe-market",
      element: <DashboardRecipeMarket />,
    },
    {
      path: "chefs",
      element: <DashboardChefsPage />,
    },
    {
      path: "my-recipes",
      element: <DashboardMyrecipes />,
    },
  ],
};

export default dashBoardRoutes;


// File: src/modules/recipe/recipeRoutes.jsx

import Recipes from "../../components/Recipes";
import About from "../../pages/About";
import RecipeDetails from "../../pages/RecipeDetails";
import UpdateRecipe from "../../pages/UpdateRecipe";
import PrivateRoute from "../../Routes/PrivateRoute";
import Blogs from "../blogs/Blogs";
import MyRecipes from "../../pages/MyRecipes";
import AddRecipe from "../../pages/AddRecipe";

const recipeRoutes = [
  {
    path: "/add-recipe",
    element: (
      <PrivateRoute>
        <AddRecipe />
      </PrivateRoute>
    ),
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "blogs", // This will be nested under a layout (if applicable)
    element: <Blogs />,
  },
  {
    path: "/all-recipes",
    loader: () =>
      fetch(
        "https://worlds-recipes-sharing-server.vercel.app/api/v1/recipes?limit=0",
      ),
    element: <Recipes />,
  },
  {
    path: "/my-recipes",
    element: (
      <PrivateRoute>
        <MyRecipes />
      </PrivateRoute>
    ),
  },
  {
    path: "update/:id",
    element: (
      <PrivateRoute>
        <UpdateRecipe />
      </PrivateRoute>
    ),
  },
  {
    path: "/recipes/:id",
    loader: ({ params }) =>
      fetch(
        `https://worlds-recipes-sharing-server.vercel.app/api/v1/recipe/${params.id}`,
      ),
    element: (
      <PrivateRoute>
        <RecipeDetails />
      </PrivateRoute>
    ),
  },
];

export default recipeRoutes;


// File: src/modules/RecipieMarket/RecipeMarkteRoutes.jsx

import Recipes from "../../components/Recipes";
import PrivateRoute from "../../Routes/PrivateRoute";
import CreateRecipeIngredient from "./CreateRecipeIngredient";
import IngredientDetails from "./IngredientDetails";
import MarketHome from "./MarketHome";
import RecipeMarketLayout from "./RecipeMarketLayout";

export const RecipeMarkteRoutes = {
  path: "/recipe-market",
  element: <RecipeMarketLayout />,
  children: [
    {
      index: true,
      element: <MarketHome />,
    },
    {
      path: ":id",
      element: (
        <PrivateRoute>
          <IngredientDetails />
        </PrivateRoute>
      ),
    },
    {
      path: "create",
      element: (
        <PrivateRoute>
          <CreateRecipeIngredient />
        </PrivateRoute>
      ),
    },
  ],
};


// File: src/Routes/PrivateRoute.jsx

import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;


// File: src/Routes/Router.jsx

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../Layout/Layout";
import Errorpage from "../components/Errorpage";
import TermsAndConditions from "../pages/TermsCondintion";
import MyProfile from "../pages/MyProfile";
import UpdateProfile from "../pages/UpdateProfile";
import PrivateRoute from "./PrivateRoute";
import FAQ from "../pages/Faq";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Contact from "../pages/Contact";
import { chefRooute } from "../modules/chef/chefRoute";
import { blogRoutes } from "../modules/blogs/blogRoute";
import { authRoutes } from "../modules/auth/authRoutes";
import recipeRoutes from "../modules/recipe/recipeRoutes";
import RecipeMarketLayout from "../modules/RecipieMarket/RecipeMarketLayout";
import { RecipeMarkteRoutes } from "../modules/RecipieMarket/RecipeMarkteRoutes";
import PaymentSuccess from "../pages/PaymentSuccess";
import MyOrders from "../modules/Myorder/Myorders";
import dashBoardRoutes from "../modules/dashboard/dashBoardRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        // loader: () => fetch("https://worldwide-recipe-chefs-sharing-serv.vercel.app/api/v1/recipes?limit=6"),
        loader: () =>
          fetch(
            // "https://worlds-recipes-sharing-server.vercel.app/api/v1/recipes?limit=6",
            "https://worldwide-recipe-chefs-sharing-serv.vercel.app/api/v1/recipes?limit=6",
            {
              credentials: "include",
            },
          ),
        element: <App />,
      },
      {
        path: "success",
        element: <PaymentSuccess />,
      },
      {
        path: "my-orders",
        element: <MyOrders />,
      },
      ...recipeRoutes,
      {
        path: "terms",
        Component: TermsAndConditions,
      },
      {
        path: "my-profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  authRoutes,
  blogRoutes,
  chefRooute,
  RecipeMarkteRoutes,
  dashBoardRoutes,
]);


```

## 📄 Existing README
```md
# 🍽️ FlavorBook - Recipe & Chef Marketplace Web App

Welcome to **FlavorBook**, a full-featured and beautifully crafted web application designed to connect food lovers with chefs, ingredients, and delicious recipes. This platform allows users to browse, create, and manage recipes, explore blogs, book chefs, and even shop for ingredients—all in one place.

---

## 📌 Project Overview

| Detail                 | Information                                                                        |
| ---------------------- | ---------------------------------------------------------------------------------- |
| **GitHub Client site** | [flavor-book-client](https://github.com/shahjalal-labs/flavor-book-client)         |
| **Live Site client**   | [flavor-book.surge.sh](https://flavor-book.surge.sh/)                              |
| **GitHub server site** | [flavor-book-server](https://github.com/shahjalal-labs/flavor-book-server)         |
| **Live Site server**   | [worlds-recipes-sharing-server](https://worlds-recipes-sharing-server.vercel.app/) |
| **Portfolio GitHub**   | [shahjalal-portfolio](https://github.com/mdshahjalal5/shahjalal-portfolio)         |
| **Portfolio Live**     | [shahjalal-labs.surge.sh](http://shahjalal-labs.surge.sh/)                         |
| **Created On**         | 20 May 2025, 10:32 AM GMT+6                                                        |
| **Location**           | Sharifpur, Gazipur, Dhaka, Bangladesh                                              |
| **LinkedIn**           | [md-sj](https://www.linkedin.com/in/md-sj-825bb4341/)                              |
| **Facebook**           | [Profile](https://www.facebook.com/profile.php?id=61556383702555)                  |
| **YouTube**            | [Channel](https://www.youtube.com/@muhommodshahjalal9811)                          |

## 🌐 Live Site

[🔗 Deployed App](#) _(https://flavor-book.surge.sh/)_

---

## 📁 Project Structure

Here's a high-level overview of the project's file structure:

```
.
├── public/               # Static assets (favicon, CNAME, vite.svg)
├── dist/                 # Production build
├── src/                  # Main application source code
│   ├── animation/        # Lottie files and animation components
│   ├── assets/           # Images, logos, and JSON
│   ├── components/       # Reusable UI components (Header, Banner, Footer)
│   ├── hooks/            # Custom React hooks
│   ├── Layout/           # Route layouts
│   ├── modules/          # Domain-based modules
│   │   ├── auth/         # Authentication
│   │   ├── blogs/        # Blog system
│   │   ├── chef/         # Chef booking system
│   │   ├── recipe/       # Recipes
│   │   └── RecipieMarket # Recipe ingredient marketplace
│   ├── pages/            # Page components
│   ├── provider/         # Context Providers (Auth)
│   ├── Routes/           # Routing logic
│   ├── index.css         # Tailwind styles
│   ├── App.jsx           # Main App component
│   └── main.jsx          # App bootstrap
├── README.md             # You're here
├── vite.config.js        # Vite configuration
├── eslint.config.js      # Linting rules
└── package.json          # Project metadata
```

---

## 🧭 Routing Structure (with Layouts)

### 🔐 Auth Layout

- `/login` → `Login.jsx`
- `/register` → `Register.jsx`
- `/forgot-password` → `ForgotPassword.jsx`

### 🏠 Main Layout (Landing Pages)

- `/` → `Home.jsx`
- `/about` → `About.jsx`
- `/contact` → `Contact.jsx`
- `/faq` → `Faq.jsx`
- `/privacy-policy` → `PrivacyPolicy.jsx`
- `/terms-and-conditions` → `TermsCondintion.jsx`

### 🧑‍🍳 Chef Feature (via `ChefLayout.jsx`)

- `/chefs` → `Chefs.jsx`
- `/chefs/:id` → `ChefDetails.jsx`
- `/chefs/:id/book` → `ChefCheckout.jsx`
- `/create-chef` → `CreateChef.jsx`
- `/update-chef/:id` → `UpdateChef.jsx`

### 📚 Blog Feature (via `BlogsLayout.jsx`)

- `/blogs` → `Blogs.jsx`
- `/blogs/:id` → `BlogDetails.jsx`
- `/create-blog` → `CreateBlog.jsx`

### 🍲 Recipes

- `/add-recipe` → `AddRecipe.jsx`
- `/my-recipes` → `MyRecipes.jsx`
- `/recipe/:id` → `RecipeDetails.jsx`
- `/update-recipe/:id` → `UpdateRecipe.jsx`

### 🛒 Recipe Market (via `RecipeMarketLayout.jsx`)

- `/recipe-market` → `MarketHome.jsx`
- `/recipe-market/:id` → `IngredientDetails.jsx`
- `/create-ingredient` → `CreateRecipeIngredient.jsx`

### 👤 Profile

- `/my-profile` → `MyProfile.jsx`
- `/update-profile` → `UpdateProfile.jsx`

---

## 🔑 Features

### ✅ Authentication

- Firebase Auth integration
- Login, Register, Forgot Password
- Auth-protected routes

### 🍽️ Recipe System

- Add, update, and delete personal recipes
- View all recipes with tags, categories, and details

### 🧑‍🍳 Chef Booking

- View all chefs
- Chef details with biography, rating, and services
- Book chefs and proceed to checkout

### 🛍️ Ingredient Marketplace

- Browse ingredients listed by sellers
- View ingredient details
- Add to cart and complete orders
- Sellers can list their own ingredients

### 📝 Blog System

- View all blogs
- Blog details with comments, read time, tags
- Create and share new blogs

### 🎨 Design & Animation

- TailwindCSS + modern UI components
- Lottie animations (Lottie JSON files)
- Smooth transitions and effects
- Mobile responsive design

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Routing**: React Router&#x20;
- **Forms**: React Hook Form, React Day Picker
- **State Management**: React Context API (AuthProvider)
- **Animations**: Lottie
- **Toast Notifications**: React Hot Toast
- **Deployment**: GitHub Pages / Vercel / Netlify (configure as needed)
- **Build Tool**: Vite

---

## 📦 Installation

```bash
bun install  # or npm install
bun run dev  # or npm run dev
```

---

## 📌 TODOs

- ***

## 👏 Credits

- Design inspired by classic cooking & recipe books
- Icons via Lucide and Heroicons
- Lottie animations from LottieFiles

---

## 📄 License

This project is licensed under the MIT License.

---

Made with ❤️ for food enthusiasts and aspiring chefs.

> "Food is symbolic of love when words are inadequate." — Alan D. Wolfelt

----- preivous version ------

# 🍽️ FlavorBook – Recipe Sharing Platform

Welcome to **FlavorBook**, a dynamic recipe-sharing platform designed to connect culinary enthusiasts. Users can explore, share, and manage recipes with ease, all within a secure and responsive web application.

---

---

## 🚀 Features

### 🔐 Authentication & Security

- **Email/Password Login**: Secure user authentication via Firebase.
- **Google Sign-In**: Quick access using Google accounts.
- **Protected Routes**: Restricts access to sensitive pages like profile and recipe details.
- **Password Reset**: Users can reset passwords through email verification.

### 🧾 Recipe Management

- **All Recipes page**: Display recipes with JSON-based data.
- **Add/Update/Delete Recipes**: Users can create,modify and delete their own recipes.
- **Recipe Details**: View comprehensive information about each recipe.

### 👤 User Profile

- **Profile Page**: View and edit user information, including display name and photo.
- **Update Profile**: Modify personal details securely.

### 📄 Additional Pages

- **About**: Learn more about FlavorBook.
- **Contact**: Get in touch with the team.
- **FAQ**: Frequently Asked Questions.
- **Privacy Policy**: Understand how user data is handled.
- **Terms & Conditions**: Legal information regarding the use of FlavorBook.

### 🎨 UI/UX Enhancements

- **Responsive Design**: Optimized for various devices.
- **Tailwind CSS & DaisyUI**: Utilized for styling and component design.
- **Lottie Animations**: Engaging animations for better user experience.
- **Swiper**: Interactive sliders for showcasing content.

---

## 🛠️ Technology Stack

| Technology             | Purpose                                 |
| ---------------------- | --------------------------------------- |
| **React**              | Frontend library for building UI        |
| **React Router**       | Routing within the application          |
| **Tailwind CSS**       | Utility-first CSS framework             |
| **DaisyUI**            | Tailwind CSS component library          |
| **Firebase**           | Backend services (Authentication, etc.) |
| **React Helmet Async** | Manage document head for SEO            |
| **Swiper**             | Implementing sliders                    |
| **React Lottie**       | Adding animations                       |

---

## 📁 Project Structure

```md
.
├── bun.lock
├── dist
│   ├── 200.html
│   ├── assets
│   │   ├── banner3-CqKNlaJH.jpeg
│   │   ├── index-Dap1SDNE.css
│   │   └── index-DXWNyiPp.js
│   ├── CNAME
│   ├── index.html
│   └── vite.svg
├── eslint.config.js
├── index.html
├── package.json
├── PKGBUILD
├── public
│   ├── CNAME
│   └── vite.svg
├── README.md
├── requirement.md
├── src
│   ├── animation
│   │   ├── AwesomeReveal.jsx
│   │   ├── cooking.json
│   │   ├── index.js
│   │   ├── loginAnimation2.json
│   │   ├── loginAnimation3.json
│   │   ├── loginAnimation.json
│   │   ├── male_cooking.json
│   │   ├── mango_walking.json
│   │   ├── profileAnimation.json
│   │   └── Walking.jsx
│   ├── App.jsx
│   ├── assets
│   │   ├── flavorBooks
│   │   │   ├── Animation - 1747955888499.json
│   │   │   ├── banner1.jpg
│   │   │   ├── banner2.jpeg
│   │   │   ├── banner3.jpeg
│   │   │   ├── banner_indicator.jpg
│   │   │   ├── long_banner.jpg
│   │   │   ├── looka_logo_black.svg
│   │   │   └── output.jpg
│   │   ├── index.js
│   │   ├── logo.png
│   │   └── notfound3.jpg
│   ├── bun.lock
│   ├── components
│   │   ├── Banner.jsx
│   │   ├── Brand.jsx
│   │   ├── Button.jsx
│   │   ├── Errorpage.jsx
│   │   ├── FooterLinks.jsx
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── Input.jsx
│   │   ├── Menu.jsx
│   │   ├── Nav.jsx
│   │   ├── Newsletter.jsx
│   │   ├── Recipe.jsx
│   │   ├── Recipes.jsx
│   │   └── Slider.jsx
│   ├── constant.jsx
│   ├── firebase
│   │   └── firebase.config.js
│   ├── hooks
│   │   ├── ThemeSwitcher.jsx
│   │   └── Usefetch.jsx
│   ├── index.css
│   ├── Layout
│   │   ├── AuthLayout.jsx
│   │   ├── BlogsLayout.jsx
│   │   ├── ChefLayout.jsx
│   │   └── Layout.jsx
│   ├── main.jsx
│   ├── modules
│   │   ├── auth
│   │   │   └── authRoutes.jsx
│   │   ├── blogs
│   │   │   ├── blog.constant.js
│   │   │   ├── BlogDetails.jsx
│   │   │   ├── Blog.jsx
│   │   │   ├── blogRoute.jsx
│   │   │   ├── BlogSidebar.jsx
│   │   │   ├── Blogs.jsx
│   │   │   └── CreateBlog.jsx
│   │   ├── chef
│   │   │   ├── ChefChekout.jsx
│   │   │   ├── chef.constant.js
│   │   │   ├── ChefDetails.jsx
│   │   │   ├── chefRoute.jsx
│   │   │   ├── Chefs.jsx
│   │   │   ├── CreateChef.jsx
│   │   │   └── UpdateChef.jsx
│   │   ├── recipe
│   │   │   └── recipeRoutes.jsx
│   │   └── RecipieMarket
│   │   ├── CreateRecipeIngredient.jsx
│   │   ├── IngredientCard.jsx
│   │   ├── ingredient.constant.js
│   │   ├── IngredientDetails.jsx
│   │   ├── MarketHome.jsx
│   │   ├── RecipeMarketHeader.jsx
│   │   ├── RecipeMarketLayout.jsx
│   │   └── RecipeMarkteRoutes.jsx
│   ├── package.json
│   ├── pages
│   │   ├── About.jsx
│   │   ├── AddRecipe.jsx
│   │   ├── Contact.jsx
│   │   ├── Faq.jsx
│   │   ├── FeedbackPage.jsx
│   │   ├── Footerr.jsx
│   │   ├── ForgotPassword.jsx
│   │   ├── Login.jsx
│   │   ├── MyProfile.jsx
│   │   ├── MyRecipes.jsx
│   │   ├── NoRecipe.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   ├── RecipeDetails.jsx
│   │   ├── Register.jsx
│   │   ├── TermsCondintion.jsx
│   │   ├── UpdateProfile.jsx
│   │   └── UpdateRecipe.jsx
│   ├── provider
│   │   └── AuthProvider.jsx
│   ├── Routes
│   │   ├── PrivateRoute.jsx
│   │   └── Router.jsx
│   └── tailwind.config.js
├── structure.md
└── vite.config.js

21 directories, 111 files
```

### `Developer Info:`

![Screenshot](src/assets/screenshots/ss-10-48-41-AM_29-06-25.png)

### home page preview:

#### Desktop view:

![Screenshot](src/assets/screenshots/preview/desktop/HomePage/Homepage.png)

#### Laptop view:

![Screenshot](src/assets/screenshots/preview/laptop/HomePage/HomePage.png)

#### Mobile view:

![Screenshot](src/assets/screenshots/preview/mobile/HomePage/HomePage.png)

---

### Dashboard preview:

#### Desktop view:

##### Overview:

![Screenshot](src/assets/screenshots/preview/desktop/Dashboard/Overview/Overview.png)

---

##### All Recipes:

![Screenshot](src/assets/screenshots/preview/desktop/Dashboard/AllRecipes/AllRecipes.png)

##### Chefs:

![Screenshot](src/assets/screenshots/preview/desktop/Dashboard/Chefs/Chefs.png)

##### My Recipes:

![Screenshot](src/assets/screenshots/preview/desktop/Dashboard/MyRecipes/MyRecipes.png)

##### Recipe Market:

![Screenshot](src/assets/screenshots/preview/desktop/Dashboard/RecipeMarket/RecipeMarket.png)

---

## 🌐 Live Site

#### please visit [flavor-book.surge.sh](https://flavor-book.surge.sh/) for full website view.

```