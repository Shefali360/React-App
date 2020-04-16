import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import News from '../NewsDaily/Newsdaily';
import Aux from '../../../hoc/Aux/Aux';

class GetNews extends Component{
intervalId;
    componentDidMount(){
        this.props.onFetchNews();
        this.intervalId = setInterval(() => this.props.onFetchChart, 300000);
    }

    componentWillUnmount(){
        clearInterval(this.intervalId)
    }
    render(){
        let news=null;
        if(this.props.news){
            let array=this.props.news;
          news=array.map(news=>{
              return(
                  <News key={news.title} title={news.title} description={news.description} content={news.content} 
                  link={news.url} author={news.author} heading={news.source.name} time={news.publishedAt} 
                  image={news.urlToImage}></News>
              )
            })
        }
        return(
           <Aux>
               {news}
           </Aux>
        );
    }
}

const mapStateToProps=state=>{
    return{
        news:state.news.news
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        onFetchNews:()=>dispatch(actions.fetchNews())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GetNews)