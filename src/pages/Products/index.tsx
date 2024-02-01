import Styles from './styles'
import data from '../../data/products.json'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Product } from '../../contexts/CartContext'
import ProductCard from '../../components/ProductCard'

type PriceFilterProps = {
  lower: number
  highest: number
}

export function Products() {
  const { categoryId } = useParams()
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [filteredPrice, setFilteredPrice] = useState<PriceFilterProps>({
    highest: 0,
    lower: 0,
  })
  const [rangeValue, setRangeValue] = useState<number>(filteredPrice.lower)

  useEffect(() => {
    if (categoryId !== 'all') {
      return setFilteredProducts(
        data.filter((item) => item.class === categoryId),
      )
    }
    setFilteredProducts(data)
  }, [categoryId])

  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.Filter>
          <label htmlFor="rangeInput">Preço inicial</label>
          <input
            type="range"
            id="rangeInput"
            name="range"
            min={filteredPrice.lower}
            max={filteredPrice.highest}
            value={rangeValue}
          />
          <span>{rangeValue}</span>
        </Styles.Filter>
        <div className="align-products-cards">
          {filteredProducts.map((item) => (
            <ProductCard data={item} key={item.id} />
          ))}
        </div>
      </Styles.Content>
    </Styles.Container>
  )
}
