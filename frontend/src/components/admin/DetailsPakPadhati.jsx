import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { detailsPakPadhati } from '../../Admin-features/PakPadhati/pakPadhatiSlice';
import { ResponsiveTable } from "responsive-table-react";

const DetailsPakPadhati = () => {
    const dispatch = useDispatch();
    const {pakPadhati} = useSelector((state)=>state.AdminPakPadhati)
    console.log(pakPadhati);

    useEffect(() => {
      dispatch(detailsPakPadhati());
    }, [])

    const columns = [
        {
          "id": "Id",
          "text": "Id"
        },
        {
          "id": "surname",
          "text": "Surname"
        }
      ]

      const data = [
        {
          "Id": "Mark",
          "surname": "Garsin"
        },
        {
          "name": "Gabriel",
          "surname": "Betappi"
        },
        {
          "name": "Gustav",
          "surname": "Mahler",
        }
      ]
    
  return (
    <ResponsiveTable columns={columns} data={data} />
  )
}

export default DetailsPakPadhati
