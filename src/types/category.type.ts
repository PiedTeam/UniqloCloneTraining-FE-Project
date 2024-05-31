import { categoryName, categoryTitle } from 'src/constants/product'

export type CategoryTitle = (typeof categoryTitle)[keyof typeof categoryTitle]

export type CategoryName = (typeof categoryName)[keyof typeof categoryName]
