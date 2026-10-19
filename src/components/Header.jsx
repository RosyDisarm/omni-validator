import React from 'react';

export default function Header() {
  return (
    <header style={{ padding: '16px 24px', borderBottom: '1px solid #334155', display: 'flex', justifyContent: 'space-between' }}>
      <h2>Omni Validator</h2>
      <span>Developer: @RosyDisarm</span>
    </header>
  );
}