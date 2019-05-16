import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button,
    Alert
} from "react-native";
import {Fire} from '../support/firebase'
import {connect} from 'react-redux'



class Detail extends Component {
// state ={id:null}
// componentDidMount (){
//     this.setState({id:this.props.navigation.param('key')})
// }

    hapus = (key) => {
        // alert(this.props.)
        Fire.database().ref('manager/'+this.props.user.id+'/employee').child(key).remove()
        .then((res)=>{
            alert('database berhasil dihapus')
            this.props.navigation.navigate('list')
        })
        .catch((err)=>{
            alert(err.massage)
        })
    }
    deleteEmployee=(id,name)=>{
        alert(id)
        Alert.alert('delete data', 'are you sure delete '+name+'?',  [{text : 'Yes', onPress :()=> this.hapus(id)}, {text : 'Cancel'}]);
    }


    render() {
        const {getParam} = this.props.navigation
        return (
            <View style={styles.container}>
                <Text>{getParam('nama')}</Text>
                <Text>{getParam('shift')}</Text>
                <Text>{getParam('phone')}</Text>
                <Button title='Hapus Employee' onPress={()=>this.deleteEmployee(getParam('key'), getParam('nama'))}>
                </Button>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

const mapStateToProps = (state) => {
    return {
        user : state.auth
    }
}


export default connect(mapStateToProps)(Detail)