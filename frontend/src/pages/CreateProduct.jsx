import { useState } from "react";
import { createProduct } from "../services/admin.product.service";
import { useNavigate } from "react-router";

const CreateProduct = () => {
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    name: "",
    description: "",
    price: 0,
    images: [],
  });

  const [previews, setPreviews] = useState([]);

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
    formData.images.forEach((file) => tmpFormData.append("photos", file));

    try {
      await createProduct(tmpFormData);

      navigate("/admin/products");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>CreateProduct</h2>
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
          Crear producto
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
