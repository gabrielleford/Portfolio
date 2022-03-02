import React, { useState } from 'react';
import { MdOpenInNew } from 'react-icons/md';
import { BsArrowDownShort } from 'react-icons/bs';

const ProjectInfo = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a href='https://mealprepmarket.herokuapp.com' target='_blank' rel='noreferrer' className='group h-96 mx-auto'>
        <img src={props.img} alt={props.title} className='h-96 rounded-xl shadow-xl group-hover:shadow-2xl transition-all duration-300' />
      </a>
      <div className={props.positionClass}>
        <div className={props.linkClass}>
          <a href={props.url} target='_blank' rel='noreferrer'>
            {props.title}
          </a>
          <MdOpenInNew/>
        </div>
        <div className={open ? `${props.viewDetailsClassOpen}`: `${props.viewDetailsClass}`} onClick={() => setOpen(!open)}>
          <p className='font-normal'>{open ? 'Hide details' : 'View details' }</p>
          <BsArrowDownShort className={open ? 'rotate-neg180 transition-all duration-500' : 'transition-all duration-500'}/>
        </div>
        <div className='overflow-hidden'>
          <div className={open ? 'relative flex flex-col max-w-sm bg-dark-peach px-4 py-2 bottom-0 transition-all duration-500' : 'relative flex flex-col max-w-sm bg-dark-peach px-4 py-2 bottom-56 transition-all duration-500' }>
            <p className='text-dark-text font-normal'>
              {props.description}
            </p>
            <div className='flex mt-2'>
              {props.frontEnd.map(tech => {
                return (
                    <p className='text-sm font-inconsolata bg-light-peach mr-2 px-1 rounded-sm w-fit'>{tech}</p>
                    )
                  })}
            </div>
            {props.backEnd &&
              <div className='flex mt-1'>
                {props.backEnd.map(tech => {
                  return (
                    <p className='text-sm font-inconsolata bg-light-peach mr-2 px-1 rounded-sm w-fit'>{tech}</p>
                  )
                })}
              </div>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectInfo