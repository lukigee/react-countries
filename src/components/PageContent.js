import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../api/useFetch';
import { Loading } from './Loading';
import { Error } from './Error';

const API_BASE_URL = 'https://restcountries.com/v3.1';

export const PageContent = (props) => {
  const { name } = useParams();
  const [loading, error, data] = useFetch(
    name ? `${API_BASE_URL}/name/${name}` : `${API_BASE_URL}/all`
  );

  if (loading || !data) {
    return <Loading />;
  }

  if (error || data?.message) {
    return <Error error={error || data.message} />;
  }

  return props.render(data);
};
