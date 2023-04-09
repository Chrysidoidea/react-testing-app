import {
    DefaultButton,
    GoogleSignButton,
    InvertedButton,
    PictureButton,
} from "./button.styles"

export const BUTTON_TYPE_CLASSES = {
    default: "default-button",
    google: "google-authentication",
    inverted: "inverted",
    shopCard: "shopCard",
};
const buttonTypeSwitcher = (buttonType = BUTTON_TYPE_CLASSES.default) => (
    {
        [BUTTON_TYPE_CLASSES.default]: DefaultButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
        [BUTTON_TYPE_CLASSES.shopCard]: PictureButton,
    }[buttonType]
)

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
    const CustomButton = buttonTypeSwitcher(buttonType);

    return (
        <CustomButton
            disabled={isLoading}
            {...otherProps}
        >
            {children}
        </CustomButton>
    );
};

export default Button;
