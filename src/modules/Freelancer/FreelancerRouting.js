import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  Freelancer,
  BookmarkJob,
  CreateBookmark,
  FindJobById,
  ListBookmarkedJobs,
  ListJobs,
  JobApplication,
  SkillExperience,
  SkillComponent
} from './FreelancerModule';

const FreelancerRouting = () => (
    <Routes>
      <Route path="/" element={<Freelancer />} />
      <Route path="/bmark/job/listJobs" element={<ListJobs />} />
      <Route path="/bmark/job" element={<BookmarkJob />} />
      <Route path="/bmark/job/find/:id" element={<FindJobById />} />
      <Route path="/bmark/job/list" element={<ListBookmarkedJobs />} />
      <Route path="/bmark/job/add" element={<CreateBookmark />} />
      <Route path="/bmark/job/apply/:id" element={<JobApplication />} />
      <Route path="/skills" element={<SkillExperience />} />
      <Route path="/skill" element={<SkillComponent />} />
    </Routes>
);

export default FreelancerRouting;
