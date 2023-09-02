import { useLocation } from 'react-router-dom';

export default function useLocationParams() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const adminPassword = queryParams.get('adminPassword');

  return {
    adminPassword,
  };
}
