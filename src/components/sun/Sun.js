import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Sun(props) {
      // state
      const [data, setData] = useState('');
      const [loading, setLoading] = useState(false);
  
      // 서버에 요청해서 데이터 받아옴
      // state 값 저장
      const loadData = async () => {
          setLoading(true);
          const response = await axios.get('http://localhost:8080/sun');
          console.log(response.data);
          setData(response.data);
          setLoading(false);
      }
  
      // 렌더링할 때마다 호출 
      // 빈배열 : loadData() 한 번만 호출
      useEffect(() => {
          loadData();
      }, []);
    return (
        <div>
            <h3>sun컨트롤러 / 서버로부터 받아온 값</h3>
            {data}
        </div>
    );
}

export default Sun;