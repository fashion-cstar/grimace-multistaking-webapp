import React, { useMemo, useState, useEffect, useRef } from 'react'
import { IClubMapPoolInfo, useGrimaceStakingClub } from '@app/contexts'
import { decodeTxErrorMessage, formatEther_Optimized, formatFixedNumber_Optimized } from '@app/utils/utils'
import { LoadingButton } from '@mui/lab'
import { toast } from 'react-toastify'
import PoolStatusPane from './PoolStatusPane'
import InfoSVG from '@app/products/register/components/forms/form_components/InfoSVG'
import StakePane from './StakePane'

interface props {
    isDetailed: boolean
    poolInfo: IClubMapPoolInfo
    poolIndex: number
    onStake: (item: IClubMapPoolInfo) => void
    onUnstake: (item: IClubMapPoolInfo) => void
}

export default function UserDetailsPane({ isDetailed, poolInfo, poolIndex, onStake, onUnstake }: props) {
    const {
        claimCallback,
        updateChangedPoolAndUserInfo,
        emergencyUnstakeCallback,
    } = useGrimaceStakingClub()
    const [isClaiming, setIsClaiming] = useState(false)
    const [isEmergencyUnstaking, setIsEmergencyUnstaking] = useState(false)

    const onEmergencyUnstake = async () => {
        setIsEmergencyUnstaking(true)
        try {
            await emergencyUnstakeCallback(poolInfo.poolAddress).then((res: any) => {
                if (res.status === 1) {
                    setIsEmergencyUnstaking(false)
                    updateChangedPoolAndUserInfo(poolIndex)
                    toast.success('Successfully emergency unstaked!')
                } else {
                    toast.error(`Transaction reverted! Tx:${res.hash}`)
                }
            }).catch((error: any) => {
                console.log(error)
                setIsEmergencyUnstaking(false)
                let err: any = error
                toast.error(decodeTxErrorMessage(err))
            })
        } catch (error) {
            console.log(error)
            setIsEmergencyUnstaking(false)
        }
        return null
    }

    const onClaim = async () => {
        setIsClaiming(true)
        try {
            await claimCallback(poolInfo.poolAddress).then((res: any) => {
                if (res.status === 1) {
                    setIsClaiming(false)
                    updateChangedPoolAndUserInfo(poolIndex)
                    toast.success('Successfully claimed!')
                } else {
                    toast.error(`Transaction reverted! Tx:${res.hash}`)
                }
            }).catch((error: any) => {
                console.log(error)
                setIsClaiming(false)
                let err: any = error
                toast.error(decodeTxErrorMessage(err))
            })
        } catch (error) {
            console.log(error)
            setIsClaiming(false)
        }
        return null
    }

    return (
        <div className={`w-full flex-col gap-4 ${isDetailed ? 'flex' : 'hidden'}`}>
            <div className='w-full md:hidden mt-6'>
                <PoolStatusPane poolInfo={poolInfo} />
            </div>
            <div className='w-full flex flex-col xl:flex-row gap-4 pb-4 md:py-4 items-center justify-between'>
                <div className='w-full justify-between xl:justify-around flex gap-6 items-center'>
                    <div className='flex gap-2 cursor-pointer items-center'>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.25001 3.75001C2.0511 3.75001 1.86033 3.82902 1.71968 3.96968C1.57902 4.11033 1.50001 4.3011 1.50001 4.50001V12.75C1.50001 12.949 1.57902 13.1397 1.71968 13.2804C1.86033 13.421 2.0511 13.5 2.25001 13.5H10.5C10.699 13.5 10.8897 13.421 11.0304 13.2804C11.171 13.1397 11.25 12.949 11.25 12.75V8.25003C11.25 7.83581 11.5858 7.50002 12.0001 7.50002C12.4143 7.50002 12.7501 7.83581 12.7501 8.25003V12.75C12.7501 13.3468 12.513 13.9191 12.091 14.341C11.6691 14.763 11.0968 15.0001 10.5 15.0001H2.25001C1.65327 15.0001 1.08097 14.763 0.659012 14.341C0.237054 13.9191 0 13.3468 0 12.75V4.50001C0 3.90327 0.237054 3.33097 0.659012 2.90901C1.08097 2.48705 1.65327 2.25 2.25001 2.25H6.75003C7.16424 2.25 7.50003 2.58579 7.50003 3C7.50003 3.41422 7.16424 3.75001 6.75003 3.75001H2.25001Z" fill="#7A30E0" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.99976 0.750003C8.99976 0.335788 9.33554 0 9.74976 0H14.2498C14.664 0 14.9998 0.335788 14.9998 0.750003V5.25002C14.9998 5.66424 14.664 6.00003 14.2498 6.00003C13.8356 6.00003 13.4998 5.66424 13.4998 5.25002V1.50001H9.74976C9.33554 1.50001 8.99976 1.16422 8.99976 0.750003Z" fill="#7A30E0" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.7801 0.219671C15.073 0.512565 15.073 0.987441 14.7801 1.28034L6.53009 9.53037C6.2372 9.82327 5.76232 9.82327 5.46943 9.53037C5.17653 9.23748 5.17653 8.7626 5.46943 8.46971L13.7195 0.219671C14.0124 -0.0732237 14.4872 -0.0732237 14.7801 0.219671Z" fill="#7A30E0" />
                        </svg>
                        <a target="_SEJ" rel="noreferrer" href={poolInfo.poolAndUserInfo.websiteURL}>
                            <div className='text-[14px] md:text-[15px] text-app-primary font-bold'>
                                Website
                            </div>
                        </a>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className='flex gap-2 items-center'>
                            <svg viewBox="64 64 896 896" focusable="false" fill="#7A30E0" width="14px" height="14px" data-icon="pie-chart" aria-hidden="true"><path d="M864 518H506V160c0-4.4-3.6-8-8-8h-26a398.46 398.46 0 00-282.8 117.1 398.19 398.19 0 00-85.7 127.1A397.61 397.61 0 0072 552a398.46 398.46 0 00117.1 282.8c36.7 36.7 79.5 65.6 127.1 85.7A397.61 397.61 0 00472 952a398.46 398.46 0 00282.8-117.1c36.7-36.7 65.6-79.5 85.7-127.1A397.61 397.61 0 00872 552v-26c0-4.4-3.6-8-8-8zM705.7 787.8A331.59 331.59 0 01470.4 884c-88.1-.4-170.9-34.9-233.2-97.2C174.5 724.1 140 640.7 140 552c0-88.7 34.5-172.1 97.2-234.8 54.6-54.6 124.9-87.9 200.8-95.5V586h364.3c-7.7 76.3-41.3 147-96.6 201.8zM952 462.4l-2.6-28.2c-8.5-92.1-49.4-179-115.2-244.6A399.4 399.4 0 00589 74.6L560.7 72c-4.7-.4-8.7 3.2-8.7 7.9V464c0 4.4 3.6 8 8 8l384-1c4.7 0 8.4-4 8-8.6zm-332.2-58.2V147.6a332.24 332.24 0 01166.4 89.8c45.7 45.6 77 103.6 90 166.1l-256.4.7z"></path></svg>
                            <span className='text-app-primary text-[12px] font-light'>Reward per Block</span>
                        </div>
                        <div className='text-app-primary text-[20px] md:text-[22px] font-bold leading-[1.1]'>
                            {`${formatEther_Optimized(poolInfo.poolAndUserInfo.rewardPerBlock, poolInfo.poolAndUserInfo.rewardToken.decimals, 2, true)} ${poolInfo.poolAndUserInfo.rewardToken.symbol}`}
                        </div>
                    </div>
                    <div className='hidden sm:block xl:hidden'>
                        <StakePane poolInfo={poolInfo} poolIndex={poolIndex} onStake={onStake} onUnstake={onUnstake} />
                    </div>
                </div>
                <div className='w-full sm:hidden'>
                    <StakePane poolInfo={poolInfo} poolIndex={poolIndex} onStake={onStake} onUnstake={onUnstake} />
                </div>
                <div className='w-full xl:w-auto flex items-stretch xl:gap-10'>
                    <div className='w-full xl:w-auto flex flex-col sm:flex-row p-4 sm:justify-between rounded-md border border-[#987DF9] gap-4 bg-app-common sm:items-center'>
                        <div className='flex flex-col gap-1'>
                            <div className='flex gap-2 items-center'>
                                <svg viewBox="64 64 896 896" focusable="false" fill="#7A30E0" width="14px" height="14px" data-icon="aliwangwang" aria-hidden="true"><path d="M868.2 377.4c-18.9-45.1-46.3-85.6-81.2-120.6a377.26 377.26 0 00-120.5-81.2A375.65 375.65 0 00519 145.8c-41.9 0-82.9 6.7-121.9 20C306 123.3 200.8 120 170.6 120c-2.2 0-7.4 0-9.4.2-11.9.4-22.8 6.5-29.2 16.4-6.5 9.9-7.7 22.4-3.4 33.5l64.3 161.6a378.59 378.59 0 00-52.8 193.2c0 51.4 10 101 29.8 147.6 18.9 45 46.2 85.6 81.2 120.5 34.7 34.8 75.4 62.1 120.5 81.2C418.3 894 467.9 904 519 904c51.3 0 100.9-10.1 147.7-29.8 44.9-18.9 85.5-46.3 120.4-81.2 34.7-34.8 62.1-75.4 81.2-120.6a376.5 376.5 0 0029.8-147.6c-.2-51.2-10.1-100.8-29.9-147.4zm-66.4 266.5a307.08 307.08 0 01-65.9 98c-28.4 28.5-61.3 50.7-97.7 65.9h-.1c-38 16-78.3 24.2-119.9 24.2a306.51 306.51 0 01-217.5-90.2c-28.4-28.5-50.6-61.4-65.8-97.8v-.1c-16-37.8-24.1-78.2-24.1-119.9 0-55.4 14.8-109.7 42.8-157l13.2-22.1-9.5-23.9L206 192c14.9.6 35.9 2.1 59.7 5.6 43.8 6.5 82.5 17.5 114.9 32.6l19 8.9 19.9-6.8c31.5-10.8 64.8-16.2 98.9-16.2a306.51 306.51 0 01217.5 90.2c28.4 28.5 50.6 61.4 65.8 97.8l.1.1.1.1c16 37.6 24.1 78 24.2 119.8-.1 41.7-8.3 82-24.3 119.8zM681.1 364.2c-20.4 0-37.1 16.7-37.1 37.1v55.1c0 20.4 16.6 37.1 37.1 37.1s37.1-16.7 37.1-37.1v-55.1c0-20.5-16.7-37.1-37.1-37.1zm-175.2 0c-20.5 0-37.1 16.7-37.1 37.1v55.1c0 20.4 16.7 37.1 37.1 37.1 20.5 0 37.1-16.7 37.1-37.1v-55.1c0-20.5-16.7-37.1-37.1-37.1z"></path></svg>
                                <span className='text-app-primary text-[12px] font-light'>Total Earned</span>
                            </div>
                            <div className='text-app-primary text-[20px] md:text-[22px] font-bold leading-[1.1] whitespace-nowrap'>
                                {`${formatEther_Optimized(poolInfo.poolAndUserInfo.userTotalEarned, poolInfo.poolAndUserInfo.rewardToken.decimals, 2, true)} ${poolInfo.poolAndUserInfo.rewardToken.symbol}`}
                            </div>
                            <span className='text-app-primary text-[12px] font-light whitespace-nowrap'>
                                {`${formatFixedNumber_Optimized(poolInfo.poolAndUserInfo.userTotalEarnedUSD, 2, true)} USD`}
                            </span>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className='text-app-primary text-[12px] font-light'>Claimable Reward</div>
                            <div className='text-app-primary text-[20px] md:text-[22px] font-bold leading-[1.1] whitespace-nowrap'>
                                {`${formatEther_Optimized(poolInfo.poolAndUserInfo.userAvailableReward, poolInfo.poolAndUserInfo.rewardToken.decimals, 2, true)} ${poolInfo.poolAndUserInfo.rewardToken.symbol}`}
                            </div>
                            <span className='text-app-primary text-[12px] font-light whitespace-nowrap'>
                                {`${formatFixedNumber_Optimized(poolInfo.poolAndUserInfo.userAvailableRewardUSD, 2, true)} USD`}
                            </span>
                        </div>
                        <div className='w-full sm:w-auto flex flex-col gap-1 items-center md:min-w-[210px]'>
                            <LoadingButton
                                loading={isClaiming}
                                loadingPosition="center"
                                variant="contained"
                                sx={{ width: '100%', height: '38px', fontFamily: 'Inter', backgroundColor: '#7A30E0' }}
                                color="primary"
                                onClick={() => onClaim()}
                                disabled={!poolInfo.poolAndUserInfo.userAvailableReward.gt(0)}
                            >
                                <span className='text-[16px] md:text-[18px] text-white font-bold whitespace-nowrap'>{isClaiming ? '' : 'Claim'}</span>
                            </LoadingButton>
                            <LoadingButton
                                loading={isEmergencyUnstaking}
                                loadingPosition="center"
                                variant="contained"
                                sx={{ width: '100%', height: '38px', fontFamily: 'Inter' }}
                                color="primary"
                                onClick={() => onEmergencyUnstake()}
                                disabled={!poolInfo.poolAndUserInfo.userStaked.gt(0)}
                            >
                                <span className='text-[16px] md:text-[18px] font-bold whitespace-nowrap'>{isEmergencyUnstaking ? '' : 'Emergency Unstake'}</span>
                            </LoadingButton>
                        </div>
                    </div>
                    <div className='hidden xl:block'>
                        <StakePane poolInfo={poolInfo} poolIndex={poolIndex} onStake={onStake} onUnstake={onUnstake} />
                    </div>
                </div>
            </div>
            <div className='w-full rounded-md bg-app-warning p-4 flex gap-2'>
                <div className='mt-[3px]'>
                    <InfoSVG width={"15"} height={"16"} />
                </div>
                <div className="text-[14px] md:text-[15px] text-app-purple font-semibold ">
                    <div>
                        {`Please claim rewards from staking pool before removing staked tokens, otherwise rewards will be lost.`}
                    </div>
                    {/* {chainId && <a target="_SEJ" rel="noreferrer" href={getEtherscanLink(chainId, poolInfo.poolAndUserInfo.rewardToken.address, 'address')}>
                            <span className='text-[12px] underline'>
                                {poolInfo.poolAndUserInfo.rewardToken.address}
                            </span>
                        </a>} */}
                </div>
            </div>
        </div>
    )
}