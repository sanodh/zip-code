import React, { useEffect } from "react";
import { useState } from "react";
import AdminNews from "../Componenet/adminNews";

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

        <div><AdminNews key={news.id} id={news.id} title={news.title} photo={news.photo} description={news.description} /></div>

      );
    });
  };

  return (
    <div align="center">
      <br></br>
      <br></br>
      <button type="button" class="btn btn-outline-primary btn-lg" >
        <a href="/addNews" class="text-decoration-none text-black">Add News &emsp; <i class="fa-solid fa-bullhorn"></i></a></button>
      &emsp;&emsp;
      <button type="button" class="btn btn-outline-warning btn-lg" >
        <a href="/dashboard" class="text-decoration-none text-black">Dashboard &emsp; <i class="fa-solid fa-house"></i></a></button>
      <br></br>
      <br></br>
      <div className="card-deck">{newsComponent()}</div>
    </div>
  );
}

export default News;
