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
import Quizz from "../pages/Test/Quizz/Quizz";
import Game2 from "../pages/Game/Game2/Game2";
import Game3 from "../pages/Game/Game3";
import Login from "../pages/Other/Login";
import ForgotPassword from "../pages/Other/ForgotPassword";
import Register from "../pages/Other/Register";
import AccountInformation from "../pages/Account/AccountInformation";
import QuizHistory from "../pages/Test/QuizHistory";
import TestImage from "../pages/Test/TestImage";
import ImageHistory from "../pages/Test/TestImageHistory";

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
        <Route path="/test/testimage" element={<TestImage />} />
        <Route path="/story" element={<Story />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/game/game1" element={<Game1 />} />
        <Route path="/game/game2" element={<Game2 />} />
        <Route path="/game/game3" element={<Game3 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<AccountInformation />} />
        <Route path="/quiz-history" element={<QuizHistory />} />
        <Route path="/image-history" element={<ImageHistory />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
