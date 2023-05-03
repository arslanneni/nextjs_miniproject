import { Inter } from 'next/font/google';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // This useEffect hook will only run client-side, not during server-side rendering
    // You can put any client-side code that needs to access the router here
  }, []);

  return (
    <>
      <div className="main d-flex flex-column align-items-center justify-content-center">
        <Layout title="My First Project">
          <div className="card mb-3 mt-3">
            <div className="card-header">JSON Placeholder API</div>
            <div className="card-body">
              <h5 className="card-title">About API?</h5>
              <p className="card-text">This is an API of users, Click on button below to see each user.</p>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button type="button" onClick={() => router.push('/users')} className="btn btn-dark mt-3">Get Data</button>
          </div>
        </Layout>
      </div>
    </>
  );
}
