import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/News.css";
import Weather from './Weather';

const News = () => {
  return (
    <section>
      <aside>
        <Weather />
      </aside>

      <main className="news">
        
        <section className="section">
          <h2 className="title">Invitation to a Cave Expedition in Teteven</h2>
          <div className="img-stack">
            
            <Link to="/news/1">
              <img
                src="/weather-news-caving-react/images/alpiyska.jpg"
                alt="Снимка 1"
                className="stacked-img"
              />
           
            <img
              src="/weather-news-caving-react/images/beauty.jpg"
              alt="Снимка 2"
              className="stacked-img"
            />
            <img
              src="/weather-news-caving-react/images/cherven.jpg"
              alt="Снимка 3"
              className="stacked-img"
            />
             </Link>
          </div>
        </section>

      
        <section className="section mt-8">
          <h2 className="title">Beginner Caving Training 2024</h2>
          <div className="img-stack">
            
          <Link to="/news/2">
              <img
                src="/weather-news-caving-react/images/cave1.jpg"
                alt="Снимка 4"
                className="stacked-img"
              />
            
            <img
              src="/weather-news-caving-react/images/newCave.jpg"
              alt="Снимка 5"
              className="stacked-img"
            />
            
            <img
              src="/weather-news-caving-react/images/svirchovica.jpg"
              alt="Снимка 6"
              className="stacked-img"
            />
            </Link>
          </div>
        </section>
      </main>
    </section>
  );
};

export default News;


