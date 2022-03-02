import React from "react";
import { MealPrepMarket } from "./Reusable/Data";
import ProjectInfo from "./Reusable/ProjectInfo";


const Projects = ({ projects }) => {
    return (
      <div id={projects} className='py-12'>
          <h2 className='mb-8 ml-48 text-5xl text-dark-teal font-display sectionHeader'>Projects</h2>
            <div className='relative flex max-w-7xl mx-auto'>
              <ProjectInfo {...MealPrepMarket} />
              
            </div>
      </div>
    )
}

export default Projects;