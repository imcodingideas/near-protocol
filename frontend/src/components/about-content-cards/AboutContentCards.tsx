import { AboutContentCardProps, AboutContentCard } from './AboutContentCard'

interface AboutContentCardsProps {
    content: AboutContentCardProps[]
}


export const AboutContentCards = ({ content }: AboutContentCardsProps) => {
    return (
        <>
            {content.map((props) => <AboutContentCard key={props.text} {...props} />)}
        </>
    )
}
