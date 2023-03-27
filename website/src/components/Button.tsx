import { Link } from 'gatsby';
import React, { MouseEventHandler } from 'react';
import { twMerge } from 'tailwind-merge';
import { useElementOnScreen } from '../hooks/useElementOnScreen';

export enum ButtonTypes {
    Button,
    ALink,
    Link
}


export const Button = ({ className = "", buttonType = undefined, onClick = undefined, buttonText = undefined, buttonIconLeft = null, buttonIconRight = null, filled = false, disabled = false, type = ButtonTypes.Button, linkTarget = "_blank" }: {
    className?: string,
    buttonType?: "button" | "submit" | "reset" | undefined,
    onClick?: undefined | MouseEventHandler<HTMLButtonElement> | string,
    buttonText?: any,
    buttonIconLeft?: any,
    buttonIconRight?: any,
    filled: boolean,
    disabled?: boolean,
    type?: ButtonTypes,
    linkTarget?: string
}) => {
    const { containerRef, isVisible } = useElementOnScreen({
        observerOptions: {
            root: null,
            rootMargin: "0px",
            threshold: 0.1
        },
        sticky: true
    });

    let defaultClasses = `w-full transition-all duration-75 font-bebas group tracking-wide text-xl font-semibold box-border min-h-[41px] flex items-center justify-center py-2 px-4 rounded-md border-2 active:translate-x-[2px] active:translate-y-[2px] ${disabled ? 'bg-neutral-400 border-neutral-400 text-neutral-300 cursor-not-allowed' : filled ? 'hover:underline bg-indigo-700 hover:bg-indigo-800 text-slate-50 border-indigo-800 hover:border-indigo-900' : 'text-indigo-800 hover:underline bg-neutral-50 border-indigo-800 '}`;
    let classes = twMerge(defaultClasses, className);

    if (type === ButtonTypes.ALink) {
        return (
            <div
                className={`w-full max-w-sm ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'} transition-{transform, opacity, scale} duration-700`}
                ref={containerRef}>
                <a
                    href={onClick as string}
                    target={linkTarget}
                    className={classes}>
                    <div className='relative flex items-center justify-center'>
                        <div className='relative flex justify-center items-center'>{buttonIconLeft}</div>
                        {buttonText ?
                            <span className='relative -top-0.5 h-6 mx-2 flex justify-center items-center'>{buttonText}</span> : null
                        }
                        <div className='relative flex justify-center items-center'>{buttonIconRight}</div>
                    </div>
                </a>
            </div>
        )
    } else if (type === ButtonTypes.Link) {
        return (
            <Link
                ref={containerRef}
                to={onClick as string}
                className={classes}>
                <div className='relative flex items-center justify-center'>
                    <div className='relative flex justify-center items-center'>{buttonIconLeft}</div>
                    {buttonText ?
                        <span className='relative -top-0.5 h-6 mx-2 flex justify-center items-center'>{buttonText}</span> : null
                    }
                    <div className='relative flex justify-center items-center'>{buttonIconRight}</div>
                </div>
            </Link>
        )
    } else {
        return (
            <button
                ref={containerRef}
                type={buttonType || "button"}
                disabled={disabled}
                onClick={onClick as undefined | MouseEventHandler<HTMLButtonElement>}
                className={classes}>
                <div className='relative flex items-center justify-center'>
                    <div className='relative flex justify-center items-center'>{buttonIconLeft}</div>
                    {buttonText ?
                        <span className='relative -top-0.5 h-6 mx-2 flex justify-center items-center'>{buttonText}</span> : null
                    }
                    <div className='relative flex justify-center items-center'>{buttonIconRight}</div>
                </div>
            </button>
        )
    }
}
