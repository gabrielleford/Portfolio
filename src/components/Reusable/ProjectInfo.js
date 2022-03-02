import React, { useState } from 'react';
import { MdOpenInNew } from 'react-icons/md';
import { BsArrowDownShort, BsArrowUpShort } from 'react-icons/bs';

const ProjectInfo = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a href='https://mealprepmarket.herokuapp.com' target='_blank' rel='noreferrer' className='h-80 mx-auto'>
        <img src={props.img} alt={props.title} className='h-80 rounded-l-xl' />
      </a>
      <div className={props.positionClass}>
        <div className={props.linkClass}>
          <a href={props.url} target='_blank' rel='noreferrer'>
            {props.title}
          </a>
          <MdOpenInNew/>
        </div>
        <div className={props.viewDetailsClass} onClick={() => setOpen(!open)}>
          <button>View details</button>
          {open ? <BsArrowUpShort/> : <BsArrowDownShort/>}
        </div>
        <div className='flex flex-col max-w-sm bg-dark-peach px-4 py-2'>
          <p className='text-dark-text font-normal '>
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
    </>
  )
}

export default ProjectInfo