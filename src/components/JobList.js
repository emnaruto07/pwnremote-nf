import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { BriefcaseIcon, MapPinIcon, CurrencyDollarIcon, CalendarIcon, BuildingOfficeIcon, TagIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import dummyJobs from '../data/dummyJobs';

function JobListItem({ job, index }) {
  const isHighlighted = job.Highlight;
  const showLogo = job.show_logo;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <div className={`group relative rounded-xl p-6 transition-all duration-300 hover:shadow-lg ${
        isHighlighted ? 'bg-primary-50 ring-1 ring-primary-500/10' : 'bg-white hover:bg-gray-50'
      }`}>
        <div className="flex items-start gap-6">
          {showLogo && (
            <div className="flex-shrink-0">
              <img
                src={job.company_logo}
                alt={`${job.Company_name} logo`}
                className="h-16 w-16 rounded-xl object-cover ring-1 ring-gray-900/10"
              />
            </div>
          )}
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <BuildingOfficeIcon className="h-5 w-5 text-gray-400" />
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600">
                    {job.Company_name}
                  </h3>
                  {isHighlighted && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                      <StarIcon className="h-3.5 w-3.5" />
                      Featured
                    </span>
                  )}
                </div>
                
                <h4 className="mt-1 text-xl font-bold text-gray-900">
                  {job.Position}
                </h4>
              </div>
              
              <Link
                to={`/jobs/${job.id}`}
                className="rounded-full bg-primary-600 p-2 text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                <BriefcaseIcon className="h-5 w-5" />
              </Link>
            </div>
            
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="flex items-center gap-2">
                <CurrencyDollarIcon className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-500">
                  ${job.Min_salary}-${job.max_salary}
                </span>
              </div>
              
              {job.Location && (
                <div className="flex items-center gap-2">
                  <MapPinIcon className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-500">
                    {job.Location}
                  </span>
                </div>
              )}
              
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-500">
                  {new Date(job.date_created).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <TagIcon className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-500">
                  {job.Skills_tag}
                </span>
              </div>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full bg-primary-600 px-4 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Apply Now
              </a>
              <Link
                to={`/jobs/${job.id}`}
                className="inline-flex items-center gap-1 rounded-full bg-gray-50 px-4 py-1.5 text-sm font-medium text-gray-600 ring-1 ring-inset ring-gray-300 hover:bg-gray-100"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function JobFilters() {
  return (
    <div className="bg-white shadow-sm ring-1 ring-gray-900/5 rounded-lg p-6 mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search jobs..."
            className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <select className="rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary-600 sm:text-sm sm:leading-6">
            <option>All Locations</option>
            <option>Remote</option>
            <option>On-site</option>
            <option>Hybrid</option>
          </select>
          
          <select className="rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary-600 sm:text-sm sm:leading-6">
            <option>All Types</option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Contract</option>
          </select>
          
          <select className="rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary-600 sm:text-sm sm:leading-6">
            <option>Experience Level</option>
            <option>Entry Level</option>
            <option>Mid Level</option>
            <option>Senior Level</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default function JobList() {
  const [jobs, setJobs] = useState(null);
  const [highlightedJobs, setHighlightedJobs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulating API call with dummy data
    const fetchJobs = () => {
      try {
        setIsLoading(true);
        const allJobs = dummyJobs;
        
        setHighlightedJobs(allJobs.filter(job => job.Highlight));
        setJobs(allJobs.filter(job => !job.Highlight));
        setError(null);
      } catch (err) {
        setError('Failed to load jobs. Please try again later.');
        console.error('Error loading jobs:', err);
      } finally {
        setIsLoading(false);
      }
    };

    // Simulate network delay
    setTimeout(fetchJobs, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-md bg-red-50 p-4 my-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">{error}</h3>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <JobFilters />
      
      <div className="space-y-6">
        {highlightedJobs?.map((job, index) => (
          <JobListItem key={job.id} job={job} index={index} />
        ))}
        {jobs?.map((job, index) => (
          <JobListItem 
            key={job.id} 
            job={job} 
            index={index + (highlightedJobs?.length || 0)} 
          />
        ))}
        {jobs?.length === 0 && highlightedJobs?.length === 0 && (
          <div className="text-center py-12">
            <h3 className="mt-2 text-sm font-semibold text-gray-900">No jobs found</h3>
            <p className="mt-1 text-sm text-gray-500">Check back later for new opportunities.</p>
          </div>
        )}
      </div>
    </div>
  );
}

// export default JobList;