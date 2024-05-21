"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

interface HeadersData {
  mail: string;
  [key: string]: any;
}

export default function Home() {
  const [headers, setHeaders] = useState<HeadersData | null>(null);
  const router = useRouter();

  async function fetchHeaders() {
    try {
      const response = await fetch('/api/header');
      if (response.ok) {
        const data: { headers: HeadersData } = await response.json();
        setHeaders(data.headers);
        redirectUser(data.headers.mail);
      } else {
        console.error('Failed to fetch headers:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching headers:', error);
    }
  }

  function redirectUser(email: string) {
    if (email) {
      if (email.startsWith('wiw')) {
        window.location.href = 'https://databrix.org/student';
      } else {
        window.location.href = 'https://databrix.org/lecturer';
      }
    } else {
      console.error('Email address not found in headers');
    }
  }

  useEffect(() => {
    fetchHeaders();
  }, []);

  return (
    <div>
      <h1>Welcome to Data Science Lab</h1>
      <a href="https://1985609f-7839-4819-8840-2d38548e4ea5.ma.bw-cloud-instance.org/jupyterhub/user/shared_space1/lab">
        <button>Login shared space</button>
      </a>
      <a href="https://1985609f-7839-4819-8840-2d38548e4ea5.ma.bw-cloud-instance.org/jupyterhub">
        <button>Login private space</button>
      </a>
      <h1>HTTP Headers</h1>
      <button onClick={fetchHeaders}>Fetch Headers</button>
      {headers && (
        <pre>{JSON.stringify(headers, null, 2)}</pre>
      )}
    </div>
  );
}
