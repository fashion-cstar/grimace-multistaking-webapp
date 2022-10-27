import { Button } from "@mui/material"
import InfoSVG from "./forms/InfoSVG"
import LogoURLInput from "./LogoURLInput"
import TokenAddressInput from "./TokenAddressInput"

interface props {
    setStep: (val: number) => void,
    onChangeRewardToken: (val: string) => void,
    onChangeRewardLogo: (val: string) => void
}

export default function Form2_Content(
    {
        setStep,
        onChangeRewardToken,
        onChangeRewardLogo
    }: props
) {
    return (
        <div className="w-full">
            <div className='w-full flex flex-col md:flex-row md:items-center justify-center gap-4 py-4'>
                <div className="w-full flex flex-col gap-4">
                    <TokenAddressInput onChangeToken={onChangeRewardToken} placeHolder1={"Reward Token Address"} placeHolder2={"Put token CA for rewards"} />
                    <div className='w-full rounded-md bg-app-warning px-4 py-2 flex gap-2'>
                        <div className='mt-[2px]'>
                            <InfoSVG width={"13"} height={"13"} />
                        </div>
                        <div className="text-[11px] text-app-purple font-semibold">
                            Please fill the token address that you will give as stake rewards.
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-4">
                    <LogoURLInput onChangeLogo={onChangeRewardLogo} placeHolder1={"Reward Token Logo"} placeHolder2={"Put the logo url of reward token"} />
                    <div className='w-full rounded-md bg-app-warning px-4 py-2 flex gap-2'>
                        <div className='mt-[2px]'>
                            <InfoSVG width={"13"} height={"13"} />
                        </div>
                        <div className="text-[11px] text-app-purple font-semibold">
                            Please fill this field with the logo of the reward token, in 100x100px size.
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#FFD7D7] rounded-md p-4 mt-4">
                <div className="w-full flex flex-col items-center gap-4">
                    <div className="flex gap-2 items-center">
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5 23C18.5751 23 23.5 18.0751 23.5 12C23.5 5.92487 18.5751 1 12.5 1C6.42487 1 1.5 5.92487 1.5 12C1.5 18.0751 6.42487 23 12.5 23Z" stroke="#FF5858" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15.8 8.70001L9.19995 15.3" stroke="#FF5858" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9.19995 8.70001L15.8 15.3" stroke="#FF5858" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="text-[18px] md:text-[20px] text-[#FF5858] font-bold">
                            Token <span className="underline underline-offset-2">Not</span> Found!
                        </div>
                    </div>
                    <div className="text-[18px] md:text-[20px] text-app-primary">
                        Please check if the entered address is correct
                    </div>
                </div>
            </div>
            <div className="w-full bg-app-box rounded-md p-4 mt-4">
                <div className="w-full flex flex-col items-center gap-4">
                    <div className="flex gap-2 items-center">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.663 2.77915C12.8902 1.98926 10.9096 1.79357 9.01657 2.22128C7.12351 2.649 5.41942 3.67719 4.15845 5.15252C2.89749 6.62785 2.14721 8.47126 2.01951 10.4078C1.89181 12.3444 2.39354 14.2704 3.44987 15.8985C4.50619 17.5266 6.06051 18.7697 7.88102 19.4423C9.70153 20.1149 11.6907 20.1809 13.5518 19.6307C15.413 19.0804 17.0464 17.9432 18.2084 16.3888C19.3705 14.8344 19.9989 12.9459 20 11.0052V10.0857C20 9.53344 20.4477 9.08572 21 9.08572C21.5523 9.08572 22 9.53344 22 10.0857V11.0057C21.9986 13.3778 21.2306 15.6864 19.8103 17.5863C18.39 19.4862 16.3936 20.876 14.1189 21.5486C11.8442 22.2211 9.41299 22.1404 7.18792 21.3183C4.96285 20.4963 3.06312 18.977 1.77206 16.9871C0.480993 14.9971 -0.13223 12.6432 0.0238445 10.2762C0.179919 7.90932 1.09693 5.65625 2.63811 3.85308C4.17929 2.0499 6.26206 0.793217 8.57581 0.270457C10.8896 -0.252303 13.3103 -0.0131332 15.477 0.952297C15.9815 1.17708 16.2082 1.76825 15.9834 2.27272C15.7587 2.7772 15.1675 3.00393 14.663 2.77915Z" fill="#EFEFEF" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M21.7068 2.29828C22.0975 2.68861 22.0978 3.32177 21.7075 3.71249L11.7075 13.7225C11.52 13.9102 11.2656 14.0157 11.0002 14.0157C10.7349 14.0158 10.4805 13.9104 10.2929 13.7228L7.29289 10.7228C6.90237 10.3323 6.90237 9.69915 7.29289 9.30863C7.68342 8.91811 8.31658 8.91811 8.70711 9.30863L10.9996 11.6012L20.2925 2.29898C20.6829 1.90826 21.316 1.90795 21.7068 2.29828Z" fill="#EFEFEF" />
                        </svg>
                        <div className="text-[18px] md:text-[20px] text-white font-bold">
                            Token Found!
                        </div>
                    </div>
                    <div className="w-full flex flex-col md:flex-row gap-4">
                        <div className="w-full md:basis-1/4 flex flex-col items-center md:items-start gap-1">
                            <div className="text-[20px] text-app-primary font-bold">Name</div>
                            <div className="text-[15px] text-app-primary">Grimace</div>
                        </div>
                        <div className="w-full md:basis-1/4 flex flex-col items-center md:items-start gap-1">
                            <div className="text-[20px] text-app-primary font-bold">Symbol</div>
                            <div className="text-[15px] text-app-primary">Grimace</div>
                        </div>
                        <div className="w-full md:basis-1/4 flex flex-col items-center md:items-start gap-1">
                            <div className="text-[20px] text-app-primary font-bold">Decimals</div>
                            <div className="text-[15px] text-app-primary">18</div>
                        </div>
                        <div className="w-full md:basis-1/4 flex flex-col items-center md:items-start gap-1">
                            <div className="text-[20px] text-app-primary font-bold">Address</div>
                            <div className="text-[15px] text-app-primary break-all">0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex gap-4 mt-6">
                <div className="basis-1/2">
                    <Button
                        variant="contained"
                        sx={{ width: '100%', height: '38px', fontFamily: 'Inter' }}
                        color="primary"
                        onClick={() => setStep(1)}
                    >
                        <span className='text-[16px] md:text-[18px] text-app-primary font-bold whitespace-nowrap'>Back</span>
                    </Button>
                </div>
                <div className="basis-1/2">
                    <Button
                        variant="contained"
                        sx={{ width: '100%', height: '38px', fontFamily: 'Inter', backgroundColor: '#7A30E0' }}
                        color="primary"
                        onClick={() => setStep(3)}
                    >
                        <span className='text-[16px] md:text-[18px] text-white font-bold whitespace-nowrap'>Continue</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}