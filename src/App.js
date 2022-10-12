import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import QuizAnalytics from './components/QuizAnalytics/QuizAnalytics';
import Blogs from './components/Blogs/Blogs';
import QuizDetails from './components/QuizDetails/QuizDetails';

function App() {
   const router = createBrowserRouter([
     {
       path: "/",
       element: <Main></Main>,
       children: [
         {
           path: "/",

           loader: async () => {
             return fetch("https://openapi.programming-hero.com/api/quiz");
           },
           element: <Home></Home>,
         },
         {
           path: "/quizAnalytics",
           element: <QuizAnalytics></QuizAnalytics>,
         },
         {
           path: "/blogs",
           element: <Blogs></Blogs>,
         },
         {
           path: "/quiz/:quizId",
           loader: async ({ params }) => {
            
             return fetch(
               `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
             );
           },
           element: <QuizDetails></QuizDetails>,
         },
       ],
     },
   ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
