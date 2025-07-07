import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  About,
  Contact,
  Home,
  Menu,
  Layout,
  GitHub,
  NotFound,
} from "./Components";
import User from "./User";
// import { githubDataInfo } from "./Components/GitHub/GitHub";
import { useGitHubInfo } from "./hook/getGitHubInfo";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="contact" element={<Contact />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/menu" element={<Menu />}></Route>
      <Route path="/user/:userID" element={<User />}></Route>
      <Route
        path="/github/"
        element={<GitHub />}
        loader={useGitHubInfo}
      ></Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
