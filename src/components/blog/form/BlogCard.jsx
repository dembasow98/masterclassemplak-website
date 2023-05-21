import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({id,
    title,
    description,
    banner,
    createdAt,
    updatedAt,
    author,
    avatar,
    content1,
    content2,
    gallery,
    tags}) => {
    

    //Get all the blog details and store them in a variable
    const blog = {
        id,
        title,
        description,
        banner,
        createdAt,
        updatedAt,
        author,
        avatar,
        content1,
        content2,
        gallery,
        tags
    };

    
    //image(image title) click handler
    const slugify = (string) => {
        return string
            .toString()
            .toLowerCase()
            .replace(/\s+/g, '-') // Replace spaces with -
            .replace(/[^\w-]+/g, '') // Remove all non-word chars except -
            .replace(/--+/g, '-') // Replace multiple - with single -
            .replace(/^-+/, '') // Trim - from start of text
            .replace(/-+$/, ''); // Trim - from end of text
    };



    return (
       
        <div  className='flex flex-col  content-center justify-center sm:flex-row  md:flex-col lg:flex-row rounded-lg border border-gray-200  dark:bg-gray-800 dark:border-gray-700'>
            <div className="flex w-full">
                <Link 
                    to= {`/blogs/${slugify(title)}`}  
                    state = {blog}
                >
                <img className="w-full rounded-none" src = {banner} alt="Jese Leos avatar" />
                </Link>
            </div>
            <article className="flex flex-col p-6">
                <div className="flex justify-between items-center mb-5 text-gray-500">
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                        <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                        Tutorial
                    </span>
                    
                    <div className="flex flex-col justify-start ">
                    <p className="text-sm md:font-bold text-gray-900 dark:text-gray-100"><span className="text-green-700">Created: </span>{createdAt}</p>
                    {
                        createdAt !== updatedAt && <p className="text-sm md:font-bold text-gray-900 dark:text-gray-100"><span className="text-green-700">Updated: </span>{updatedAt}</p>
                    }
                    </div>
                </div>
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <Link
                        to= {`/blogs/${slugify(title)}`}  
                        state = {blog}
                    >
                        {title}
                    </Link>
                </h2>
                <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                    {description}
                </p>
                <div className="flex  justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <img className="w-7 h-7 rounded-full" src={avatar} alt={author} />
                        <span className="font-medium dark:text-white">
                            {author}
                        </span>
                    </div>
                    <Link
                        to= {`/blogs/${slugify(title)}`}  
                        state = {blog}
                        className="inline-flex items-center dark:text-green-600 font-medium text-primary-600 dark:text-primary-500 hover:underline"
                        >
                            Read more
                        <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                </div>
            </article> 
        </div>
  )
}

export default BlogCard