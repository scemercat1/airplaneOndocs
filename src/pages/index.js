import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title="AirplaneON Docs"
      description="Self-hosted Discord moderation bot documentation"
    >
      <div style={{ textAlign: 'center', padding: '5rem 2rem' }}>
        <h1>Welcome to AirplaneON Docs!</h1>
        <p>🚀 Self-hosted Discord moderation bot</p>
        <p>📚 Explore commands, setup guides, and self-hosting instructions below.</p>
        <a href="/intro" style={{ fontSize: '1.2rem', color: '#007bff' }}>
          👉 Start reading
        </a>
      </div>
    </Layout>
  );
}
