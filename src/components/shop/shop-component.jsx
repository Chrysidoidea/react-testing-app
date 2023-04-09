import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {ShopContainer} from "./shop.styles"
import CategoryPreview from "./category-preview/category-preview";
import SpinnerComponent from "../spinner/spinner.component";
import AnimationComponent from "../../effects/Animation.component";
import {fetchCategoriesAsync} from "../../store/categories/categories.utils";
import {
    selectCategoriesIsLoading,
    selectCategoriesMap
} from "../../store/categories/categories.selector";


const Shop = () => {
    const dispatch = useDispatch();
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);

    useEffect(() => {
        dispatch(fetchCategoriesAsync());
    }, []);

    return (
        <AnimationComponent>
            {
                isLoading ? (
                    <SpinnerComponent/>
                ) : (
                    <ShopContainer>
                        {Object.keys(categoriesMap).map((title) => {
                            const products = categoriesMap[title];
                            return <CategoryPreview key={title} title={title} products={products}/>
                        })}
                    </ShopContainer>
                )
            }
        </AnimationComponent>
    );
}

export default Shop;