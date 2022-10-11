import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import QuizAnalytics from './components/QuizAnalytics/QuizAnalytics';
import Blogs from './components/Blogs/Blogs';

function App() {
   const router = createBrowserRouter([
     {
       path: "/",
       element: <Main></Main>,
       children: [
         {
           path: "/",
          //  loader: () => fetch("tshirts.json"),
           element: <Home></Home>,
         },
         {
           path: "/quizAnalytics",
           element: <QuizAnalytics></QuizAnalytics>
         },
         {
           path: "/blogs",
           element: <Blogs></Blogs>,
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
