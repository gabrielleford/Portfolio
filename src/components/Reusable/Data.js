import mealPrepMarket from '../../assets/mealPrepMarket.png';
import instaPet from '../../assets/instaPet.png';
import threeDayProject from '../../assets/72HourProject.png';
import rickAndMorty from '../../assets/rickandmorty.png';

export const MealPrepMarket = {
  title: 'Meal Prep Market',
  url: 'https://mealprepmarket.herokuapp.com/',
  img: mealPrepMarket,
  repos: {
    adminClient: '',
    client: '',
    server: '',
  },
  description: 'A full-stack web application where primary users can sign up as a meal prepper and create listings to advertise their services. Secondary users can sign up as consumers to purchase meals for pick-up or delivery.',
  frontEnd: ['React', 'TypeScript', 'Mantine', 'Styled-Components'],
  backEnd: ['Node.js', 'Express.js', 'Sequelize', 'PostgreSQL'],
  positionClass: 'absolute right-0 top-10 flex flex-col',
  linkClass: 'flex items-center text-xl text-dark-teal font-poppins-regular px-2 py-1 mb-1 bg-dark-peach rounded-md w-fit hover:bg-teal shadow-md transition-all duration-200',
  viewDetailsClass: 'font-normal flex items-center mr-auto mt-3 bg-dark-peach text-dark-teal px-4 pt-2 pb-1 rounded-md hover:bg-teal cursor-pointer shadow-md transition-all duration-200',
  viewDetailsClassOpen: 'font-normal flex items-center mr-auto mt-3 bg-dark-peach text-dark-teal px-4 pt-2 rounded-t-md hover:bg-teal cursor-pointer transition-all duration-200'
}

export const InstaPet = {
  title: 'InstaPet',
  url: 'https://gfks-instapet-client.herokuapp.com',
  img: instaPet,
  repos: {
    client: '',
    server: '',
  },
  description: 'A full-stack web application that I worked on with Katie Sallows. Users can upload images of their pets, and share them. They can also like pictures, filter between tags, and filter between top liked posts and most recent posts.',
  frontEnd: ['React'],
  backEnd: ['Node.js', 'Express.js', 'Sequelize', 'PostgreSQL'],
  positionClass: 'absolute right-0 top-10 flex flex-col',
  linkClass: 'flex items-center text-xl text-dark-teal font-poppins-regular px-2 py-1 mb-1 bg-dark-peach rounded-md w-fit hover:bg-teal shadow-md transition-all duration-200',
  viewDetailsClass: 'font-normal flex items-center mr-auto mt-3 bg-dark-peach text-dark-teal px-4 pt-2 pb-1 rounded-md hover:bg-teal cursor-pointer shadow-md transition-all duration-200',
  viewDetailsClassOpen: 'font-normal flex items-center mr-auto mt-3 bg-dark-peach text-dark-teal px-4 pt-2 rounded-t-md hover:bg-teal cursor-pointer transition-all duration-200'
}

export const ThreeDayProject = {
  title: 'InstaPet',
  url: 'https://gfks-instapet-client.herokuapp.com',
  img: threeDayProject,
  repos: {
    client: '',
  },
  description: 'A web application that I worked on with Katie Sallows. It fetches a users location and displays the local weather, a satellite image from NASA\'s API, and upcoming events nearby.',
  frontEnd: ['React', 'Nasa API', 'OpenWeatherMap API', 'Ticketmaster API'],
  positionClass: 'absolute right-0 top-10 flex flex-col',
  linkClass: 'flex items-center text-xl text-dark-teal font-poppins-regular px-2 py-1 mb-1 bg-dark-peach rounded-md w-fit hover:bg-teal shadow-md transition-all duration-200',
  viewDetailsClass: 'font-normal flex items-center mr-auto mt-3 bg-dark-peach text-dark-teal px-4 pt-2 pb-1 rounded-md hover:bg-teal cursor-pointer shadow-md transition-all duration-200',
  viewDetailsClassOpen: 'font-normal flex items-center mr-auto mt-3 bg-dark-peach text-dark-teal px-4 pt-2 rounded-t-md hover:bg-teal cursor-pointer transition-all duration-200'
}

export const RickAndMortyDatabase = {
  title: 'Rick and Morty Database',
  url: 'https://rickandmortydatabase.herokuapp.com/',
  img: rickAndMorty,
  repos: {
    client: '',
  },
  description: 'A web application that utilizes the Rick and Morty API and displays characters in a card style with the ability to view more information for each character. I used it as a way to create a responsive web application without using a CSS framework.',
  frontEnd: ['React', 'Rick and Morty API', 'CSS 3'],
  positionClass: 'absolute right-0 top-10 flex flex-col',
  linkClass: 'flex items-center text-xl text-dark-teal font-poppins-regular px-2 py-1 mb-1 bg-dark-peach rounded-md w-fit hover:bg-teal shadow-md transition-all duration-200',
  viewDetailsClass: 'font-normal flex items-center mr-auto mt-3 bg-dark-peach text-dark-teal px-4 pt-2 pb-1 rounded-md hover:bg-teal cursor-pointer shadow-md transition-all duration-200',
  viewDetailsClassOpen: 'font-normal flex items-center mr-auto mt-3 bg-dark-peach text-dark-teal px-4 pt-2 rounded-t-md hover:bg-teal cursor-pointer transition-all duration-200'
}