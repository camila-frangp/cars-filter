/** @format */

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getDataApiUrl } from './../../service/service';
import cx from 'classnames';
import ProductCard from '../../components/ProductCard/ProductCard';
import logo from './../../assets/image/kauffman-logo.png';
import css from './listProducts.module.scss';
import Modal from '../../components/Modal/Modal';

const ListProducts = () => {
  const [data, setData] = useState([]);
  const [activeModal, setActiveModal] = useState(false);

  const getData = () => {
    axios
      .get(getDataApiUrl())
      .then(results => {
        console.log('results', results);
        const arrayData = [...data];
        let objResult = {};
        const dataResults = results.data.results;
        dataResults.map(item => {
          objResult = {
            id: item.id,
            name: item.title,
            available: item.available_quantity,
            price: `$${item.price} ${item.currency_id}`,
            image: item.thumbnail,
            solds: item.sold_quantity,
            attributes: item.attributes,
          };
          arrayData.push(objResult);
        });
        setData(arrayData);
      })
      .catch(error => {
        console.log('error convert data', error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className={cx(css.cntListProduct, 'container-row', 'row--center')}>
      <header className={cx(css.header, 'container-row')}>
        <figure className={cx(css.header_cntLogo)}>
          <img src={logo} className={cx(css.logoImg)} />
          <h1 className={cx(css.title)}>Filtros</h1>
        </figure>
      </header>
      {data.map((product, indexProduc) => {
        return (
          <div className={cx(css.cntListProduct_item, 'col_3', 'col_md_5', 'col_xs_12')}>
            <ProductCard
              key={indexProduc}
              name={product.name}
              available={product.available}
              price={product.price}
              image={product.image}
              onclick={() => setActiveModal(true)}
            />
            <Modal
              key={indexProduc}
              name={product.name}
              available={product.available}
              price={product.price}
              image={product.image}
              attributes={product.attributes}
              solds={product.solds}
              active={activeModal}
              onClose={() => {
                setActiveModal(false);
              }}
            />
          </div>
        );
      })}
    </section>
  );
};

export default ListProducts;
