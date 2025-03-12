/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/desk2.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "VYRA Entertainments",
    description:
      "Developed a website for the VYRA Entertainments.Website is developed using React.js and hosted on Vercel.",
    url: "https://vyra-seven.vercel.app/",
  },
  {
    title: "Descentralised Escrow System",
    description:
      "A decentralized escrow service smart contract built using AlgoKit's TealScript, enabling secure transactions between a boss and a worker with conditional fund release.",
    url: "https://github.com/abhisathvik/Decentralized_escrow_service",
  },
  {
    title: "Event Management Platform",
    description:
      "Designed a platform for event management. The platform is developed using FIGMA.",
    url: "https://www.linkedin.com/posts/abhi-sathvik-reddy-aniga-a7b15b256_excited-to-share-my-second-task-with-rejolt-activity-7226588909705510913-fBC2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8G0T8BExPTz65fMRyiqFaGnjCDsCVFnlc",
  },
  {
    title: "Travel Itinerary Planner",
    description:
      "Developed an itinerary planner where users can plan trips by adding destinations, accommodations, activities, and daily schedules. Users can view their itinerary in a calendar format and make adjustments.",
    url: "https://task-phi-bay.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
