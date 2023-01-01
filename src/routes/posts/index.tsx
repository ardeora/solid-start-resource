import { createResource, For, Suspense } from "solid-js";
import { Title, useRouteData } from "solid-start";

interface PostData {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export function routeData() {
  const [posts] = createResource(
    async () => {
      await new Promise((r) => setTimeout(r, 3000));
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      return (await res.json()) as PostData[];
    },
    {
      deferStream: true,
    }
  );

  return {
    posts,
  };
}

export default function PostsLeaf() {
  const { posts } = useRouteData<typeof routeData>();
  console.log("PostsLeaf", posts());
  return (
    <main>
      <Title>Bloop</Title>
      <For each={posts()}>
        {(post) => (
          <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        )}
      </For>
    </main>
  );
}
