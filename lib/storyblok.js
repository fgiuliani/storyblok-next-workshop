import { useEffect, useState } from "react";
import { storyblokInit, apiPlugin, useStoryblokBridge } from "@storyblok/js";

const { storyblokApi } = storyblokInit({
  accessToken: "6OgwgzWeQMWy0lLug5LQmgtt",
  use: [apiPlugin],
});

export function useStoryblok(originalStory) {
  let [story, setStory] = useState(originalStory);

  useStoryblokBridge(story.id, (newStory) => setStory(newStory), {
    resolveRelations: ["featured-posts.posts", "selected-posts.posts"],
  });

  useEffect(() => {
    setStory(originalStory);
  }, [originalStory]);

  return story;
}

export default storyblokApi;
