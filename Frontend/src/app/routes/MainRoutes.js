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
import GamePage from "../pages/Game/GamePage";
import Game1 from "../pages/Game/Game1";
import Quizz from "../pages/Test/Quizz";

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
        <Route path="/test/quizz" element={<Quizz />} />
        <Route path="/story" element={<Story />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/game/game1" element={<Game1 />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
