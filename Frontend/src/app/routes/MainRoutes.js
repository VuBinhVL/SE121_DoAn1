import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import PageNotFound from "../layouts/PageNotFound";
import Education from "../pages/Education/Education";
import Test from "../pages/Test/Test";
import Question from "../pages/Education/Question";
import Story from "../pages/Story/Story";
import NewsVideo from "../pages/Education/NewsVideo";

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/education/question" element={<Question />} />
        <Route path="/education/news-video" element={<NewsVideo />} />
        <Route path="/test" element={<Test />} />
        <Route path="/story" element={<Story />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
