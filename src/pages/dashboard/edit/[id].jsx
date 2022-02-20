import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import axios from 'axios';
import endPoints from '@services/api';
import FormProduct from '@components/FormProduct';

export default function Edit() {
  const [product, setProduct] = useState({});
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;

    if (!router.isReady) return;
    async function getProduct() {
      const response = await axios.get(endPoints.products.getProduct(id));
      setProduct(response.data);
      console.log(id, response.data);
    }
    getProduct();
  }, [router?.isReady]); // eslint-disable-line react-hooks/exhaustive-deps

  return <FormProduct product={product} />;
}
