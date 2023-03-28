import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import './merch-component.scss'
import CategoryPreview from "../components/category-preview/category-preview";
import SpinnerComponent from "../components/spinner/spinner.component";
import AnimationComponent from "../effects/Animation.component";
import {fetchCategoriesStart} from "../store/categories/categories.action";
import {selectCategoriesIsLoading, selectCategoriesMap} from "../store/categories/categories.selector";


const Shop = () => {
    const dispatch = useDispatch();
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);

    useEffect(() => {
        dispatch(fetchCategoriesStart());
    }, []);

    return (
        <AnimationComponent>
            {
                isLoading ? (
                    <SpinnerComponent/>
                ) : (
                    <div className='shop-container'>
                        {Object.keys(categoriesMap).map((title) => {
                            const products = categoriesMap[title];
                            return <CategoryPreview key={title} title={title} products={products}/>
                        })}
                    </div>
                )
            }
        </AnimationComponent>
    );

}

export default Shop;