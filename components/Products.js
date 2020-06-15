import React, {Component} from 'react';

import {Button, Card, Icon} from 'react-native-elements';
import SnackBar from 'react-native-snackbar-component';
import {postCart} from '../actions';
import {connect} from 'react-redux';
import {
  Image,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const {width: WIDTH} = Dimensions.get('window');

class Products extends Component {
  render() {
    return (
      <View
        style={{alignItems: 'center', justifyContent: 'center', padding: 10}}>
        <TouchableOpacity
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.push('Product Details', {
              itemId: this.props.item.id,
              otherParam: 'anything you want here',
            });
          }}>
          <View
            style={{
              height: 300,
              width: 186,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',

              borderRadius: 10,
              shadowColor: '#222',
              shadowOffset: {width: 0.5, height: 0.5},
              shadowOpacity: 0.5,
              shadowRadius: 10,
              elevation: 2,
            }}>
            <Image
              style={{width: 150, height: 150}}
              source={{
                uri: this.props.item.featured_src,
              }}
            />
            <Text
              style={{
                marginBottom: 10,
                marginTop: 20,
                textAlign: 'center',
              }}
              h2>
              {this.props.item.title}
            </Text>
            <Text h4>{this.props.item.price} ৳</Text>
            <Button
              onPress={() => {
                this.props.postCart(
                  this.props.item.title,
                  this.props.item.price,
                );
              }}
              type="clear"
              title="Buy now"
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(null, {postCart})(Products);
