import React from "react";
import { ResponsiveIframe, VideoContainer } from "./style";

export default function YouTubeIframeResponsive({youtubeID}) {
    return (
        <VideoContainer>
            <ResponsiveIframe
                title="Título do Iframe"
                src={`https://www.youtube.com/embed/${youtubeID}?autoplay=0&mute=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypetd-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </VideoContainer>
    )
}