import React from 'react'
import HelloWorld from '@/components/HelloWorld'
import HookViewer from '@/components/HookViewer'
import MockViewer from '@/components/MockViewer'
 
export default function HomePage() {
  return (
    <div
      className='home'
      // 不建议使用行内样式，此处为demo演示
      style={{
        width: 500,
        marginTop: '10vh',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center'
      }}
    >
      <HelloWorld/>
      <HookViewer/>
      <MockViewer/>
    </div>
  )
}
