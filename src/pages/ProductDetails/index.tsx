import { useContext, useEffect, useState } from 'react'
import Styles from './styles'
import { useNavigate, useParams } from 'react-router-dom'
import data from '../../data/products.json'
import { CartContext, Product } from '../../contexts/CartContext'
import { ArrowForward, Star } from '@mui/icons-material'
import Promo from '../../components/Promo'

export default function ProductDetails() {
  const [product, setProduct] = useState<Product | undefined>(undefined)
  const [favorite, setFavorite] = useState<boolean>(false)
  const { addCartProduct } = useContext(CartContext)
  const { productId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const selectedProduct = data.find((item) => item.id === productId)
    setProduct(selectedProduct)
  }, [productId])

  return (
    <>
      <Styles.ProductContainer>
        <Styles.ProductContent>
          {product ? (
            <>
              <Styles.ProductGalleryContainer className="product-gallery-container">
                <img
                  src={product?.image[0]}
                  alt={product?.name}
                  className="product-active-image"
                />
              </Styles.ProductGalleryContainer>
              <Styles.ProductInfoContainer className="product-info-container">
                <h2 className="product-title">{product.name}</h2>
                <p className="product-description">{product.info}</p>
                <div className="align-price-content">
                  <h2 className="product-price">
                    R$ {product.price.toFixed(2)}
                  </h2>
                  <div className="align-card-rating">
                    <Star />
                    <span>{product.rating.toFixed(1)}</span>
                  </div>
                </div>
                <button
                  className="add-cart-btn"
                  onClick={() => {
                    addCartProduct(product.id)
                    navigate('/cart')
                  }}
                >
                  adicionar ao carrinho <ArrowForward />
                </button>
                <button
                  className="favorite-btn"
                  onClick={() => setFavorite(!favorite)}
                >
                  {favorite ? 'retirar da' : 'adicionar a'} lista de desejos
                </button>
              </Styles.ProductInfoContainer>
            </>
          ) : (
            <span>Carregando...</span>
          )}
        </Styles.ProductContent>
        <Promo />
      </Styles.ProductContainer>
    </>
  )
}
