import './App.css';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from './redux/actions/customersActions';

function App() {
  const customers = useSelector((state) => state.customers.value);
  const dispatch = useDispatch();
  const [valid, setValid] = useState(() => "");
  const [country, setCountry] = useState(() => "");
  const [page, setPage] = useState(() => 1);

  useEffect(() => {
    dispatch(getProducts())
  }, []);

  const handleFilterCountry = (e) => {
    setCountry(e);
    dispatch(
      getProducts({
        page,
        country: e,
        valid,
      }),
    );
  };

  const handleFilterValid = (e) => {
    setValid(e);
    dispatch(
      getProducts({
        page,
        country,
        valid: e,
      }),
    );
  };

  const handlePagination = (pageNumber) => {
    setPage(pageNumber);
    dispatch(
      getProducts({
        page: pageNumber,
        country,
        valid,
      }),
    );
  };

  return (
    <div>
      <h1>Phone Numbers</h1>
      <select onChange={e => handleFilterCountry(e.target.value)}>
        <option value="">Select country</option>
        <option value="237">Cameroon</option>
        <option value="251">Ethiopia</option>
        <option value="212">Morocco</option>
        <option value="258">Mozambique</option>
        <option value="256">Uganda</option>
      </select>
      <select onChange={e => handleFilterValid(e.target.value)}>
        <option value="">Valid phone number</option>
        <option value="1">valid</option>
        <option value="0">invalid</option>
      </select>

      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>State</th>
            <th>Country Code</th>
            <th>Phone Number</th>
          </tr>
        </thead> 
        <tbody>
        
          {customers.data?.map(d => (
            <tr key={d.id}>
              <td>{d.country}</td>
              <td>{d.is_valid ? "OK" : "NOK"}</td>
              <td>+{d.country_code}</td>
              <td>{d.phone_number}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={e => handlePagination(page > 1 ? page - 1 : 1)}>&lt; Prev</button>
      <button onClick={e => handlePagination( page + 1)}>Next &gt;</button>
    </div>
  )
}

export default App;
