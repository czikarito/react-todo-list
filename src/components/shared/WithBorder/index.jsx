import React from 'react';

export default function(Comp) {
  return function() {
    return (
      <div className='border-red'>
        <Comp />
      </div>
    );
  };
}
