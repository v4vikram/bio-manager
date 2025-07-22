// app/ssr-test/page.js
export const dynamic = 'force-dynamic'; // ensure SSR even in static environments

export async function generateMetadata() {
  return { title: 'SSR Test Page' };
}

export default async function SSRPage() {
  return (
    <div>
      <h1>Server Rendered Time:</h1>
      <p>{new Date().toISOString()}</p>
    </div>
  );
}
