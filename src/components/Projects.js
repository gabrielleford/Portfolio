import React from "react";
import { InstaPet, MealPrepMarket, RickAndMortyDatabase, ThreeDayProject } from "./Reusable/Data";
import ProjectInfo from "./Reusable/ProjectInfo";


const Projects = ({ projects }) => {
    return (
      <div id={projects} className='py-12 mb-10'>
          <h2 className='mb-8 ml-48 text-5xl text-dark-teal font-display sectionHeader'>Projects</h2>
          <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 max-w-7xl max-h-7xl">
            <div className='relative flex col-span-1 overflow-hidden'>
              <ProjectInfo {...MealPrepMarket} />
            </div>
            <div className='relative flex col-span-1 overflow-hidden'>
              <ProjectInfo {...InstaPet} />
            </div>
            <div className='relative flex col-span-1 overflow-hidden'>
              <ProjectInfo {...ThreeDayProject} />
            </div>
            <div className='relative flex col-span-1 overflow-hidden'>
              <ProjectInfo {...RickAndMortyDatabase} />
            </div>
          </div>
      </div>
    )
}

export default Projects;