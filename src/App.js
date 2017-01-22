import React, {Component} from 'react';
import './App.css';

class Level extends Component {
    render() {
        return (
            <div className="tube-wrapper">
                    <div className="tube">
                        <div className={"liquid " + this.props.levelName + ' ' + this.props.ani} style={{top: this.props.value + '%'}}>
                            <div className="circle"></div>
                            <div className="circle2"></div>
                            <div className="circle3"></div>
                            <div className="circle4"></div>
                            <div className="circle5"></div>
                            <div className="circle6"></div>
                        </div>
                        <div className="metrics">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                        <div className="side-line"></div>
                        <div className="neck"></div>
                        <div className="head"></div>
                    </div>
                <span className="level-name">{this.props.levelName}</span>
            </div>
        )
    }
};

class App extends Component {
    state = {
         feelingIndex: 0,
        animate: ''
    };

    getFeelings = () => [{
            feeling: 'love',
            levels: {
                dopamine: 0,
                serotonin: 0,
                oxytocin: 0
            }
        },
        {
            feeling: 'depression',
            levels: {
                dopamine: 10,
                serotonin: 10,
                oxytocin: 10
            }
        },
        {
            feeling: 'anxiety',
            levels: {
                dopamine: 40,
                serotonin: 30,
                oxytocin: 60
            }
        }
    ];

    changeFeeling() {
        let i = 0;

        setInterval(() => { 
            var start = Date.now();
            console.log("start",start);
            this.setState({feelingIndex: i, animate: 'animate'});
            i++;
            if (i === this.getFeelings().length) i = 0;
            setTimeout(() => {
                var estimate = Date.now() - start;
                console.log("end", estimate);
                if(estimate > 3950){
                    this.setState({animate:''})
                    // console.log(this);
                }
                
            }, 4000)
        }, 4500, true);
    };

    componentDidMount() {
        this.changeFeeling();
    }

    render() {
        const {feelingIndex, animate} = this.state;
        const feeling = this.getFeelings()[feelingIndex];
        const feelingName = feeling.feeling;
        const levels = feeling.levels;

        return (
            <div className="App">
                <h3>{feelingName}</h3>
                <div className="tubes-wrapper">
                    { Object.keys(levels).map((level, index) => <Level key={index} ani={animate} levelName={level} value={levels[level]}></Level>) }
                </div>
            </div>
        );
    }
}

export default App;
