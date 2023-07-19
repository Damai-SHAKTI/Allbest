import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head';
import { marked } from 'marked';
import MyCard from '@/components/AboutMe/MyCard';

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', ''),
        },
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { slug } }: any) {
    const markdownWithMeta = fs.readFileSync(
        path.join('posts', slug + '.md'),
        'utf8'
    )

    const { data: frontmatter, content } = matter(markdownWithMeta)

    return {
        props: {
            frontmatter,
            slug,
            content,
        },
    }
}

export default function PostPage({
    frontmatter: { title, description, keywords, post_date, cover_image, image_alt, bg_color },
    slug,
    content,
}: any) {
    return (
        <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Allbest" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <div className='blog-post-card'>
            <div className='left'>
                <div style={{ width: "100%", height: "auto", textAlign: "center", overflow: "hidden", background: bg_color, borderRadius: "14px" }}>
                    <img width="200px" src={cover_image} style={{ objectFit: "contain" }} alt={image_alt} />
                </div>
                <div>
                    <h1>{title}</h1>
                    <time>{post_date}</time>
                    <div style={{ marginTop: "20px" }} dangerouslySetInnerHTML={{ __html: marked.parse(content) }} />
                </div>
            </div>
            <div className='right'>
                <MyCard />
            </div>
        </div>
        </>
    )
}
