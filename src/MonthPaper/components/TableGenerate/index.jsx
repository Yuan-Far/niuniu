import React from 'react';
import { ROLEMAP } from '../../constants/index'
import './style.scss';

const prefixCls = 'table-generate';

const TableGenerate = ({
  data
}) => {
  data.splice(0, 0, data[data.length - 1])
  data.pop(-1)
  return <div className={prefixCls}>
    <div className={`${prefixCls}-title`}>
      <div>
        登录人数
      </div>
      <div>
        次日留存率
      </div>
    </div>
    <div className={`${prefixCls}-table`}>
      <div className={`${prefixCls}-tip`}>
        {
          ROLEMAP.map((item, index) => <div
            key={index}
            className={`${prefixCls}-role-title`}
          >
            {item.title}
          </div>)
        }
      </div>
      <div className={`${prefixCls}-content`}>
        {
          data && data.length > 0 && data.map((item, index) => <div
            className={`${prefixCls}-item`}
            key={index}
          >
            <div className={`${prefixCls}-current`}>{item.currentLoginPerson_1}</div>
            <div className={`${prefixCls}-past`}>{`上周 ${item.currentLoginPerson}`}</div>
            <div className={`${prefixCls}-rate`}>
              <span
                className={`${prefixCls}-change`}
                data-show={parseInt(item.UVChange, 10) > 0 ? '1' : '0'}
              >{item.UVChange}</span>
              <span data-show={parseInt(item.UVChangePercent, 10) > 0 ? '1' : '0'}>{item.UVChangePercent}</span>
            </div>
          </div>
          )
        }
      </div>
      <div className={`${prefixCls}-content-login`}>
        {
          data && data.length > 0 && data.map((item, index) => <div
            className={`${prefixCls}-item`}
            key={index}
          >
            <div className={`${prefixCls}-current`}>{item.nextKeepPercent}</div>
            <div className={`${prefixCls}-past`}>{`上周 ${item.nextKeepPercent_1}`}</div>
            <div className={`${prefixCls}-rate`}>
              <span data-show={parseInt(item.nextKeepPercentChange, 10) > 0 ? '1' : '0'}>{item.nextKeepPercentChange}</span>
            </div>
          </div>
          )
        }
      </div>
    </div>
  </div>
}

export default TableGenerate;
