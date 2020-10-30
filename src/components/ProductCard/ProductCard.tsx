/** @format */

import React from 'react';
import cx from 'classnames';
import css from './productCard.module.scss';

interface IProductCard {
  name: string;
  available: number;
  price: number;
  image: string;
  className?: string;
  onclick: () => void;
}

const ProductCard: React.FC<IProductCard> = (props: IProductCard) => {
  const { name, available, price, image, className, onclick } = props;
  return (
    <article className={cx(css.cntCard, className && className, 'container-row')}>
      <figure
        className={cx(
          css.cntCard_cntImg,
          'container-row',
          'row--center',
          'row_align--center',
          !image && css.cntCard_cntImg__empty,
        )}>
        <img src={image} className={css.img} />
      </figure>
      <div className={cx('container-row')}>
        <h5 className={cx(css.cntCard_title, 'col_12')}>{name}</h5>
        <p className={cx(css.cntCard_price, 'col_12')}>{price}</p>
        <p className={cx(css.cntCard_stock, 'col_12')}>
          {available ? `Stock: ${available}` : `Sin stock disponible`}
        </p>
        {/* <button className={css.cntCard_moreDetails} onClick={() => onclick()}>
          Más detalles
        </button> */}
      </div>
    </article>
  );
};

export default ProductCard;
