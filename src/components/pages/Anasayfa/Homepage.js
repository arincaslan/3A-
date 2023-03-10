import React, { useState } from 'react';
import './homepage.css';
import LoginForm from './LoginForm';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Homepage() {
  const [reportData, setReportData] = useState([
    {
      id: 1,
      title: 'Rapor 1',
      description: 'Lorem ipsum dolor sit amet',
      date: '2022-03-01',
      thumbnail: 'https://via.placeholder.com/150',
      author: 'John Doe'
    },
    {
      id: 2,
      title: 'Rapor 2',
      description: 'Consectetur adipiscing elit',
      date: '2022-03-02',
      thumbnail: 'https://via.placeholder.com/150',
      author: 'Jane Doe'
    },
    {
      id: 3,
      title: 'Rapor 3',
      description: 'Sed do eiusmod tempor incididunt',
      date: '2022-03-03',
      thumbnail: 'https://via.placeholder.com/150',
      author: 'Max Mustermann'
    }
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="homepage">
      <div className="container">
        <div className="columnGeneral">
          <div className="columnHalf1">
            <h1 className="title">Raporlarım</h1>
            <div className="report-slider">
              <Slider {...settings}>
                {reportData.map(report => (
                  <div className="report-card" key={report.id}>
                    <div className="report-card-thumbnail">
                      <img src={report.thumbnail} alt={report.title} />
                    </div>
                    <div className="report-card-details">
                      <h2>{report.title}</h2>
                      <p>{report.description}</p>
                      <div className="report-card-footer">
                        <span>{report.author}</span>
                        <span>{report.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="columnHalf2">
            <div className="login-form-column">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>&copy; 2023 My Reports. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
