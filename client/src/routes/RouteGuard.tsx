import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function RouteGuard(WrappedComponent: any) {
  const Guard = (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const token = Cookies.get('token');
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
