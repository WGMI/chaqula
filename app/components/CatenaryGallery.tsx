'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface CatenaryGalleryProps {
  images: string[];
}

export default function CatenaryGallery({ images }: CatenaryGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Catenary curve parameters
  const sag = 40; // How much the rope sags (in pixels)
  const numImages = images.length;
  
  // Calculate positions along catenary curve
  // Using inverted parabolic approximation: y = sag * (1 - (offsetFromCenter/center)^2)
  // This makes the middle sag down (higher y = lower on screen)
  const center = width / 2;
  
  const positions = images.map((_, index) => {
    // Distribute images evenly along the width
    const t = (index + 1) / (numImages + 1); // 0 to 1, avoiding edges
    const x = t * width;
    
    // Calculate y position on catenary curve
    // At center: y = sag (maximum sag, lowest on screen)
    // At ends: y = 0 (no sag, highest on screen)
    const offsetFromCenter = x - center;
    const normalizedOffset = offsetFromCenter / center;
    const y = sag * (1 - Math.pow(normalizedOffset, 2));
    
    // Calculate tangent angle at this point
    // For inverted parabola: dy/dx = -2*sag*offsetFromCenter/center^2
    // Angle = arctan(dy/dx)
    const slope = -2 * sag * offsetFromCenter / Math.pow(center, 2);
    const angle = Math.atan(slope) * (180 / Math.PI);
    
    return { x, y, angle };
  });

  // Generate SVG path for catenary curve
  const pathPoints = Array.from({ length: 50 }, (_, i) => {
    const t = i / 49;
    const x = t * width;
    const offsetFromCenter = x - center;
    const normalizedOffset = offsetFromCenter / center;
    const y = 25 + sag * (1 - Math.pow(normalizedOffset, 2));
    return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');

  return (
    <div ref={containerRef} className="relative" style={{ minHeight: '400px' }}>
      {/* SVG Catenary Rope */}
      <svg 
        className="absolute top-0 left-0 w-full h-12 pointer-events-none"
        style={{ zIndex: 5 }}
        viewBox={`0 0 ${width} 50`}
        preserveAspectRatio="none"
      >
        <path
          d={pathPoints}
          stroke="#5C3A21"
          strokeWidth="3"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      
      {/* Left clothespin */}
      <div 
        className="absolute w-8 h-6 bg-[#8B5A3C] rounded-sm"
        style={{
          left: '-16px',
          top: `${25 + sag * (1 - Math.pow((0 - center) / center, 2)) - 12}px`,
          transform: 'rotate(12deg)',
          zIndex: 10
        }}
      ></div>
      
      {/* Right clothespin */}
      <div 
        className="absolute w-8 h-6 bg-[#8B5A3C] rounded-sm"
        style={{
          right: '-16px',
          top: `${25 + sag * (1 - Math.pow((width - center) / center, 2)) - 12}px`,
          transform: 'rotate(-12deg)',
          zIndex: 10
        }}
      ></div>
      
      {/* Hanging Images positioned along catenary */}
      <div className="relative" style={{ paddingTop: '70px' }}>
        {images.map((img, index) => {
          const pos = positions[index];
          
          return (
            <div
              key={index}
              className="absolute"
              style={{
                left: `${(pos.x / width) * 100}%`,
                top: `${pos.y}px`,
                transform: `translateX(-50%)`,
                width: '200px',
                maxWidth: '200px',
                zIndex: 1
              }}
            >
              {/* Clothespin on top */}
              <div
                className="absolute -top-4 left-1/2 w-6 h-4 bg-[#8B5A3C] rounded-sm z-10"
                style={{
                  transform: `translateX(-50%) rotate(${pos.angle}deg)`
                }}
              ></div>
              
              {/* Image rotated perpendicular to curve */}
              <Image
                src={`/images/hanging/${img}`}
                alt={`Gallery image ${index + 1}`}
                width={200}
                height={250}
                className="w-full h-auto rounded-sm shadow-md object-cover border-2 border-[#5C3A21]"
                style={{
                  clipPath: "polygon(2% 0%, 98% 0%, 100% 2%, 100% 98%, 98% 100%, 2% 100%, 0% 98%, 0% 2%)",
                  maxHeight: "250px",
                  transform: `rotate(${pos.angle}deg)`,
                  transformOrigin: 'top center'
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

