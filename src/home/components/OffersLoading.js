import React from 'react';

function OffersLoading(Component) {
  return function OffersLoading({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: 'center', fontSize: '30px' }}>
        Loading offers from CDH...
      </p>
    );
  };
}
export default OffersLoading;