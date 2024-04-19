'use client'
 
export default function myImageLoader({ src, width, quality }) {
  return `https://etxelectronics.com/${src}?w=${width}&q=${quality || 75}`
}