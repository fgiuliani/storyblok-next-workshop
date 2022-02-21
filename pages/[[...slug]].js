import React from "react";
import Layout from "../components/Layout";
import DynamicComponent from "../components/DynamicComponent";

import storyblokApi, { useStoryblok } from "../lib/storyblok";

export default function Page({ story }) {
  const newStory = useStoryblok(story);

  return (
    <Layout>
      <DynamicComponent blok={newStory.content} />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  let slug = params.slug ? params.slug.join("/") : "home";

  let sbParams = {
    version: "draft",
    resolve_relations: ["featured-posts.posts", "selected-posts.posts"],
  };

  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
    },
  };
}

export async function getStaticPaths() {
  let { data } = await storyblokApi.get("cdn/links/");

  let paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder) {
      return;
    }

    // get array for slug because of catch all
    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split("/");

    if (slug === "home") {
      splittedSlug = false;
    }

    paths.push({ params: { slug: splittedSlug } });
  });

  return {
    paths: paths,
    fallback: false,
  };
}
