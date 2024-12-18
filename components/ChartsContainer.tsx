'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { useQuery } from '@tanstack/react-query';
import { getChartsDataAction } from '@/utils/actions';

const ChartsContainer = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ['charts'],
    queryFn: () => getChartsDataAction(),
  });
  // console.log('Loading state:', isPending);
  // console.log('Error state:', error);
  // console.log('Data:', data);

  if (isPending) return <h2 className='text-xl font-medium'>Please wait...</h2>;
  if (error) return <h2 className='text-xl font-medium'>Error loading data.</h2>;
  if (!data || data.length < 1) return null;
  // console.log('Chart data for rendering:', data);
  return (
    <section className="mt-16">
      <h1 className="text-4xl font-semibold text-center">
        Monthly Applications
      </h1>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 50 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis allowDecimals={false} />
          <Tooltip
            wrapperStyle={{
              color:'#000',
              border: '1px solid #000',
              borderRadius: 3,
            }}
          />
          <Bar dataKey="count" fill="#facc15" barSize={75} />
        </BarChart>
      </ResponsiveContainer>
    </section>
  )
}

export default ChartsContainer