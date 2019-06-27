import React from 'react';
import { BeatLoader } from 'react-spinners';

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red'
};

class Loading extends React.Component {
  state = {
    loading: true
  };

  render() {
    return (
      <div className="center">
        <h2>Loading now...</h2>
        <BeatLoader
          style={override}
          sizeUnit={'px'}
          size={25}
          color={'#ef5350'}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default Loading;
