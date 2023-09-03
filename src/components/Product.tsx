import { ProductInfoProps } from './Types';

function Product({ productInfo }: ProductInfoProps) {
  const { title, image, price } = productInfo;

  return (
    <li className="product">
      <div>
        <p>{ title }</p>
        <p>
          R$
          { price }
        </p>
      </div>
      <img src={ image } alt={ title } />
    </li>
  );
}

export default Product;
