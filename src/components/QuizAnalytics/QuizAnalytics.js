import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
 

const QuizAnalytics = () => {
  const quizTypes = useLoaderData().data;
  console.log(quizTypes)
  const quizData = quizTypes.map((types) => {
     
    // console.log(parts);
     
    const quizDetail = {
      name: types.name,
      total: types.total,
    };
    return quizDetail;
  });
  console.log(quizData);
   
    return (
      <section className="container h-100">
        <div className="d-flex justify-content-center mt-4">
          <h2 className="display-5   text-center fw-bold w-50 text-success mb-5 ">
            Quiz <span className="text-Cadmium-Orange">Analytics</span>
          </h2>
        </div>
        <div className="container">
          <div className="row row row-cols-1 row-cols-md-2 row-cols-lg-2 ">
            <div className="col  fw-bold text-success  ">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart width={450} height={450} data={quizData}>
                  <Bar dataKey="total" fill="#003060" />
                  <XAxis dataKey="name" fill="#009900" />
                  <YAxis />
                  <Tooltip />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="col ">
              <div className="h-50 pt-2 fw-bold   ">
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart
                    width={450}
                    height={450}
                    data={quizData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="total"
                      stroke="#228B22"
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default QuizAnalytics;