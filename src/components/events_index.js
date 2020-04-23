import React,{Component} from 'react';
import '../App.css';
import {readEvents} from '../actions'
import {connect} from 'react-redux';

class EventsIndex extends Component{
  //初期マウント時にデータ一覧を取得する
  componentWillMount(){
    this.props.readEvents()
  }
  render(){
    return (
      <React.Fragment>
        <div>
          Redux練習
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({})
const mapDispatchProps = ({readEvents})

export default connect(mapStateToProps,mapDispatchProps)(EventsIndex);
