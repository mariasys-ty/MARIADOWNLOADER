import { motion } from 'framer-motion'
import { Link2 } from 'lucide-react'

export function EmptyState() {
 return (
  <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      className="glass rounded-2xl p-12 flex flex-col items-center text-center border-dashed"
    >
      <div className="p-4 rounded-full bg-muted/50 mb-4">
        <Link2 className="h-8 w-8 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-medium">Paste a link to begin</h3>
      <p className="text-sm text-muted-foreground mt-1 max-w-sm">Supported on YouTube, TikTok, Instagram, and more.</p>
    </motion.div>
 )
}

export function ErrorCard({ onRetry }: { onRetry: () => void }) {
 return (
  <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      className="bg-red-500/10 border border-red-500/30 rounded-2xl p-12 flex flex-col items-center text-center"
    >
      <h3 className="text-lg font-medium text-red-500">Invalid URL</h3>
      <p className="text-sm text-muted-foreground mt-1 max-w-sm mb-4">We couldn't process that link. Please try another.</p>
      <button onClick={onRetry} className="px-4 py-2 rounded-lg bg-red-500/20 text-red-500 hover:bg-red-500/30 transition-colors text-sm">
        Try Again
      </button>
    </motion.div>
 )
}