'use client'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { analyzeUrl } from '@/lib/api'
import { VideoMetadata } from '@/types'
import { UrlAnalyzer } from '@/components/downloader/UrlAnalyzer'
import { PreviewCard } from '@/components/downloader/PreviewCard'
import { EmptyState } from '@/components/downloader/EmptyState'
import { ErrorCard } from '@/components/downloader/ErrorCard'
import { Skeleton } from '@/components/ui/Skeleton'

export default function DownloaderPage() {
 const searchParams = useSearchParams()
 const initialUrl = searchParams.get('url') || ''
 
 const [status, setStatus] = useState < 'empty' | 'loading' | 'success' | 'error' > ('empty')
 const [data, setData] = useState < VideoMetadata | null > (null)
 const [currentUrl, setCurrentUrl] = useState('')
 
 const handleAnalyze = async (url: string) => {
  setCurrentUrl(url)
  setStatus('loading')
  try {
   const metadata = await analyzeUrl(url)
   setData(metadata)
   setStatus('success')
  } catch (err) {
   setStatus('error')
  }
 }
 
 useEffect(() => {
  if (initialUrl) handleAnalyze(initialUrl)
 }, [initialUrl])
 
 return (
  <div className="min-h-screen py-12 px-4 max-w-4xl mx-auto">
      <div className="mb-10">
        <h1 className="text-4xl font-display font-bold text-center mb-2">Video Downloader</h1>
        <p className="text-center text-muted-foreground">Paste a link to begin.</p>
      </div>

      <UrlAnalyzer onAnalyze={handleAnalyze} initialValue={initialUrl} />

      <div className="mt-10">
        {status === 'empty' && <EmptyState />}
        {status === 'loading' && (
          <div className="space-y-8">
            <Skeleton className="w-full h-[300px] rounded-2xl" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Skeleton className="w-full h-24 rounded-2xl" />
              <Skeleton className="w-full h-24 rounded-2xl" />
            </div>
          </div>
        )}
        {status === 'error' && <ErrorCard onRetry={() => setStatus('empty')} />}
        {status === 'success' && data && <PreviewCard data={data} />}
      </div>
    </div>
 )
}