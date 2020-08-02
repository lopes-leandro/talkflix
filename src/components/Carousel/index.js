import React from 'react';
import PropTypes from 'prop-types';
import { VideoCardGroupContainer, ExtraLink, Title } from './style';
import VideoCard from './VideoCard';
import Slider, { SliderItem } from './Slider';

export default function VideoCardGroup({ ignoreFirstVideo, category }) {
  const categoryTitle = category.title;
  const categoryColor = category.color;
  const categoryExtraLink = category.link_extra;
  const { videos } = category;

  return (
    <VideoCardGroupContainer>
      {
                categoryTitle && (
                <>
                  <Title style={{ backgroundColor: categoryColor || 'red' }}>
                    {categoryTitle}
                  </Title>
                  {
                        categoryExtraLink
                        && (
                        <ExtraLink href={categoryExtraLink.url} target="_blank">
                          {categoryExtraLink.text}
                        </ExtraLink>
                        )
                    }
                </>
                )
            }
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }
          return (
            <SliderItem key={video.id}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

VideoCardGroup.propTypes = {
  category: PropTypes.object.isRequired,
}