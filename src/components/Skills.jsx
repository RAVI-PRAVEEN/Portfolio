import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: '90%' },
    { name: 'CSS', level: '85%' },
    { name: 'JavaScript', level: '80%' },
    { name: 'ReactJS', level: '75%' },
    { name: 'NodeJS', level: '70%' },
    { name: 'Python', level: '80%' },
    { name: 'SQL', level: '75%' },
    { name: 'Git/GitHub', level: '85%' }
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2>Skills</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <div className="skill-name">
                {skill.name}
              </div>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: skill.level }}></div>
              </div>
              <div className="skill-percentage">{skill.level}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;



// const skills = [
//     { name: 'Skill Name', level: 'Percentage' },
//   ];