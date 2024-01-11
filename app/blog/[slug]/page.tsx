import { fullBlog } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity"
import Image from "next/image";
import { PortableText} from "@portabletext/react"

async function getData(slug: string) {
  const query = `*[_type=="blog" && slug.current== '${slug}']{
  "currentSlug":slug.current,
    title,
    content,
    titleImage  
}[0]`
  const data = await client.fetch(query);

  return data;
}

export default async function BlogArticle({ params }: { params: { slug: string } }) {
  const data: fullBlog = await getData(params.slug);

  return (
    <div className="mt-8">
      <h1>
        <span className="block text-primary text-center font-semibold tracking-wide uppercase">Prathmesh Vhatkar- Blog</span>
        <span className="mt-4 block text-3xl text-center leading-8 font-bold">{data.title}</span>
      </h1>

      <Image src={urlFor(data.titleImage).url()} alt="blog image"
        width={800} height={800}
        priority
        className="rounded-lg mt-8 border"
      />

      <div className="mt-16 prose prose-green prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
        <PortableText value={data.content}/>
      </div>
    </div>
  )
};