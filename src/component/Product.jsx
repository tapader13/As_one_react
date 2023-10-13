import './product.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
export function Product(props) {
  let { t, p, d, i, r } = props;
  return (
    <>
      <div className='card'>
        <img src={i} alt='not found' />
        <div className='content'>
          <h1>{t}</h1>
          <h2>Price: ${p}</h2>
          <h2>Rating: {r}/5</h2>
          <p>{d}</p>
          <div className='btn'>
            <button>Add to cart</button>
            <button>
              <AiOutlineShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
