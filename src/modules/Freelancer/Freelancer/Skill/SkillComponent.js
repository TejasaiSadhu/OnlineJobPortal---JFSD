// src/Skill/SkillComponent.js
import React, { useEffect } from 'react';


const SkillComponent = () => {
  useEffect(() => {
    // You can add initialization code here if needed
    console.log('SkillComponent has been rendered');
  }, []);

  return (
    <div>
      <p>skill works!</p>
    </div>
  );
};

export default SkillComponent;
