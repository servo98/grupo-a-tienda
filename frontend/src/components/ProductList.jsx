import { useNavigate } from "react-router";
import AddToCart from "./AddToCart";
const ProductList = ({ products, canEdit = false }) => {
  const navigate = useNavigate();

  const handleEdit = (productId) => {
    navigate(`/admin/products/${productId}/edit`);
  };

  const handleDetails = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product._id} className="product-item">
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <img src={product.photo} alt={product.name} width={70} />
          <button
            onClick={() => {
              handleDetails(product._id);
            }}
          >
            Detalles
          </button>
          {canEdit ? (
            <button
              onClick={() => {
                handleEdit(product._id);
              }}
            >
              Editar
            </button>
          ) : (
            <AddToCart productId={product._id} />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
