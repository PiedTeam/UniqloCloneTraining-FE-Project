import { productColor, productGender, productSize, productStatus } from 'src/constants/product'
import { CategoryName, CategoryTitle } from './category.type'

type ProductColor = (typeof productColor)[keyof typeof productColor]

type ProductSize = (typeof productSize)[keyof typeof productSize]

type ProductGender = (typeof productGender)[keyof typeof productGender]

export interface RequestProductModel {
  _id?: string
  name: string
  type: string
  gender: ProductGender | ''
  category_title: CategoryTitle | ''
  category_name: CategoryName | ''
  price: number
  quantity: number
  release_day: Date
  total_sold: number
  description: string
  material: string
  warning: string
  cover_image: string
  product_images: string[]
  details: ProductDetail[]
}

export interface ResponeProductModel {
  _id?: string
  name: string
  type: string
  category_id: string
  price: number
  quantity: number
  release_day: Date
  total_sold: number
  description: string
  material: string
  warning: string
  cover_image: string
  product_images: string[]
  details: ProductDetail[]
}

interface ProductDetail {
  color: ProductColor | ''
  image: string | ''
  quantities: { size: ProductSize; quantity: number; status: productStatus }[]
}
