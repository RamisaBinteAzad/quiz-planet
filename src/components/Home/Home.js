import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BannerHeader from '../BannerHeader/BannerHeader';
import QuizCategory from '../QuizCategory/QuizCategory';

 
import './Home.css'
const Home = () => {
  const quizCategories = useLoaderData().data;
  // const { data } = quizCategories;
   
  
  return (
    <div>
      <section className=" banner-container container  h-50">
        <BannerHeader></BannerHeader>
      </section>
      <section className="category-section container pt-4  pb-4  ">
        <div className="d-flex justify-content-center ">
          <h2 className="display-5   text-center fw-bold w-50 text-Cadmium-Orange mb-5 ">
            Select your Categories
          </h2>
        </div>
        <div className="mb-4 pt-3">
          <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 text-color-Nyanza  ">
              {quizCategories.map((category) => (
                <QuizCategory
                  key={category.id}
                  category={category}
                ></QuizCategory>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;