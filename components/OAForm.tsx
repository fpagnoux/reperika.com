import { useEffect } from "react";

type Props = {
  url: string;
};

export function OAForm({ url }: Props) {
  useEffect(loadScript, []);
  return (
    <div id="oa-container">
      <div className="oa-page-embed" data-page-url={url}></div>
    </div>
  );
}

function loadScript() {
  try {
    const container = document.getElementById("oa-container");
    const script = document.createElement("script");
    // script.setAttribute("crossorigin", '"anonymous"');
    script.src = "https://assets.targetedaction.net/embed.js";
    container.appendChild(script);
  } catch (e) {
    console.error(e);
    console.error("Failed to load the OA form");
  }
}
