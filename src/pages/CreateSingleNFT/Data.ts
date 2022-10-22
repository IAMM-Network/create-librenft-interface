import React from 'react'
import { AudioFileIcon, ImageFileIcon, StarIcon, VideFileIcon, SvgProps } from '../../components/Svg'

export interface MediaOptionsProps {
  icon: React.FC<SvgProps>
  text: string,
  formats: string[]
}

export const mediaOptions: MediaOptionsProps[] = [
  {
    icon: ImageFileIcon,
    text: 'Image',
    formats: ["JPG", "PNG", "GIF", "WEBP"]
  },
  {
    icon: VideFileIcon,
    text: 'Video',
    formats: ["MP4"]
  },
  {
    icon: AudioFileIcon,
    text: 'Audio',
    formats: ["MP3"]
  },
  {
    icon: StarIcon,
    text: 'Custom',
    formats: ["JPG", "PNG", "GIF", "WEBP", "MP4", "MP3"]
  },
]
