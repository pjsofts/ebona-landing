import React from "react";

const YouTubeEmbed = ({
  link,
  width,
  height,
}: {
  link: string;
  width: string;
  height: string;
}) => {
  return (
    <div>
      <iframe
        className="rounded-xl"
        width={width}
        height={height}
        src={link}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
