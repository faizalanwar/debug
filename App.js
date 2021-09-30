var {Component} = React
var {Router, Route, IndexRoute, Link} = ReactRouter

class App extends Component{
  render(){
    return(
      <div>
        <Link to="/contact"> Página 1 </Link> <br />
        <Link to='/about'> Página 2 </Link>
        <hr />
        <h5> Conteúdo: </h5>
        <p> {this.props.children} </p>
      </div>
    );
  }
}
class Contact extends Component{
  render(){
    return ( <h2> Página 1 </h2>);
  }
}

class About extends Component {
  render(){
      return (<h1> Página 2 </h1>);
    }
}
              
// Página inicial que será exibida por padrão
// Isso é determinado pelo componente <IndexRoute>
class HomeScreen extends Component{
  render(){
    return(
      <h5> Aqui é a página inicial </h5>
    );
  }
}
    
            
        
 ReactDOM.render ((
<Router>
  <Route path="/" component={App}>
   {/* onEnter é executado assim que componente será chamado*/}
    <Route path="contact" component={Contact} onEnter={()=>{alert("Page 1")}}/>
    <Route path="about" component={About} />
    <IndexRoute component={HomeScreen} />
  </Route>
</Router>
), document.getElementById('app')); 
