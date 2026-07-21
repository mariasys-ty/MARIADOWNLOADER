import { motion } from 'framer-motion'
import { Zap, Shield, Smartphone, Music, Sparkles, Infinity as InfinityIcon, EyeOff, FileVideo } from 'lucide-react'

const features = [
 { icon: Zap, title: "Ultra Fast", desc: "Lightning quick metadata fetching and download links." },
 { icon: EyeOff, title: "No Watermarks", desc: "Clean downloads without any intrusive watermarks." },
 { icon: FileVideo, title: "HD Downloads", desc: "Support for 720p, 1080p, and even 4K where available." },
 { icon: Music, title: "Audio Extraction", desc: "Extract high-quality MP3 audio from any video." },
 { icon: Sparkles, title: "Multiple Formats", desc: "MP4, WEBM, MP3, and more supported out of the box." },
 { icon: Smartphone, title: "Mobile Friendly", desc: "Fully responsive design works perfectly on any device." },
 { icon: Shield, title: "Secure Downloads", desc: "No malware, no tracking, just safe downloads." },
 { icon: InfinityIcon, title: "Unlimited Usage", desc: "Download as much as you want, completely free." },
]

export default function Features() {
 return (
  <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-display font-bold">Why choose MARIA?</h2>
        <p className="text-muted-foreground mt-4">A premium experience built for speed and reliability.</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div 
            key={f.title}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ y: -5 }}
            className="glass p-6 rounded-2xl flex flex-col items-start gap-3 cursor-default"
          >
            <div className="p-3 rounded-xl bg-primary/10 text-primary">
              <f.icon className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-lg">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
 )
}