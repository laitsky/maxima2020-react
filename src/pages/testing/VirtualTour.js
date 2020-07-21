import React, { useEffect } from 'react';
import { Viewer } from 'photo-sphere-viewer';
import testPhoto from '../../assets/360_home_gate.png';

const VirtualTour = () => {
  const sphereElementRef = React.createRef();
  useEffect(() => {
    const sphereInstance = new Viewer({
      container: sphereElementRef.current,
      panorama: testPhoto,
      panoData: {
        fullWidth: 4096,
        fullHeight: 2048,
        croppedWidth: 4096,
        croppedHeight: 2048,
        croppedX: 0,
        croppedY: 0,
      },
      navbar: [
        'autorotate',
        'zoom',
        'fullscreen',
      ],
    });

    // unmount component
    return () => {
      sphereInstance.destroy();
    };
  }, [sphereElementRef]);
  return (
    <div style={{ width: '720px', height: '480px' }}>
      <div ref={sphereElementRef} />
    </div>
  );
};

export default VirtualTour;
