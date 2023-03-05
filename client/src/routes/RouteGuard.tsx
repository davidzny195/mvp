import { getCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function RouteGuard(WrappedComponent: any) {
  const Guard = (props: any) => {
    const router = useRouter();
    const token = getCookie('token');

    useEffect(() => {
      if (!token) {
        router.replace('/');
      }

      // Need to implement function to validate token
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  if (WrappedComponent.getServerSideProps) {
    Guard.getServerSideProps = WrappedComponent.getServerSideProps;
  }

  return Guard;
}
