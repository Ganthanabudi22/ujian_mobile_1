import React, { Component } from 'react';
import {Fire} from '../support/firebase'
import { Container, Header, Content, Form, Item, Input, Label,Picker, Left,Right,Text,Button,Body,Title } from 'native-base';
import {connect} from 'react-redux'
class AddEmployee extends Component {
    state={selected : '' }


    onBtnClick = () => {
        var db = Fire.database()
        var add = db.ref('manager/'+this.props.user.id+'/employee')
        {
            this.InputNama&&this.state.selected&&this.InputPhone
            ?
            add.push({
                nama: this.InputNama ,
                shift:this.state.selected ,
                phone :this.InputPhone
            })
            .then((res)=>{
                alert('BERHASIL DITAMBAH')
            })
            .catch((err)=>console.log(err))
        :
        alert('TIDAK BOLEH ADA YANG KOSONG')
        }
    }
render() {
return (
    <Container>
    <Header>        
        <Body>
            <Title style={{marginLeft:20}}>ADD</Title>
        </Body>
    </Header>
    <Content>
        <Form>
        <Item floatingLabel>
            <Label>Nama</Label>
            <Input onChangeText={(text)=>this.InputNama = text}/>
        </Item>
        <Item floatingLabel last>
            <Label>Phone</Label>
            <Input onChangeText={(text)=>this.InputPhone = text}/>
        </Item>
        <Item>
            <Left>
                <Text>Select Day</Text>
            </Left>
            <Right>
                <Picker style={{width:120}} note  mode="dropdown" selectedValue={this.state.selected} onValueChange={(terserah)=>this.setState({selected:terserah})}>
                <Picker.Item label='PILIH' value='pilih'/>                    
                    <Picker.Item label='senin' value='sen'/>
                    <Picker.Item label='selasa' value='sel'/>
                    <Picker.Item label='rabu' value='rab'/>
                    <Picker.Item label='kamis' value='kam'/>
                    <Picker.Item label='jumat' value='jum'/>
                    <Picker.Item label='sabtu' value='sab'/>
                </Picker>
            </Right>
            
        </Item>
        <Button style={{marginTop:20, marginHorizontal:15}} onPress={this.onBtnClick} block>
                    <Text>ADD</Text>
                </Button>
        </Form>
    </Content>
    </Container>
);
}
}
const mapStateToProps = (state) => {
    return {
        user : state.auth
    }
}

export default connect(mapStateToProps)(AddEmployee)
