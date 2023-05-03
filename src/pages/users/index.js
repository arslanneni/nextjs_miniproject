import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'

export const getStaticProps = async () => {
  try {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await result.json();
    return {
      props: {
        data,
      }
    }
  } catch (error) {
    console.log('Error:', error);
    return {
      props: {
        data: []
      }
    }
  }
}

const index = ({data}) => {
  const router=useRouter();
  return (
    <div style={{height:'80%',overflowY:'scroll'}}>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossOrigin="anonymous" />
      <div>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope='col'>Username</th>

    </tr>
  </thead>
  <tbody>
    {data.map((user) => (
      <tr key={user.id}>
        <td onClick={()=>{
           router.push(`/users/${user.id}`)
        }}>{user.id}</td>
        <td onClick={()=>{
           router.push(`/users/${user.id}`)
        }}>{user.username}</td>
      
      </tr>
    ))}
  </tbody>
</table>
      </div>
     
    </div>
  )
}

export default index
