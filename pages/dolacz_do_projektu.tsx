import Image from 'next/image';
import Layout from '../components/Layouts/Layouts';

export default function AboutProject() {
  return (
    <Layout>
      <div>
        <h1>Hello dolacz do projektu</h1>
        <Image alt="apple" src="/animations/apple.svg" width={160} height={160} />
      </div>
    </Layout>
  );
}
