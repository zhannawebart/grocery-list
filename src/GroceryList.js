import { Component } from 'react';                        // 1 этап. импортировали сюда Component - все фишки react
import checkBag from './check-mark-bag.png';              //11 этап. импортировали картинку для li

export class GroceryList extends Component {              //2 этап
    state = {                                             //state - это изначальный вид приложения
        userInput: '',                                    //графу приравняли к пустому месту,т.к.изначально графа пустая
        GroceryList: []                                   //список продуктов приравняли к пустому массиву,т.к.изначально его нет
    }

    onChangeEvent(e) {                                    //5 этап. прописали ф-ию (которую создали в input) для изменений в графе
        this.setState({userInput: e});                    //здесь прописываем то,что пишет пользователь - userInput(изначальное состояние) приравняли к событию,т.е.к изменениям от пользователя
        //console.log(e);
    }

    addItem(input) {                                                   //прописываем ф-ию (которую создали в button Add),которая будет отвечать за то,что при каждом клике на кнопку будет добав-ся новый элемент.И скобках-в скобках то,что пишет пользователь, вместо input можем дать любое другое имя
        if (input === '') {                                            //12 этап. прописали условие, что пустая графа не будет добавляться в список-нужно написать обязательно слово,иначе-покажется модольное окно с предупреждением в {}else помещаем всю прописанную ранее логику
            alert ("Please enter an item!")
        } else {
            let listArray = this.state.GroceryList;                        //8 этап. создали переменную,которая будет отвечать за список. Приравняли её к изначальному пустому массиву (команда this выделяет элемент как querySelector в JS)
            listArray.push(input)                                          //используем метод .push,чтобы добавить элемент в конец массива,и в скобках то,что пишет пользователь
            this.setState({GroceryList: listArray, userInput: ''})         //приравняли пустой массив к списку от пользователя(listArray) и к пустому input(чтобы после добавления элемента в список,графа очищалась от текста)
            //console.log(listArray);
        }
    }

    crossedWord(event) {                                       //10 этап. прописываем ф-ию crossedWord (которую создали в теге li) для перечеркивания слов (li)
        let liWord = event.target;                             //создали переменную и приравняли её к событию и ставим какбы подслушку - target, чтобы отслеживать,что происходит с li(с элементом списка)
        liWord.classList.toggle('crossed');                    //добавили новый класс(перечеркивание пропишем в CSS) с помощью метода .toggle (он добавляет и убирает классы - т.е.при клике на слово,слово перечеркивается,при повторном клике на то же слово-перечеркивание исчезает)
    }

    deleteAllItems() {                                         //14 этап. прописываем ф-ию (которую создали в кнопке delete)  для удаления всего списка продуктов
        let listArray = this.state.GroceryList;                //пишем переменную массива listArray (её мы создали ещё на 8 этапе - эта переменная отвечает за список слов которые пишет пользователь)так мы получаем доступ к тому что находится в массиве нашего списка (команда this.state выделяет элемент как querySelector в JS)
        listArray = [];                                        //переменную, где находится весь список продуктов от пользователя,приравняли к пустому массиву-опустошаем массив - список продуктов(массив) удалится при клике на кнопку
        this.setState({GroceryList: listArray});               //работаем с изначальным состоянием - массив приравняли к переменной, которая отвечает за пустой массив
    }

    onFormSubmit(e) {                                           //16 этап - прописываем ф-ию onFormSubmit  (которую создали в теге form) 
        e.preventDefault();                                     //не даем странице перезагружаьтся каждый раз,когда нажимаем Enter
    }
    
    render() {                                                 //3 этап
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>            
                <div className="container">
                    <input type="text" 
                    placeholder="What do you want to buy?"
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                    value={this.state.userInput}/> 
                </div>
                <div className="container">
                    <button onClick={() => this.addItem(this.state.userInput)} className="btn-add btn">Add</button>
                </div>
                <ul className="box-list">
                    {this.state.GroceryList.map ((item, index) => (
                        <li onClick={this.crossedWord} key={index}><img src={checkBag} alt="check mark" width="40px"/>{item}</li>
                    ))}
                </ul>
                <div className="container">
                    <button onClick={() => this.deleteAllItems()} className="btn-delete btn">Delete</button>
                </div>
                </form>
            </div>
        )
    }
}

/*return*/ 
/*****************4этап INPUT ******************/
//input type="text" - вид графы-для текста
//input placeholder - надпись-оповещение в графе для пользователя
//onChange - метод,который смотрит,как меняется состояние-первоначальный вид пользователем
//e.target.value - это значит,что мы хотим отреагировать на изменения в графе
//event или кратко е - это любое событие,связанное с изменеием текста или кликом и т.д.

/************** 6 этап BUTTON ADD ****************/
//<button onClick={this.addItem(this.state.userInput)}> - создали новую ф=ию addItem и приравняли её к this.state.userInput,чтобы получить доступ к графе,к тому что пишет пользователь

/**************7этап grocery list (ul)**************/
//this.state.GroceryList - так получиаем доступ ко ВСЕМУ списку продуктов
//.map(item) - метод, с помощью которого, получаем доступ к КАЖДОМУ элементу
//key={index} в теге li - это уникальный ключ (порядковый номер(index) - это тоже уникальность элемента),уникальный ключ на ребенке нужен для устранения ошибки в консоле,которая всегда появляется,когда работаем с массивами и методом .map()

//9 этап. onclick={this.crossedWord} - ставим подслушку на слово в списке(на тег li) и создали новую ф-ию, которую называем crossedWord. Она нам нужна для перечеркивания слова. Как только кликнем на слово - вызовится ф-ия crossedWord - это ф-ия перечеркивания слов списка
//<img src={checkBag}.../> - картинка-лого для слов списка

/**************** 13 этап BUTTON DELETE *********/
//<button onClick={() => this.deleteAllItems()}>Delete</button> - поставили подслушку на кнопку и создали новую ф-ию, назвали её deleteAllItems()

/************* 15 этап. кнопка ENTER **********/
// подвязываем к нашему приложению кнопку ENTER на клавиатуре. Оборачиваем всё в тег form, выделяем с помощью this  ф-ию, которую тут же создали onFormSubmit