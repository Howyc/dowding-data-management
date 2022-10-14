import React, { useEffect, useState } from 'react';
import { Card, Tag } from 'antd';

export default function Mouse() {
  const [list, setList] = useState<
    { id: number; name: string; type: string }[]
  >([]);

  useEffect(() => {
    fetch('/api/getList?page=1')
      .then((res) => res.json())
      .then((res) => {
        const { code, data } = res;
        code === 0 && setList(data);
      });
  }, []);
  return (
    <Card title='支持数据mock'>
      {list?.map((item) => {
        return (
          <Tag key={item.id} color={item.type}>
            {item.name}
          </Tag>
        );
      })}
    </Card>
  );
}
