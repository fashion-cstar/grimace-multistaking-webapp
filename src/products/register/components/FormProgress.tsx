export default function FormProgress({ step }: { step: number }) {
    return (
        <div className='w-full flex flex-col md:flex-row md:items-center justify-center gap-4 md:gap-1 py-6'>
            <div className='flex gap-1 items-center'>
                {step === 1 ?
                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.5071 5.45455V20H13.4318V8.37358H13.3466L10.0156 10.4616V7.73438L13.6165 5.45455H16.5071Z" fill="#341461" />
                        <circle cx="13.5" cy="13.5" r="12.5" stroke="#341461" strokeWidth="2" />
                    </svg> :
                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.5071 5.45455V20H13.4318V8.37358H13.3466L10.0156 10.4616V7.73438L13.6165 5.45455H16.5071Z" fill="#987DF9" />
                        <circle cx="13.5" cy="13.5" r="12.5" stroke="#987DF9" strokeWidth="2" />
                    </svg>
                }
                <span className={`text-[18px] md:text-[20px] ${step === 1 ? 'text-app-primary' : 'text-app-purple'}`}>
                    Stake Token
                </span>
                <div className="hidden md:block">
                    {step === 1 ?
                        <svg width="30" height="3" viewBox="0 0 30 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.5" width="30" height="2" fill="#341461" />
                        </svg> :
                        <svg width="30" height="3" viewBox="0 0 30 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.5" width="30" height="2" fill="#987DF9" />
                        </svg>
                    }
                </div>
            </div>
            <div className='flex gap-1 items-center'>
                {step === 2 ?
                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.17898 20V17.7841L13.3565 12.9901C13.7969 12.5639 14.1662 12.1804 14.4645 11.8395C14.7675 11.4986 14.9972 11.1648 15.1534 10.8381C15.3097 10.5066 15.3878 10.1491 15.3878 9.76562C15.3878 9.33949 15.2907 8.97254 15.0966 8.66477C14.9025 8.35227 14.6373 8.11316 14.3011 7.94744C13.965 7.77699 13.5838 7.69176 13.1577 7.69176C12.7126 7.69176 12.3243 7.78172 11.9929 7.96165C11.6615 8.14157 11.4058 8.39962 11.2259 8.7358C11.0459 9.07197 10.956 9.47206 10.956 9.93608H8.03693C8.03693 8.98437 8.25237 8.15814 8.68324 7.45739C9.11411 6.75663 9.7178 6.21449 10.4943 5.83097C11.2708 5.44744 12.1657 5.25568 13.179 5.25568C14.2206 5.25568 15.1274 5.44034 15.8991 5.80966C16.6757 6.17424 17.2794 6.68087 17.7102 7.32955C18.1411 7.97822 18.3565 8.72159 18.3565 9.55966C18.3565 10.1089 18.2476 10.651 18.0298 11.1861C17.8168 11.7211 17.4356 12.3153 16.8864 12.9688C16.3371 13.6174 15.563 14.3963 14.5639 15.3054L12.4403 17.3864V17.4858H18.5483V20H8.17898Z" fill="#341461" />
                        <circle cx="13.5" cy="13.5" r="12.5" stroke="#341461" strokeWidth="2" />
                    </svg> :
                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.17898 20V17.7841L13.3565 12.9901C13.7969 12.5639 14.1662 12.1804 14.4645 11.8395C14.7675 11.4986 14.9972 11.1648 15.1534 10.8381C15.3097 10.5066 15.3878 10.1491 15.3878 9.76562C15.3878 9.33949 15.2907 8.97254 15.0966 8.66477C14.9025 8.35227 14.6373 8.11316 14.3011 7.94744C13.965 7.77699 13.5838 7.69176 13.1577 7.69176C12.7126 7.69176 12.3243 7.78172 11.9929 7.96165C11.6615 8.14157 11.4058 8.39962 11.2259 8.7358C11.0459 9.07197 10.956 9.47206 10.956 9.93608H8.03693C8.03693 8.98437 8.25237 8.15814 8.68324 7.45739C9.11411 6.75663 9.7178 6.21449 10.4943 5.83097C11.2708 5.44744 12.1657 5.25568 13.179 5.25568C14.2206 5.25568 15.1274 5.44034 15.8991 5.80966C16.6757 6.17424 17.2794 6.68087 17.7102 7.32955C18.1411 7.97822 18.3565 8.72159 18.3565 9.55966C18.3565 10.1089 18.2476 10.651 18.0298 11.1861C17.8168 11.7211 17.4356 12.3153 16.8864 12.9688C16.3371 13.6174 15.563 14.3963 14.5639 15.3054L12.4403 17.3864V17.4858H18.5483V20H8.17898Z" fill="#987DF9" />
                        <circle cx="13.5" cy="13.5" r="12.5" stroke="#987DF9" strokeWidth="2" />
                    </svg>
                }
                <span className={`text-[18px] md:text-[20px] ${step === 2 ? 'text-app-primary' : 'text-app-purple'}`}>
                    Reward Token
                </span>
                <div className="hidden md:block">
                    {step === 2 ?
                        <svg width="30" height="3" viewBox="0 0 30 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.5" width="30" height="2" fill="#341461" />
                        </svg> :
                        <svg width="30" height="3" viewBox="0 0 30 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.5" width="30" height="2" fill="#987DF9" />
                        </svg>
                    }
                </div>
            </div>
            <div className='flex gap-1 items-center'>
                {step === 3 ?
                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5554 20.1989C12.4948 20.1989 11.5502 20.0166 10.7216 19.652C9.89773 19.2827 9.24669 18.776 8.76847 18.1321C8.29498 17.4834 8.05114 16.7353 8.03693 15.8878H11.1335C11.1525 16.2429 11.2685 16.5554 11.4815 16.8253C11.6993 17.0904 11.9882 17.2964 12.348 17.4432C12.7079 17.59 13.1127 17.6634 13.5625 17.6634C14.0312 17.6634 14.4455 17.5805 14.8054 17.4148C15.1652 17.2491 15.447 17.0194 15.6506 16.7259C15.8542 16.4323 15.956 16.0937 15.956 15.7102C15.956 15.322 15.8471 14.9787 15.6293 14.6804C15.4162 14.3774 15.1084 14.1406 14.706 13.9702C14.3082 13.7997 13.8348 13.7145 13.2855 13.7145H11.929V11.456H13.2855C13.7495 11.456 14.1591 11.3755 14.5142 11.2145C14.8741 11.0535 15.1534 10.831 15.3523 10.5469C15.5511 10.258 15.6506 9.92188 15.6506 9.53835C15.6506 9.17377 15.563 8.85417 15.3878 8.57955C15.2173 8.30019 14.9759 8.08239 14.6634 7.92614C14.3556 7.76989 13.9957 7.69176 13.5838 7.69176C13.1671 7.69176 12.786 7.76752 12.4403 7.91903C12.0947 8.06581 11.8177 8.27651 11.6094 8.55114C11.401 8.82576 11.2898 9.14773 11.2756 9.51705H8.32812C8.34233 8.67898 8.58144 7.94034 9.04545 7.30114C9.50947 6.66193 10.1345 6.1624 10.9205 5.80256C11.7112 5.43797 12.6037 5.25568 13.598 5.25568C14.6018 5.25568 15.4801 5.43797 16.233 5.80256C16.9858 6.16714 17.5705 6.65956 17.9872 7.27983C18.4086 7.89536 18.617 8.58665 18.6122 9.35369C18.617 10.1681 18.3636 10.8475 17.8523 11.392C17.3456 11.9366 16.6851 12.2822 15.8707 12.429V12.5426C16.9408 12.6799 17.7552 13.0516 18.3139 13.6577C18.8774 14.259 19.1567 15.0118 19.152 15.9162C19.1567 16.7448 18.9176 17.4811 18.4347 18.125C17.9564 18.7689 17.2959 19.2756 16.4531 19.6449C15.6103 20.0142 14.6444 20.1989 13.5554 20.1989Z" fill="#341461" />
                        <circle cx="13.5" cy="13.5" r="12.5" stroke="#341461" strokeWidth="2" />
                    </svg> :
                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5554 20.1989C12.4948 20.1989 11.5502 20.0166 10.7216 19.652C9.89773 19.2827 9.24669 18.776 8.76847 18.1321C8.29498 17.4834 8.05114 16.7353 8.03693 15.8878H11.1335C11.1525 16.2429 11.2685 16.5554 11.4815 16.8253C11.6993 17.0904 11.9882 17.2964 12.348 17.4432C12.7079 17.59 13.1127 17.6634 13.5625 17.6634C14.0312 17.6634 14.4455 17.5805 14.8054 17.4148C15.1652 17.2491 15.447 17.0194 15.6506 16.7259C15.8542 16.4323 15.956 16.0937 15.956 15.7102C15.956 15.322 15.8471 14.9787 15.6293 14.6804C15.4162 14.3774 15.1084 14.1406 14.706 13.9702C14.3082 13.7997 13.8348 13.7145 13.2855 13.7145H11.929V11.456H13.2855C13.7495 11.456 14.1591 11.3755 14.5142 11.2145C14.8741 11.0535 15.1534 10.831 15.3523 10.5469C15.5511 10.258 15.6506 9.92188 15.6506 9.53835C15.6506 9.17377 15.563 8.85417 15.3878 8.57955C15.2173 8.30019 14.9759 8.08239 14.6634 7.92614C14.3556 7.76989 13.9957 7.69176 13.5838 7.69176C13.1671 7.69176 12.786 7.76752 12.4403 7.91903C12.0947 8.06581 11.8177 8.27651 11.6094 8.55114C11.401 8.82576 11.2898 9.14773 11.2756 9.51705H8.32812C8.34233 8.67898 8.58144 7.94034 9.04545 7.30114C9.50947 6.66193 10.1345 6.1624 10.9205 5.80256C11.7112 5.43797 12.6037 5.25568 13.598 5.25568C14.6018 5.25568 15.4801 5.43797 16.233 5.80256C16.9858 6.16714 17.5705 6.65956 17.9872 7.27983C18.4086 7.89536 18.617 8.58665 18.6122 9.35369C18.617 10.1681 18.3636 10.8475 17.8523 11.392C17.3456 11.9366 16.6851 12.2822 15.8707 12.429V12.5426C16.9408 12.6799 17.7552 13.0516 18.3139 13.6577C18.8774 14.259 19.1567 15.0118 19.152 15.9162C19.1567 16.7448 18.9176 17.4811 18.4347 18.125C17.9564 18.7689 17.2959 19.2756 16.4531 19.6449C15.6103 20.0142 14.6444 20.1989 13.5554 20.1989Z" fill="#987DF9" />
                        <circle cx="13.5" cy="13.5" r="12.5" stroke="#987DF9" strokeWidth="2" />
                    </svg>
                }
                <span className={`text-[18px] md:text-[20px] ${step === 3 ? 'text-app-primary' : 'text-app-purple'}`}>
                    Pool Information
                </span>
                <div className="hidden md:block">
                    {step === 3 ?
                        <svg width="30" height="3" viewBox="0 0 30 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.5" width="30" height="2" fill="#341461" />
                        </svg> :
                        <svg width="30" height="3" viewBox="0 0 30 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.5" width="30" height="2" fill="#987DF9" />
                        </svg>
                    }
                </div>
            </div>
            <div className='flex gap-1 items-center'>
                {step === 4 ?
                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.95881 17.4432V15.0213L14.0312 5.45455H16.1193V8.80682H14.8835L11.0554 14.8651V14.9787H19.6847V17.4432H7.95881ZM14.9403 20V16.7045L14.9972 15.6321V5.45455H17.8807V20H14.9403Z" fill="#341461" />
                        <circle cx="13.5" cy="13.5" r="12.5" stroke="#341461" strokeWidth="2" />
                    </svg> :
                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.95881 17.4432V15.0213L14.0312 5.45455H16.1193V8.80682H14.8835L11.0554 14.8651V14.9787H19.6847V17.4432H7.95881ZM14.9403 20V16.7045L14.9972 15.6321V5.45455H17.8807V20H14.9403Z" fill="#987DF9" />
                        <circle cx="13.5" cy="13.5" r="12.5" stroke="#987DF9" strokeWidth="2" />
                    </svg>
                }
                <span className={`text-[18px] md:text-[20px] ${step === 4 ? 'text-app-primary' : 'text-app-purple'}`}>
                    Finalization
                </span>
            </div>
        </div>
    )
}