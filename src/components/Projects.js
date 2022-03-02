import finn from '../assets/cssCreature.png';
import staticLayout from '../assets/staticLayout.png';
import quotesAPI from '../assets/apiChallengeOne.png';
import nasaAPI from '../assets/nasaApi.png';
import instapet from '../assets/instapet.png';
import rickAndMorty from '../assets/rickandmorty.png'
import mealPrepMarket from '../assets/mealPrepMarket.png';
import { MdOpenInNew } from 'react-icons/md';

const Projects = ({ projects }) => {
    return (
      <div id={projects} className='py-12'>
          <h2 className='mb-8 ml-48 text-5xl text-dark-teal font-display sectionHeader'>Projects</h2>
            <div className='relative flex max-w-7xl mx-auto'>
              <a href='https://mealprepmarket.herokuapp.com' target='_blank' rel='noreferrer' className='h-80 mx-auto'>
                <img src={mealPrepMarket} alt='Meal Prep Market' className='h-80 rounded-l-xl' />
              </a>
              <div className='absolute right-40 top-10 flex '>
                <a href='https://mealprepmarket.herokuapp.com/' target='_blank' rel='noreferrer' className='text-xl text-dark-text font-poppins-regular px-2 py-1 mb-1 bg-dark-peach rounded-md w-fit hover:bg-teal'>
                  Meal Prep Market
                </a>
                {/* <button>View details</button>
                <p>
                  A full-stack web application where primary users can sign up as a meal prepper and create listings to advertise their services. Secondary users can sign up as consumers to purchase meals for pick-up or delivery.
                </p> */}
              </div>
              {/* <div className='bg-dark-peach px-12 py-8 rounded-r-xl h-80'> */}
                {/* <p className='text-dark-text font-normal'>A full-stack web application where primary users can sign up as a meal prepper and create listings to advertise their services. Secondary users can sign up as consumers to purchase meals for pick-up or delivery.</p>
                <p className='bg-peach w-fit px-4 py-1 mt-6 rounded-t-lg'>Technology used:</p>
                <div className='bg-light-peach w-fit px-4 py-2'>
                  <div className='flex'>
                    <p className='mr-7'>React</p>
                    <p className='mr-4'>Typescript</p>
                    <p className='mr-7'>Mantine</p>
                    <p>Styled-Components</p>
                  </div>
                  <div className='flex'>
                    <p className='mr-4'>Node.js</p>
                    <p className='mr-8'>Express</p>
                    <p className='mr-4'>Sequelize</p>
                    <p>PostgreSQL</p>
                  </div>
                </div> */}
              {/* </div> */}
            </div>
      </div>
    )
}

export default Projects;