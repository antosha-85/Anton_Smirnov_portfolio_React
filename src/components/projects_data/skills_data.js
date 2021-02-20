import api from "../../assets/icons/icons8-api-64.png";
import frontend from "../../assets/icons/ux-design.svg";
import agile from "../../assets/icons/agile.svg";
import backend from "../../assets/icons/backend.png";
import coder from "../../assets/icons/coder.png";
import React from "react";

const skills = [
  {
    icon: frontend,
    id: "1",
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
    id: "2",
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
    id: "3",
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
    id: "4",
    title: "Competitive Coder",
    about: [
      "I can resolve different algorithms, which I train on ",
      <strong>Leetcode</strong>,
    ],
  },
  {
    icon: agile,
    id: "5",
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
