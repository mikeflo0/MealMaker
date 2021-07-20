const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
    get appetizers() {
    return this._courses.appetizers;
    },
    get mains() {
    return this._courses.mains;
    },
    get desserts() {
    return this._course.desserts;
    },
    set appetizers(appetizers) {
      this._courses.appetizers = appetizers;
    },
    set mains(mains) {
      this._courses.mains = mains;
    },
    set desserts(desserts) {
      this._courses.desserts = desserts;
    },
    get courses(){
      return{
        _courses
      };
    },
    addDishToCourse(courseName, dishName, dishPrice){
      const dish = {
        name : dishName,
        price : dishPrice,
      };
      return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
    },
    generateRandomMeal(){
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}, and the price is $${totalPrice}.`;
    }
    };
    menu.addDishToCourse('appetizers', 'Cesar Salad', 4.5);
    menu.addDishToCourse('appetizers', 'Garlic Bread', 5);
    menu.addDishToCourse('appetizers', 'Wings', 6);
    menu.addDishToCourse('mains', 'Steak', 13);
    menu.addDishToCourse('mains', 'Salmon', 12);
    menu.addDishToCourse('mains', 'Pasta', 9);
    menu.addDishToCourse('desserts', 'Cheesecake', 5);
    menu.addDishToCourse('desserts', 'Key Lime Pie', 6);
    menu.addDishToCourse('desserts', 'Ice Cream', 3);
    
    const meal = menu.generateRandomMeal();
    console.log(meal);