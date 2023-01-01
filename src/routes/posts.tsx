import { Suspense } from "solid-js";
import { Outlet, Title } from "solid-start";

export default function Posts() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Posts</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
}
