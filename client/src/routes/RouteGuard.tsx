import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function RouteGuard(WrappedComponent: any) {
  const Guard = (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.replace('/login');
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  if (WrappedComponent.getServerSideProps) {
    Guard.getServerSideProps = WrappedComponent.getServerSideProps;
  }

  return Guard;
}
