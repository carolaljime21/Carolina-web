import React from 'react';

type TechName = 'react' | 'next' | 'expo' | 'firebase' | string;

export default function TechIcon({ name }: { name: TechName }) {
  // Retorna el SVG según el nombre
  const renderIcon = () => {
    switch (name.toLowerCase()) {
      case 'react':
        return (
          <svg viewBox="-11.5 -10.23174 23 20.46348" width="24" height="24" fill="#61DAFB">
            <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
            <g stroke="#61DAFB" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2"/>
              <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
              <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
            </g>
          </svg>
        );
      case 'next':
        return (
          <svg viewBox="0 0 180 180" width="24" height="24" fill="white">
            <path d="M90 0C40.2944 0 0 40.2944 0 90C0 139.706 40.2944 180 90 180C139.706 180 180 139.706 180 90C180 40.2944 139.706 0 90 0ZM74.8878 123.511L60.0194 123.511L60.0194 56.4891L73.1931 56.4891L107.039 105.823L107.039 56.4891L119.972 56.4891L119.972 123.511L108.307 123.511L74.8878 74.8488L74.8878 123.511Z" />
          </svg>
        );
      case 'expo':
        return (
           <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
            <path d="M12.0001 2.50059C12.5188 2.50059 13.0031 2.76639 13.2504 3.19522L21.7259 17.8767H8.09459L17.7779 17.8767L12.0001 7.82487L8.79155 13.3758H4.66427L10.7499 3.19522C10.9972 2.76639 11.4815 2.50059 12.0001 2.50059ZM19.6468 21.4988H4.35338L2.27429 17.8767H10.1506H6.18318L8.27131 14.1258L10.985 9.42398C10.9933 9.40989 11.0016 9.39581 11.0099 9.38173L13.7548 14.1258H10.0573H13.8821H18.784L15.3082 14.1258L13.2084 10.4632L17.4816 17.8767L19.6468 21.4988Z" />
          </svg>
        );
      case 'firebase':
        return (
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path fill="#FFCA28" d="M11.603 20.402L20.15 11.855l1.018 6.27-9.565 5.372z"/>
            <path fill="#FFA000" d="M2.833 18.125l1.017-6.27 8.548 8.547z"/>
            <path fill="#F57C00" d="M11.393 2.155L3.85 11.855l7.543-9.7z"/>
            <path fill="#FFF59D" d="M12.4 2.155L3.85 11.855 20.15 11.855z"/>
          </svg>
        );
      default:
        // Letra inicial como fallback
        return <span style={{ color: 'white', fontWeight: 'bold' }}>{name[0].toUpperCase()}</span>;
    }
  };

  return (
    <div style={{
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: '#212121',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }}>
      {renderIcon()}
    </div>
  );
}
