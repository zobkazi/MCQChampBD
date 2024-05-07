// pages/job/[id].tsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

interface Job {
  _id: string;
  title: string;
  description: string;
  // Add other properties as needed
}

const JobDetailsPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Add loading state

  const fetchJob = async () => {
    try {
      if (!id) return; // Ensure id exists before making the request
      const response = await axios.get(
        `http://localhost:4099/api/v1/job/${id}`
      );
      setJob(response.data.data);
      setLoading(false); // Set loading to false after fetching job details
    } catch (error) {
      console.error("Error fetching job:", error);
      setLoading(false); // Set loading to false on error
    }
  };

  fetchJob();

  if (loading) {
    return <div>Loading...</div>; // Render loading indicator
  }

  if (!job) {
    return <div>Job not found</div>; // Render error message if job is not found
  }

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
      <p>{job.description}</p>
    </div>
  );
};

export default JobDetailsPage;
