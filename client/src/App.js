import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Create from "./pages/Create";
import PageNotFound from "./pages/404";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Story from "./pages/stories/Story";
import StoryById from "./pages/stories/StoryById";

import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  console.log("From context", user);

  // const user = false;

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<Story />} />
        <Route path="/stories/:id" element={<StoryById />} />

        {user ? (
          <Route path="/profile" element={<Profile />} />
        ) : (
          <Route path="/login" element={<Login />} />
        )}

        {user ? (
          <Route path="/create" element={<Create />} />
        ) : (
          <Route path="/login" element={<Login />} />
        )}

        <Route path="/about" element={<About />} />
        {!user && <Route path="/register" element={<Register />} />}
        {!user && <Route path="/login" element={<Login />} />}

        {/* <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
