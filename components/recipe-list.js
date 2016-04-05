import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  ScrollView
} from 'react-native';

import Recipe from './recipe';

var RecipeList = React.createClass({
  getInitialState(){
    return {
      recipes: []
    }
  },
  componentDidMount(){
    var component = this;
    fetch("https://yummm-recipes.herokuapp.com/api/recipes.json")
    .then( (r) => r.json() )
    .then( (json) => {
      component.setState({
        recipes: json.recipes
      });
    })
  },
  render() {

    var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    var rows = dataSource.cloneWithRows(this.state.recipes);


    return <ScrollView style={styles.scrolly}>

        <ListView
           dataSource={rows}
           renderRow={(recipe) => <Recipe recipe={recipe} key={recipe.id} /> }
         />
      </ScrollView>;
  }
})

const styles = StyleSheet.create({
  scrolly: {
    flex: 1
  }
});
module.exports = RecipeList;
