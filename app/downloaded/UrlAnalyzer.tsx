import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function UrlAnalyzer({ onAnalyze, initialValue }: { onAnalyze: (url: string) => void, initialValue ? : string }) {
 const [url, setUrl] = useState(initialValue || '')
 
 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  onAnalyze(url)
 }
 
 return (
  <motion.form 
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 p-2 glass rounded-2xl"
    >
      <div className="relative flex-1">
        <Link2 className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <input 
          type="text" value={url} onChange={(e) => setUrl(e.target.value)} required
          placeholder="Paste a video URL here..." 
          className="w-full pl-12 pr-4 py-4 bg-transparent rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
      </div>
      <Button type="submit" className="bg-primary text-white hover:bg-primary/90 px-8 py-4">
        Analyze <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </motion.form>
 )
}