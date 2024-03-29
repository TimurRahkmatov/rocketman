import { combineReducers } from 'redux';
import { categoryReducer } from './category/categoryReducer';
import { subCategoryReducer } from './subCategory/subCategoryReducer';
import { productReducer } from './product/productReducer';
import { subProductReducer } from './subProduct/subProductReducer';

export const rootReducer = combineReducers({
	category: categoryReducer,
	subCategory: subCategoryReducer,
	product: productReducer,
	subProduct: subProductReducer,
});
