import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const ProductItem = () => {
  const [product, setProduct] = useState<TProduct | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetch(`/api/avo/${router.query.id}`)
      .then((res) => res.json())
      .then((json: TProduct) => {
        console.log(json);
        setProduct(json);
      });
  }, [router.query.id]);

  return (
    <div>
      Product detail page {router.query.id}
    </div>
  );
};

export default ProductItem;
