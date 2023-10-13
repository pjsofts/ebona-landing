import React from "react";

const YouTubeEmbed = () => {
  return (
    <div>
      <iframe
        className="rounded-[25px]"
        width="100%"
        height="360"
        src="https://www.youtube.com/embed/yCdqfjEeCpM"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
