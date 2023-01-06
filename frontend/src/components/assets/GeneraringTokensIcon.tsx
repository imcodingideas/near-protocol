import { SVGProps, Ref, forwardRef } from "react"

export const GeneraringTokensIcon = forwardRef((
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
            d="M9 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8Zm3 6.5h-2v5H8v-5H6V9h6v1.5Zm8.25-6.75L23 5l-2.75 1.25L19 9l-1.25-2.75L15 5l2.75-1.25L19 1l1.25 2.75Zm0 14L23 19l-2.75 1.25L19 23l-1.25-2.75L15 19l2.75-1.25L19 15l1.25 2.75Z"
            fill="#51646D"
        />
    </svg>
))
