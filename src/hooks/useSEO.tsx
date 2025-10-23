import { useEffect } from "react";

export default function useSEO(title: string, description: string) {
  useEffect(() => {
    document.title = title;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    } else {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      metaDesc.setAttribute("content", description);
      document.head.appendChild(metaDesc);
    }

    // Open Graph
    const ogTags = [
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: "/img/logo.png" },
      { property: "og:type", content: "website" },
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });
  }, [title, description]);
}
