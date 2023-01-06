import { SVGProps, Ref, forwardRef } from "react"

export const PeopleGroupIcon = forwardRef((
    props: SVGProps<SVGSVGElement>,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        {...props}
    >
        <path
            d="m16.72 19.752-.64-5.124A3 3 0 0 0 13.1 12h-2.204a3 3 0 0 0-2.976 2.628l-.64 5.124A2 2 0 0 0 9.265 22h5.468a1.999 1.999 0 0 0 1.985-2.248v0Z"
            stroke="#51646D"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM20 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
            stroke="#51646D"
            strokeWidth={2}
        />
        <path
            d="M4 14h-.306a2 2 0 0 0-1.973 1.671l-.333 2A2 2 0 0 0 3.361 20h3.64m13-6h.305a2 2 0 0 1 1.973 1.671l.333 2A1.999 1.999 0 0 1 20.64 20H17"
            stroke="#51646D"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
))
