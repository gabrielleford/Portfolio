import mealPrepMarket from '../../assets/mealPrepMarket.png';
import instaPet from '../../assets/instaPet.png';
import threeDayProject from '../../assets/72hourProject.png';
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
  linkClass: 'flex items-center justify-center text-xl text-dark-text font-poppins-regular mx-auto px-2 py-1 bg-dark-peach rounded-sm w-fit hover:bg-peach drop-shadow-[0_0_7px_rgba(0,0,0,0.4)] transition-all duration-200',

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
  linkClass: 'flex items-center justify-center text-xl text-dark-text font-poppins-regular mx-auto px-2 py-1 bg-dark-peach rounded-sm w-fit hover:bg-peach shadow-md transition-all duration-200 drop-shadow-[0_0_7px_rgba(0,0,0,0.4)]',
}

export const ThreeDayProject = {
  title: '72 Hour Project',
  url: 'https://ksgf-72hourproject.herokuapp.com/',
  img: threeDayProject,
  repos: {
    client: '',
  },
  description: 'A web application which was completed in 3 days that I worked on with Katie Sallows. It fetches a users location and displays the local weather, a satellite image from NASA\'s API, and upcoming events nearby.',
  frontEnd: ['React', 'Nasa API', 'OpenWeatherMap API', 'Ticketmaster API'],
  positionClass: 'absolute right-0 top-10 flex flex-col',
  linkClass: 'flex items-center justify-center text-xl text-dark-text font-poppins-regular mx-auto px-2 py-1 bg-dark-peach rounded-sm w-fit hover:bg-peach shadow-md transition-all duration-200 drop-shadow-[0_0_7px_rgba(0,0,0,0.4)]',
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
  linkClass: 'flex items-center justify-center text-lg sm:text-xl text-dark-text font-poppins-regular mx-auto px-2 py-1 bg-dark-peach rounded-sm w-fit hover:bg-peach shadow-md transition-all duration-200 drop-shadow-[0_0_7px_rgba(0,0,0,0.4)]',
}

export const NavbarClass = {
  hidden: 'top-[-100%] transition-all ease-in-out duration-300 flex sticky py-3 mt-5 mb-6 w-full bg-peach z-20 justify-end items-center lg-xl:hidden',
  visible: 'flex sticky py-3 mt-5 mb-6 top-0 w-full bg-peach z-20 justify-end items-center lg-xl:hidden transition-all ease-in-out duration-300',
}

export const AsideClass = {
  hidden: 'fixed top-[-100%] opacity-0 transition-all ease-in-out duration-300 bg-peach z-50 right-0 pt-8 w-full',
  visible: 'bg-peach z-50 fixed top-0 right-0 w-full h-screen pt-8 opacity-100 transition-all ease-in-out duration-300',
}