import React, { useMemo, useState, useEffect, useRef } from 'react'

export default function WarnSVG({ width, height }: { width: string, height: string }) {

    return (
        <svg width={width} height={height} viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.19515 0.6997C4.32302 0.571834 4.49644 0.5 4.67727 0.5H10.3227C10.5036 0.5 10.677 0.571834 10.8048 0.6997L14.8003 4.69515C14.9282 4.82302 15 4.99644 15 5.17727V10.8227C15 11.0036 14.9282 11.177 14.8003 11.3048L10.8048 15.3003C10.677 15.4282 10.5036 15.5 10.3227 15.5H4.67727C4.49644 15.5 4.32302 15.4282 4.19515 15.3003L0.1997 11.3048C0.0718342 11.177 0 11.0036 0 10.8227V5.17727C0 4.99644 0.0718342 4.82302 0.1997 4.69515L4.19515 0.6997ZM4.95969 1.86364L1.36364 5.45969V10.5403L4.95969 14.1364H10.0403L13.6364 10.5403V5.45969L10.0403 1.86364H4.95969Z" fill="#FF5858" />
            <path fillRule="evenodd" clipRule="evenodd" d="M10.0279 5.47216C10.2942 5.73843 10.2942 6.17013 10.0279 6.4364L5.93698 10.5273C5.67071 10.7936 5.23901 10.7936 4.97274 10.5273C4.70647 10.261 4.70647 9.82934 4.97274 9.56307L9.06365 5.47216C9.32992 5.20589 9.76162 5.20589 10.0279 5.47216Z" fill="#FF5858" />
            <path fillRule="evenodd" clipRule="evenodd" d="M4.69991 5.19994C4.96618 4.93368 5.39788 4.93368 5.66415 5.19994L9.75506 9.29085C10.0213 9.55712 10.0213 9.98882 9.75506 10.2551C9.48879 10.5214 9.05709 10.5214 8.79082 10.2551L4.69991 6.16418C4.43365 5.89791 4.43365 5.46621 4.69991 5.19994Z" fill="#FF5858" />
        </svg>
    )
}