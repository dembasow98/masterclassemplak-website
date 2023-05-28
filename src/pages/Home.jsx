import React, {Suspense, lazy} from 'react'
import { Spinner } from './../components/common';
const Banner = lazy(() => import("./../components/home/sliders/Banner.jsx"));

const Comment = lazy(() => import("./../components/home/sections/Comment.jsx"));
const Consultancy = lazy(() => import("./../components/home/sections/Consultancy.jsx"));
const Recommendations = lazy(() => import("./../components/home/sections/Recommendations.jsx"));
const Testimonials = lazy(() => import("./../components/home/sections/Testimonials.jsx"));

const Filter = lazy(() => import("./../components/common/search/Filter.jsx"));


const Home = () => {

  const testimonalDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec tincidunt luctus, nunc est lacinia nisl, nec ultricies nisl lorem eget nisl."
  return (
    <main className="w-full bg-black">
      <Suspense fallback={<Spinner/>}>
        <Banner />
      </Suspense>
      <div className='px-4 md:px-6 pb-10'>
        <Suspense fallback={<Spinner/>}>
          <Filter />
        </Suspense>
        
        
        <Suspense fallback={<Spinner/>}>
          <Comment />
        </Suspense>
        
        <Suspense fallback={<Spinner/>}>
          <Consultancy />
        </Suspense>
        
        <Suspense fallback={<Spinner/>}>
          <Recommendations />
        </Suspense>
        
        <Suspense fallback={<Spinner/>}>
          <Testimonials description={testimonalDescription} />
        </Suspense>
        
      </div>
  
    </main>
  )
}

export default Home