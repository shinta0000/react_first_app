import React from 'react';
import Article from './Article';

class Blog extends React .Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false,
      order: 1
    }
  }

  // 公開状態を反転させる関数
  togglePublished = () => {
    this.setState({
      isPublished: !this.state.isPublished
    })
  };

  countUp = () => {
    this.setState({
      order: this.state.order + 1
    })
  };

  countDown = () => {
    this.setState({
      order: this.state.order - 1
    })
  };

  render() {
    const authorName = 'Torahack'
    return (
      <>
        <Article title={"Reactの使い方"} isPublished={this.state.isPublished} toggle={() => this.togglePublished()} order={this.state.order} countup={() => this.countUp()} countdown={() => this.countDown()} />
      </>
    );
  }
}

export default Blog