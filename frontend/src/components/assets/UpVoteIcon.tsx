import { SVGProps, Ref, forwardRef } from "react"

export const UpVoteIcon = forwardRef((
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
            d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1 1 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1 1 0 0 0 .781-1.625l-8-10ZM15 12h-1v8h-4v-8H6.081L12 4.601 17.919 12H15Z"
            fill="#51646D"
        />
    </svg>
))

