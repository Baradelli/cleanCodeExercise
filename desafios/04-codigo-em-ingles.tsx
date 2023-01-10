// Código em inglês
import { useState } from "react";

interface IProduct {
  title: string;
  price: string;
}

const products = [
  {
    title: "Macarrão",
    price: "R$ 25,00",
  },
  {
    title: "Hamburger",
    price: "R$ 30,00",
  },
];

export function ListProduto() {
  const [researchedProduct, setResearchedProduct] = useState<IProduct[]>([]);

  function searchProduto(search: string) {
    const productFilteredBySearch = products.filter((product) =>
      product.title.includes(search)
    );

    setResearchedProduct(productFilteredBySearch);
  }

  return (
    <div>
      <input type="text" onChange={(e) => searchProduto(e.target.value)} />

      {researchedProduct.map((produto) => (
        <div>
          <p>{produto.title}</p>
          <p>{produto.price}</p>
        </div>
      ))}
    </div>
  );
}
