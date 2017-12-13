import React, { Fragment } from "react"
import Product from "./Product"

function ProductList({
  products,
  productsInWishlist,
  editedProductID,
  onEditProduct,
  onAddProductToWishlist,
  onRemoveProductFromWishlist,
  renderEditForm
}) {
  const hasWishlist = !!productsInWishlist

  return (
    <div className="mb-3">
      <h2>Products</h2>
      {products.map(product => {
        // Method 1
        // let inWishlist = false
        // productsInWishlist.forEach((productInWishlist) => {
        //   if (productInWishlist._id === product.id) {
        //     inWishlist = true
        //   }
        // })

        // // Method 2
        const inWishlist =
          hasWishlist &&
          productsInWishlist.some(productInWishlist => {
            return productInWishlist._id === product._id
          })

        // console.log(inWishlist)
        const showAddToWishList = hasWishlist && !inWishlist
        const showRemoveFromWishList = hasWishlist && inWishlist
        return (
          <Fragment key={product._id}>
            <Product
              {...product}
              onEdit={() => {
                onEditProduct(product._id)
              }}
              onAddToWishlist={
                showAddToWishList
                  ? () => {
                      onAddProductToWishlist(product._id)
                    }
                  : null
              }
              onRemoveFromWishlist={
                showRemoveFromWishList
                  ? () => {
                      onRemoveProductFromWishlist(product._id)
                    }
                  : null
              }
            />
            {editedProductID === product._id && renderEditForm(product)}
          </Fragment>
        )
      })}
    </div>
  )
}

export default ProductList
