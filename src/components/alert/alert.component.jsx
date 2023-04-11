import {
    BackgroundShadow,
    FlagWrapper,
    UkrFlagDown,
    UkrFlagTop,
    Manifest,
    GlassWrapper,
    SupportButton, CloseButton
} from "./alert.styles";

const variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
        }
    },
    collapse: {
        opacity: 0,
        transition: {ease: "easeInOut", duration: 0.2,},
    }
}
export const AlertComponent = ({setAlert}) => {

    return (
        <BackgroundShadow
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="collapse"
        >
            <GlassWrapper>

            <Manifest>
                On February 24th, 2022, the world witnessed a heart-wrenching event as Russia invaded Ukraine. This tragic day shook not only the people of Ukraine but also the entire global community. Instead of focusing on the growth and prosperity of their nation, and fostering peace and harmony, Putin chose to indulge his twisted desires. Now, Ukraine bravely stands on the frontlines, fighting not just for themselves but for the very essence of democracy.

                The outcome of this conflict carries immense implications; if Putin prevails, it would legitimize the use of force as a means to achieve one's goals, plunging the world into chaos and crisis. We implore you to stand in solidarity with Ukraine, extending a helping hand to its people in their time of need. Let us come together as a united force, striving for a world of peace and understanding. May peace be with you all.
            </Manifest>
                <SupportButton
                    href='https://war.ukraine.ua/support-ukraine/'
                    target='_blank'
                >Click for help
                </SupportButton>
                <CloseButton
                    onClick={() => setAlert(false)}
                >Close
                </CloseButton>
            <FlagWrapper>
                <UkrFlagTop/>
                <UkrFlagDown/>
            </FlagWrapper>
            </GlassWrapper>
        </BackgroundShadow>
    )
}