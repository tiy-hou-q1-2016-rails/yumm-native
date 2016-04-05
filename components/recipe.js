import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

var Recipe = React.createClass({

  render(){

    let recipe = this.props.recipe;

    return <View>
      <Text style={styles.recipeTitle}>{recipe.name}</Text>
      <Image style={styles.logo} source={{uri: `https://yummm-recipes.herokuapp.com${recipe.photo_url}` }} />
    </View>
  }

});


const styles = StyleSheet.create({
  recipeTitle: {
    fontWeight: 'bold',
    fontSize: 32,
    backgroundColor: '#111111',
    color: "#ffffff",
    textAlign: 'center'
  },
  logo: {
    width: 400,
    height: 400,
    marginBottom: 50
  }
});

module.exports = Recipe;
