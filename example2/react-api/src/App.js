import React, {Component} from 'react';

class App extends Component {
    state = {contacts: [],loading:true}

    render () {
        const listItems =  this.state.contacts.map((d) => <li key={d.name}>{d.name}</li>);
       
        if(!this.state.loading){

            return (<div className="pulsate">{listItems}</div>);
        }else{
            return (<div className='pulsate'>Still loading</div>);
		}
		
        
    }
    
    componentDidMount() {
    setTimeout(()=>{        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {
          this.setState({ contacts: data,loading:false })
        })
        .catch(console.log)},500);
        


    }
     
}

export default App;