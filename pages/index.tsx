import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import dynamic from 'next/dynamic'

import { sortByDate } from '@/utils/index'

import MyCard from '@/components/AboutMe/MyCard'
import Search from '@/components/Search'
import AdsCard from '@/components/AdsCard'

const PostCard = dynamic(() => import('@/components/Post/PostCard'))

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map(filename => {
    const slug = filename.replace(".md", "")

    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf8')

    const { data: frontmatter } = matter(markdownWithMeta)

    return { slug, frontmatter }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}

export let allPosts: any = null;

export default function Home({ posts } : any) {

  allPosts = posts;

  return (
    <>
      <Head>
        <title>Allbest | Home</title>
        <meta name="description" content="allbest provides programming and tech information to help you learn and stay up-to-date with the latest technology." />
        <meta name="keywords" content="allbest" />
        <meta name="author" content="Allbest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main>
        <div className='home-post-card'>
          <div className='left'>
            {
              posts.map((post: any, index: number) => (
                <PostCard key={index} post={post} />
              ))
            }
          </div>
          <div className='right'>
            <MyCard />
            {/* <AdsCard /> */}
          </div>
        </div>
        <Search />
      </main>
    </>
  )
}
