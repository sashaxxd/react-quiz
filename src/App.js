import React, {Component} from 'react';
import Layout from "./hoc/Layout/Layout";
import Quiz from "./containers/Quiz/Quiz";


class App extends Component {
    render() {
        return (
              //Шаблон сайта
              <Layout>


                {/* Дочерний див ниже выведется с помощью  {this.props.children}*/}
                {/*Тут будем размещать виды т.е. страницы сайта*/}
                <Quiz/>
              </Layout>

        );

    }

}

export default App;
