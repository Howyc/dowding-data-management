import React from 'react'
import { Card } from 'antd'
import useMouse from '@/hooks/useMouse'

export default function HookViewer() {
  const { x, y } = useMouse()
  return (
    // 不建议使用行内样式，此处为demo演示
    <Card title="自定义hook" style={{ marginBottom: 20 }}>
      <div>useMouse: 鼠标当前位置 {x}, {y}</div>
    </Card>
  )
}