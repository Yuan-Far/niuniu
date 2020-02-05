import React from 'react';
import { cleanObj } from '../../../utils/index';
import { FILTER_KEYS, CLEAN_DATA, KEYS_MAP } from '../../constants/index'

import './style.scss';

const prefixCls = 'funnel-generate';

const FunnelGenerate = ({
  data
}) => {
  let dataSource = {};
  const midData = data.filter(item => FILTER_KEYS.includes(item.date)).map(item => cleanObj(item, CLEAN_DATA));
  midData.forEach(item => {
    dataSource[KEYS_MAP[item.date]] = item
  })
  const pastWeek = dataSource['9'];
  const currentWeek = dataSource['18'];
  const change = dataSource['19'];
  const changePercent = dataSource['20'];
  return <div className={prefixCls}>
    {
      dataSource && dataSource['9'] && <React.Fragment><div className={`${prefixCls}-header`}>
        <div className={`${prefixCls}-mid`}>
          <div className={`${prefixCls}-mid-title`}>{`到达商品页 ${currentWeek.arriveGoods}`}</div>
          <div>
            <p>{`上周${pastWeek.arriveGoods}`}</p>
            <span
              data-show={parseInt(changePercent.arriveGoods, 10) > 0 ? '1' : '0'}
              className={`${prefixCls}-mid-span`}
            >{changePercent.arriveGoods}</span>
          </div>
        </div>
        <div className={`${prefixCls}-mid`}>
          <div className={`${prefixCls}-mid-title`}>{`到达会场 ${currentWeek.arriveActivity}`}</div>
          <div>
            <p>{`上周${pastWeek.arriveActivity}`}</p>
            <span
              data-show={parseInt(changePercent.arriveActivity, 10) > 0 ? '1' : '0'}
              className={`${prefixCls}-mid-span`}
            >{changePercent.arriveActivity}</span>
          </div>
        </div>
      </div>
      <div className={`${prefixCls}-goods`}>
        <div className={`${prefixCls}-goods-wrapper`}>
          <div className={`${prefixCls}-goods-content`}>
            <div className={`${prefixCls}-goods-uv`}>
              <div className={`${prefixCls}-goods-title`}>商品详情UV</div>
              <div className={`${prefixCls}-goods-count`}>
                <div className={`${prefixCls}-title`}>{currentWeek.goodsUV}</div>
                <div>{`上周 ${pastWeek.goodsUV}`}</div>
              </div>
            </div>
            <div className={`${prefixCls}-meeting-uv`}>
              <div className={`${prefixCls}-goods-title`}>会场UV</div>
              <div className={`${prefixCls}-meeting-count`}>
                <div className={`${prefixCls}-title`}>{currentWeek.activityUV}</div>
                <div>{`上周 ${pastWeek.activityUV}`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${prefixCls}-mid`}>
        <div className={`${prefixCls}-mid-title`}>{`下单转化 ${currentWeek.orderCount}`}</div>
          <div>
            <p>{`上周${pastWeek.orderCount}`}</p>
            <span
              data-show={parseInt(change.orderCount, 10) > 0 ? '1' : '0'}
              className={`${prefixCls}-mid-span`}
            >{change.orderCount}</span>
            <span
              data-show={parseInt(changePercent.orderCount, 10) > 0 ? '1' : '0'}
              className={`${prefixCls}-mid-span`}
            >{changePercent.orderCount}</span>
          </div>
        </div>
      <div className={`${prefixCls}-order`}>
        <div className={`${prefixCls}-order-wrapper`}>
          <div className={`${prefixCls}-order-content`}>
          <div className={`${prefixCls}-title`}>{`下单人数 ${currentWeek.orderCount}`}</div>
            <p>{`上周 ${pastWeek.orderCount}`}</p>
            <span
              data-show={parseInt(change.orderCount, 10) > 0 ? '1' : '0'}
              className={`${prefixCls}-order-span`}
            >{change.orderCount}</span>
            <span
              data-show={parseInt(changePercent.orderCount, 10) > 0 ? '1' : '0'}
              className={`${prefixCls}-order-span`}
            >{changePercent.orderCount}</span>
          </div>
        </div>
      </div>
      <div className={`${prefixCls}-mid`}>
        <div className={`${prefixCls}-mid-title`}>{`支付转化 ${currentWeek.payOne}`}</div>
        <div>
          <p>{`上周${pastWeek.payOne}`}</p>
          <span
            data-show={parseInt(change.payOne, 10) > 0 ? '1' : '0'}
            className={`${prefixCls}-mid-span`}
          >{change.payOne}</span>
          <span
            data-show={parseInt(changePercent.payOne, 10) > 0 ? '1' : '0'}
            className={`${prefixCls}-mid-span`}
          >{changePercent.payOne}</span>
        </div>
      </div>
      <div className={`${prefixCls}-pay`}>
        <div className={`${prefixCls}-pay-wrapper`}>
          <div className={`${prefixCls}-pay-content`}>
            <div className={`${prefixCls}-title`}>{`付款UV ${currentWeek.payOne}`}</div>
            <p>{`上周 ${pastWeek.payOne}`}</p>
            <span
              data-show={parseInt(change.payOne, 10) > 0 ? '1' : '0'}
              className={`${prefixCls}-pay-span`}
            >{change.payOne}</span>
            <span
              data-show={parseInt(changePercent.payOne, 10) > 0 ? '1' : '0'}
              className={`${prefixCls}-pay-span`}
            >{changePercent.payOne}</span>
          </div>
        </div>
      </div>
      <div className={`${prefixCls}-mid`}>
        <div className={`${prefixCls}-mid-title`}>{`人均GMV ${currentWeek.aveGmv}`}</div>
        <div>
          <p>{`上周${pastWeek.aveGmv}`}</p>
          <span
            data-show={parseInt(changePercent.aveGmv, 10) > 0 ? '1' : '0'}
            className={`${prefixCls}-mid-span`}
          >{changePercent.aveGmv}</span>
        </div>
      </div>
      <div className={`${prefixCls}-gmv`}>
        <div className={`${prefixCls}-gmv-wrapper`}>
          <div className={`${prefixCls}-gmv-content`}>
            <div className={`${prefixCls}-title`}>{`GMV ${currentWeek.gmv}`}</div>
            <p>{`上周 ${pastWeek.gmv}`}</p>
            <span
              data-show={parseInt(changePercent.gmv, 10) > 0 ? '1' : '0'}
              className={`${prefixCls}-gmv-span`}
            >{changePercent.gmv}</span>
            <span
              data-show={parseInt(changePercent.gmv, 10) > 0 ? '1' : '0'}
              className={`${prefixCls}-gmv-span`}
            >{changePercent.gmv}</span>
          </div>
        </div>
      </div></React.Fragment>
    }
  </div>
}

export default FunnelGenerate;
