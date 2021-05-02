import React from 'react';
import './form.scss';
class Form extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          url: 'url',
          method:'method'
      };
  }

  handleClick = (e) => {
    e.preventDefault() ;
      const url = document.getElementById('url').value;
      const butten = document.getElementsByName('method');

      let method;
      for (let i = 0; i < butten.length; i++) {

          if(butten[i].checked){

              method = butten[i].value;

              break;
          }
      }
      this.setState({ url, method });

  }

  render() {
      return (
          <main>
                <form>
                  <label>URL : </label>
                  <input name="url" type="text" id="url" placeholder="URL" />
                  <button onClick={this.handleClick}>GO!</button> 
                  </form>
                  <form>
                  <input id=".but1" type="radio" name="method" value="GET" />
                  <label >GET</label>
                  <input id=".but1" type="radio" name="method" value="POST" />
                  <label >POST</label>
                  <input id=".but1" type="radio" name="method" value="PUT" />
                  <label >PUT</label>
                  <input id=".but1" type="radio" name="method" value="DELETE" />
                  <label >DELETE</label>
                  </form>
              <div>
              <h3>{this.state.method} &emsp; {this.state.url}</h3>
              </div>
          </main>
      );
  }
}





  export default Form;