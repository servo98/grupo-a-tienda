import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getProductDetail } from "../services/product.service";
import Chat from "../components/chat/Chat";

import useAuth from "../hooks/useAuth";

const Product = () => {
  const { isAuth } = useAuth();
  const [product, setproduct] = useState(null);

  const { productId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getProductDetail(productId);
        setproduct(data.product);
      } catch (error) {
        console.error("Error al obtener producto");
        console.error(error);
      }
    };

    getData();
  }, [productId]);

  return (
    <div className="product-details">
      <h2>Product Details</h2>
      {product ? (
        <div className="product-info">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <div>
            {product.photos.map((photo, index) => (
              <img key={index} src={photo} width={70} />
            ))}
          </div>
          <p>Producto publicado por: {`${product.createdBy.fullName}`}</p>

          {isAuth && <Chat />}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Product;
