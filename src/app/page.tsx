import Component from '@/components/component'
import Image from 'next/image'

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: 'white', // 白色の背景
    }}>
      <Component />
    </div>
  )
}



