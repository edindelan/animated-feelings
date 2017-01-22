import React, {Component} from 'react';
import './App.css';

class Level extends Component {
    render() {
        const {levelName, animate, percentage} = this.props;
        return (
            <div className="tube-wrapper">
                    <div className="tube">
                        <div className={"liquid " + levelName + ' ' + animate} style={{top: (100 - percentage) + '%'}}>
                            <div className="bubble circle"></div>
                            <div className="bubble circle2"></div>
                            <div className="bubble circle3"></div>
                            <div className="bubble circle4"></div>
                            <div className="bubble circle5"></div>
                            <div className="bubble circle6"></div>
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

    getFeelings = () => [
        {
            feeling: 'love',
            levels: {
                dopamine: 93,
                serotonin: 93,
                oxytocin: 93
            }
        },
        {
            feeling: 'depression',
            levels: {
                dopamine: 28,
                serotonin: 14,
                oxytocin: 3
            }
        },
        {
            feeling: 'happiness',
            levels: {
                dopamine: 3,
                serotonin: 100,
                oxytocin: 7
            }
        },
        {
            feeling: 'anxiety',
            levels: {
                dopamine: 20,
                serotonin: 3,
                oxytocin: 3
            }
        }
    ];

    changeFeeling() {
        let i = 0;
        setInterval(() => { 
            let start = Date.now();
            this.setState({feelingIndex: i, animate: 'animate'});
            i++;
            if (i === this.getFeelings().length) i = 0;
            setTimeout(() => {
                let end = Date.now() - start;
                if(end > 3950){
                    this.setState({animate:''});
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
                <h1>{feelingName}</h1>
                <div className="tubes-wrapper">
                    { Object.keys(levels).map((level, index) => <Level key={index} animate={animate} levelName={level} percentage={levels[level]}></Level>) }
                </div>
            </div>
        );
    }
}

export default App;
