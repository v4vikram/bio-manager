
import { blogs } from "../../../data/blogs";

export const revalidate = 5; // 60 seconds

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetailPage({ params }) {
    const now = new Date().toLocaleTimeString();
    const param = await params;
  const blog = blogs.find((b) => b.slug === param.slug);

  if (!blog) return <div className="p-6">Blog not found.</div>;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">{blog.title}</h1>
      <p className="mt-4 text-gray-700">{blog.content}</p>
      <p className="mt-4 text-gray-700">{now}</p>
    </main>
  );
}




// export default async function BlogDetailPage({ params }) {
//   // const { slug } = await params;
//   // console.log("params", slug);
//   const blog = blogs.find((b) => b.slug === params.slug);

//   if (!blog) return <div className="p-6">❌ Blog not found.</div>;

//   return (
//     <main className="p-6">
//       <h1 className="text-2xl font-bold">{blog.title}</h1>
//       <p className="mt-4 text-gray-700">{blog.content}</p>
//     </main>
//   );
// }

