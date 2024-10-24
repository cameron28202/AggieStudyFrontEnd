import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Navbar from './components/Navbar/Navbar';
import Exam from "./pages/Exam";
import Exams from "./pages/Exams"
import Question from "./pages/Question"
import KaTeXWrapper from './components/Utils/KaTeXWrapper';
import Resources from './pages/Resources';
import Footer from './components/Footer/Footer';
import './App.css'
import TimedExam from './pages/TimedExam';

const App = () => {
    return (
        <KaTeXWrapper>
            <Router>
                <Navbar />
                <div className="content-wrapper">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/courses" element={<Courses />} />
                        <Route path="/courses/:classId/exams" element={<Exams/>}/>
                        <Route path="/courses/:classId/resources" element={<Resources/>}/>
                        <Route path="/courses/:classId/exams/:examId" element={<Exam/>}/>
                        <Route path="/courses/:classId/exams/:examId/timed/:duration" element={<TimedExam/>}/>
                        <Route path="/courses/:classId/exams/:examId/questions/:questionId" element={<Question/>}/>
                    </Routes>
                </div>
                <Footer/>
            </Router>
        </KaTeXWrapper>
    );
};

export default App;