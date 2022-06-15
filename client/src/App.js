import Home from "./pages/Home";
import About from "./pages/About";
import PageNotFound from "./pages/404";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Story from "./pages/stories/Story";
import StoryById from "./pages/stories/StoryById";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<Story />} />
        <Route path="/stories/:id" element={<StoryById />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
