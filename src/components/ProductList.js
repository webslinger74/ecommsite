import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  const { filtered_products, grid_view } = useFilterContext();
  if(filtered_products.length <1 ) {
     return <h5 style={{textTransform:'none'}}>sorry no products available</h5> 
  }
  if(grid_view === false) {
    return <ListView products={filtered_products}>Product List</ListView>
  }
  return <GridView products={filtered_products}>Product list</GridView>
}

export default ProductList
