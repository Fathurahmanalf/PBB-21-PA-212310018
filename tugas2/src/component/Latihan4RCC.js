import React, { Component } from 'react';
import { View ,Text , StyleSheet , Image} from 'react-native';


class Latihan4RCC extends Component {

    constructor(props) {
        super(props);
        this.state = { identity:{npm:212310018 ,firstname: "Fathurahman",middlename:"AL",lastname:"Faridzi",},
                
        educations:[{ id: 1, school: 'SDN Bangka 3' },
                    { id: 2, school: 'SMPN 3 Bogor' },
                    { id: 3, school: 'SMK Wikrama Kota Bogor' }],
    
         mobile_phone: '082114824060',
         email: '212310018@student.ibik.ac.id',
         gender: 'M',
         tall_body: 175,
         weight_body: 64.5
           
        }
    }
    


    render() {
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <View style={{ borderWidth: 2, padding: 10, width: 300 }}>
            <Text style={{ fontSize: 30, fontStyle: 'italic', fontWeight: '800' }}>MyBiodata </Text>
            <Text style={{ fontWeight: '700' }}>Identity</Text>
            <Text>NPM : {this.state.identity.npm}</Text>
            <Text>First Name : {this.state.identity.firstname}</Text>
            <Text>Middle Name : {this.state.identity.middlename}</Text>
            <Text>Last Name : {this.state.identity.lastname}</Text>
            <Text style={{ fontWeight: '700' }}>Educations</Text>
            
            {this.state.educations.map((education) => {
                return (
                    <Text>{education.id}. {education.school}</Text>
                )
            })}

            <Text>Mobile Phone : {this.state.mobile_phone}</Text>
            <Text>Email : {this.state.email}</Text>
            <Text>Gender : {this.state.gender}</Text>
            <Text>Tall Body : {this.state.tall_body}</Text>
            <Text>Weight Body : {this.state.weight_body}</Text>

           
        </View>
    </View> 
    );
    }
}

export default Latihan4RCC;