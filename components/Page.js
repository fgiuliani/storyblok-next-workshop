import React from "react";
import DynamicComponent from "./DynamicComponent";
import { storyblokEditable } from "@storyblok/js";

const Page = ({ blok }) => (
  <main {...storyblokEditable(blok)} key={blok._uid}>
    {blok.body
      ? blok.body.map((blok) => (
          <DynamicComponent blok={blok} key={blok._uid} />
        ))
      : null}
  </main>
);

export default Page;
