import { useState, useEffect } from 'react';

export default function useMouse() {
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);

  const update = (event: MouseEvent) => {
    setX(event.pageX)
    setY(event.pageY)
  }

  useEffect(() => {
    window.addEventListener('mousemove', update)
    return () => {
      window.removeEventListener('mousemove', update)
    }
  }, [])

  return { x, y };
}
