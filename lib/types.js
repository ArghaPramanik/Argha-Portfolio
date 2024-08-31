import { links } from "./data";

// In JavaScript, you just work with the data directly without type annotations.
// If you need to get the section names from `links`, you can do it like this:

export const sectionNames = links.map(link => link.name);
