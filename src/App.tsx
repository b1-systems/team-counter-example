import React from 'react';
import './App.css';

//Import the TeamCounter components from npm packages
import TeamMemberCounter from 'team-member-counter-test/dist/TeamMemberCounter'
import TeamOwnerCounter from 'team-owner-counter-test/dist/TeamOwnerCounter'

interface IProps {
}

interface IState {
  memberCnt: number;
  ownerCnt: number;
}

class ShowCase extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { memberCnt:0, ownerCnt:0 };
  }

  onIncreaseOwner = () => this.setState({ ownerCnt: this.state.ownerCnt + 1 });
  onIncreaseMember = () => this.setState({memberCnt: this.state.memberCnt + 1});

  //Use the TeamCounter components in the render function
  render() {
    return (
      <div>
        <button onClick={this.onIncreaseMember}>+</button>
        <TeamMemberCounter count={this.state.memberCnt} />
        <button onClick={this.onIncreaseOwner}>+</button>
        <TeamOwnerCounter count={this.state.ownerCnt}/>
      </div>
    );
  }
}

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ShowCase/>
      </header>
    </div>
  );
}

export default App;
