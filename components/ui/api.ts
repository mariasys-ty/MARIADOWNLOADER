import { VideoMetadata } from '@/types';

// Simulated API call for frontend phase
export const analyzeUrl = async (url: string): Promise < VideoMetadata > => {
 return new Promise((resolve, reject) => {
  setTimeout(() => {
   if (!url.startsWith('http')) {
    reject(new Error('Invalid URL'));
    return;
   }
   resolve({
    id: '1',
    title: 'Amazing Sunset Timelapse in 4K - Nature Relaxation',
    creator: 'NatureVibes',
    platform: 'YouTube',
    thumbnailUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    duration: '10:45',
    views: '1.2M',
    uploadDate: '2 weeks ago',
    description: 'Experience the breathtaking beauty of a sunset over the mountains in this 4K timelapse.',
    formats: [
     { id: '1', resolution: '1080p', format: 'MP4', estimatedSize: '45.2 MB', type: 'video' },
     { id: '2', resolution: '720p', format: 'MP4', estimatedSize: '28.1 MB', type: 'video' },
     { id: '3', resolution: '360p', format: 'MP4', estimatedSize: '14.5 MB', type: 'video' },
     { id: '4', resolution: 'Audio', format: 'MP3', estimatedSize: '3.2 MB', type: 'audio' },
    ],
   });
  }, 1500);
 });
};