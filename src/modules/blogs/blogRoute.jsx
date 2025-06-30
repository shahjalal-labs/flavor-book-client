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
