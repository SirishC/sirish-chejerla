import React from "react";
import "./Style.css";

const experiences = [
  {
    dates: "SEP 2020 - DEC 2022",
    company: "Genesys Cloud Services",
    role: "Software Engineer",
    description:
      "I have hands-on experience in software development, automation, and cloud engineering, specializing in Java, Python, and JUnit for building and testing applications. At Genesys, I optimized Voicemail Microservices and Predictive Routing on AWS and Azure, leveraging Docker, Kubernetes, and Azure Blob Storage for scalable deployments. I automated 100+ test scenarios using Selenium and Jest, reducing manual efforts by 40%, and integrated them with Jenkins for continuous testing. Additionally, I managed Linux and Windows test servers, ensured 99.9% uptime, and used Azure Monitor and Grafana for proactive monitoring. My expertise extends to performance testing with JMeter and Postman, CI/CD pipeline management via Jenkins and Azure DevOps, and AI model evaluation using Scikit-learn. I follow Agile methodologies, maintain high coding standards with Git, and create detailed documentation in Markdown and Confluence to streamline development and maintenance.",
    skills: [
      " Kubernetes",
      " CI/CD ",
      " DEVOPS ",
      " Jenkins ",
      " Javascript ",
      " Python",
    ],
  },
  {
    dates: "AUG 2023 - JAN 2024",
    company: "Purdue University Northwest",
    role: "Graduate Research Assistant / Grader ",
    description:
      "Conducted research on gunshot detection to improve time synchronization accuracy, reducing delays from milliseconds to microseconds. Designed Purdue-TimeSync, a Python-based simulation for analyzing network delays, and performed real-time testing at the University Police Building to enhance system reliability. Additionally, evaluated assignments and provided feedback as a grader for graduate-level Algorithms and Software Engineering courses.",
    skills: [
      " Python",
      " Research",
      " Machine Learning",
      " Algorithms",
      " Software Engineering",
    ],
  },
  {
    dates: "SEP 2020 - DEC 2022",
    company: "Genesys Cloud Services",
    role: "Software Engineer",
    description:
      "I have hands-on experience in software development, automation, and cloud engineering, specializing in Java, Python, and JUnit for building and testing applications. At Genesys, I optimized Voicemail Microservices and Predictive Routing on AWS and Azure, leveraging Docker, Kubernetes, and Azure Blob Storage for scalable deployments. I automated 100+ test scenarios using Selenium and Jest, reducing manual efforts by 40%, and integrated them with Jenkins for continuous testing. Additionally, I managed Linux and Windows test servers, ensured 99.9% uptime, and used Azure Monitor and Grafana for proactive monitoring. My expertise extends to performance testing with JMeter and Postman, CI/CD pipeline management via Jenkins and Azure DevOps, and AI model evaluation using Scikit-learn. I follow Agile methodologies, maintain high coding standards with Git, and create detailed documentation in Markdown and Confluence to streamline development and maintenance.",
    skills: [
      " Kubernetes",
      " CI/CD ",
      " DEVOPS ",
      " Jenkins ",
      " Javascript ",
      " Python",
    ],
  },
  {
    dates: "AUG 2023 - JAN 2024",
    company: "Purdue University Northwest",
    role: "Graduate Research Assistant / Grader ",
    description:
      "Conducted research on gunshot detection to improve time synchronization accuracy, reducing delays from milliseconds to microseconds. Designed Purdue-TimeSync, a Python-based simulation for analyzing network delays, and performed real-time testing at the University Police Building to enhance system reliability. Additionally, evaluated assignments and provided feedback as a grader for graduate-level Algorithms and Software Engineering courses.",
    skills: [
      " Python",
      " Research",
      " Machine Learning",
      " Algorithms",
      " Software Engineering",
    ],
  },
];

const experienceElement = experiences.map((exp , index) => (
  <div key={index} className="experience">
    <div>{exp.dates}</div>
    <div>
      <div>{exp.company}</div>
      <div>{exp.role}</div>
      <div>{exp.description}</div>
      <div>{exp.skills}</div>
    </div>
  </div>
));

const Experience = () => {
  return <>{experienceElement}</>;
};

export default Experience;
