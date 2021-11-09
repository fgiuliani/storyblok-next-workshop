import React from "react";
import Layout from "../components/Layout";
import DynamicComponent from "../components/DynamicComponent";

import { useStoryblok } from "../lib/storyblok";

export default function Page404({ preview }) {
  const enableBridge = true; // load the storyblok bridge everywhere
  // const enableBridge = preview; // load only inside preview mode

  const storyLoaded = useStoryblok(null, enableBridge);

  let content = <h1>Not found</h1>;
  if (storyLoaded && storyLoaded.content)
    content = <DynamicComponent blok={storyLoaded.content} />;

  return <Layout>{content}</Layout>;
}

export async function getStaticProps({ preview = false }) {
  return {
    props: {
      preview,
    },
  };
}
