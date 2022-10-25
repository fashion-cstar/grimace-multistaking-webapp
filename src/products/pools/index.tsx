import React, { useState, useEffect, useRef } from 'react'
import { AppTokenAddress } from "@app/constants/AppConstants"
import { useRouter } from 'next/router'
import Logo from '@app/common/svgs/Logo'
import { Button } from '@mui/material'
import { SidebarItem, SIDEBAR_ROUTES } from '@app/common/layout/LayoutConstants'
import PoolsBar from './components/PoolsBar'

export default function Pools() {
    const router = useRouter()
    const [isSelectedLivePools, setIsSelectedLivePools] = useState(true)

    const onRegister = () => {
        router.push({
            pathname: SIDEBAR_ROUTES[SidebarItem.POOLS]
        })
    }

    return (
        <div className='w-full bg-[#F5F7FA]'>
            <div className={`w-full flex justify-center items-center h-screen md:h-[480px] bg-[#FFFFFF] bg-[url('splash.png')] bg-center bg-cover bg-no-repeat`}>
                <div className='w-full px-5 md:px-6 xl:px-8 flex gap-8 flex-col lg:flex-row lg:justify-between items-center'>
                    <div className='w-full flex flex-col lg:flex-row gap-8 items-center'>
                        <Logo width="160px" height="160px" />
                        <div className='w-full'>
                            <div className='text-white text-[40px] font-bold md:text-[45px] xl:[text-50px]'>
                                Name of the project
                            </div>
                            <div className='w-full max-w-[768px] font-light text-white text-[18px] md:text-[20px] border-b border-[#F3BA2F]'>
                                Just stake some tokens to earn high APR, low risk
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-auto bg-[#341461] rounded-md px-4 py-2 flex flex-col items-center gap-1">
                        <div className="text-[15px] text-app-yellow font-light">
                            Total Staked Value ($)
                        </div>
                        <div className="flex gap-1 items-center text-[28px] md:text-[30px] text-white font-semibold">
                            {'123,456,789.10'}
                            <span className='text-[24px] mt-1'>USD</span>
                        </div>
                        <div className='w-full my-1'>
                            <Button
                                variant="contained"
                                sx={{ width: '100%', height: '38px', fontFamily: 'Inter' }}
                                color="primary"
                                onClick={() => onRegister()}
                            >
                                <span className='text-[16px] md:text-[18px] text-app-primary font-semibold whitespace-nowrap'>Apply Pool for your project</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full p-4 md:p-6 flex flex-col lg:flex-row gap-6'>
                {/* <div className="lg:basis-9/12"> */}
                <div className="w-full">
                    <PoolsBar isSelectedLivePools={isSelectedLivePools} handleSelectShowPools={setIsSelectedLivePools} />
                    <div className='w-full bg-white rounded-md p-4' style={{boxShadow: '2px 2px 4px #333'}}>
                        <div className='w-full flex gap-4 flex-wrap justify-between items-center'>
                            <div className='bg-white w-[50px]' style={{ borderRadius: '50%' }}>
                                <img src="./images/usdt.png" width="100%" />
                            </div>
                            <div className=''>
                                <div className='text-[18px] md:text-[20px] text-app-primary font-bold whitespace-nowrap'>Earn TOKEN</div>
                                <div className='text-[14px] md:text-[15px] text-app-primary font-bold whitespace-nowrap'>Stake TOKEN</div>
                            </div>
                            <div className='flex flex-col bg-app-box rounded-md p-2 shadow-sm shadow-[#000]'>
                                <div className='flex gap-2 items-center'>
                                    <svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="14px" height="14px" data-icon="fire" aria-hidden="true"><path d="M834.1 469.2A347.49 347.49 0 00751.2 354l-29.1-26.7a8.09 8.09 0 00-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8-1.4 1.5-3 1.9-4.1 2-1.1.1-2.8-.1-4.3-1.5-1.4-1.2-2.1-3-2-4.8 3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9-11 29.5-26.8 56.9-47 81.5a295.64 295.64 0 01-47.5 46.1 352.6 352.6 0 00-100.3 121.5A347.75 347.75 0 00160 610c0 47.2 9.3 92.9 27.7 136a349.4 349.4 0 0075.5 110.9c32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3A348.6 348.6 0 00760.8 857c32.4-32 57.8-69.4 75.5-110.9a344.2 344.2 0 0027.7-136c0-48.8-10-96.2-29.9-140.9zM713 808.5c-53.7 53.2-125 82.4-201 82.4s-147.3-29.2-201-82.4c-53.5-53.1-83-123.5-83-198.4 0-43.5 9.8-85.2 29.1-124 18.8-37.9 46.8-71.8 80.8-97.9a349.6 349.6 0 0058.6-56.8c25-30.5 44.6-64.5 58.2-101a240 240 0 0012.1-46.5c24.1 22.2 44.3 49 61.2 80.4 33.4 62.6 48.8 118.3 45.8 165.7a74.01 74.01 0 0024.4 59.8 73.36 73.36 0 0053.4 18.8c19.7-1 37.8-9.7 51-24.4 13.3-14.9 24.8-30.1 34.4-45.6 14 17.9 25.7 37.4 35 58.4 15.9 35.8 24 73.9 24 113.1 0 74.9-29.5 145.4-83 198.4z"></path></svg>
                                    <span className='text-app-primary text-[12px] font-light'>APR</span>
                                </div>
                                <div className='text-app-primary text-[20px] md:text-[22px] font-semibold leading-[1.1] whitespace-nowrap'>10.20%</div>
                            </div>
                            <div className='flex bg-app-yellow rounded-md p-2 shadow-sm shadow-[#000] items-center font-bold'>
                                <span className='text-app-primary text-[18px] md:text-[20px] whitespace-nowrap'>
                                    123 Days lock
                                </span>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <div className='flex gap-2 items-center'>
                                    <svg viewBox="64 64 896 896" focusable="false" fill="#341461" width="14px" height="14px" data-icon="lock" aria-hidden="true"><path d="M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"></path></svg>
                                    <span className='text-app-primary text-[12px] font-light'>Total Staked</span>
                                </div>
                                <div className='text-app-primary text-[20px] md:text-[22px] font-semibold leading-[1.1]'>91,483,721,353.311 USDT</div>
                                <span className='text-app-primary text-[12px] font-light'>153,726.9199 USD</span>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <div className='flex gap-2 items-center'>
                                    <svg viewBox="64 64 896 896" focusable="false" fill="#341461" width="14px" height="14px" data-icon="aliwangwang" aria-hidden="true"><path d="M868.2 377.4c-18.9-45.1-46.3-85.6-81.2-120.6a377.26 377.26 0 00-120.5-81.2A375.65 375.65 0 00519 145.8c-41.9 0-82.9 6.7-121.9 20C306 123.3 200.8 120 170.6 120c-2.2 0-7.4 0-9.4.2-11.9.4-22.8 6.5-29.2 16.4-6.5 9.9-7.7 22.4-3.4 33.5l64.3 161.6a378.59 378.59 0 00-52.8 193.2c0 51.4 10 101 29.8 147.6 18.9 45 46.2 85.6 81.2 120.5 34.7 34.8 75.4 62.1 120.5 81.2C418.3 894 467.9 904 519 904c51.3 0 100.9-10.1 147.7-29.8 44.9-18.9 85.5-46.3 120.4-81.2 34.7-34.8 62.1-75.4 81.2-120.6a376.5 376.5 0 0029.8-147.6c-.2-51.2-10.1-100.8-29.9-147.4zm-66.4 266.5a307.08 307.08 0 01-65.9 98c-28.4 28.5-61.3 50.7-97.7 65.9h-.1c-38 16-78.3 24.2-119.9 24.2a306.51 306.51 0 01-217.5-90.2c-28.4-28.5-50.6-61.4-65.8-97.8v-.1c-16-37.8-24.1-78.2-24.1-119.9 0-55.4 14.8-109.7 42.8-157l13.2-22.1-9.5-23.9L206 192c14.9.6 35.9 2.1 59.7 5.6 43.8 6.5 82.5 17.5 114.9 32.6l19 8.9 19.9-6.8c31.5-10.8 64.8-16.2 98.9-16.2a306.51 306.51 0 01217.5 90.2c28.4 28.5 50.6 61.4 65.8 97.8l.1.1.1.1c16 37.6 24.1 78 24.2 119.8-.1 41.7-8.3 82-24.3 119.8zM681.1 364.2c-20.4 0-37.1 16.7-37.1 37.1v55.1c0 20.4 16.6 37.1 37.1 37.1s37.1-16.7 37.1-37.1v-55.1c0-20.5-16.7-37.1-37.1-37.1zm-175.2 0c-20.5 0-37.1 16.7-37.1 37.1v55.1c0 20.4 16.7 37.1 37.1 37.1 20.5 0 37.1-16.7 37.1-37.1v-55.1c0-20.5-16.7-37.1-37.1-37.1z"></path></svg>
                                    <span className='text-app-primary text-[12px] font-light'>Earned</span>
                                </div>
                                <div className='text-app-primary text-[20px] md:text-[22px] font-semibold leading-[1.1]'>721,353.31 USDT</div>
                                <span className='text-app-primary text-[12px] font-light'>1234 USD</span>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <div className='flex gap-2 items-center'>
                                    <svg viewBox="64 64 896 896" focusable="false" fill="#341461" width="14px" height="14px" data-icon="clock-circle" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path></svg>
                                    <span className='text-app-primary text-[12px] font-light'>Ends in</span>
                                </div>
                                <div className='text-app-primary text-[20px] md:text-[22px] font-semibold leading-[1.1]'>123 Days Left</div>
                                <span className='text-app-primary text-[12px] font-light'>123456 Blocks</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="w-full lg:basis-3/12 flex flex-col gap-4">
                    <div className='w-full text-[18px] text-app-primary font-bold'>
                        This is promotional text just for convince the investors to do something. Aka Call To Action here should be a place also for ads if we can make it
                    </div>
                    <div className='w-full flex flex-col sm:flex-row lg:flex-col gap-4'>
                        <div className='w-full'>
                            <img src='./images/sponsored1.png' width="100%" />
                        </div>
                        <div className='w-full'>
                            <img src='./images/sponsored2.png' width="100%" />
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}