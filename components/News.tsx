import NewsCard from './NewsCard'
import Button from './Button'
import { newsData } from '@/constants'

const News = () => {
  return (
    <section className="py-8 px-4 lg:px-12 space-y-8">
      <p>NEWS & UPDATES</p>
      <div className='flex justify-between items-end'>
        <h1 className='text-[40px] lg:text-[60px] max-w-[500px] leading-[3rem] lg:leading-[4rem]'>Discover Our Latest Insights.</h1>
        <Button styles='bg-white text-[#166636]' text='View all updates' />
      </div>
      <div className='py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
      {newsData.slice(0,4).map((news) => (
          <NewsCard 
            id={news.id}
            imageSrc={news.imageSrc}
            title={news.title}
            description={news.description}
            category={news.category}
          />
        ))}
      </div>
    </section>
  )
}

export default News