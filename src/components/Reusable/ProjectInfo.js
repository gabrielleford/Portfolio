import React from 'react';
import { MdOpenInNew } from 'react-icons/md';

const ProjectInfo = (props) => {
  return (
    <>
      <div className='bg-light-peach pt-5 sm:bg-none sm:absolute sm:z-10 sm:w-full sm:h-full sm:inset-0 sm:space-y-5 peer'>
        <div className={props.linkClass}>
          <a href={props.url} target='_blank' rel='noreferrer'>
            {props.title}
          </a>
          <MdOpenInNew/>
        </div>
        <div className='relative space-y-4 flex flex-col max-w-lg mx-auto bg-none sm:bg-dark-peach px-4 py-4 rounded-sm drop-shadow-[0_-1px_3px_rgba(0,0,0,0.2)] sm:drop-shadow-[0_3px_10px_rgba(0,0,0,0.4)]'>
          <p className='text-dark-text'>{props.description}</p>
          <div className='flex sm:space-y-2 mx-auto sm:block'>
            <div className='space-y-2 sm:flex sm:space-y-0'>
              {props.frontEnd.map(tech => {
                return (
                  <p className='text-sm text-dark-text font-inconsolata bg-dark-peach sm:bg-light-peach mr-2 px-1 rounded-sm w-fit'>{tech}</p>
                )
              })}
            </div>
            {props.backEnd && 
              <div className='space-y-2 sm:space-y-0 sm:flex'>            
                {props.backEnd.map(tech => {
                  return (
                    <p className='text-sm text-dark-text font-inconsolata bg-dark-peach sm:bg-light-peach mr-2 px-1 rounded-sm w-fit'>{tech}</p>
                  )
                })}
              </div>
            }
          </div>
        </div>
      </div>
      <div className='relative mx-auto sm:after:absolute sm:after:top-0 sm:after:left-0 sm:after:w-full sm:after:h-full sm:after:bg-light-peach/50 sm:after:transition-all sm:after:duration-300 sm:after:ease-in-out transition-all duration-300 ease-in-out sm:after:peer-hover:bg-light-peach/[.15] lg:peer-hover:scale-110'>
        <img src={props.img} alt={props.title} className='min-w-full h-72 sm:h-96 mx-auto lg:h-full object-cover'/>
      </div>
    </>
  )
}

export default ProjectInfo