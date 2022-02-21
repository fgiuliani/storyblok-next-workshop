import React from "react";
import DynamicComponent from "./DynamicComponent";
import { storyblokEditable } from "@storyblok/js";

const Grid = ({ blok }) => (
  <ul
    className="flex py-8 mb-6 container mx-auto"
    {...storyblokEditable(blok)}
    key={blok._uid}
  >
    {blok.columns.map((nestedBlok) => (
      <li key={nestedBlok._uid} className="flex-auto px-6">
        <DynamicComponent blok={nestedBlok} />
      </li>
    ))}
  </ul>
);

export default Grid;
