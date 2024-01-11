import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { simpleBlogCard } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity"
import Image from "next/image";
import Link from "next/link";


export const revalidate = 30; //Revalidate at most 30s

async function getData() {
  const query = `*[_type=="blog"] | order(_createdAt desc) {
  title,
    smallDescription,
    "currentSlug":slug.current,
    titleImage
  }`

  const data = await client.fetch(query)

  return data;
}


export default async function Home() {
  const data: simpleBlogCard[] = await getData();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mt-5 gap-5">
      {data.map((post, idx) => (
        <Card key={idx} className="border-gray-600">
          <Image src={urlFor(post.titleImage).url()} alt="Post Image" width={500} height={500}
            className="rounded-t-lg h-[200px] object-contain" ></Image>
          <CardContent className="mt-5">
            <h3 className="text-lg line-clamp-2 font-semibold">{post.title}</h3>
            <p className="text-small line-clamp-3 mt-3 text-gray-400">{post.smallDescription}</p>
            <Button asChild className="mt-7 w-full">
              <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}