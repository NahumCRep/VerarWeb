import React from 'react'
import '../../css/products-styles/product.css'
import mockup from '../../assets/mockup'

const PromotionItems = () => {
    return (
        <div className='product_page_grid_container'>
            {
                mockup.map((item) => {
                    return (
                        <button key={item.name} className='product_page_mockup_div'>
                            <img src={item.img} alt={item.name} />
                        </button>
                    )
                })
            }
        </div>
    )
}

export default PromotionItems