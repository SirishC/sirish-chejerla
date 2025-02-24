import React from "react";
import "./Style.css";

const Projects = () => {
  const projects = [
    {
      date: "Jun 2020",
      title:
        "Introspective Journal: Diary for Self-Realization (Springer Journal)",
      description:
        "Our application helps users understand themselves by identifying patterns in behaviors, emotions, and experiences through tagging and analytical insights, fostering self-awareness and personal growth.",
      link: "https://link.springer.com/chapter/10.1007/978-981-15-4218-3_23",
    },
    {
      date: "Jun 2021 – Jan 2022",
      title: "Live Monitoring AI Prototype",
      description: "Developed an AI-powered anomaly detection model utilizing LSTM (Long Short-Term Memory) and Grafana Metrics for real-time cloud monitoring. Deployed the model as a Flask API, significantly enhancing system scalability and improving response times.Analyzed memory leaks and anomalies by leveraging data from staging and production environments, focusing on Redis storage to evaluate memory loss and optimize performance.",
      link: "",
    }
  ];

  const projectsElement = projects.map((proj, index) => (
    <div key={index}className="projects">
      <div>{proj.date}</div>
      <div>
        <div>{proj.title}</div>
        <div>{proj.description}</div>
        <div>{proj.link}</div>
      </div>
    </div>));

    return(<>
        {projectsElement}
    </>);
};


export default Projects;
