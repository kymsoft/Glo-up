import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import Billboard from '@/components/billboard'
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container'
import React from 'react'


export const revalidate = 0;
const Home = async() => {
    const products = await getProducts({isFeatured: true})
    const billboard = await getBillboard('bcdeee42-d02f-4e25-889e-361d2b6640e5')
  return (
    <Container>
        <div className='space-y-10 pb-10'>
            <Billboard
              data={billboard}
            />
        </div>
        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
            <ProductList title="Featured Products" items={products} />
        </div>
    </Container>
  )
}

export default Home