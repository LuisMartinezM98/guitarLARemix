import {useLoaderData} from '@remix-run/react'
import {getPosts} from '~/models/post.server'
import ListadoPosts from '~/components/listado-posts'


export function meta(){
  return ([
    {title: 'GuitarLA - Blog'},
    {description: 'Guitar-LA main Blog'}
  ])
}


export async function loader(){
  const posts = await getPosts()
  return posts.data
}

function Blog() {
  const posts = useLoaderData()
  return (
      <ListadoPosts
      posts={posts}
      />
  )
}

export default Blog