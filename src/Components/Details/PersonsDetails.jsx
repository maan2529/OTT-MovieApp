import React, { useEffect } from 'react'
import instance from '../../utils/axios';
import { useParams } from 'react-router-dom';

const PersonsDetails = () => {
  const { id } = useParams();
  const abc = async () => {
    try {
      const detail = await instance.get(`/persons/${id}/name`);
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    abc()
  }, [])

  return (
    <div>PersonsDetails</div>
  )
}

export default PersonsDetails