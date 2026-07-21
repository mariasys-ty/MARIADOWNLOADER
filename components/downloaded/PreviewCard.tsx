import { motion } from 'framer-motion'
import { VideoMetadata } from '@/types'
import { DownloadCard } from './DownloadCard'
import { Calendar, Eye, Clock } from 'lucide-react'

export function PreviewCard({ data }: { data: VideoMetadata }) {
 return (
  <motion.div 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      className="glass rounded-2xl overflow-hidden"
    >
      <div className="relative aspect-video bg-muted">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={data.thumbnailUrl} alt={data.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <span className="inline-block px-3 py-1 bg-primary/80 text-xs rounded-full mb-2 backdrop-blur">{data.platform}</span>
          <h2 className="text-xl font-bold leading-tight">{data.title}</h2>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{data.creator}</span>
          <div className="flex items-center gap-1.5"><Eye className="h-4 w-4" /> {data.views} views</div>
          <div className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {data.uploadDate}</div>
          <div className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {data.duration}</div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Available Formats</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.formats.map((format) => (
              <DownloadCard key={format.id} format={format} title={data.title} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
 )
}