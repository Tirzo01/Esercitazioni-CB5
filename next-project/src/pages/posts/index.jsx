import { GET } from "@/http/http";
import Link from "next/link";

import styles from "./styles.module.scss";

export default function Posts({ posts }) {
  return (
    <div className={styles.main}>
      <h1>Pagina dei posts</h1>
      <div className={styles.postsContainer}>
        {posts &&
          posts.map((posts) => (
            <>
              <Link href={"posts/" + posts.id}> {posts.title}</Link>
            </>
          ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const data = await GET("posts");
  return {
    props: {
      posts: data.posts,
    },
  };
}
