import {Navigate, useRoutes } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Blog from './pages/Blog';
import User from './pages/User';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import Products from './pages/Products';
import DashboardApp from './pages/DashboardApp';
import StudentForm from './pages/StudentForm';
import ShowResult from './pages/ShowResult';
import Questions from './pages/play-quiz';
import QuestionsTest from './pages/play-quiztest';
import Sections from './pages/sections';
import QuizSection from './pages/section';
import Result from './pages/Result';
import FormView from './pages/FormView';
import QuestionForm from './pages/QuestionForm';
import QuestionList from './pages/QuestionList';
import Subjects from './pages/subjects';
import TeacherDashboard from './pages/TeacherDashboard';
import BookPage from './pages/recommendBookPage';
import OverallResults from './pages/OverallResults';

// ----------------------------------------------------------------------

export default function Routes() {
  return ( useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'teacher', element: <TeacherDashboard /> },
        { path: 'sections', element: <QuizSection /> },
        { path: 'result', element: <Result /> },
        { path: 'subjects', element: <Subjects /> },
        { path:'q/:cat/:dif/:no', element: <Questions /> },
        { path:'q/:cat', element: <QuestionsTest /> },

        { path: 'student', element: <StudentForm /> },
        { path: 'form', element: <FormView /> },
        { path: 'question', element: <QuestionForm/> },
        { path: 'list', element: <QuestionList/> },
        { path: 'book', element: <BookPage/> },
        { path: 'performance', element: <OverallResults/> },


      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]));
}
