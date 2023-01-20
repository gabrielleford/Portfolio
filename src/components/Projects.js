import React from "react";
import { BlissEventSpace, MealPrepMarket, RickAndMortyDatabase } from "./Reusable/Data";
import ProjectInfo from "./Reusable/ProjectInfo";


const Projects = ({ projects }) => {
    return (
      <div id={projects} className='pt-6 lg:py-12'>
          <h2 className='cursor-default text-3xl text-center mb-7 lg:mb-8 lg:text-justify lg:ml-48 sm:text-5xl text-dark-teal font-display sectionHeader'>Projects</h2>
          <div className="mx-auto grid grid-cols-1 gap-0 max-w-7xl max-h-7xl lg:max-w-4xl lg:max-h-4xl">
            <div className='relative sm:flex col-span-1 sm:overflow-hidden'>
              <ProjectInfo {...BlissEventSpace} />
            </div>
            <div className='relative sm:flex col-span-1 sm:overflow-hidden'>
              <ProjectInfo {...MealPrepMarket} />
            </div>
            {/* <div className='relative sm:flex col-span-1 sm:overflow-hidden'>
              <ProjectInfo {...InstaPet} />
            </div> */}
            {/* <div className='relative sm:flex col-span-1 sm:overflow-hidden'>
              <ProjectInfo {...ThreeDayProject} />
            </div> */}
            <div className='relative sm:flex col-span-1 sm:overflow-hidden'>
              <ProjectInfo {...RickAndMortyDatabase} />
            </div>
          </div>
      </div>
    )
}

export default Projects;