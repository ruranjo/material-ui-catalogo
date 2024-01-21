export type FilterBoxType={
  brand:string[],
  rate:number[],
  review_number:number
}

export interface StateData {
    products: Data[],
    single_product: ListProduct | {}
}

export interface Data {
  name_page: string
  brands: string[]
  rate: number[]
  listProduct: ListProduct[]
}

export interface ListProduct {
  id: number
  name: string
  sales: number
  percentage_reduce:number,
  price: number
  review_number: number
  average_review: string
  half_payment: string
  brand: string
  review: string
  images: string[]
  details: Details
  comments_review: CommentsReview[]
}

export interface Details {
  manufactured: string
  product_weight: string
  dimensions: string
  Country_of_origin: string
  color: string
  memory: string
  back_camera: string
  front_camera: string
  special_characteristics: string
  included_components: string
  battery: string
}

export interface CommentsReview {
  id: string
  username: string
  comment: string
  punctuation: number
}
