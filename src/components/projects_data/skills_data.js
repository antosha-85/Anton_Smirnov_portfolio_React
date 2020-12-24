import api from "../../assets/icons/api.svg";
import React from 'react'

const skills = [
  {
    icon: api,
    title: "Frontend Development",
    about: ["I can build beautiful and scalable SPAs using ", <strong>HTML</strong>, ", " , <strong>CSS</strong>,  ", " , <strong>JavaScript</strong>, " and ",  <strong>React</strong>],
  },
  {
    icon: api,
    title: "Backend Development",
    about: ["I can handle ", <strong>databases</strong>, ", " ,<strong>REST APIs</strong>, " using ", <strong>PostgreSQL</strong>],
  },
  {
    icon: api,
    title: "API Development",
    about: ["I can develop ", <strong>REST APIs</strong>,  " using ", <strong>Node</strong>],
  },
  {
    icon: api,
    title: "Competitive Coder",
    about:
      ["I can resolve different algorithms, which I train on ", <strong>Leetcode</strong>],
  },
  {
    icon: api,
    title: "Work in an Agile Environment",
    about:
  ["I can work in an ", <strong>Agile</strong>, " Environment, I'm familiar with ", <strong>Jira</strong>, " ,", "Stand ups, Sprints, etc."],
  },
];

export default skills;
