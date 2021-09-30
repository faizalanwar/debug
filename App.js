
const Link = ReactRouterDOM.Link,
    Route = ReactRouterDOM.Route;

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
//
const App = props => (
<ReactRouterDOM.HashRouter>
    <ul>
    <li><Link to="/">TO HOME</Link></li>
    <Link to="/contact"> Página 1 </Link> <br />
        <Link to='/about'> Página 2 </Link>
    </ul>

    <Route path="/" exact component={Home} />
    <Route path="contact" component={Contact} onEnter={()=>{alert("Page 1")}}/>
    <Route path="about" component={About} />
</ReactRouterDOM.HashRouter>
)
const Home = props => <h1>HOME</h1>

ReactDOM.render(<App />, document.querySelector('#root'));