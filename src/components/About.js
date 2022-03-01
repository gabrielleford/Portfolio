import headshot from '../assets/tempHeadshot.JPG'

const About = ({ about }) => {
    return(
        <div id={about} className='bg-dark-peach py-12'>
            <h2 className='mb-8 ml-48 text-5xl text-light-peach font-display sectionHeader'>Get to know me</h2>
            <div className='flex justify-center mr-16'>
                <img id='headshot' src={headshot} alt="headshot" className='rounded-full h-64 ml-12 mr-20' />
                <div id='aboutPara' className='max-w-2xl mr-12'>
                  <p className='text-dark-text font-normal'> My love for learning and technology started when I was four and my parents bought me educational computer games like Reader Rabbit and Jump Start. Coding became an interest of mine when I started playing Neopets in elementary school and was furthered when I began messing around with the code on my MySpace page layout in middle school. It wasn't until about five years ago that I started seriously considering a career in coding, and after being a stay-at-home mom for the past six years, I was ready to pursue something I was passionate about. I re-enrolled at IU Bloomington to start my journey, but having a family made that difficult and slow. Once I found out about Eleven Fifty Academy, I jumped at the opportunity. On every project we've had, I've pushed myself to take them to the next level and further my learning outside of class. After this course, I hope to find a company I can start my career with, as well as, finish my degree at IU part-time and further my skills through personal projects.</p>
                </div>
            </div>
        </div>
    )
}

export default About;