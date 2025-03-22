//components
import Layout from '@/components/features/layout/layout';
import InfoTable from '../components/features/dashboard/info_table';

//react-query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const Home = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <InfoTable />
        </QueryClientProvider>
    );
}
Home.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;
export default Home;