import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../styles/Layout.css";
import "../styles/News.css";
import axios from "axios";

function News() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component is mounted
      }, []);
    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            try {
                const response = await axios.get("http://localhost:8000/fetch-news/");
                setNews(response.data.data || []); // Ensure data exists
            } catch (error) {
                setError("Error fetching news. Please try again later.");
                console.error("Error fetching news:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    return (
        <div className="layout-container">
            <Navbar />
            <br/>
            <br/>
            <br/>
            <div className="dashboard-banner">
          <h1 className="dashboard-title">News</h1>
        </div>
            <div className="news-container">
                {loading && <p>Loading news...</p>}
                {error && <p>{error}</p>}
                {news.length > 0 ? (
                    news.map((item, index) => (
                        <div key={index} className="news-item">
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                            <a href={item.url} target="_blank" rel="noopener noreferrer">Read more</a>
                        </div>
                    ))
                ) : (
                    !loading && <p>No news available.</p>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default News;
