import React from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import axios from 'axios'
import { itemState } from '../recoil/atom/itemState'
import CardCom from '../components/CardCom'
import { useQuery } from 'react-query'


const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
  grid-gap: 30px;
  justify-content: center;
  padding: initial;
  margin-top: 50px;
`;

interface StateInfo {
  id: string;
  title: string;
  subTitle: string;
  text: string;
}


function App() {
  const [items, setItems] = useRecoilState<StateInfo[]>(itemState)

  const fetchData = async () => {
    const res = await axios.get("/api/data");
    return res.data;
  };

  const { isLoading } = useQuery("item", fetchData, {
    onSuccess: (data) => setItems(data)
    }
  )

  if (isLoading) return <>Loading...</>

  return (
    <>
      {/*<CaroucelCom/>*/}

      <CardContainer>
        {
          items.map((item, index)=>(
            <CardCom item = {item}  key={index}/>
          ))
        }
      </CardContainer>
    </>
  )
}

export default App;