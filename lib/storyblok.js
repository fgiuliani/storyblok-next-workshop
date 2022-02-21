import { useEffect, useState } from "react";
import { storyblokInit, apiPlugin, useStoryblokBridge } from "@storyblok/js";

const { storyblokApi } = storyblokInit({
  accessToken: "AAmqfGqVkzqqQsa4ZGwNAAtt",
  use: [apiPlugin],
});

export function useStoryblok(originalStory) {
  let [story, setStory] = useState(originalStory);

  useStoryblokBridge(story.id, (story) => setStory(story));

  useEffect(() => {
    setStory(originalStory);
  }, [originalStory]);

  return story;
}

export default storyblokApi;
