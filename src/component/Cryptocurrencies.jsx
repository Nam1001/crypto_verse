import React, { useEffect, useState } from 'react';
import { useGetCryptoQuery } from '../Services/cryptoApi';
import { Card, Row, Col,Input } from 'antd';
import { Link } from 'react-router-dom';
import millify from 'millify';
import Loader from './Loader';

export default function Cryptocurrencies({ simplified }) {
  const count = simplified ? 10 : 300;
  const { data, isFetching } = useGetCryptoQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const filterData =data?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );
    setCryptos(filterData);
  }, [search,data]);

  if (isFetching) return <Loader/>;

  return (
    <>
      {!simplified? <Input type="text" className='search-crypto' placeholder="Search" onChange={(e) => setSearch(e.target.value)} />:""}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}.${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} alt="" />}
                hoverable
              >
                <p>Price : {millify(currency.price)==0 ?parseFloat((Number(currency.price)).toFixed(8)):millify(currency.price)} USD</p>
                <p>Market Cap : {millify(currency.marketCap)}</p>
                <p>Daily Change : {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
}
