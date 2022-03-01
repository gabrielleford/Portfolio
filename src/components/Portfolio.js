import finn from '../assets/cssCreature.png';
import staticLayout from '../assets/staticLayout.png';
import quotesAPI from '../assets/apiChallengeOne.png';
import nasaAPI from '../assets/nasaApi.png';
import instapet from '../assets/instapet.png';
import rickAndMorty from '../assets/rickandmorty.png'
import mealPrepMarket from '../assets/mealPrepMarket.png';

const Portfolio = ({ portfolio }) => {
    return (
      <div id={portfolio} className='py-12'>
          <h2 className='mb-8 ml-48 text-5xl text-dark-teal font-display sectionHeader'>Portfolio</h2>
            <div className='flex max-w-7xl mx-auto'>
              <img src={mealPrepMarket} alt='Meal Prep Market' className='h-80' />
              <div className='bg-dark-peach px-12 py-8'>
                <a href='https://mealprepmarket.herokuapp.com/' target='_blank' rel='noreferrer'>
                  <h3 className='text-xl text-dark-text font-poppins-regular border border-dark-text px-1 mb-1 bg-peach w-fit'>Meal Prep Market</h3>
                </a>
                <p className='text-dark-text font-normal'>For my final project at Eleven Fifty Academy I built a full-stack web application where primary users can sign up as a meal prepper and create listings to advertise their services. Secondary users can sign up as consumers to purchase meals for pick-up or delivery.</p>
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
                </div>
              </div>
          </div>
      </div>
    )
}

export default Portfolio;