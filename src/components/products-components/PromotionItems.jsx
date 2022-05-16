import React from 'react'
import '../../css/products-styles/promotionitems.css'
import mockup from '../../assets/mockup'

const PromotionItems = () => {
    return (
        <div className='product_page_grid_container'>
            {
                mockup.map((item) => {
                    return (
                        <div key={item.name} className='product_page_mockup_div'>
                            <img src={item.img} alt={item.name} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PromotionItems