'use client'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

export default function SettingsPage() {
 return (
  <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-display font-bold mb-8">Settings</h1>
      <div className="glass p-6 rounded-2xl space-y-6">
        <div className="flex justify-between items-center">
          <div><h2 className="font-medium">Appearance</h2><p className="text-sm text-muted-foreground">Toggle dark or light mode.</p></div>
          <ThemeToggle />
        </div>
        {/* Add Auto Download, Language toggles here */}
      </div>
    </div>
 )
}