'use client'
import { Sidebar } from '@/components/layout/Sidebar'

export default function HistoryPage() {
 return (
  <div className="flex max-w-7xl mx-auto px-4 py-12">
      <Sidebar />
      <div className="flex-1 p-6 glass rounded-2xl min-h-[60vh] flex items-center justify-center text-muted-foreground">
        Your download history will appear here.
      </div>
    </div>
 )
}