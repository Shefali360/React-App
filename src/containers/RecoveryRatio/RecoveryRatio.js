import React,{Component} from 'react';
import styles from './RecoveryRatio.module.css';
import {CircularProgressbar,buildStyles} from 'react-circular-progressbar';
import {connect} from 'react-redux';
import Aux from'../../hoc/Aux/Aux';

class RecoveryRatio extends Component{
    render(){
    let datas = null;
    if (this.props.cases) {
    let data = [];
    let arr=[];
      let object = this.props.cases;
      for (let key in object) {
        let newObj = {};
        newObj[key] = object[key];
        data.push(newObj);
      }
    datas=(data.filter(items=>{
        for(let value in items){
            if(value==="totalCases"||value==="recovered")
               { arr.push(items[value]);
                console.log(arr);
                
               }      
        }
        return arr;
    }))
    let affected=arr[0];
    let recovered=arr[1];
    let percent=((arr[1]/arr[0])*100).toFixed(1);

        console.log(percent);
        return (<div className={styles.RecoveryRatio}><p>Ratio of Recovery</p>
        <CircularProgressbar className={styles.Progress}value={percent} text={`${percent}%`} 
        styles={buildStyles({
            textSize:'14px',
            pathColor: `#06ba90`,
            trailColor: `#686c8526`,
        })}
            /><span className={styles.StatsAffected}>{affected.toLocaleString()}</span><span className={styles.StatsRecovered}>{recovered.toLocaleString()}</span>
            </div>)
    
}

return(
    <Aux>
        {datas}
    </Aux>
)
}
}

const mapStateToProps=state=>{
    return{
       cases:state.cases.coronaStats
    }
}

export default connect(mapStateToProps)(RecoveryRatio);