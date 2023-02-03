import { GET } from "@/http/http";
import { postouter, useRouter } from "next/router";

import styles from "./styles.module.scss";

export default function ({ post }) {
  const router = useRouter();

  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  console.log("getStaticPath loaded");
  const res = await fetch("https://dummyjson.com/posts");
  const posts = await res.json();
  const paths = posts.posts.map((post) => ({
    params: { postId: post.id + "" },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { postId } = params;
  const data = await GET("posts/" + postId);
  return {
    props: {
      post: data,
    },
  };
}
