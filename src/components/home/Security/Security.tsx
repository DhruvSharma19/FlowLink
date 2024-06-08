'use client'
import React, {useState} from 'react'
import HoverCard from '../Productivity/HoverCard'
import Projects from './Projects'
import {motion} from "framer-motion"

type Props = {}

const Security = (props: Props) => {
    const [hovered, setHovered] = useState<boolean>(false)
    const [hovered1, setHovered1] = useState<boolean>(false)
    const [hovered2, setHovered2] = useState<boolean>(false)

    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren:0.4,
          },
        },
      };
    
      const item = {
        hidden: { opacity: 0, scale:0.8 },
        show: { opacity: 1, scale:1},
    };
  return (
    <div className='max-w-[1280px] mx-auto'>
        <motion.div className='flex md:pl-7 space-x-3 md:space-x-10'>
            <div className='flex flex-col items-center'>
                <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.5}} className='relative'>
                    <svg aria-hidden="true" height="24" viewBox="0 0 24 24" fill='currentColor' version="1.1" width="24" data-view-component="true" className="octicon octicon-lock text-white">
                        <path d="M6 9V7.25C6 3.845 8.503 1 12 1s6 2.845 6 6.25V9h.5a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 19.5v-8A2.5 2.5 0 0 1 5.5 9Zm-1.5 2.5v8a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-13a1 1 0 0 0-1 1Zm3-4.25V9h9V7.25c0-2.67-1.922-4.75-4.5-4.75-2.578 0-4.5 2.08-4.5 4.75Z"></path>
                    </svg>
                    <span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-3 z-3"></span>
                </motion.div>
                <motion.div initial={{height:0}} whileInView={{height:'100%'}} transition={{delay:0.8}} className=" h-full w-[3px] mt-7 rounded-md bg-gradient-to-b from-[#abb4ff] via-[#797ef9] to-transparent" ></motion.div>
            </div>
            <motion.div initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} transition={{delay:0.6, type:'tween'}} className='md:w-10/12 mb-24'>
                <h2 className="text-[20px] md:text-2xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate" style={{transitionDelay: '200ms'}}>Security</h2>  
                <h3 className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate" style={{transitionDelay: '300ms'}}>
                    <p className="text-[#939aff]">Integrated security seamlessly.</p>
                    With Echoverse, users can ensure their interactions are safeguarded effortlessly, while organizations effortlessly maintain compliance with security regulations.
                </h3>
            </motion.div>
        </motion.div>
        <HoverCard backgroundColor = '#939aff' direction='' left='0'>
            <div className='flex w-10/12 flex-col mx-auto'>
                <div className="text-[#7d8590] p-6">
                    <div className="font-medium">cmake.yml</div>
                    <span className="text-[12px] f6">on: push</span>
                </div>
                <motion.div variants={container} initial='hidden' whileInView='show' className='relative flex text-[17px] flex-col md:flex-row lg:my-10 flex-1 justify-between w-10/12 mx-auto md:gap-10'>
                    <motion.div variants={item} transition={{type:'tween'}} className='animate w-full'>
                        <div className='p-6 md:mt-8 mb-10 box-shadow-mktg-xl rounded-md' style={{background: 'rgba(235, 245, 255, 0.2)'}}>
                            <ul className='-mb-6'>
                                <li className='mb-6 flex items-center justify-between'>
                                    <div className='flex items-center'>
                                        <svg aria-hidden="true" height="24" fill='#3fb950' viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" className="octicon octicon-check-circle-fill color-fg-success mr-2">
                                            <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path>
                                        </svg>
                                        <span className="font-medium text-white">Message Sent</span>
                                    </div>
                                    <span className="text-[14px] text-[#7d8590]">121ms</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                    <motion.div variants={item} transition={{type:'tween'}} className='absolute md:top-12   lg:left-[47%] md:left-[46%] max-md:top-[88px] z-[1] flex items-center max-md:rotate-90'>
                        <div className="inline-block rounded-full p-1 bg-[#6e7681]" style={{boxShadow: '0 0 0 2px #444D56'}}></div>
                        <div style={{width: '37px', height: '2px', background: '#D1D5DA'}}></div>
                        <div className="inline-block rounded-full p-1 bg-[#6e7681]" style={{boxShadow: '0 0 0 2px #444D56'}}></div>
                    </motion.div>
                    <motion.div variants={item} transition={{type:'tween'}} className='animate w-full'>
                        <div className="pt-2 pb-1 px-6 text-[15px] rounded-t-md inline-block font-medium text-white" style={{background: 'rgba(235, 245, 255, 0.2)'}}>
                            Steps
                        </div>
                        <div className='p-6 mb-10 box-shadow-mktg-xl rounded-tl-none rounded-md' style={{background: 'rgba(235, 245, 255, 0.2)'}}>
                            <ul className='-mb-6'>
                                <li className='mb-6 flex items-center justify-between'>
                                    <div className='flex items-center'>
                                        <svg aria-hidden="true" height="24" fill='#3fb950' viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" className="octicon octicon-check-circle-fill color-fg-success mr-2">
                                            <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path>
                                        </svg>
                                        <span className="font-medium text-white">Message Sent</span>
                                    </div>
                                    <span className="text-[14px] text-[#7d8590]">121ms</span>
                                </li>
                                <li className='mb-6 flex items-center justify-between'>
                                    <div className='flex items-center'>
                                        <svg aria-hidden="true" height="24" fill='#3fb950' viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" className="octicon octicon-check-circle-fill color-fg-success mr-2">
                                            <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path>
                                        </svg>
                                        <span className="font-medium text-white">Message Sent</span>
                                    </div>
                                    <span className="text-[14px] text-[#7d8590]">121ms</span>
                                </li>
                                <li className='mb-6 flex items-center justify-between'>
                                    <div className='flex items-center'>
                                        <svg aria-hidden="true" height="24" fill='#3fb950' viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" className="octicon octicon-check-circle-fill color-fg-success mr-2">
                                            <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path>
                                        </svg>
                                        <span className="font-medium text-white">Message Sent</span>
                                    </div>
                                    <span className="text-[14px] text-[#7d8590]">121ms</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </motion.div>
                </div>
        </HoverCard>
        <Projects/>
        
    </div>
  )
}

export default Security