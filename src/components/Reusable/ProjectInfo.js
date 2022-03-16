import React from 'react';
import { MdOpenInNew } from 'react-icons/md';

const ProjectInfo = (props) => {
  return (
    <>
      <div className='absolute space-y-5 inset-x-2 inset-y-10 z-10 peer'>
        <div className={props.linkClass}>
          <a href={props.url} target='_blank' rel='noreferrer'>
            {props.title}
          </a>
          <MdOpenInNew/>
        </div>
        <div className='relative space-y-4 flex flex-col max-w-lg mx-auto bg-dark-peach px-4 py-4 rounded-sm'>
          <p className='text-dark-text'>{props.description}</p>
          <div className='space-y-2 mx-auto'>
            <div className='flex'>
              {props.frontEnd.map(tech => {
                return (
                  <p className='text-sm text-dark-text font-inconsolata bg-light-peach mr-2 px-1 rounded-sm w-fit'>{tech}</p>
                )
              })}
            </div>
            {props.backEnd && 
              <div className='flex'>            
                {props.backEnd.map(tech => {
                  return (
                    <p className='text-sm text-dark-text font-inconsolata bg-light-peach mr-2 px-1 rounded-sm w-fit'>{tech}</p>
                  )
                })}
              </div>
            }
          </div>
        </div>
      </div>
      <div className='relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-light-peach/50 after:transition-all after:duration-300 after:ease-in-out transition-all duration-300 ease-in-out after:peer-hover:bg-light-peach/[.15] peer-hover:scale-110'>
        <img src={props.img} alt={props.title} className='object-cover'/>
      </div>
    </>
  )
}

export default ProjectInfo