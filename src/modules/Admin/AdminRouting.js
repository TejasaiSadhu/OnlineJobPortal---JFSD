import React from 'react';
import { Route, Routes} from 'react-router-dom';
import { Admin, Skills, Recruiters, Freelancers, AddSkill } from './AdminModule'; // Adjust path as needed

const AdminRouting = () => {
  return (
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/recruiters" element={<Recruiters />} />
        <Route path="/freelancers" element={<Freelancers />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/skills/add" element={<AddSkill />} />
      </Routes>
  );
};

export default AdminRouting;
