import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
  editAdminProduct,
  getProductById,
} from "../services/admin.product.service";

const EditProduct = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [formData, setformData] = useState({
    name: "",
    description: "",
    price: 0,
    images: [],
  });

  const [previews, setPreviews] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getProductById(productId);
        const { product } = data;
        setformData({
          name: product.name,
          description: product.description,
          price: product.price,
        });
        setPreviews(product.photos);
        console.log(product);
      } catch (error) {
        console.error("Error al obtener producto por id");

        console.error(error);
      }
    };

    getData();
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const handleImgsChange = (e) => {
    const files = Array.from(e.target.files);
    const imgUrls = files.map((file) => URL.createObjectURL(file));
    setPreviews(imgUrls);
    setformData({
      ...formData,
      images: files,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tmpFormData = new FormData();
    tmpFormData.append("name", formData.name);
    tmpFormData.append("price", formData.price);
    tmpFormData.append("description", formData.description);
    formData.images?.forEach((file) => tmpFormData.append("photos", file));

    try {
      console.log("productId", productId);

      const { data } = await editAdminProduct(productId, tmpFormData);

      console.log("producto editado", data);

      navigate("/admin/products");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>EditProduct</h1>
      <form>
        <div>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Descripción</label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="price">Precio</label>
          <input
            type="number"
            name="price"
            id="price"
            min="0"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="photos">Fotos</label>
          <input
            type="file"
            multiple
            name="photos"
            id="photos"
            accept="image/*"
            onChange={handleImgsChange}
          />
        </div>
        <div>
          {previews.map((src, index) => (
            <img key={index} src={src} width={100} />
          ))}
        </div>
        <button type="submit" onClick={handleSubmit}>
          Guardar edición
        </button>
      </form>
    </>
  );
};

export default EditProduct;
