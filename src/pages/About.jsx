import React from "react";
import "../styles/About.css";

const About = () => {
  const images = [
    "cave.jpg",
    "cherven.jpg",
    "cave1.jpg",
    "logo.png",
    "new.jpg",
    "newCave.jpg",
    "caveClub.jpg",
  ];
  const favoritePlaces = [
    {
      name: "Prohodna Cave",
      description:
       "Prohodna Cave is one of the most famous caves in Bulgaria. It is located in the Karlukovo region, near the village of Prohodna. The cave is renowned for its two large, circular openings in the ceiling, which resemble eyes, earning it the nickname Eyes of God. These natural formations allow light to flood into the cave, creating a mystical atmosphere inside. Prohodna is a popular spot for spelunkers and tourists, offering both easy access and breathtaking views. It is also known for its rich history, with evidence of human habitation dating back to ancient times. The cave is a must-visit destination for anyone interested in nature, geology, and adventure.",
      image: "/images/655.jpg",
    },
    {
      name: "Alpine Meadow - Lakatnik",
      description:
        "Alpine Meadow in Lakatnik is a picturesque area located near the village of Lakatnik, in the Balkan Mountains of Bulgaria. Known for its breathtaking natural beauty, it offers stunning views of the surrounding mountains and valleys. The meadow is a popular spot for hikers, nature enthusiasts, and those who enjoy outdoor activities. With its rich biodiversity and peaceful atmosphere, it provides an excellent location for relaxation, picnics, and exploring the great outdoors. The area is also known for its proximity to the Lakatnik cliffs, which are a favorite among climbers.",
      image: "/images/alpiyska.jpg",
    },
    {
      name: "Svirchovitsa Cave",
      description:
        "The Cave is a fascinating cave located in Bulgaria, known for its unique formations and natural beauty. Situated near the village of Svirchovitsa, it attracts spelunkers and tourists alike. The cave features impressive stalactites, stalagmites, and other speleological formations that showcase the power of nature. It is also home to a variety of cave-dwelling species, making it an interesting destination for both nature lovers and researchers. Although not as widely known as some other caves in Bulgaria, Svirchovitsa Cave offers a captivating and tranquil experience for those who venture into its depths.",
      image: "/images/svirchovica.jpg",
    },
  ];
  return (
    <div className="about">
      <div className="about-content">
        <h2>About Our Cave Club</h2>
        <p>
          Caving Club "Cherni Vrah" is a dynamically developing organization
          dedicated to the exploration, preservation, and promotion of caves and
          the underground world. We are located in the heart of Sofia, and with
          pride, we organize a variety of activities and events related to
          caving and mountaineering. Our club offers a unique opportunity for
          nature and adventure enthusiasts to immerse themselves in the magic of
          underground worlds, discover the latest research, and participate in
          expeditions both in Bulgaria and abroad. Club members take part in
          regular training and courses that allow them to acquire the necessary
          skills for safe and effective cave exploration. The opportunities for
          participating in expeditions, as well as training in first aid and
          speleology, make the club an ideal place for anyone who wants to learn
          more about this exciting and extraordinary hobby.
        </p>
      </div>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={`/images/${image}`} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="favorite-places">
        <h2>Favorite places to go</h2>
        <div className="places-grid">
          {favoritePlaces.map((place, index) => (
            <div key={index} className="place-card">
              <img src={place.image} alt={place.name} />
              <h3>{place.name}</h3>
              <p>{place.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
