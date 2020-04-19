import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import Twitter from '../../components/Tweets/TryTweets';
import Aux from '../../hoc/Aux/Aux';

class Twit extends Component{
    intervalId;
    componentDidMount(){
        this.props.onFetchTweets();
        this.intervalId=setInterval(()=>this.props.onFetchTweets,300000);
    }
    
    componentWillUnmount(){
        clearInterval(this.intervalId);
    }
    render(){
    let tweets=this.props.error?<p>Tweets can't be loaded</p>:null;
    if(this.props.tweets.length!==0){
        let t=this.props.tweets;
       tweets=t.map((tweet)=>{
            return(
                <Twitter key={tweet.user}image={tweet.user.profile_image_url_https} user={tweet.user.name}
                account={tweet.user.screen_name} content={tweet.text}likes={tweet.favorite_count}
                retweet={tweet.retweet_count} time={tweet.created_at}></Twitter>
            )
        }
        )

    }
        return(
            <Aux>
                {tweets}
            </Aux>
        );
    }
}

const mapStateToProps=state=>{
    return{
        tweets:state.twitter.tweets,
        error:state.twitter.error
    }
}


const mapDispatchToProps=dispatch=>{
    return{
        onFetchTweets:()=>dispatch(actions.fetchTweets())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Twit);