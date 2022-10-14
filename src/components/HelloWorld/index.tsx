import React, { useState } from 'react';
import { Button, Card } from 'antd';
import './style.scss';

function App() {
	const [count, setCount] = useState<number>(0);

	return (
		<div className='hello'>
			<h1 className='title'>Vite + React</h1>
			<Card title='按需引入antd'>
				<Button type='primary' onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</Button>
			</Card>
			<div className="bg-red-500 hover:bg-blue-700">
				Hover me
			</div>
		</div>
	);
}

export default App;
