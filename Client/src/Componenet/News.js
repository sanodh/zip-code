import React, { useEffect } from "react";
import { useState } from "react";

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/getNews")
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setNews(responseData);
      });
    console.log(news);
  }, []);

  const newsComponent = () => {
    return news.map((news) => {
      return (
        <div class="card-deck" style={{ width: "41.2rem", height: "38rem" }}>
          <div class="card">
            <img
              className="card-img-top"
              style={{ height: "26rem" }}
              alt="..."
              src={news.photo}
            />
            <div className="card-body">
              <h5 className="card-title">{news.title}</h5>
              <p className="card-text">{news.description}</p>
              <p className="card-text">
                <small className="text-muted">last updated 5 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      );
    });
  };

  return <div className="card-group">{newsComponent()}</div>;
}

export default News;
