"use client";

// pages/get-job-page.tsx
import React, { useState } from "react";
import axios from "axios";
import queryString from "query-string";
import Link from "next/link";

const GetAllJobPage: React.FC = () => {
  const [jobs, setJobs] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 3,
    totalJobs: 1,
    totalPages: 0,
    more: false,
    nextPage: null,
    previousPage: null,
    lastPage: null,
    firstPage: 1,
    currentPage: 1,
  });

  const fetchJobs = async (page: number) => {
    try {
      const response = await axios.get(
        `http://localhost:4099/api/v1/jobs?page=${page}&limit=${pagination.limit}`
      );
      setJobs(response.data.data);
      setPagination(response.data.pagination);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const handlePagination = (page: number) => {
    fetchJobs(page);
  };

  fetchJobs(pagination.page);

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">All Jobs</h1>
      <div className="grid grid-cols-3 gap-4">
        {jobs.map((job: any) => (
          <div key={job._id}>
            <Link
              href={`/job/${job.id}`}
              key={job._id}
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {job.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {job.description}
              </p>

              <p className="text-2xl text-white">{job._id}</p>

              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Apply
              </button>
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center">
        <button
          disabled={pagination.previousPage === null}
          onClick={() => handlePagination(pagination.previousPage || 0)}
          className="px-4 py-2 mr-2 bg-blue-500 text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          disabled={!pagination.more}
          onClick={() => handlePagination(pagination.nextPage || 0)}
          className="px-4 py-2 bg-blue-500 text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default GetAllJobPage;
