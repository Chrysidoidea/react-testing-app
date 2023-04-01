import "./button.styles.scss";

export const BUTTON_TYPE_CLASSES = {
    google: "google-authentication",
    inverted: "inverted",
    shopCard: 'shopCard',
};

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
    return (
        <button
            disabled={isLoading}
            className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;
