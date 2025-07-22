// app/page.js

import Link from "next/link";
import { blogs } from "../data/blogs";

export default function HomePage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">My Blog</h1>
      <ul className="space-y-4">
        {blogs.map((blog) => (
          <li key={blog.slug}>
            <Link href={`/blog/${blog.slug}`} className="text-blue-600 underline">
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
