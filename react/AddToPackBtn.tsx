import React from 'react'
import { useQuery } from 'react-apollo'
import dailyPack from './graphql/dailypack.graphql'
import useProduct from 'vtex.product-context/useProduct'
// import { useOrderForm } from 'vtex.order-manager/OrderForm'
import { ExtensionPoint } from 'vtex.render-runtime'

const AddToPackBtn: StorefrontFunctionComponent = ({
}) => {

  // how properties are connected to the product model?
  const { product: { properties } } = useProduct()
  const productDosage = properties.find((el: any) => el.name === 'Dosage')?.values
  const productElement = properties.find((el: any) => el.name === 'Element')?.values
  const productDosageMap: any = []

  for (let i = 0; i < productDosage.length; i++) {
    if (productElement[i] && productDosage[i]) {
      productDosageMap.push({
        element: productElement[i],
        dosage: productDosage[i]
      })
    }
  }

  // get the cart element capacity
  // no properties in cart item?
  // const {
  //   orderForm: { items },
  // } = useOrderForm()

  const { data, loading, error } = useQuery(dailyPack, {
    ssr: false
  })

  if (!loading && !error) {
    const { dailypack } = data
    const dailyElementDosages = dailypack
      .filter((dailyDosage: any) => productDosageMap.map((el: any) => el.element).includes(dailyDosage.element))

    console.log(dailyElementDosages)
  }
  const canAddToCart = true
  return (
    <>
      {
        canAddToCart && (
          <ExtensionPoint id={'add-to-cart-button'} />
        )
      }
    </>
  )
}

export default AddToPackBtn
