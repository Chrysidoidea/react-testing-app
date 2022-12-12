import {useState, createContext, useEffect} from "react";

export const addCartItem = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

    if (existingCartItem) {
        return cartItems.map((cartItem) => {
            return cartItem.id === productToAdd.id
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
        })
    }

    return [...cartItems, {...productToAdd, quantity: 1}];
};

export const decrementHandler = (cartItems, cardId) => {

    return cartItems.map((cartItem) => {
            return cardId.id === cartItem.id
                ? {...cartItem,
                    quantity: cartItem.quantity - (cartItem.quantity > 1 ? 1 : 0)}
                : cartItem
        }
    )

}



export const incrementHandler = (cartItems, cardId) => {
    cartItems.map(cartItem => console.log(cartItem.id))

    return cartItems.map((cartItem) => {
            return cardId.id === cartItem.id
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
        }
    )

}
export const deleteHandler = (cartItems, cardId) => {
    return cartItems.filter((cartItem) => {
        return cartItem.id !== cardId.id
    });

}

export const DropdownContext = createContext({
    isActive: false,
    setIsActive: () => null,
    cartItems: [],
    setCartItems: () => {},
    cartCount: 0,
})

export const DropdownProvider = ({children}) => {
    const [isActive, setIsActive] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
             const newCartCount = cartItems.reduce((accumulator, currentItem) => accumulator + currentItem.quantity, 0);
             setCartCount(newCartCount)
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    };
    const decrement = (cartId) => {
        setCartItems(decrementHandler(cartItems, cartId));
    }
    const increment = (cartId) => {
        setCartItems(incrementHandler(cartItems, cartId));
    }
    const deleteElement = (cartId) => {
        setCartItems(deleteHandler(cartItems, cartId));
    }

    const value = {isActive, setIsActive, cartItems, setCartItems, addItemToCart, decrement, increment, deleteElement, cartCount};

    return (
        <DropdownContext.Provider value={value}>
            {children}
        </DropdownContext.Provider>
    )
}



