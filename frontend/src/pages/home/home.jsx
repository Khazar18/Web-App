import React from 'react'
import { Hero } from './hero/hero'
import { Features } from './features/features'
import { Announcements } from '../../components/announcements/announcements'
import './home.css'

export default function Home() {
  return (
    <div className="home-container">
      <Hero />
      <Features />
      <Announcements />
    </div>
  )
}

