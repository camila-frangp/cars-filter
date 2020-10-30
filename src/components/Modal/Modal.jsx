/** @format */

import * as React from 'react';
import cx from 'classnames';
import useEventListener from './../../utils/event';
import css from './modal.module.scss';

const Modal = ({ id, name, available, price, image, solds, attributes, active, onClose }) => {
  // const handlerModal = (event: any) => {
  //   const elemenModal = event.target.closest('.modal');
  //   const elementContent = event.target.closest('.modalContent');
  //   if (elemenModal && !elementContent && active) onClose();
  // };

  // if (!active) {
  //   window.removeEventListener('click', handlerModal);
  //   return null;
  // }

  // useEventListener('click', handlerModal);

  return (
    <article className={cx(css.modal, active ? 'col_show' : 'col_hidden')}>
      <section className={cx(css.modalContent)}>
        <header className={cx(css.modalHeader)}>
          <button
            className={cx(css.modalHeader_close, 'container-row', 'row--right')}
            onClick={() => {
              onClose();
            }}>
            X
          </button>
        </header>
        <section className={cx(css.content, 'container-row')}>
          <figure className={cx(css.content_image)}>
            <img src={image} />
          </figure>
          <div className={cx(css.info, 'col_xs_12')}>
            <h4 className={cx(css.info_name)}>{name}</h4>
            <p className={cx(css.info_price)}>{price}</p>
            <p className={cx(css.info_available)}>
              {available ? `Stock: ${available}` : `Sin stock disponible`}
            </p>
            <p className={cx(css.info_solds)}>{`Vendidos: ${solds}`}</p>
            {attributes && attributes.length > 0 && (
              <ul className={cx(css.listAttributes)}>
                {attributes.map((item, index) => {
                  return (
                    <li className={cx(css.listAttributes_item)} key={index}>
                      <span className={css.label}>{item.name}</span>
                      <span>{item.value_name}</span>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </section>
      </section>
    </article>
  );
};

export default Modal;
