import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../../components/Layout';

export async function getServerSideProps(context) {
    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${context.query.id}`)

    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }

const DetailPage = ({data}) => {    
   
  return (
    <Layout>
 <div>
 <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>    
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{data.id}</th>
      <th scope="row">{data.name}</th>
      <th scope="row">{data.email}</th>
      <th scope="row">{data.phone}</th>

    </tr>
  </tbody>
</table>
    </div>
        </Layout>
   
  )
}

export default DetailPage;