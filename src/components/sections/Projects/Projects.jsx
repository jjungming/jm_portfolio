import React from 'react';
import styles from './Projects.module.css';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import Card from '../../common/Card/Card';
import projects from '../../../data/projects';

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsContainer}>
      <div className={styles.projectsContent}>
        <SectionTitle title='Projects' />
        <div className={styles.projectList}>
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
