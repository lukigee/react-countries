import React from 'react';
import './style.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout, PageContent } from './components';
import { Page404, Countries, CountryDetails } from './pages';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to="countries" replace={true} />} />
        <Route
          path="countries/*"
          element={
            <Routes>
              <Route
                index
                element={
                  <PageContent
                    render={(data) => (
                      <Countries
                        data={data.map(
                          ({ region, flags, cca2, name: { common } }) => ({
                            region,
                            flagUrl: flags?.png,
                            cca2,
                            name: common,
                          })
                        )}
                      />
                    )}
                  />
                }
              />
              <Route
                path=":name"
                element={
                  <PageContent
                    render={(data) => <CountryDetails data={data} />}
                  />
                }
              />
            </Routes>
          }
        />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}
