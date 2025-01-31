import React from "react";
import "../styles/NewsDetail.css";
import { useParams } from "react-router-dom";

const NewsDetail = () => {
  const { id } = useParams();

  const newsData = {
    1: {
      title: "Invitation to an Exciting Cave Expedition in the Teteven Region",
      description:
        "We are pleased to invite you to join us for an exciting cave expedition in the beautiful Teteven area. This adventure will take us through some of the most fascinating and lesser-known caves, offering a unique opportunity to explore underground wonders while enjoying the stunning natural surroundings. The expedition will take place on [insert date], and we will be meeting at [insert location] at [insert time]. Please make sure to bring suitable clothing, footwear, and any necessary equipment for the trip. This is a perfect opportunity for both beginners and experienced cavers to explore the depths of the Teteven region, with professional guides to ensure safety and an unforgettable experience. We look forward to having you with us on this incredible adventure!",
    },
    2: {
      title:
        "First Practice of the Course  31.10.2024, Karlukovo, Svirovitsa Cave",
      description:
        "On October 31st, 2024, the first practice of the course took place in Karlukovo, in front of Svirovitsa Cave, on the surrounding rocks. The session began with a brief safety introduction, followed by practical training in basic techniques for rock climbing and cave exploration. The rocky area around the cave provided ideal conditions for hands-on learning, with participants working together and supporting each other. Instructors ensured everyone's safety and gave individual feedback throughout the session. The practice concluded with a debriefing, where the instructors shared feedback and discussed the next steps in the course. Participants left the location excited and ready for the next challenge.",
    },
  };

  const newsItem = newsData[id];

  if (!newsItem) {
    return (
      <div className="news-detail-container">
        <h1 className="no-news">News not found</h1>
      </div>
    );
  }

  return (
    <div className={`news-detail-wrapper news-detail-${id}`}>
      {/* Текстът на новината */}
      <div className="news-text">
        <h1>{newsItem.title}</h1>
        <p>{newsItem.description}</p>
      </div>

      {/* Форма за контакт при id: 1 */}
      {id === "1" && (
        <div className="registration-form">
          <h2>Sign Up for the Expedition</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" placeholder="Enter your message" required></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default NewsDetail;



