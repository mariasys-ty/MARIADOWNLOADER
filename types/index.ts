export interface VideoFormat {
 id: string;
 resolution: string;
 format: string;
 estimatedSize: string;
 type: 'video' | 'audio';
}

export interface VideoMetadata {
 id: string;
 title: string;
 creator: string;
 platform: string;
 thumbnailUrl: string;
 duration: string;
 views: string;
 uploadDate: string;
 description: string;
 formats: VideoFormat[];
}

export interface HistoryItem {
 id: string;
 title: string;
 platform: string;
 thumbnailUrl: string;
 date: string;
}
