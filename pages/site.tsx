import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Hero from '../components/Hero';
import { getData } from '../services/utils';
import { DataType } from '../types';

interface SiteProps {
  data: DataType;
}

const App: React.FC<SiteProps> = () => {
  const [siteData, setSiteData] = useState<SiteProps | null>(null);

  const callData = async () => {
    const resp = await getData('federico_crespo');
    setSiteData({ data: resp });
    return resp;
  };

  useEffect(() => {
    callData();
  }, []);

  return (
    <div className="w-full mx-auto">
      <div className="px-4 sm:px-6 py-4 sm:py-6 mb-12 bg-gray-100">
        <div className="flex flex-wrap justify-between">
          <h1 className="basis-4/6 text-2xl font-bold tracking-tight text-gray-900">
            Site
          </h1>
          <Link
            href="/"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Edit this page
          </Link>
        </div>
      </div>
      <div className="px-4 sm:px-6">
        {siteData && <Hero data={siteData?.data} />}
      </div>
    </div>
  );
};

export default App;
