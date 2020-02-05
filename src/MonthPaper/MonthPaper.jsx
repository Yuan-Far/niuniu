import React, { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import html2canvas from 'html2canvas';
import Canvas2Image from '../utils/index';
import UploadFile from './components/getXlsx';
import TableGenerate from './components/TableGenerate';
import FunnelGenerate from './components/FunnelGenerate';

import './style.scss';

const prefixCls = 'month-paper';

// const FUNNEL = 'funnel.xlsx';
const ROLE = 'roles.xlsx';

const MonthPaper = () => {
  const { Header, Footer, Content, Sider } = Layout;
  const [showBtn, setShowButton] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [fileName, setFileName] = useState('');
  const submitFile = (data, name) => {
    if (data) {
      setShowButton(true)
      setFileName(name);
      setDataSource(data);
    } else {
      setShowButton(false);
    }
    return data;
  }

  const getPic = () => {
    const id = fileName === ROLE ? 'table' : 'funnel';
    const currentEle = document.getElementById(id);
    const width = currentEle.offsetWidth;
    const height = currentEle.offsetHeight;
    const canvas = document.createElement('canvas');
    const scale = 2;

    canvas.width = width * 4;
    canvas.height = height * 5;
    canvas.getContext('2d').scale(scale, scale);

    html2canvas(currentEle, {
      scale: scale,
      canvas: canvas,
      width: canvas.width,
      height: canvas.height
    }).then(canvas => {
      const context = canvas.getContext('2d');
      // 【重要】关闭抗锯齿
      context.mozImageSmoothingEnabled = false;
      context.webkitImageSmoothingEnabled = false;
      context.msImageSmoothingEnabled = false;
      context.imageSmoothingEnabled = false;
      context.scale(2, 2);
      Canvas2Image.saveAsPNG(canvas, canvas.width, canvas.height);
    });
  }
  return <Layout style={{ minHeight: '100vh' }}>
    <Header className={`${prefixCls}-header`}>大猪蹄子</Header>
    <Layout>
      <Sider width={80} className={`${prefixCls}-sider`}>
        <Menu defaultSelectedKeys={['1']} mode='inline'>
          <Menu.Item key='1'>
            <span>生成</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Content style={{ margin: '0 16px' }}>
        <div className={`${prefixCls}-file`}>
          <UploadFile
            btnText='Submit File'
            submitFile={submitFile}
          />
          {
            showBtn && (fileName === ROLE ? <div id='table'>
              <TableGenerate
                data={dataSource}
              />
            </div> : <div id='funnel'>
            <FunnelGenerate
              data={dataSource}
            />
            </div>)
          }
        </div>
        <div className={`${prefixCls}-generate`}>
          <Button
            type='primary'
            block
            onClick={getPic}
            disabled={!showBtn}
          >生成</Button>
        </div>
      </Content>
    </Layout>
    <Footer style={{ textAlign: 'center' }}>大美妞 ©2020 Created by NiuNiu</Footer>
  </Layout>
}

export default MonthPaper;
