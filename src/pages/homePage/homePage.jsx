import React, { useState } from 'react';
import data from '../../../data.json';
import Head from '../../components/head';
import Header from '../../components/header'
import './homePage.css';

function HomePage() {
  const whatsappNumber = "+34685532955";

  // Estado para armazenar as quantidades de cada produto
  const [quantities, setQuantities] = useState(
    data.reduce((acc, product) => {
      acc[product.id] = ""; // Inicia a quantidade como uma string vazia para cada produto
      return acc;
    }, {})
  );

  // Estado para armazenar os itens do carrinho
  const [cart, setCart] = useState([]);

  // Função para lidar com a mudança no valor do input
  const handleInputChange = (e, productId) => {
    const value = e.target.value;
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: value, // Atualiza a quantidade do produto específico
    }));
  };

  // Função para adicionar ao carrinho
  const addToCart = (productId) => {
    const quantity = quantities[productId];
    const product = data.find((p) => p.id === productId);

    if (quantity > 0) {
      setCart((prevCart) => {
        const existingProduct = prevCart.find((item) => item.id === productId);
        if (existingProduct) {
          return prevCart.map((item) =>
            item.id === productId ? { ...item, quantity: parseInt(item.quantity) + parseInt(quantity) } : item
          );
        } else {
          return [...prevCart, { ...product, quantity }];
        }
      });
      setQuantities((prevQuantities) => ({ ...prevQuantities, [productId]: "" }));
    }
  };

  // Função para finalizar a compra
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("O carrinho está vazio!");
      return;
    }

    const whatsappMessage = cart
      .map((item) => `${item.quantity} unidades de ${item.name}`)
      .join(", ");
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Gostaria de encomendar: ${whatsappMessage}`)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <>
      <Head />
      <div className="container-homePage">
        {/* Lista de Produtos */}
        <section className='product-list'>
          {data.map((product, index) => (
            <div className='card' key={index}>
              {product.img && <img src={product.img} alt={product.name} />}
              <div className="text">
                <p>{product.name}</p>
                <p>Categoria: {product.category}</p>
                <p>Preço: R${product.price.toFixed(2)}</p>
                <div className="input">
                  <label htmlFor={`quantity-${product.id}`}>Quantidade:</label>
                  <input
                    type="number"
                    id={`quantity-${product.id}`}
                    value={quantities[product.id]}
                    onChange={(e) => handleInputChange(e, product.id)}
                  />
                </div>
              </div>
              <button onClick={() => addToCart(product.id)}>Adicionar ao Carrinho</button>
            </div>
          ))}
        </section>

        {/* Carrinho de Compras na Lateral */}
        <section className='cart'>
          <h2>Sua lista</h2>
          {cart.length === 0 ? (
            <p>O carrinho está vazio</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.quantity}x {item.name} - R${(item.price * item.quantity).toFixed(2)}
                </li>
              ))}
            </ul>
          )}
          {cart.length > 0 && <button onClick={handleCheckout}>Finalizar Compra</button>}
        </section>
      </div>
    </>
  );
}

export default HomePage;
