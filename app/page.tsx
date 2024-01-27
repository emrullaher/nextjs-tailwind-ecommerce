import { store } from '@/lib/store'
import { Metadata } from 'next'
import Link from 'next/link'

import { Banner } from '@/lib/components/product/banner'
import { Features } from '@/lib/components/shared/features'
import { Card as CategoriesCard } from '@/lib/components/categories/card'
import { Slider as ProductSlider } from '@/lib/components/product/slider'
import { Partners } from '@/lib/components/shared/partners'
import { MobileApps } from '@/lib/components/shared/mobile-apps'

export const metadata: Metadata = {
  title: "Best Online Shopping Store | Free Shipping | 100% Refund",
  description: "Shop online for Electronics, Fashion, Home & Kitchen, Beauty & Grooming, Health, Toys, Baby, Books, Sports, etc. on desertcart. ✓Secure Shopping Platform ✓70M+ Products ✓FREE Delivery ✓FREE Returns",
}

export default async function Home() {

  const { categories } = store.getState().categories;
  const { products } = store.getState().products;

  return (
    <>
      <Banner />

      <Features />

      {products && products.length && (
        <section>
          <div className='mx-auto px-4 md:p-16'>
            <header>
              <div className='mx-auto max-w-3xl text-center md:mb-12'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl'>
                  Featured Products
                </h2>
              </div>
            </header>

            <ProductSlider products={products} />

            <div className='mt-16 text-center'>
              <Link
                className='rounded-md bg-blue-950 px-10 py-2.5 text-lg font-medium text-white transition'
                href={`/products`}
              >
                Show All
              </Link>
            </div>
          </div>
        </section>
      )}


      {categories && categories.length && (<div className="container mx-auto py-16">
        <h2 className="mb-6 text-2xl font-medium uppercase text-gray-800 dark:text-white">
          Shop by category
        </h2>
        <CategoriesCard categories={categories} />
      </div>)}

      <section className='py-10'>
        <Partners />
      </section>

      <MobileApps />

    </>
  )
}
