import { DiBootstrap, DiCss3, DiGithubBadge, DiHeroku, DiHtml5, DiJavascript1, DiNodejsSmall, DiPostgresql, DiPython, DiReact } from 'react-icons/di';
import { SiExpress, SiFirebase, SiSequelize, SiStyledcomponents, SiTailwindcss, SiTypescript } from 'react-icons/si';

const DevTools = ({ devtools}) => {
    return (
      <div id='devTools' className='bg-dark-peach pt-6 pb-14 lg:pt-12 lg:pb-20'>
        <h2 className='cursor-default text-3xl text-center mb-5 sm:mb-8 lg:text-justify lg:ml-48 sm:text-5xl text-light-peach font-display sectionHeader'>Dev Tools</h2>
        <div id={devtools} className='cursor-default lg:mx-64 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-x-0 gap-y-3.5 text-dark-text font-display'>
          <div className='m-auto text-center'>
            <DiHtml5 className='text-5xl mx-auto'/>
            <p>HTML5</p>
          </div>
          <div className='m-auto text-center'>
            <DiCss3 className='text-5xl mx-auto'/>
            <p>CSS3</p>
          </div>
          <div className='m-auto text-center'>
            <DiJavascript1 className='text-5xl mx-auto'/>
            <p>JavaScript</p>
          </div>
          <div className='m-auto text-center'>
            <DiReact className='text-5xl mx-auto'/>
            <p>React.js</p>
          </div>
          <div className='m-auto text-center'>
            <SiTypescript className='text-5xl mx-auto'/>
            <p>TypeScript</p>
          </div>
          <div className='m-auto text-center'>
            <DiPython className='text-5xl mx-auto'/>
            <p>Python</p>
          </div>
          <div className='m-auto text-center'>
            <DiNodejsSmall className='text-5xl mx-auto'/>
            <p>Node.js</p>
          </div>
          <div className='m-auto text-center'>
            <DiPostgresql className='text-5xl mx-auto'/>
            <p>PostgreSQL</p>
          </div>
          <div className='m-auto text-center'>
            <SiExpress className='text-5xl mx-auto'/>
            <p>Express</p>
          </div>
          <div className='m-auto text-center'>
            <SiSequelize className='text-5xl mx-auto'/>
            <p>Sequelize</p>
          </div>
          <div className='m-auto text-center'>
            <DiGithubBadge className='text-5xl mx-auto'/>
            <p>GitHub</p>
          </div>
          <div className='m-auto text-center'>
            <SiFirebase className='text-5xl mx-auto'/>
            <p>Firebase</p>
          </div>
          <div className='m-auto text-center'>
            <DiHeroku className='text-5xl mx-auto'/>
            <p>Heroku</p>
          </div>
          <div className='m-auto text-center'>
            <DiBootstrap className='text-5xl mx-auto'/>
            <p>Bootstrap 5</p>
          </div>
          <div className='m-auto text-center'>
            <SiStyledcomponents className='text-5xl mx-auto'/>
            <p>styled-components</p>
          </div>
          <div className='m-auto text-center'>
            <SiTailwindcss className='text-5xl mx-auto'/>
            <p>Tailwind CSS</p>
          </div>
        </div>
      </div>
    )
}

export default DevTools;