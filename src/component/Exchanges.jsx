import React from 'react';
import { Col, Row, Typography, Collapse, Avatar } from 'antd';
import { useGetCryptoExchangesQuery } from '../Services/cryptoApi';
import millify from 'millify';
import Loader from './Loader';

const { Text } = Typography;
const { Panel } = Collapse;

export default function Exchanges() {
  const { data: exchanges, isFetching } = useGetCryptoExchangesQuery();

  if (isFetching) return <Loader />;

  console.log(exchanges);

  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade</Col>
        <Col span={6}>Number Of Markets</Col>
        <Col span={6}>Price</Col>
      </Row>
      <Row style={{ margin: '4px' }}>
        {exchanges?.data?.coins.map((coin, i) => (
          <Col span={24} style={{ margin: '4px' }} key={i}>
            <Collapse>
              <Panel
                key={coin.uuid}
                showArrow={false}
                header={
                  <Row key={coin.uuid}>
                    <Col span={6}>
                      <Text>
                        <strong>{coin.rank}</strong>
                      </Text>
                      <Avatar className='exchange-image' src={coin.iconUrl} />
                      <Text>
                        <strong>{coin.name}</strong>
                      </Text>
                    </Col>
                    <Col span={6}>${millify(coin['24hVolume'])}</Col>
                    <Col span={6}>{millify(coin.numberOfMarkets)}</Col>
                    <Col span={6}>{millify(coin.price)}</Col>
                  </Row>
                }
              ></Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
}
