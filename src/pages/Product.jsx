import React from 'react'
import '../css/pages/product.css'
import packageImg from '../assets/images/inf-p-4.png'
import packageBack from '../assets/images/inf-p-1.jpg'
import PromotionItems from '../components/products-components/PromotionItems'
import { AiFillGift } from 'react-icons/ai'


const Product = () => {
  return (
    <section className='product_page__section'>
      <article className='product_page__container'>
        <img src={packageImg} alt="package" className='product_page_main_img' />
        <div className='product_page__info'>
          <h1>Parches Verar</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt posuere quam, convallis efficitur mi viverra et. Duis imperdiet urna vel tincidunt luctus. Fusce facilisis diam ut leo gravida, eget scelerisque urna convallis. Phasellus hendrerit tincidunt elementum. Quisque faucibus, odio quis gravida iaculis, nisi felis porta nibh, nec varius nulla ex non neque. Ut vulputate nunc eget justo dignissim ornare. Nulla congue nec odio sit amet viverra. Quisque fringilla pharetra magna, id consectetur augue auctor non. Nulla ac orci non nibh commodo tincidunt. Nunc hendrerit dui eu fringilla auctor.
          </p>
        </div>
      </article>
      <article className='product_page__container'>
        <div className='product_page__info'>
          <h1>Caraterísticas</h1>
          <ul>
            <li>Nunc eu ex elementum, volutpat mi ut, iaculis velit.</li>
            <li>Quisque ut felis ultrices, hendrerit magna tempus, bibendum nisl.</li>
            <li>Nulla ac justo vitae leo mattis mollis.</li>
            <li>In eget erat a justo fermentum lobortis a vitae velit.</li>
            <li>Nunc ut leo id turpis pharetra mattis a nec diam.</li>
            <li>Sed ultricies ante sit amet nibh ullamcorper lacinia.</li>
            <li>Quisque euismod ante vitae risus rutrum, id tempor orci sagittis.</li>
            <li>Sed efficitur ipsum a feugiat volutpat.</li>
            <li>Suspendisse eu augue blandit lacus maximus sagittis ut in lectus.</li>
          </ul>
        </div>
        <img src={packageBack} alt='package' className='product_page_img_circular' />
      </article>
      <article className='product_page_info_block'>
        <h1>¿Porqué Utilizar Parches Verar?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ante mi, malesuada id commodo sit amet, dapibus feugiat mauris.
          Curabitur ultricies feugiat fringilla. Nulla posuere vulputate eros sit amet egestas. Donec interdum, augue a facilisis auctor, lorem
          elit fermentum augue, nec feugiat nisi odio quis ante. Vestibulum at laoreet purus. Sed non varius nisi, at dictum sapien. Quisque
          faucibus ac est nec interdum. Integer rhoncus vitae dolor id congue. Cras eleifend varius auctor. Aliquam at leo nec leo vehicula commodo.
          Aliquam quis libero ut enim varius bibendum. Sed ac aliquam orci.
          <br /> <br />
          Cras nec tristique urna. Maecenas nulla lacus, volutpat eget lectus eu, cursus sodales felis. Vestibulum blandit ipsum eget lorem elementum dictum.
          Vivamus eget pellentesque nibh, sit amet interdum diam. Phasellus posuere dapibus ex, id mollis tellus lobortis nec. Vivamus nec eleifend erat.
          Vivamus quis felis euismod velit venenatis vulputate. Donec ut mauris at ipsum imperdiet finibus sed pulvinar lacus. Mauris placerat molestie semper.
        </p>
      </article>

      <div className='product_page__info'>
        <h1>Beneficios</h1>
        <ul>
          <li>Nunc eu ex elementum, volutpat mi ut, iaculis velit.</li>
          <li>Quisque ut felis ultrices, hendrerit magna tempus, bibendum nisl.</li>
          <li>Nulla ac justo vitae leo mattis mollis.</li>
          <li>In eget erat a justo fermentum lobortis a vitae velit.</li>
          <li>Nunc ut leo id turpis pharetra mattis a nec diam.</li>
          <li>Sed ultricies ante sit amet nibh ullamcorper lacinia.</li>
          <li>Quisque euismod ante vitae risus rutrum, id tempor orci sagittis.</li>
          <li>Sed efficitur ipsum a feugiat volutpat.</li>
          <li>Suspendisse eu augue blandit lacus maximus sagittis ut in lectus.</li>
        </ul>
      </div>

      <div className='product_page_promotion'>
        <div className='product_page_promotion_text_div'>
          <h1>Artículos Publicitarios</h1>
          <AiFillGift size={100} />
          <p> Los regalos publicitarios incluyen artículos como gorras, mascarillas, camisetas y artiículos de oficina con los colores y logo de la empresa </p>
        </div>
        <PromotionItems />
      </div>
    </section>
  )
}

export default Product