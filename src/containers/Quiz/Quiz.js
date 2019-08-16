import React, {Component} from 'react';
import styles from './Quiz.module.css';
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
//Импортируем https://www.npmjs.com/package/react-addons-update
//https://reactjs.org/docs/update.html
//Позволяет менять состояние нужного объекта в массиве состояния
import update from 'react-addons-update';
import SearchName from "../../components/SearchName/SearchName";
import CheckboxContainer from "../../components/CheckboxContainer/CheckboxContainer";


class Quiz extends Component {
    state ={
        quiz: [
            {
                question2: "Вопросы по реакт  js",
                data: [],

            }
        ],
        button_name: 'Выбрать',
        searchString: undefined,
        checkedItems: new Map(),
        test: undefined
    }

    // Поиск по имени
    handleSearchChange = async (e) => {
        let search = e.target.value;
        if(search) {
            const api_url = await
                fetch(`http://yii2-rest-api/products/search?name=${search}`);
            const data = await api_url.json();
            console.log(data);
            if(data.name !== "Not Found"){
                this.setState({

                    //Позволяет менять состояние нужного объекта в массиве состояния
                    //Меняем состояние data: [] сразу перед рендерингом страницы
                    quiz: update(this.state.quiz, {0: {data: {$set: data}}})


                });
            }
        }
    }

    // Поиск с помощью чекбоксов
    handleCheckboxChange = async (e) => {

        const item = e.target.name;
        const isChecked = e.target.checked;
        alert(item)


        alert(isChecked)
        if(item && isChecked === true) {
            const api_url = await
                fetch(`http://yii2-rest-api/products/search?name=${item}`);
            const data = await api_url.json();
            console.log(data);
            if(data.name !== "Not Found"){
                this.setState({

                    //Позволяет менять состояние нужного объекта в массиве состояния
                    //Меняем состояние data: [] сразу перед рендерингом страницы
                    quiz: update(this.state.quiz, {0: {data: {$set: data}}})


                });
            }
        }
        else {

            this.setState({

                //В случае пустого чекбокса
                //Меняем состояние на пустой массив
                quiz: update(this.state.quiz, {0: {data: {$set: []}}})


            });
        }

        this.setState(prevState =>
            ({
                checkedItems: prevState.checkedItems.set(item, isChecked),
                test: item
            }),

        )
    }

    async componentDidMount() {
        const api_url = await
        fetch(`http://yii2-rest-api/products/index`);
        const data = await api_url.json();
        console.log(data);
        this.setState({

            //Позволяет менять состояние нужного объекта в массиве состояния
            //Меняем состояние data: [] сразу перед рендерингом страницы
            quiz: update(this.state.quiz, {0: {data: {$set: data}}})


        });

    }

    render() {
        return (
            <div>
            <div id={styles.FlexBoxContainer2}>
                <div id={styles.wb_Text1}>
                    <span id={styles.wb_uid0}>Опросник</span>
                </div>
            </div>
                {/* Поиск по имени*/}
                <SearchName
                    searchString = {this.state.searchString}
                    handleSearchChange = {this.handleSearchChange}
                />

                {/*Чекбоксы*/}
                <CheckboxContainer
                    checkedItems={this.state.checkedItems}
                    handleCheckboxChange={this.handleCheckboxChange}
                    test = {this.state.test}
                />

                  {/* Список*/}
                <ActiveQuiz
                    button_name = {this.state.button_name}
                    lists = {this.state.quiz[0].data}
                    question2 = {this.state.quiz[0].question2}
                />

            </div>
        )

    }

}

export default Quiz;