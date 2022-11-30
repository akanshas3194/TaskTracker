import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProjectComponent from '../Components/ProjectComponent';
import { colors } from '../Constants/color';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { timerFunction } from '../Common/utils';

const AddProjectScreen = () => {
  const navigation = useNavigation();
  const array = [1, 2, 3, 4, 5]

  useEffect(() => {
      navigation.setOptions({
      headerTitleAlign: "center",
      title: 'Project',
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={25} color="#000" />
        </TouchableOpacity>
      ),
      headerRight: null,
    });
    setInterval(() => {
      let dateTo = moment().format("2022-11-03 01:00:00" );
      let dateFrom = moment();
      const time = timerFunction(dateTo, dateFrom)
      //  console.log(time)
    }, 1000);
  }, [navigation]);


  return (
    <View style={styles.container}>
      <View style={styles.mainSection}>
          <FlatList
          data={array}
          renderItem={({item}) =>
          <ProjectComponent item={item} 
          onPress={() => navigation.navigate('AddTaskScreen')} />}
          style={{ marginTop: 10 }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BgColor,

  },
  mainSection: {
    marginHorizontal: 24
  }
});

export default AddProjectScreen;
