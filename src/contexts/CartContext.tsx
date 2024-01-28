import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
  // useEffect,
} from 'react'
import data from '../data/products.json'

export interface Product {
  id: string
  image: string[]
  name: string
  price: number
}

interface CartContextProps {
  amount: number
  products: Product[]
  setAmount: Dispatch<SetStateAction<number>>
  setProducts: Dispatch<SetStateAction<Product[]>>
  removeCartProduct: (id: string) => void
  addCartProduct: (id: string) => void
  clearCart: () => void
}

const defaultValues: CartContextProps = {
  amount: 0,
  setAmount: () => {},
  products: [],
  setProducts: () => {},
  removeCartProduct: () => {},
  addCartProduct: () => {},
  clearCart: () => {},
}

type CartContextProviderProps = {
  children: ReactNode
}

export const CartContext = createContext<CartContextProps>(defaultValues)

export function CartProvider({ children }: CartContextProviderProps) {
  const [amount, setAmount] = useState<number>(0)
  const [products, setProducts] = useState<Product[]>([])

  // useEffect(() => {
  //   console.log(amount)
  //   console.log(products)
  // }, [products, amount])

  const addCartProduct = (id: string) => {
    const selectedProduct = data.find((product) => product.id === id)

    if (selectedProduct) {
      setProducts((prevProducts) => [...prevProducts, selectedProduct])
      setAmount((prevAmount) => prevAmount + selectedProduct.price)
    }
  }

  const removeCartProduct = (id: string) => {
    const selectedProduct = data.find((product) => product.id === id)

    if (selectedProduct) {
      setProducts((prevProducts) => {
        const index = prevProducts.findIndex((product) => product.id === id)

        if (index !== -1) {
          const updatedProducts = [...prevProducts]
          updatedProducts.splice(index, 1)
          return updatedProducts
        }

        return prevProducts
      })

      const productFound = products.find((product) => product.id === id)
      if (amount !== 0 && productFound)
        setAmount(amount - selectedProduct.price)
    }
  }

  const clearCart = () => {
    setAmount(0)
    setProducts([])
  }

  const cartValues: CartContextProps = {
    amount,
    setAmount,
    products,
    setProducts,
    removeCartProduct,
    addCartProduct,
    clearCart,
  }

  return (
    <CartContext.Provider value={cartValues}>{children}</CartContext.Provider>
  )
}