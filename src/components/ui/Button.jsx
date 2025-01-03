"use client";

export default function Button({type, children, className}) {
  return (
    <button type={type ? type : "button"}
            className={'bg-neutral-700 px-6 py-1 border-t border-b border-t-neutral-600 border-b-neutral-800 \
                        rounded-sm shadow-sm shadow-neutral-800 \
                        hover:bg-neutral-600 hover:border-t-neutral-500 hover:border-b-neutral-700 \
                        active:outline active:outline-holo/50 active:outline-4 active:bg-[#2da0ca] active:border-t-[#43b1da] active:border-b-[#247fa1] mx-auto block mt-8 '
                        + (className ? className : "")}>                        
        {children}
    </button>
  )
}
