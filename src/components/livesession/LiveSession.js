import React from "react";
import "./LiveSession.css";
import YoutubeEmbed from "./YoutubeEmbed";

export default function LiveSession() {
  return (
    <div className="Live">
      <h1>Watch some of our live sessions to get started with learning Digital  Marketing</h1>
      <div className="youtube-video">
      <YoutubeEmbed embedId="ydOmxCmdJmw" />
      <YoutubeEmbed embedId="xS68diftULI" />
      </div>
    </div>
  );
}
