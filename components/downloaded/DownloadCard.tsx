'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Check, Loader2, Music, Video } from 'lucide-react'
import { toast } from 'sonner'
import { VideoFormat } from '@/types'

export function DownloadCard({ format, title }: { format: VideoFormat, title: string }) {
 const [status, setStatus] = useState < 'idle' | 'downloading' | 'done' > ('idle')
 const [progress, setProgress] = useState(0)
 
 const handleDownload = () => {
  setStatus('downloading')
  
  // Simulate Download Progress
  const interval = setInterval(() => {
   setProgress((prev) => {
    if (prev >= 100) {
     clearInterval(interval)
     setStatus('done')
     toast.success('Download complete!', { description: `${title}.${format.format.toLowerCase()}` })
     setTimeout(() => setStatus('idle'), 3000)
     return 100
    }
    return prev + 10
   })
  }, 200)
 }
 
 return (
  <motion.div 
      whileHover={{ y: -2 }}
      className="border border-border rounded-xl p-4 flex items-center justify-between gap-4 bg-card/40 backdrop-blur"
    >
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-lg ${format.type === 'audio' ? 'bg-accent/10 text-accent' : 'bg-primary/10 text-primary'}`}>
          {format.type === 'audio' ? <Music className="h-5 w-5" /> : <Video className="h-5 w-5" />}
        </div>
        <div>
          <p className="font-medium text-sm">{format.resolution} {format.format}</p>
          <p className="text-xs text-muted-foreground">~{format.estimatedSize}</p>
        </div>
      </div>

      <motion.button
        onClick={handleDownload} disabled={status !== 'idle'}
        className={`relative overflow-hidden px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors ${
          status === 'done' ? 'bg-emerald-500 text-white' : 'bg-primary/10 text-primary hover:bg-primary/20'
        }`}
        whileTap={{ scale: 0.95 }}
      >
        {status === 'idle' && (<><Download className="h-4 w-4" /> Download</>)}
        {status === 'downloading' && (
          <div className="absolute inset-0 bg-primary/20" style={{ width: `${progress}%` }} />
        )}
        {status === 'downloading' && <Loader2 className="h-4 w-4 animate-spin z-10" />}
        {status === 'done' && <><Check className="h-4 w-4" /> Done</>}
        
        {status === 'downloading' && (
          <span className="z-10 relative">{progress}%</span>
        )}
      </motion.button>
    </motion.div>
 )
}