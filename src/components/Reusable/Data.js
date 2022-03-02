import mealPrepMarket from '../../assets/mealPrepMarket.png';

export const MealPrepMarket = {
  title: 'Meal Prep Market',
  url: 'https://mealprepmarket.herokuapp.com/',
  img: mealPrepMarket,
  description: 'A full-stack web application where primary users can sign up as a meal prepper and create listings to advertise their services. Secondary users can sign up as consumers to purchase meals for pick-up or delivery.',
  frontEnd: ['React', 'TypeScript', 'Mantine', 'Styled-Components'],
  backEnd: ['Node.js', 'Express', 'Sequelize', 'PostgreSQL'],
  positionClass: 'absolute right-0 top-10 flex flex-col',
  linkClass: 'flex items-center text-xl text-dark-teal font-poppins-regular px-2 py-1 mb-1 bg-dark-peach rounded-md w-fit hover:bg-teal shadow-md transition-all duration-200',
  viewDetailsClass: 'font-normal flex items-center mr-auto mt-3 bg-dark-peach text-dark-teal px-4 pt-2 pb-1 rounded-md hover:bg-teal cursor-pointer shadow-md transition-all duration-200',
  viewDetailsClassOpen: 'font-normal flex items-center mr-auto mt-3 bg-dark-peach text-dark-teal px-4 pt-2 rounded-t-md hover:bg-teal cursor-pointer transition-all duration-200'
}