import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Product({ data, addToCart }) {
 return (
   <View style={styles.container}>
    <View>
      <Text style={styles.title}>{data.name}</Text>
      <Text style={styles.price}>R$ {data.price}</Text>
    </View>

    <TouchableOpacity style={styles.buttonAdd} onPress={addToCart}>
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    borderWidth: 1,
    borderColor: '#green',
    borderRadius: 12,
    marginBottom: 14,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
    padding: 10,
    paddingBottom: 20,
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight:20,
    
  },
  title:{
    fontWeight: 'bold',
    fontSize: 20,
  },
  buttonAdd:{
    paddingStart: 12,
    paddingEnd: 12,
    backgroundColor: 'green',
  
    paddingBottom: 6,
    borderRadius: 10,
    
  },
  price:{
    fontSize: 15,
    marginTop: 6,
  },
  buttonText: {
    color: '#fafafa',
    fontWeight: 'bold',
    fontSize: 20,
    
  }
})