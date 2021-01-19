import api from "../../assets/icons/icons8-api-64.png";
import frontend from "../../assets/icons/ux-design.svg";
import agile from "../../assets/icons/agile.png";
import backend from "../../assets/icons/backend.png";
import coder from "../../assets/icons/coder.png";
import React from "react";

const skills = [
  {
    icon: frontend,
    title: "Frontend Development",
    about: [
      "I can build beautiful and scalable SPAs using ",
      <strong>HTML</strong>,
      ", ",
      <strong>CSS</strong>,
      ", ",
      <strong>JavaScript</strong>,
      " and ",
      <strong>React</strong>,
    ],
  },
  {
    icon: backend,
    title: "Backend Development",
    about: [
      "I can handle ",
      <strong>databases</strong>,
      ", ",
      <strong>REST APIs</strong>,
      " using ",
      <strong>PostgreSQL</strong>,
    ],
  },
  {
    icon: api,
    title: "API Development",
    about: [
      "I can develop ",
      <strong>REST APIs</strong>,
      " using ",
      <strong>Node</strong>,
    ],
  },
  {
    icon: coder,
    title: "Competitive Coder",
    about: [
      "I can resolve different algorithms, which I train on ",
      <strong>Leetcode</strong>,
    ],
  },
  {
    icon: agile,
    title: "Work in an Agile Environment",
    about: [
      "I can work in an ",
      <strong>Agile</strong>,
      " Environment, I'm familiar with ",
      <strong>Jira</strong>,
      " ,",
      "Stand ups, Sprints, etc.",
    ],
  },
];

export default skills;
