import http from 'src/utils/http'
import { RequestProductModel, ResponeProductModel } from 'src/types/product.type'
import { SuccessResponse } from 'src/types/utils.type'

const URL = 'products'
const productApi = {
  createProduct(data: RequestProductModel) {
    return http.post<SuccessResponse<ResponeProductModel>>(URL, data)
  }
}

export default productApi
