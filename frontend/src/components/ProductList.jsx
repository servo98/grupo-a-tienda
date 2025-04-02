import { useNavigate } from "react-router";
const ProductList = ({ products }) => {
  const navigate = useNavigate();

  const handleEdit = (productId) => {
    navigate(`/admin/products/${productId}/edit`);
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product._id} className="product-item">
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <img src={product.photos[0]} alt={product.name} width={70} />
          <button
            onClick={() => {
              handleEdit(product._id);
            }}
          >
            Editar
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
