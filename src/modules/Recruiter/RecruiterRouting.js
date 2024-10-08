import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  Recruiter,
  BookmarkedFreelancer,
  AddBookmarkFreelancer,
  FindBookmarkFreelancerById,
  ListBookmarks,
  ListFreelancers,
  Job,
  AddJob,
  FindJobById,
  FindJobBySkill,
  ListAllJobs,
  AwardJob,
} from './RecruiterModule'; // Adjust import paths if necessary

const RecruiterRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Recruiter />} />
      <Route path="bookmarkedFreelancers" element={<BookmarkedFreelancer />} />
      <Route path="addBookmark/:id" element={<AddBookmarkFreelancer />} />
      <Route path="find/:id" element={<FindBookmarkFreelancerById />} />
      <Route path="listBookmarks" element={<ListBookmarks />} />
      <Route path="listFreelancers" element={<ListFreelancers />} />
      <Route path="job" element={<Job />} />
      <Route path="addJob" element={<AddJob />} />
      <Route path="findJob/:id" element={<FindJobById />} />
      <Route path="findJobBySkill" element={<FindJobBySkill />} />
      <Route path="listJobs" element={<ListAllJobs />} />
      <Route path="awardJob/:id" element={<AwardJob />} />
    </Routes>
  );
};

export default RecruiterRouting;
