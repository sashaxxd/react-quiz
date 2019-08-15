import React, {Component} from 'react';
import Layout from "./hoc/Layout/Layout";


class App extends Component {
    render() {
        return (

              <Layout>


                {/* Дочерний див ниже выведется с помощью  {this.props.children}*/}
                <div style={{width: 400, border: '1px solid #000'}}>
                  <h1>Шаблон</h1>
                </div>
              </Layout>

        );

    }

}

export default App;
