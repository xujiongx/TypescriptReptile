import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, message, Card } from 'antd';
import axios from 'axios';
import './index.css';
import moment from 'moment';

const { Meta } = Card;

interface State {
  isLoad: boolean;
  isLogin: boolean;
  data: responseResult.Tdata;
}

class Home extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { isLogin: true, isLoad: false, data: {} };
  }

  componentDidMount() {
    axios.get('/api/isLogin').then((res) => {
      if (!res.data?.data) {
        this.setState({ isLogin: false, isLoad: true });
      } else {
        this.setState({ isLoad: true });
      }
    });
  }
  getData = () => {
    axios.get('./api/getData').then((res) => {
      if (res.data?.data) {
        message.success('爬取数据成功');
      } else {
        message.error('爬取数据失败');
      }
    });
  };

  showData = () => {
    axios.get('/api/showData').then((res) => {
      this.setState({ data: res.data?.data });
    });
  };

  logOut = () => {
    axios.get('./api/logout').then((res) => {
      if (res.data?.data) {
        this.setState({ isLogin: false });
      }
    });
  };

  render() {
    const { isLogin, isLoad, data } = this.state;
    const showData: responseResult.ImageItem[] = [];
    for (let i in data) {
      let item = data[i];
      console.log(moment(Number(i)).format('MM-DD HH:mm'));
      // eslint-disable-next-line array-callback-return
      item.map((img) => {
        let imgItem: responseResult.ImageItem = {
          imgSrc: img.imgSrc,
          imgInfo: img.imgInfo,
        };
        showData.push(imgItem);
      });
    }
    if (isLogin) {
      if (isLoad) {
        return (
          <div>
            <div className='bottons'>
              <Button type='primary' onClick={this.getData}>
                爬取数据
              </Button>
              <Button type='primary' onClick={this.showData}>
                展示数据
              </Button>
              <Button type='primary' danger onClick={this.logOut}>
                登出
              </Button>
            </div>
            <div className='showCards'>
              {showData.map((item, i) => (
                <div key={i}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt='example' src={item.imgSrc} />}
                  >
                    <Meta title={item.imgInfo} />
                  </Card>
                </div>
              ))}
            </div>
          </div>
        );
      }
      return null;
    } else {
      return <Redirect to='login'></Redirect>;
    }
  }
}

export default Home;
