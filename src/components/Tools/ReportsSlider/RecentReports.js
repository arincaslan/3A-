import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './RecentReports.css';

function RecentReports({ reports }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="recent-reports-slider">
      <h3 className="slider-title">Recent Reports</h3>
      <Slider {...settings}>
        {reports.map((report) => (
          <div key={report.id}>
            <div className="report-card">
              <img src={report.image} alt={report.title} />
              <div className="card-body">
                <h5 className="card-title">{report.title}</h5>
                <p className="card-text">{report.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default RecentReports;
